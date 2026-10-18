---
title: Installer des logiciels sur Aurora
description: Comment installer des logiciels sur Aurora
---

## Flatpak {#flatpak}

[Flatpak](https://flatpak.org) est la méthode principale pour installer des applications graphiques. Par défaut, le dépôt [Flathub](https://www.flathub.org) est utilisé ; il contient plusieurs applications populaires à installer. Installez les Flatpaks avec l'application **Bazaar**.

## Homebrew {#homebrew}

Le gestionnaire de paquets [Homebrew](https://brew.sh/) est spécifiquement destiné à l'installation d'utilitaires en ligne de commande et de logiciels utilisés dans le terminal.

## Docker {#docker}

[Docker](https://www.docker.com/) est une plateforme de conteneurisation populaire pour exécuter et gérer des conteneurs. Docker est inclus avec Aurora-DX.

Pour une expérience Docker optimale, passez sur **Aurora DX** qui inclut Docker préinstallé et configuré :

- Moteur Docker avec une intégration complète
- Visual Studio Code avec prise en charge des devcontainers
- Outils de développement préconfigurés

Pour passer à Aurora DX, utilisez la recette ujust incluse :

```bash
ujust devmode
```

Apprenez-en davantage sur Aurora DX et ses fonctionnalités de développement dans la [présentation d'Aurora DX](/fr/dx/aurora-dx-intro).

## Conteneurs Distrobox {#distrobox-containers}

Les conteneurs [Distrobox](https://distrobox.it/) sont des sous-systèmes Linux d'autres distributions Linux populaires, qui donnent accès à leurs gestionnaires de paquets (comme `dnf` ou `apt`) et à leurs formats de paquets (comme RPM et Deb).

Ils sont couramment utilisés dans deux scénarios différents :

- Comme solution de repli pour les logiciels Linux qui n'ont pas de Flatpak disponible
- Comme environnements de développement

### Outils graphiques pour gérer Distrobox {#gui-tools-for-managing-distrobox}

Bien que Distrobox puisse être géré en ligne de commande, il existe une application graphique qui rend la gestion des conteneurs plus conviviale :

#### Kontainer {#kontainer}

[Kontainer](https://github.com/DenysMb/Kontainer) est une application Kirigami moderne pour gérer les conteneurs Distrobox. Elle offre une interface intuitive pour créer, gérer et accéder à vos conteneurs.

- **Installation** : disponible en Flatpak sur Flathub
- **Fonctionnalités** : création de conteneurs à partir de diverses distributions, gestion des conteneurs existants et lancement direct d'applications depuis les conteneurs

## `rpm-ostree` {#rpm-ostree}

> **Note** : il est fortement recommandé de ne l'utiliser qu'en dernier recours.

Superposer des paquets RPM à l'hôte comme sur un système Linux traditionnel présente des inconvénients majeurs, tels que :

- Un risque élevé de mises à niveau cassées en raison de problèmes de dépendances.
- Des mises à jour plus lentes en raison de l'ajout d'une couche supplémentaire au déploiement.

Si vous devez absolument superposer des paquets sur votre hôte, consultez le guide de nos amis de Bazzite [ici](https://docs.bazzite.gg/Installing_and_Managing_Software/rpm-ostree).
