---
title: Introduction to Aurora
slug: /
pagination_next: guides/system-requirements
---

## Aurora

**The ultimate productivity workstation for everyone is here**.

Aurora combines the familiar windows-like KDE Desktop Interface with robustness and unparalleled ease of use. It is intended to be maintenance-free, reliable, fast, and easy to use. The golden age of the Linux Desktop is here.

![Aurora](/img/aurora-desktop.png)

- Developers, check out [Aurora-DX](/dx/aurora-dx-intro) for developer focused images!

> "The desire to reach for the stars is ambitious. The desire to reach hearts is wise." - Maya Angelou

## Features

**This image heavily utilizes _cloud-native concepts_.**

System updates are image-based and automatic. Applications are logically separated from the system by using Flatpaks for graphical applications and `brew` for command line applications. Workloads for development are containerized.

## For Users

- [Ptyxis terminal](https://devsuite.app/ptyxis/) for container-focused workflows
  - [DistroShelf](https://github.com/ranfdev/DistroShelf) for container management
- [Tailscale](https://tailscale.com) + [KTailctl](https://github.com/f-koehler/KTailctl) - included for VPN along with `wireguard-tools`
- [Bazaar](https://github.com/kolunmi/bazaar) for [Flathub](https://flathub.org):
  - Discover and install graphical applications
  - [Warehouse](https://flathub.org/apps/io.github.flattool.Warehouse) included for flatpak management
- Quality of Life Features
  - [Starship](https://starship.rs) terminal prompt enabled by default
  - Docker & Podman Developer Edition Images contain both Docker and Podman runtimes to support your containerized needs.
  - [Input Leap](https://github.com/input-leap/input-leap) built in.
  - [Solaar](https://github.com/pwr-Solaar/Solaar) - included for Logitech mouse
    management along with `libratbagd`.
  - [OpenRazer](https://openrazer.github.io/) for managing your Razer devices.
  - [rclone](https://rclone.org/) and [restic](https://restic.net/) included
  - `zsh` and `fish` included (optional)
- Built on top of the the [Universal Blue main image](https://github.com/ublue-os/main)
  - Extra udev rules for game controllers and [other devices](https://github.com/ublue-os/packages/tree/main/packages/ublue-os-udev-rules/src/udev-rules.d) included out of the box
  - All multimedia codecs included
  - System designed for automatic staging of updates
    - If you've never used an image-based Linux before just use your computer normally
    - Don't overthink it, just shut your computer off when you're not using it

### Applications

- [Mozilla Firefox](https://www.firefox.com/), [Thunderbird](https://www.thunderbird.net), [DejaDup](https://apps.gnome.org/DejaDup/), [FontDownloader](https://github.com/GustavoPeredo/font-downloader), [Flatseal](https://github.com/tchx84/flatseal), and the [Haruna Media Player](https://apps.kde.org/de/haruna/).
- Core KDE Applications installed:
  - [Clock](https://apps.kde.org/kclock/)
  - [Dolphin File Manager](https://apps.kde.org/dolphin/)
  - [Filelight](https://apps.kde.org/filelight/)
  - [Gwenview](https://apps.kde.org/gwenview/)
  - [KDE Partition Manager](https://apps.kde.org/partitionmanager/)
  - [KWeather](https://apps.kde.org/kweather/)
  - [Kate](https://apps.kde.org/kate/)
  - [Kcalc](https://apps.kde.org/kcalc/)
  - [Konsole](https://apps.kde.org/konsole/)
  - [Kontact](https://apps.kde.org/kontact/)
  - [Okular](https://apps.kde.org/okular/)
  - [Skanpage](https://apps.kde.org/de/skanpage/)

## How is this different from a traditional Linux Desktop?

- Aurora takes a [greenfield approach](https://en.wikipedia.org/wiki/Greenfield_project) to Linux applications by defaulting to Flathub and `brew`.
- Aurora recommends using containerized tools - it focuses on [Devcontainers](https://containers.dev) for declarative containerized development. You can use Podman or Docker to run and bootstrap your containers.
- Aurora _tries_ to remove the need for the user to use `rpm-ostree` or `bootc` directly
- Aurora focuses on automation of OS services and upgrades instead of user interaction. Upgrades are automatic and silent, so you never have to think about it again.

## Starship is not for me, how do I disable it?

You can remove or comment the lines below in `/etc/profile.d/90-aurora-starship.sh` to restore the default prompt.

```bash
if [ "$(basename "$(readlink /proc/$$/exe)")" = "bash" ]; then
  eval "$(starship init bash)"
fi
```

## News & Updates

Announcements centered around the project can be found on the [**forums**](https://universal-blue.discourse.group/tags/c/aurora/11/aurora-news/l/latest) that can also be subscribed to from the [**RSS feed**](https://universal-blue.discourse.group/tag/aurora-news.rss). Patch notes for each update can be found in [**Github**](https://github.com/ublue-os/aurora/releases).
