---
title: Installation Guide
description: Installing Aurora to your desktop or laptop.
---

## Downloading & Flashing

You will need a spare USB flash drive with at least 16GB.

Download the ISO using the download picker from the [website](https://getaurora.dev).

Flash the ISO with one of these tools:

- [Fedora Media Writer](https://fedoraproject.org/workstation/download)
- [Rufus](https://rufus.ie/en/)
- [Etcher](https://etcher.balena.io/)

## Booting Aurora's Installer

Boot the ISO when starting up your device. Follow the instructions in the installer. After the installation has completed, reboot the computer.

**Note**: We don't support custom partitioning or dual-booting with Windows. If you decide to do a manual partitioning during the installer, make sure you use BTRFS as the filesystem type. We don't support anything other than BTRFS. Your system won't be able to boot without BTRFS.

### Secure Boot Information

If your hardware has secure boot enabled then enroll Universal Blue's secure boot key after the installation process on the first boot by selecting "Enroll MOK" when prompted.

**The secure boot password is**: `universalblue`.

Otherwise click "Continue Boot" if your hardware does not support secure boot or it is disabled.

### Memtest86+ Information

Our LiveCD also has Memtest86+ included. You can use this entry to test your RAM for errors. If you have secureboot enabled, you will need to disable it to run Memtest86+. After running it, turn Secure Boot back on before booting the Live environment for installation.

## Note About Dual-Booting Windows

Dual-booting is generally an unsupported feature of Fedora Atomic Desktop in general. The recommended method is to have Windows on its own drive or using Windows-to-Go created with Rufus on an external drive for Windows.

This sets up an entry in your application launcher that uses [efibootmgr](https://github.com/rhboot/efibootmgr) to boot directly into Windows from Aurora.

```
ujust configure-boot-to-windows
```

Dual-Booting with a single drive is **NOT** supported.
