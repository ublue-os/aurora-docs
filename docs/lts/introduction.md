---
title: Aurora Helium LTS (Alpha)
description: About Aurora Helium LTS Edition
---

# Aurora Helium LTS

**Please note: This project is currently in its alpha phase.**

Aurora Helium is a version of the ultimate productivity workstation designed for people who want a long-term-support version of Aurora. This OS is especially useful for deployments on peoples computers that don't need the newest software and should run well for several years to come.

Aurora Helium LTS is built on top of CentOS Stream 10 offering a 3-5 year lifespan for the operating system base. Applications are installed via Flathub or CLI tools via Homebrew, like on normal Aurora.

## Contribute

If you want to contribute, checkout the code repository here: [Aurora-LTS](https://github.com/ublue-os/aurora-lts)

# ARM Support

Aurora LTS is the first edition Aurora to officially support Arm64 Processors. The arm64 editions feature a couple of small, but noteworthy differences:

- We are using [Pixi](https://github.com/prefix-dev/pixi) package manager instead of Homebrew since there is no official arm build (yet).

- Firefox does not provide arm64 builds on Flathub at this time.

## Virtualize on your Apple Silicon Mac

This guide is based in large parts on the similar guide from [Bluefin LTS](https://docs.projectbluefin.io/lts).

UTM can boot these images if suitably configured:

- File → New, then select Virtualize
- Select Linux, then enable "Use Apple Virtualization" (The QEMU virtualization backend can also work, but this works better on Apple Silicon.)
- Browse for the Aurora LTS ISO.
- It should default to 4GB of RAM; this is a good minimum value. Select 2 or more cores for the CPU configuration to have a optimal experience.
- On the Summary screen, it is not necessary to check the "Open VM Settings" box; while you may wish to adjust the configuration of the VM before first boot, the defaults are sensible.

## Build locally

```bash
git clone https://github.com/ublue-os/aurora-lts
cd aurora-lts
just build
just build-qcow2 ghcr.io/ublue-os/aurora:lts # if you want to build an ISO just change qcow2 to iso instead
```
