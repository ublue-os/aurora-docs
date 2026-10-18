---
title: Cluster Kubernetes local
description: Configurer un cluster Kubernetes local sur Aurora-DX
---

## Configurer un cluster local avec une recette `ujust` {#setting-up-a-local-cluster-via-ujust-recipe}

La configuration d’un cluster Kubernetes local ne nécessite qu’une commande dans le terminal :

```bash
ujust bbrew
```

<img width="1173" height="685" alt="bbrew" src="https://github.com/user-attachments/assets/55798d51-0ec0-4029-af90-fae9d9ade5cd" />

Sélectionnez ensuite k8s-tools.

Cette commande installe plusieurs outils, notamment :

| Nom                                                 | Description                                                                                                                                            |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [cdk8s](https://formulae.brew.sh/formula/cdk8s)     | Définit des applications Kubernetes et des abstractions réutilisables à l’aide de langages de programmation familiers.                                 |
| [k0sctl](https://formulae.brew.sh/formula/k0sctl)   | Outil en ligne de commande pour initialiser et gérer des clusters Kubernetes k0s.                                                                      |
| [k3sup](https://formulae.brew.sh/formula/k3sup)     | Utilitaire léger pour installer k3s sur n’importe quelle machine virtuelle locale ou distante.                                                         |
| [kind](https://formulae.brew.sh/formula/kind)       | Outil pour exécuter des clusters Kubernetes locaux en utilisant des conteneurs Docker comme « nœuds ».                                                 |
| [dagger](https://formulae.brew.sh/formula/dagger)   | Kit de développement portable pour les pipelines CI/CD.                                                                                                |
| [grype](https://formulae.brew.sh/formula/grype)     | Analyseur de vulnérabilités pour les images de conteneurs et les systèmes de fichiers.                                                                 |
| [helm](https://formulae.brew.sh/formula/helm)       | Gestionnaire de paquets pour Kubernetes.                                                                                                               |
| [kubectl](https://formulae.brew.sh/formula/kubectl) | Outil en ligne de commande de Kubernetes permettant d’exécuter des commandes sur des clusters Kubernetes.                                              |
| [k9s](https://formulae.brew.sh/formula/k9s)         | Interface dans le terminal pour interagir avec vos clusters Kubernetes.                                                                                |
| [kubectx](https://formulae.brew.sh/formula/kubectx) | Outil permettant de changer plus rapidement de contexte (cluster) dans kubectl.                                                                        |
| [pack](https://formulae.brew.sh/formula/pack)       | Outil en ligne de commande pour construire des applications avec Cloud Native Buildpacks.                                                              |
| [syft](https://formulae.brew.sh/formula/syft)       | Outil en ligne de commande et bibliothèque pour générer une nomenclature logicielle (SBOM) à partir d’images de conteneurs et de systèmes de fichiers. |

### Outils CNCF {#cncf-tools}

Pour accéder à l’ensemble des outils de la [Cloud Native Computing Foundation](https://l.cncf.io), utilisez `ujust cncf` afin de parcourir et d’installer les outils d’une vaste collection de 89 projets CNCF, aux stades de maturité « graduated », « incubating » et « sandbox ». Vous y trouverez notamment Argo, Cilium, Envoy, Flux, Istio, Linkerd, Prometheus et bien d’autres.

## Avec Podman Desktop {#via-podman-desktop}

Si vous préférez une méthode graphique pour configurer un cluster sur votre machine de développement, vous pouvez aussi utiliser **[Podman Desktop](https://flathub.org/apps/io.podman_desktop.PodmanDesktop)**, qui est inclus.

Ouvrez l’application, cliquez sur l’icône Kubernetes à gauche, puis lancez votre propre petit cluster en local !

![Podman Desktop](/img/local-kubernetes/podman-desktop.png)

_Tout en douceur_.
