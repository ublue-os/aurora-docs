# Building Aurora locally without GitHub

## Build Dependencies

- [git](https://git-scm.com/)
- [just](https://github.com/casey/just)
- [podman](https://podman.io/)/[docker](https://www.docker.com/)
- [jq](https://jqlang.org/)
- [cosign](https://www.sigstore.dev/)

```
git clone https://github.com/ublue-os/aurora
```

## Examples

| build command                             | produced image                           |
| ----------------------------------------- | ---------------------------------------- |
| `just build`                              | `localhost/aurora:latest`                |
| `just build aurora stable`                | `localhost/aurora:stable`                |
| `just build aurora-dx stable nvidia-open` | `localhost/aurora-dx-nvidia-open:stable` |

## Rebasing to a locally built image

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

### Mutations that don't require a reboot

Makes `/usr` writable for the duration of this boot

```
sudo ostree admin unlock
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
