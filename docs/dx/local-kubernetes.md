---
title: Local Kubernetes Cluster
description: How to setup a local Kubernetes cluster on Aurora-DX
---

## Setting up a local cluster via `ujust` recipe

Setting up a local Kubernetes cluster requires one terminal command:

```bash
ujust bbrew
```

<img width="1173" height="685" alt="bbrew" src="https://github.com/user-attachments/assets/55798d51-0ec0-4029-af90-fae9d9ade5cd" />

Then just select k8s-tools.

This command installs a variety of tools including:

| Name | Description |

| --------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |

| [cdk8s](https://formulae.brew.sh/formula/cdk8s) | Defines Kubernetes applications and reusable abstractions using familiar programming languages. |

| [k0sctl](https://formulae.brew.sh/formula/k0sctl) | A command-line tool for bootstrapping and managing k0s Kubernetes clusters. |

| [k3sup](https://formulae.brew.sh/formula/k3sup) | A light-weight utility to install k3s on any local or remote VM. |

| [kind](https://formulae.brew.sh/formula/kind) | A tool for running local Kubernetes clusters using Docker container “nodes”. |

| [dagger](https://formulae.brew.sh/formula/dagger) | A portable devkit for CI/CD pipelines. |

| [grype](https://formulae.brew.sh/formula/grype) | A vulnerability scanner for container images and filesystems. |

| [helm](https://formulae.brew.sh/formula/helm) | The package manager for Kubernetes. |

| [kubectl](https://formulae.brew.sh/formula/kubectl) | The Kubernetes command-line tool, allows you to run commands against Kubernetes clusters. |

| [k9s](https://formulae.brew.sh/formula/k9s) | Provides a terminal UI to interact with your Kubernetes clusters. |

| [kubectx](https://formulae.brew.sh/formula/kubectx) | A tool to switch between contexts (clusters) on kubectl faster. |

| [pack](https://formulae.brew.sh/formula/pack) | A CLI tool to build apps using Cloud Native Buildpacks. |

| [syft](https://formulae.brew.sh/formula/syft) | A CLI tool and library for generating a Software Bill of Materials (SBOM) from container images and filesystems. |

### CNCF Tools

For access to the full suite of [Cloud Native Computing Foundation](https://l.cncf.io) tools, use `ujust cncf` to browse and install from an extensive collection of 89 CNCF projects including graduated, incubating, and sandbox tools. This includes Argo, Cilium, Envoy, Flux, Istio, Linkerd, Prometheus, and many more.

## Via Podman Desktop

If you desire a graphical method to setup a cluster on your dev machine, then you can also use the included **[Podman Desktop](https://flathub.org/apps/io.podman_desktop.PodmanDesktop)**.

Open the application, click on the Kubernetes icon on the left hand side, then spin your own little cluster locally!

![podman-desktop](/img/local-kubernetes/podman-desktop.png)

_Smooooth_.
