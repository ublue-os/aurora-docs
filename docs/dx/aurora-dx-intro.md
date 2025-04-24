---
title: Aurora DX Introduction
description: About the Aurora Developer Experience
---

Aurora Developer Experience `(aurora-dx)` is a dedicated experience on top of Aurora that features development tools and integrations for developers. Unlike traditional Linux distributions, Aurora heavily embraces containerization and requests that you do not install your development tools directly on the host.

## Scope of Development Tools

- Your Home directory isolated from system files (**[Homebrew](https://formulae.brew.sh/formula/)**)
- A container (**[Distrobox](https://distrobox.it/)**, **[Devcontainers](https://containers.dev/)**)

This approach makes managing dependencies safer by posing less risk by breaking your operating system installation. The Aurora maintainers will not dictate on how you develop, but will take away the footguns that will break your machine and ultimately your workflow. Aurora-DX consists of the following features that provide a great developer experience:

- Integration of QEMU and KVM for an easy virtualization experience
- Preinstalled tools and configurations so you can get started quickly, like Visual Studio Code and Devcontainer Integration
- Convenient ways to install your favorite tools like Jetbrains Toolbox using `ujust` commands

## Enable Developer Mode

To enable Developer Mode from a Vanilla Aurora Installation, type in `ujust devmode` and follow the prompts in your terminal. The assistant will look something like this:

![enabling-aurora-dx](/img/dx/enable-dx.png)

After enabling Developer Mode, you need to add yourself to the right groups.

This can be done with `ujust dx-group` and requires a logout and a login after that. And you're done, you now have docker and other awesome tools at your disposal, ready to be used!
