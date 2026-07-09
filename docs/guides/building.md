---
title: Building Aurora locally without GitHub
description: How to Build Aurora on your machine
---

# Building Aurora locally without GitHub

Most of this advice is not Aurora-specific in any way, the principles apply to every (bootable) container image.

We expect from you that you are somewhat comfortable with the usage of the commandline tools here, like git, podman, a text editor...

We will not explain everything here this is just a general outline of how things work. You should be able to look on your own to find further information about the mentioned tools here to deploy our images (`man`, `--help`, any form of documentation really)

Although don't be afraid to reach out to us if you have any questions!

## Understanding Aurora's Architecture

Aurora images are built from multiple repositories working together:

- **[ublue-os/aurora](https://github.com/ublue-os/aurora)** - Main image repository that orchestrates the build process and defines the final images
- **[get-aurora-dev/common](https://github.com/get-aurora-dev/common)** - Aurora configurations, ujust recipes, [artwork](https://github.com/ublue-os/artwork), and customizations built on top of [aurorafin-shared](https://github.com/ublue-os/aurorafin-shared) (ujust, MOTD, CLI config, etc.)
- **[ublue-os/brew](https://github.com/ublue-os/brew)** - Homebrew setup and configuration
- **[ublue-os/akmods](https://github.com/ublue-os/akmods)** - Universal Blue shared kernel related packages (Nvidia, V4L2, xone)

## Preparations

### Build Dependencies

- [git](https://git-scm.com/)
- [just](https://github.com/casey/just)
- [podman](https://podman.io/)
- [jq](https://jqlang.org/)
- [yq](https://mikefarah.gitbook.io/yq/)
- [cosign](https://www.sigstore.dev/)

### Clone the main Aurora repository

```sh
git clone https://github.com/ublue-os/aurora
```

## Building Images

The `Justfile` at the root of the repo is used to build the images, here are some examples:

| Command                                                           | Description                                              |
| ----------------------------------------------------------------- | -------------------------------------------------------- |
| `just build`                                                      | Defaults to `latest` main                                |
| `just build --image aurora-dx`                                    | Builds Aurora DX                                         |
| `just build --image aurora-dx --tag testing --flavor nvidia-open` | Builds `testing` `nvidia-open` version of Aurora DX      |
| `just build --tag stable --flavor nvidia-open`                    | Builds `nvidia-open` version of the Aurora stable branch |

- Images: `aurora`,`aurora-dx`
- Tags: `stable`,`latest`,`testing`
- Flavors: `main`,`nvidia-open`

The general pattern is `just build/run image tag flavor`. We recommend you to prefix sudo with these build commands.

We use `just` because our image builds are rather complex because we add many `build-arg`s and `label`s. This just recipe basically generates one big `buildah build` command and verifies the authenticity of our build containers with `cosign`.

### Testing Local Changes to Common Layers

If you want to modify and test Aurora-specific configurations (ujust recipes, artwork, etc.) locally, follow this workflow:

### Clone and Modify the Common Repository

```sh
git clone https://github.com/get-aurora-dev/common
cd common
```

Make your desired changes to the common repository files.

### Build the Common Container Locally

```sh
(sudo) just build
```

This will create a local image tagged as `localhost/aurora-common:latest`.

### Modify Aurora's Containerfile

In your local `ublue-os/aurora` repository, you need to modify the `Containerfile.in` to reference your local common build instead of the remote one.

In the `Containerfile.in` in the root of the repository, find the `FROM ${COMMON} AS common` line and change it to point to your local build:

```patch
-FROM ${COMMON} AS common
+FROM localhost/aurora-common AS common
```

### Build Aurora with Your Local Common Changes

Now go to ublue-os/aurora and build the Aurora image:

```
just build
```

This will build Aurora using your locally modified common layer.

### Building a derived image

Of course you can also build a derived image using the classical container workflow instead of building Aurora "from scratch".

```Docker
FROM ghcr.io/ublue-os/aurora:stable

RUN ...
```

We recommend the [image-template](https://github.com/ublue-os/image-template)

### Test Your Changes

This heavily depends on the changes you make but the safest option is to create a VM with the `disk-image` recipe and boot it with qemu. This is the closest to installing Aurora from the Installation ISO.

### Iterate

If you need to make more changes:

1. Modify files in the common repository
2. Rebuild the common container
3. Rebuild the Aurora image
4. Rebase to the new local image

### Contributing Your Changes

Once you've tested your changes locally:

- For Aurora-specific features (configurations, artwork, Aurora ujust recipes), submit a pull request to [get-aurora-dev/common](https://github.com/get-aurora-dev/common)
- For shared features that affect both Aurora and Bluefin (base ujust recipes, MOTD, CLI config), contribute to [ublue-os/aurorafin-shared](https://github.com/ublue-os/aurorafin-shared)
- For Homebrew-related changes, contribute to [ublue-os/brew](https://github.com/ublue-os/brew)
- For changes to the Aurora image itself (installed packages, build scripts), contribute to [ublue-os/aurora](https://github.com/ublue-os/aurora)

Make sure to only commit the actual changes to the repo with things like `git add -p`.

## Rebasing to a Locally Built Image

For `bootc` to be able to rebase/switch to the new image it has to be moved from the users container storage to the container storage of the root user.

```sh
podman image scp localhost/aurora:latest root@localhost
```

_You can also add `sudo` before the just build commands, then you don't need to do the `podman image scp` part._

```sh
sudo bootc switch --transport containers-storage localhost/aurora:latest
```

and lastly reboot into the new image

```sh
systemctl reboot
```

## Testing Without Building an Image

Makes `/usr` writable for the duration of this boot, this is usually sufficient to test very simple things.

#### overlayfs over /usr

```sh
sudo bootc usr-overlay
```

Use `dnf` or make whatever modification to `/usr` as you wish.

```sh
sudo dnf install/swap/remove/downgrade ...
```

Reboot to undo any changes you made after the overlayfs on `/usr` is mounted.

Another way to do this without rebooting the system:

```
sudo rm /run/ostree/deployment-state/*.0/unlocked-development
sudo umount -l /usr
```

Remember that `/etc` and `/var` are not reverted after a reboot so you can still very much screw yourself over and have leftover files there!

You can also create a more persistent overlay:

Could be useful for firmware downgrades or triaging bugs that only happen on shutdown etc.

```sh
sudo ostree admin unlock --hotfix
```

```sh
rpm-ostree status
```

```
● ostree-image-signed:docker://ghcr.io/ublue-os/aurora-dx:stable
                   Digest: sha256:4d08e32db51d634eb6fa1cf27e8472de074db783aee5c89849899e00c36c4b59
                  Version: 42.20250630 (2025-06-30T04:54:48Z)
                 Unlocked: hotfix
```

```sh
sudo dnf -y downgrade atheros-firmware-20250311-1$(rpm -E %{dist})
```

To get rid of this writable deployment you can either just (wait for an) update and it will get cleaned up eventually or you boot into the previous deployment from Grub and run:

```sh
rpm-ostree cleanup --pending
```
