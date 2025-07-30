---
title: Installation Guide
description: Installing Aurora to your desktop or laptop.
---

## Downloading & Flashing

Download the ISO using the download picker from the [website](https://getaurora.dev) or download the [torrent](https://fosstorrents.com/distributions/aurora/).

Flash the ISO with one of these tools:

- [Fedora Media Writer](https://fedoraproject.org/workstation/download)
- [Rufus](https://rufus.ie/en/)
- [Etcher](https://etcher.balena.io/)

**Note**: Using Ventoy to boot the installation media is not supported as Ventoy's tricks to house multiple ISOs are incompatible with our ISOs.

## Booting Aurora's Installer

**Note**: The current installer may be [changing](https://github.com/ublue-os/titanoboa) in the near future and this documentation may become outdated.

Boot the ISO when starting up your device. Follow the instructions in the installer. Please note: "Root Account" should stay **disabled**.

### Secure Boot Information

If your hardware has secure boot enabled then enroll Universal Blue's secure boot key during the installation process by selecting "Enroll MOK" when prompted.

**The secure boot password is**: `universalblue`.

Otherwise click "Continue Boot" if your hardware does not support secure boot or it is disabled.

## Note About Dual-Booting Windows

Dual-booting is generally unsupported feature for Fedora Atomic Desktop in general, however it can be done. The recommended method is to have Windows on its own drive or using Windows-to-Go created with Rufus on an external drive for Windows.

Read [Bazzite's guide](https://docs.bazzite.gg/General/Installation_Guide/dual_boot_setup_guide/) for dual-booting on the same drive.

This sets up an entry in your application launcher that uses [efibootmgr](https://github.com/rhboot/efibootmgr) to boot directly into Windows from Aurora.

```
ujust configure-boot-to-windows
```
