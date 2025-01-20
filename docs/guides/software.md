---
title: Installing Software on Aurora
description: How to install software on Aurora
---

## Flatpak

[Flatpak](https://flatpak.org) is the primary package method for graphical applications. By default, the [Flathub](https://www.flathub.org) remote is used which contains several popular applications to install from. Install Flatpaks with the **Discover** application.

## Homebrew

The [Homebrew](https://brew.sh/) package manager is specifically for installing command-line utilities and software used in the terminal.

## Distrobox Containers

[Distrobox](https://distrobox.it/) containers are Linux subsystems of other popular Linux distributions which give users access to their package managers (like `dnf` or `apt`) and their package formats (like RPM and Deb).

They are commonly used for two different scenarios:

- Used as a fallback for "legacy Linux software" that does not have a Flatpak available
- Development boxes

## `rpm-ostree`

> **Note**: It is highly recommended to only use this as a last resort.

Layer RPM packages to the host like a traditional Linux operating system which comes with major downsides such as:

- High potential for broken upgrades due to dependency issues.
- Slower updates due to adding an extra layer to the deployment.

Read more about layering packages to the host [here](/guides/layerapp).
