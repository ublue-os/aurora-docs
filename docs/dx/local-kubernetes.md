---
title: Local Kubernetes Cluster
description: How to setup a local kubernetes cluster on Aurora-DX
---

## Setting up a local cluster via ujust recipe

Setting up a local kubernetes cluster to play around in is super easy on Aurora.

Use this ujust recipe to get started: `ujust install-k8s-dev-tools`. It installs a variety of tools, including:

- [kind](https://kind.sigs.k8s.io/) - Run a Kubernetes cluster on your machine. Run the command `kind create cluster` on the host to get started!
- kubectl - The Kubernetes Admin CLI
- [k9s](https://k9scli.io/), [kubectx](https://github.com/ahmetb/kubectx), and [helm](https://helm.sh/). If you feel like we could a tool, PR it!

## Via Podman Desktop

If you want a more graphical way to setup your own little cluster on your dev machine, you can also use the included Podman Desktop.

Just open the app, click on the Kubernetes Icon on the left hand side of the app after setting it up and spin your own little cluster locally.

![podman-desktop](/img/local-kubernetes/podman-desktop.png)

Smooooth.
