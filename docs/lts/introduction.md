---
title: Aurora Helium LTS (Alpha)
description: About Aurora Helium LTS Edition
---

# Aurora Helium LTS

**Please note: This project is currently in its alpha phase.**

Aurora Helium LTS is a version of the ultimate productivity workstation designed for people who want a long-term-support version of Aurora. This OS is especially useful for deployments that require the newest system-level packages including the Linux kernel and desktop environment, and should be stable for several years to come for an enterprise-ready system. Aurora Helium LTS is built on top of [CentOS Stream 10](https://www.centos.org/centos-stream/) offering a 3-5 year lifespan for the operating system base. Graphical applications are installed via [Flatpak](https://flatpak.org/) using [Flathub](https://flathub.org/) as the default remote and CLI tools via [Homebrew](https://brew.sh), so applications are never outdated while your system remains rock solid.

## ARM Support

Aurora LTS is the first edition Aurora to officially support ARM64 Processors. The ARM64 editions feature a couple of small, but noteworthy **differences**:

- There is currently no support for Homebrew on Aurora LTS in the arm64 build.

- Firefox does not provide ARM64 builds on Flathub at this time.

### Virtualize on your Apple Silicon Mac

This guide is based in large parts on the similar guide from [Bluefin LTS](https://docs.projectbluefin.io/lts).

UTM can boot these images if suitably configured:

- File → New, then select Virtualize
- Select Linux, then enable "Use Apple Virtualization" (The QEMU virtualization backend can also work, but this works better on Apple Silicon.)
- Browse for the Aurora LTS ISO.
- It should default to 4GB of RAM; this is a good minimum value. Select 2 or more cores for the CPU configuration to have a optimal experience.
- On the Summary screen, it is not necessary to check the "Open VM Settings" box; while you may wish to adjust the configuration of the VM before first boot, the defaults are sensible.

## Download ISO

You can grab the latest ISO at **https://dl.getaurora.dev/aurora-live-lts.iso**.

## Build locally

```bash
git clone https://github.com/ublue-os/aurora-lts
cd aurora-lts
just build
just build-qcow2 ghcr.io/ublue-os/aurora:lts # if you want to build an ISO just change qcow2 to iso instead
```

## Contribute

If you want to contribute, checkout the code repository here: [Aurora-LTS](https://github.com/ublue-os/aurora-lts)
