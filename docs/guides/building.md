# Building Aurora locally without GitHub

## Understanding Aurora's Architecture

Aurora images are built from multiple repositories working together:

- **[ublue-os/aurora](https://github.com/ublue-os/aurora)** - Main image repository that orchestrates the build process and defines the final images
- **[get-aurora-dev/common](https://github.com/get-aurora-dev/common)** - Aurora-specific configurations, ujust recipes, artwork, and customizations (built on top of projectbluefin/common)
- **[projectbluefin/common](https://github.com/projectbluefin/common)** - Shared distro experience layer (ujust, MOTD, CLI config, etc.) used by both Aurora and Bluefin
- **[ublue-os/brew](https://github.com/ublue-os/brew)** - Homebrew setup and configuration

The build process in `ublue-os/aurora` pulls these common layers as OCI containers. The `get-aurora-dev/common` image itself is built from `projectbluefin/common` as its base, creating a layered architecture.

## Build Dependencies

- [git](https://git-scm.com/)
- [just](https://github.com/casey/just)
- [podman](https://podman.io/)/[docker](https://www.docker.com/)
- [jq](https://jqlang.org/)
- [cosign](https://www.sigstore.dev/)

Clone the main Aurora repository:

```
git clone https://github.com/ublue-os/aurora
cd aurora
```

The `Justfile` at the root of the repo is used to build the images and ISOs, here's some examples:

| Command                            | Description                                         |
| ---------------------------------- | --------------------------------------------------- |
| `just build aurora `               | Defaults to `latest` main                           |
| `just build aurora-dx`             | Builds Aurora DX                                    |
| `just build aurora-dx beta nvidia` | Builds `beta` `nvidia` version of Aurora DX         |
| `just build aurora stable nvidia`  | Builds `nvidia` version of the Aurora stable branch |

The general pattern is `just build/run image tag flavor`

- Images: `bluefin`,`bluefin-dx`
- Tags: `gts`,`stable`,`latest`,`beta`
- Flavors: `main`,`nvidia`,`hwe`,`hwe-nvidia`

## Examples

The build process will automatically pull the necessary OCI containers from `get-aurora-dev/common` (which includes `projectbluefin/common`) and `ublue-os/brew` during the build.

## Building Images

### Basic Build Examples

| build command                             | produced image                           |
| ----------------------------------------- | ---------------------------------------- |
| `just build`                              | `localhost/aurora:latest`                |
| `just build aurora stable`                | `localhost/aurora:stable`                |
| `just build aurora-dx stable nvidia-open` | `localhost/aurora-dx-nvidia-open:stable` |

## Rebasing to a locally built image

### What Gets Built

When you build an Aurora image locally:

1. The base Fedora Kinoite image is pulled from `ghcr.io/ublue-os/kinoite-main`
2. OCI containers from `get-aurora-dev/common` are layered in (which includes `projectbluefin/common` shared experience layer plus Aurora-specific configs, artwork, ujust recipes)
3. OCI containers from `ublue-os/brew` are layered in (Homebrew setup)
4. Additional packages and configurations specific to the image variant are applied
5. The final image is created in your local container storage

## Rebasing to a Locally Built Image

For `bootc` to see the new image it has to be moved from users container-storage to the container-storage of the root user like this:

```
podman image scp localhost/aurora:latest root
```

```
sudo bootc switch --transport containers-storage localhost/aurora:latest
```

and lastly reboot into the new image

```
systemctl reboot
```

## Testing without building an image

## Testing Local Changes to Common Layers

If you want to modify and test Aurora-specific configurations (ujust recipes, artwork, etc.) locally, follow this workflow:

### Step 1: Clone and Modify the Common Repository

```
git clone https://github.com/get-aurora-dev/common
cd common
```

Make your desired changes to the common repository files.

### Step 2: Build the Common Container Locally

Build the common OCI container:

```
just build
```

This will create a local image tagged as `localhost/aurora-common:latest` (or similar, depending on the repository's build configuration).

### Step 3: Modify Aurora's Containerfile

In your local `ublue-os/aurora` repository, you need to modify the Containerfile to reference your local common build instead of the remote one.

At the Containerfile, find the `FROM ${COMMON_IMAGE}@${COMMON_IMAGE_SHA} AS common` line and change it to point to your local build:

```dockerfile
# Change from:
FROM ${COMMON_IMAGE}@${COMMON_IMAGE_SHA} AS common

# To:
FROM localhost/aurora-common AS common
```

### Step 4: Build Aurora with Your Local Common Changes

Now build the Aurora image:

```
cd ../aurora
just build
```

This will build Aurora using your locally modified common layer.

### Step 5: Test Your Changes

Follow the [Rebasing to a Locally Built Image](#rebasing-to-a-locally-built-image) instructions above to switch to your locally built image and test your changes.

### Step 6: Iterate

If you need to make more changes:

1. Modify files in the common repository
2. Rebuild the common container: `cd ../common && just build`
3. Rebuild the Aurora image: `cd ../aurora && just build`
4. Rebase to the new local image

### Contributing Your Changes

Once you've tested your changes locally:

- For Aurora-specific features (configurations, artwork, Aurora ujust recipes), submit a pull request to [get-aurora-dev/common](https://github.com/get-aurora-dev/common)
- For shared features that affect both Aurora and Bluefin (base ujust recipes, MOTD, CLI config), contribute to [projectbluefin/common](https://github.com/projectbluefin/common)
- For Homebrew-related changes, contribute to [ublue-os/brew](https://github.com/ublue-os/brew)
- For changes to the Aurora image itself (package lists, build scripts), contribute to [ublue-os/aurora](https://github.com/ublue-os/aurora)

Remember to revert any Containerfile changes you made for local testing before committing to the Aurora repository.

## Testing Without Building an Image

### Mutations that don't require a reboot

Makes `/usr` writable for the duration of this boot

```
sudo bootc usroverlay
```

Use `dnf5`/make whatever modification to `/usr`

```
sudo dnf5 -y downgrade somepackage-6.9.1-1$(rpm -E %{dist})
```

reboot to undo any changes you made after the overlayfs on `/usr` is mounted

### Mutations which need to survive a reboot

Could be useful for firmware downgrades or triaging bugs that only happen on shutdown etc.

```
sudo ostree admin unlock --hotfix
```

This will make the current deployment writable and will make it work like any other deployment as well

```
rpm-ostree status
```

```
● ostree-image-signed:docker://ghcr.io/ublue-os/aurora-dx:stable-daily
                   Digest: sha256:4d08e32db51d634eb6fa1cf27e8472de074db783aee5c89849899e00c36c4b59
                  Version: 42.20250630 (2025-06-30T04:54:48Z)
                 Unlocked: hotfix
```

```
sudo dnf5 -y downgrade atheros-firmware-20250311-1$(rpm -E %{dist})
```

To get rid of the writable deployment you can either just (wait for an) update and it will get cleaned up eventually or you boot into the previous deployment from Grub and run:

```
rpm-ostree cleanup --pending
```
