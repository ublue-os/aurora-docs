---
title: Local Kubernetes Cluster
description: How to setup a local Kubernetes cluster on Aurora-DX
---

## Setting up a local cluster via `ujust` recipe

Setting up a local Kubernetes cluster requires one terminal command:

```bash
ujust aurora-k8s
```

This command installs a variety of tools including:

- [`kind`](https://kind.sigs.k8s.io/) - Run a Kubernetes cluster on your machine. Run the command `kind create cluster` on the host to get started!
- kubectl - The Kubernetes Admin CLI
- [`k9s`](https://k9scli.io/), [`kubectx`](https://github.com/ahmetb/kubectx), and [`helm`](https://helm.sh/).

If you feel like we could add another tool, [PR it](https://github.com/ublue-os/aurora/pulls)!

## Via Podman Desktop

If you desire a graphical method to setup a cluster on your dev machine, then you can also use the included **[Podman Desktop](https://flathub.org/apps/io.podman_desktop.PodmanDesktop)**.

Open the application, click on the Kubernetes icon on the left hand side, then spin your own little cluster locally!

![podman-desktop](/img/local-kubernetes/podman-desktop.png)

_Smooooth_.
