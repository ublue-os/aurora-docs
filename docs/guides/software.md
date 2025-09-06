---
title: Installing Software on Aurora
description: How to install software on Aurora
---

## Flatpak

[Flatpak](https://flatpak.org) is the primary package method for graphical applications. By default, the [Flathub](https://www.flathub.org) remote is used which contains several popular applications to install from. Install Flatpaks with the **Discover** application.

## Homebrew

The [Homebrew](https://brew.sh/) package manager is specifically for installing command-line utilities and software used in the terminal.

## Docker

[Docker](https://www.docker.com/) is a popular containerization platform for running and managing containers. Docker is included with Aurora-DX.

For the best Docker experience, switch to **Aurora DX** which includes Docker pre-installed and configured:

- Docker Engine with full integration
- Visual Studio Code with devcontainer support
- Pre-configured development tools

To switch to Aurora DX, use the included ujust recipe:

```bash
ujust devmode
```

Learn more about Aurora DX and its developer features in the [Aurora DX Introduction](/dx/aurora-dx-intro).

## Distrobox Containers

[Distrobox](https://distrobox.it/) containers are Linux subsystems of other popular Linux distributions which give users access to their package managers (like `dnf` or `apt`) and their package formats (like RPM and Deb).

They are commonly used for two different scenarios:

- Used as a fallback for Linux software that do not have a Flatpak available
- Development boxes

## `rpm-ostree`

> **Note**: It is highly recommended to only use this as a last resort.

Layer RPM packages to the host like a traditional Linux operating system which comes with major downsides such as:

- High potential for broken upgrades due to dependency issues.
- Slower updates due to adding an extra layer to the deployment.

Read more about layering packages to the host [here](/guides/layerapp).
