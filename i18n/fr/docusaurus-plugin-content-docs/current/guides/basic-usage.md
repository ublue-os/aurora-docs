---
title: Utilisation de base
description: Guide d'utilisation au quotidien d'Aurora.
---

## Installation de logiciels {#installing-software}

| Applications graphiques | Ligne de commande / Terminal | Autres formats de paquets Linux |
| ----------------------- | ---------------------------- | ------------------------------- |
| Flatpak                 | Homebrew                     | Distrobox                       |

Consultez le [guide des logiciels](https://docs.getaurora.dev/fr/guides/software/) pour plus d'informations.

## Gestion des applications installées {#managing-installed-applications}

### Flatseal {#flatseal}

Gérez finement les permissions des Flatpaks. Les paramètres système de KDE Plasma permettent également de modifier les permissions, mais de manière moins granulaire.

### Warehouse {#warehouse}

Gérez les Flatpaks installés en les rétrogradant, en sauvegardant les données utilisateur et en ajoutant des dépôts Flatpak supplémentaires.

### Paquets Aurora préinstallés {#pre-installed-aurora-packages}

Malheureusement, en raison d'une limite des images OCI, désinstaller les paquets préinstallés livrés avec Aurora présente trop d'inconvénients pour être recommandé, sauf à [forker le projet](https://github.com/ublue-os/aurora/fork), à créer votre propre image à partir de notre [modèle](https://github.com/ublue-os/image-template) ou à utiliser le projet indépendant [Blue-Build](https://blue-build.org/learn/universal-blue/).

Ces inconvénients incluent :

- Des mises à niveau plus longues
- Un espace de stockage supplémentaire utilisé malgré la suppression du paquet

## Utilisation de `ujust` dans Aurora {#using-ujust-in-aurora}

[just](https://just.systems) est utilisé comme exécuteur de tâches sur Aurora. Il s'agit généralement d'alias pratiques créés par la communauté, ou de scripts plus complexes qui aident à automatiser certaines tâches ou la configuration initiale. Il est aliasé en `ujust`, afin que vous puissiez réserver `just` lui-même à vos autres projets.

### Premiers pas avec ujust {#getting-started-with-ujust}

- `ujust --choose` - Affiche chaque commande ainsi que le script exécuté lorsque cette commande est choisie. Pratique pour parcourir les commandes disponibles
- `ujust -n $command` - L'option `-n` exécute une commande en mode simulation (dry-run), ce qui est utile pour inspecter les commandes exécutées

::::tip

Astuce : conservez vos propres tâches et alias dans `~/.Justfile` ; ils sont également pratiques à placer à la racine de vos projets pour automatiser les tâches courantes. Consultez cet exemple issu de [Fedora Kinoite](https://gitlab.com/fedora/ostree/ci-test/-/blob/main/justfile?ref_type=heads).

::::

### Collections d'outils sélectionnées {#curated-tool-bundles}

Aurora inclut des outils en ligne de commande sélectionnés, partagés sous forme de Brewfiles. Ces commandes installent des collections d'outils sélectionnées via Homebrew :

| Commande           | Description                                                                                                                 |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| `ujust aurora-cli` | Outils CLI modernes : atuin, bat, chezmoi, direnv, eza, fd, gh, glab, ripgrep, starship, tealdeer, television, zoxide, etc. |
| `ujust bbrew`      | Lance [Bold Brew](https://bold-brew.com/) pour sélectionner des bundles Brewfile                                            |

### Commandes système {#system-commands}

| Commande                       | Description                                                                                                                                                                                                                                                            |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ujust update`                 | Met à jour manuellement le système, les flatpaks et les formules brew                                                                                                                                                                                                  |
| `ujust toggle-updates`         | Active ou désactive les mises à jour automatiques du système                                                                                                                                                                                                           |
| `ujust changelogs`             | Affiche les journaux de modifications de chaque paquet depuis la dernière mise à jour                                                                                                                                                                                  |
| `ujust bios`                   | Redémarre le PC et entre dans le BIOS/UEFI. Utile pour utiliser des systèmes en double démarrage sur des disques indépendants                                                                                                                                          |
| `ujust bios-info`              | Affiche les informations BIOS/UEFI (fabricant, nom du produit, version, date de publication)                                                                                                                                                                           |
| `ujust device-info`            | Envoie l'état du système, la liste des flatpaks et les informations système vers le pastebin CentOS, puis renvoie l'URL dans le terminal. Cela permet à l'utilisateur de partager facilement l'URL avec ses informations afin que d'autres puissent l'aider à déboguer |
| `ujust rebase-helper`          | Assistant interactif pour basculer entre les canaux, rebaser vers d'autres images ou revenir à une version précédente                                                                                                                                                  |
| `ujust clean-system`           | Nettoie les conteneurs, volumes, runtimes flatpak et déploiements rpm-ostree inutilisés                                                                                                                                                                                |
| `ujust check-idle-power-draw`  | Mesure la consommation électrique de votre système au repos à l'aide de powerstat                                                                                                                                                                                      |
| `ujust check-local-overrides`  | Affiche les fichiers qui diffèrent entre `/usr/etc` et `/etc` afin d'identifier les personnalisations locales                                                                                                                                                          |
| `ujust logs-this-boot`         | Affiche tous les messages du journal système du démarrage en cours                                                                                                                                                                                                     |
| `ujust logs-last-boot`         | Affiche tous les messages du journal système du démarrage précédent                                                                                                                                                                                                    |
| `ujust enroll-secure-boot-key` | Inscrit la clé de signature du pilote Nvidia et des KMOD pour le secure boot (mot de passe : « universalblue »)                                                                                                                                                        |
| `ujust toggle-user-motd`       | Active ou désactive l'affichage du message du jour dans le terminal                                                                                                                                                                                                    |
| `ujust toggle-tpm2`            | Active ou désactive le déverrouillage automatique du disque LUKS via TPM (activation/désactivation avec code PIN facultatif)                                                                                                                                           |
| `ujust toggle-iwd`             | Bascule entre iwd et wpa_supplicant pour le réseau Wi-Fi (iwd peut améliorer le débit et réduire la latence)                                                                                                                                                           |
| `ujust benchmark`              | Exécute un benchmark système d'une minute à l'aide de stress-ng                                                                                                                                                                                                        |

### Commandes pour l'expérience développeur {#developer-experience-commands}

| Commande               | Description                                                                                                                                      |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| `ujust devmode`        | Bascule entre Aurora et l'expérience développeur (Aurora-dx)                                                                                     |
| `ujust dx-group`       | Ajoute votre utilisateur aux groupes docker, incus-admin, libvirt et dialout pour un accès développeur complet                                   |
| `ujust aurora-cli`     | Installe l'expérience en ligne de commande sélectionnée d'Aurora avec des outils modernes (atuin, bat, eza, fd, ripgrep, starship, zoxide, etc.) |
| `ujust toggle-devmode` | Alias de `ujust devmode`                                                                                                                         |

### Commandes d'installation d'applications {#application-installation-commands}

| Commande                         | Description                                                                                                  |
| -------------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `ujust jetbrains-toolbox`        | Installe [JetBrains Toolbox](https://www.jetbrains.com/toolbox-app/) pour gérer les IDE JetBrains            |
| `ujust install-opentabletdriver` | Installe ou désinstalle [OpenTabletDriver](https://opentabletdriver.net/), un pilote de tablette open source |
| `ujust install-system-flatpaks`  | Installe les flatpaks système par défaut (utile après un rebase)                                             |
| `ujust cncf`                     | Lance Bold Brew avec le Brewfile d'outils CNCF pour les outils de développement cloud native                 |

Notez que, de manière générale, Aurora s'efforce de garder les Justfiles système à périmètre restreint ; la plupart de ces commandes sont des solutions de contournement et non des commandes abouties. Elles peuvent être supprimées ou modifiées selon le problème qu'elles étaient initialement censées résoudre.

## Mises à jour {#updates}

Les mises à jour du système et des applications sont appliquées automatiquement chaque jour. Vous pouvez modifier le canal de mise à jour dans les paramètres système, sous la catégorie « Aurora Preferences ».

### Restaurer une mise à niveau système défectueuse {#rolling-back-bad-system-upgrades}

Si une régression survient lors d'une mise à jour du système, vous pouvez revenir au dernier déploiement.

```
rpm-ostree rollback
```

#### Rebaser vers des images Aurora spécifiques {#rebasing-to-specific-aurora-images}

> **Note** : les mises à jour du système sont suspendues lorsque vous rebasez vers une image plus ancienne, jusqu'à ce que vous rebasiez à nouveau vers le canal de mise à jour `:stable`.

Utilisez l'outil `rebase-helper` pour rebaser pour les raisons suivantes :

- Basculer temporairement vers une version plus ancienne d'Aurora
- Changer de canal de mise à jour
- Des changements matériels qui imposent de passer à une image spécifique au matériel ou d'en quitter une (comme une image préinstallée avec les pilotes Nvidia)

```
ujust rebase-helper
```
