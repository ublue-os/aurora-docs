---
title: Aurora DX Introduction
description: About the Aurora Developer Experience
---

Aurora Developer Experience `(aurora-dx)` is a dedicated experience on top of Aurora that features development tools and integrations for developers. Unlike traditional Linux distributions, Aurora heavily embraces containerization and does not install your development tools directly on the host.

## Scope of Development Tools

- Your Home directory isolated from system files (**[Homebrew](https://formulae.brew.sh/formula/)**)
- A container (**[Distrobox](https://distrobox.it/)**, **[Devcontainers](https://containers.dev/)**)

This approach makes managing dependencies safer by posing less risk by breaking your operating system installation. The Aurora maintainers will not dictate on how you develop, but will take away the footguns that will break your machine and ultimately your workflow. Aurora-DX consists of the following features that provide a great developer experience:

- Integration of QEMU and KVM for an easy virtualization experience
- Preinstalled tools and configurations so you can get started quickly, like Visual Studio Code and Devcontainer Integration
- Convenient ways to install your favorite tools like Jetbrains Toolbox using `ujust` commands
