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

# Features

## Visual Studio Code with Docker

[Visual Studio Code](https://code.visualstudio.com/) is included in the image as the default IDE. It comes with the [devcontainers extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) already installed. It's the recommended developer experience, so start here if you're new to containerized development!

- [Dev Containers Documentation](https://code.visualstudio.com/docs/devcontainers/containers) - you can skip most of the installation instructions and go directly to [the tutorial](https://code.visualstudio.com/docs/devcontainers/tutorial#_install-the-extension)
- [Dev Containers Specification](https://containers.dev/)
- [Beginner's Series to: Dev Containers](https://www.youtube.com/watch?v=b1RavPr_878) - great introductory tutorial from the [VS Code YouTube channel](https://www.youtube.com/@code/videos)

The most current [Docker Engine](https://docs.docker.com/engine/) is included by default and is set up to be the default container runtime for vscode. Using [docker compose](https://danielquinn.org/blog/developing-with-docker/) is also a great way to get started in container development and is an option if devcontainers don't fit your style.

## Podman and Podman Desktop

![Podman Desktop](https://github.com/user-attachments/assets/69f64ed1-7fcc-4040-9a3d-12b71308da1b)

[Podman Desktop](https://podman-desktop.io/) is included to provide container management. Check out the Podman Desktop [documentation](https://podman-desktop.io/docs/intro) for more information. All the upstream `podman` tools are included. This is the default system container runtime and is the recommended developer configuration that Fedora ships with.

> Though Aurora defaults to docker and vscode for development, all of the Fedora upstream tools are included for those who prefer that experience.

## Built-in Performance Tooling

[Sysprof](https://www.sysprof.com/) is included as a systemwide performance profiler. As well as [Brendan Gregg's](https://www.brendangregg.com/) recommended CLI tools:

- `bcc`, `bpftrace`, `iproute2`, `nicstat`, `numactl`, `sysprof`, `sysstat`, `tiptop`, `trace-cmd`, and `util-linux`

Thanks to Ubuntu and Canonical for the [detailed specification](https://discourse.ubuntu.com/t/spec-include-performance-tooling-in-ubuntu/43134) and rationale. We hope that the inclusion of performance tools will [lead to better upstream software](https://blogs.gnome.org/chergert/2024/09/25/messaging-needs/).

## Quality of Life Improvements

- [Cockpit](https://cockpit-project.org/) for local and remote management
- [Tailscale](https://universal-blue.discourse.group/t/tailscale-vpn-on-bluefin/290) for VPN
- [Just](https://github.com/casey/just) task runner for automation tasks
- `fish` and `zsh` available as optional shells

### Fonts

Aurora DX includes a collection of well-curated monospace fonts. Additional fonts can be added with Homebrew from the [font cask repository](https://formulae.brew.sh/cask-font/). You can also install [Microsoft fonts](https://github.com/colindean/homebrew-fonts-nonfree) if needed.

Just launch `ujust bbrew` and select "fonts" from the list.

### Pet Containers

Pet containers are available as interactive terminals via [distrobox](https://distrobox.it/). Manage these via the included [DistroShelf](https://github.com/ranfdev/DistroShelf) application.

Use DistroShelf's interface to create your own pet containers from whichever distribution is on the list:

![image](https://github.com/user-attachments/assets/2daf276d-2aed-47b9-9792-923d674ef226)

For CLI warriors you can manage your containers with the Terminal's built-in container support:

![image](https://github.com/user-attachments/assets/2a4dc4b5-f1a8-4781-80a4-92ea4dfeeb97)

The included [Terminal](https://gitlab.gnome.org/chergert/ptyxis) includes a host terminal so that you can quickly switch between containers and the host.

- The default terminal is [Ptyxis](https://gitlab.gnome.org/chergert/ptyxis), which includes built in integration of distrobox containers. It is aliased as "Terminal" in the menu. It is mapped to <kbd>Ctrl</kbd>-<kbd>Alt</kbd>-<kbd>Enter</kbd> by default for quick launch
- [Podman Desktop](https://flathub.org/apps/io.podman_desktop.PodmanDesktop) - Containers and Kubernetes for application developers
- [Pods](https://flathub.org/apps/com.github.marhkb.Pods) is also a great way to manage your containers graphically

# Other Tooling

## JetBrains

`ujust jetbrains-toolbox` will fetch and install the [JetBrains Toolbox](https://www.jetbrains.com/toolbox-app) application, which will manage the installation of the JetBrains set of tools. This application will handle installation, removal, and upgrade of the JetBrains products, and is handled completely in your home directory, independent of the operating system image. We do not recommend using the JetBrains flatpaks.

- Check the [JetBrains documentation](https://www.jetbrains.com/help/idea/podman.html) for integrating those tools with the podman runtime.
- Check out how to [setup JetBrains with devcontainers](https://www.jetbrains.com/help/idea/connect-to-devcontainer.html)
- [Uninstallation instructions](https://toolbox-support.jetbrains.com/hc/en-us/articles/115001313270-How-to-uninstall-Toolbox-App-)

The JetBrains blog also has more information on JetBrains Dev Containers support:

- [Using Dev Containers in JetBrains IDEs – Part 1](https://blog.jetbrains.com/idea/2024/07/using-dev-containers-in-jetbrains-ides-part-1/)

## Neovim

`brew install neovim devcontainer` then follow these directions for a devcontainer setup:

- [Running Neovim with Devcontainers](https://cadu.dev/running-neovim-on-devcontainers/)
- [DevPod Quickstart for Neovim](https://devpod.sh/docs/getting-started/quickstart-vim)

## Kubernetes and other Cloud Native Tooling

`ujust bbrew` and select `k8s-tools` to get started:

| Name                                                | Description                                                                                                      |
| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| [cdk8s](https://formulae.brew.sh/formula/cdk8s)     | Defines Kubernetes applications and reusable abstractions using familiar programming languages.                  |
| [k0sctl](https://formulae.brew.sh/formula/k0sctl)   | A command-line tool for bootstrapping and managing k0s Kubernetes clusters.                                      |
| [k3sup](https://formulae.brew.sh/formula/k3sup)     | A light-weight utility to install k3s on any local or remote VM.                                                 |
| [kind](https://formulae.brew.sh/formula/kind)       | A tool for running local Kubernetes clusters using Docker container “nodes”.                                     |
| [dagger](https://formulae.brew.sh/formula/dagger)   | A portable devkit for CI/CD pipelines.                                                                           |
| [grype](https://formulae.brew.sh/formula/grype)     | A vulnerability scanner for container images and filesystems.                                                    |
| [helm](https://formulae.brew.sh/formula/helm)       | The package manager for Kubernetes.                                                                              |
| [kubectl](https://formulae.brew.sh/formula/kubectl) | The Kubernetes command-line tool, allows you to run commands against Kubernetes clusters.                        |
| [k9s](https://formulae.brew.sh/formula/k9s)         | Provides a terminal UI to interact with your Kubernetes clusters.                                                |
| [kubectx](https://formulae.brew.sh/formula/kubectx) | A tool to switch between contexts (clusters) on kubectl faster.                                                  |
| [pack](https://formulae.brew.sh/formula/pack)       | A CLI tool to build apps using Cloud Native Buildpacks.                                                          |
| [syft](https://formulae.brew.sh/formula/syft)       | A CLI tool and library for generating a Software Bill of Materials (SBOM) from container images and filesystems. |

### CNCF Tools

For access to the full suite of [Cloud Native Computing Foundation](https://l.cncf.io) tools, use `ujust cncf` to browse and install from an extensive collection of 89 CNCF projects including graduated, incubating, and sandbox tools. This includes Argo, Cilium, Envoy, Flux, Istio, Linkerd, Prometheus, and many more.

## Ramalama and other AI tools

[Ramalama](https://github.com/containers/ramalama) can be installed via `ujust install-ai-tools` for local management and serving of AI models. Check the [AI documentation](/guides/local-ai) for more information.

## Virtualization and Container Runtimes

- [virt-manager](https://virt-manager.org/) and associated tooling (KVM, qemu)
- [Incus](https://linuxcontainers.org/incus/) provides system containers
