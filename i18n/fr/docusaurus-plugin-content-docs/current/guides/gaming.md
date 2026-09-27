---
title: Le jeu sur Aurora
description: Un guide complet des options et configurations de jeu sur Aurora
---

## Prérequis {#prerequisites}

Avant de commencer à jouer sur Aurora, assurez-vous de disposer de :

1. La bonne image Aurora pour votre système :
   - `aurora:stable` pour les systèmes avec GPU Intel/AMD
   - `aurora-nvidia-open:stable` pour les cartes plus récentes (Turing+ / 16XX+) prises en charge par le pilote open de NVIDIA

2. Assez d'espace de stockage pour vos jeux
3. Une connexion Internet stable pour les téléchargements

## Vue d'ensemble {#overview}

Bien qu'Aurora ne soit pas principalement une image orientée jeu, vous pouvez tout de même y exécuter des jeux vidéo avec des performances _presque_ identiques à celles de presque tous les autres systèmes d'exploitation Linux. Aurora prend en charge le jeu via diverses méthodes, notamment Steam en Flatpak, Lutris et des environnements de jeu conteneurisés. Ce guide vous aidera à mettre en place un environnement de jeu occasionnel grâce aux Flatpaks.

## Outils de jeu {#gaming-tools}

![Catégorie Jeux du Bazaar](/img/software/bazaar-gaming-section.webp)

- [Steam](https://flathub.org/en/apps/com.valvesoftware.Steam)

- [Lutris](https://flathub.org/en/apps/net.lutris.Lutris)

- [Heroic Games Launcher](https://flathub.org/en/apps/com.heroicgameslauncher.hgl)

Autres utilitaires susceptibles de vous être utiles :

- Runtimes et outils Vulkan essentiels ([Gamescope](https://github.com/ValveSoftware/gamescope), [MangoHud](https://github.com/flightlessmango/MangoHud), [OBS VKCapture](https://github.com/nowrep/obs-vkcapture))

Steam via Flatpak présente plusieurs avantages :

1. Un environnement bac à sable pour une sécurité renforcée, avec des permissions granulaires et ajustables
2. Des mises à jour automatiques
3. Un environnement d'exécution homogène
4. Une compatibilité entre distributions

Consultez le [Wiki GitHub du Flatpak Steam](https://github.com/flathub/com.valvesoftware.Steam/wiki) pour une courte liste des adaptations qui peuvent s'avérer nécessaires par rapport à d'autres formats de paquets.

## Passer d'Aurora à Bazzite {#switch-to-bazzite-from-aurora}

[Bazzite](https://bazzite.gg) est le meilleur choix si vos besoins en matière de jeu priment sur la productivité, le développement ou l'usage informatique général.

**Remarque** : assurez-vous de ne pas faire de rebase vers une image GNOME de Bazzite, car le rebase vers un autre environnement de bureau n'est pas pris en charge.

[Choisissez la bonne image Bazzite](https://bazzite.gg/#image-picker) et insérez-la dans la commande bootc ci-dessous ; vous n'avez pas besoin de télécharger d'ISO ni de réinstaller pour cela :

```
rpm-ostree reset
sudo bootc switch --enforce-container-sigpolicy ghcr.io/ublue-os/bazzite:stable
```

## Recommandations {#recommendations}

1. **Jeu occasionnel** : utilisez Steam en Flatpak et les outils de jeu installés depuis Bazaar
2. **Orienté jeu** : passez à une installation complète de Bazzite pour la meilleure expérience de jeu

## Outils et surveillance des performances {#tools-and-performance-monitoring}

- [Gamescope Vulkan Layer](https://flathub.org/en/apps/org.freedesktop.Platform.VulkanLayer.gamescope)
- [OBS VKCapture pour l'enregistrement](https://flathub.org/en/apps/org.freedesktop.Platform.VulkanLayer.OBSVkCapture)

## Gérer plusieurs plateformes de jeu {#managing-multiple-gaming-platforms}

Lorsque vous utilisez à la fois Steam et Lutris :

1. Steam est le mieux adapté aux jeux de votre bibliothèque Steam
2. Lutris peut gérer :
   - Les jeux Windows traditionnels
   - Les jeux Linux natifs
   - Les émulateurs
3. Heroic Games Launcher peut gérer :
   - Les jeux GOG
   - Les titres de l'Epic Games Store
   - Amazon Games

## Dépannage des problèmes courants {#troubleshooting-common-issues}

### Problèmes de performances {#performance-issues}

- Vérifiez que vous utilisez la bonne image Aurora pour votre matériel (aurora-stable pour Intel/AMD ou aurora-nvidia-stable pour NVIDIA)
- Vérifiez qu'un jeu s'exécute avec la bonne version de Proton
- Surveillez les ressources du système avec MangoHud pour identifier les goulots d'étranglement

### Problèmes de lancement des jeux {#game-launch-problems}

- Essayez de mettre à jour Proton ou de passer à une autre version de Proton
- Vérifiez les fichiers du jeu via Steam
- Vérifiez la compatibilité du jeu sur ProtonDB

### Problèmes de stockage {#storage-issues}

- Les jeux sont stockés dans les répertoires de leurs plateformes respectives
- Steam : `~/.var/app/com.valvesoftware.Steam/data/Steam`
- Lutris : les jeux peuvent être installés à des emplacements personnalisés

## Support communautaire {#community-support}

Ce guide est régulièrement mis à jour au fil de l'évolution d'Aurora. Pour obtenir les informations les plus récentes, de l'aide au dépannage, ou si vous avez la moindre question :

- Rejoignez la [communauté Discord d'Aurora](https://discord.getaurora.dev)

## Remarques supplémentaires {#additional-notes}

- Steam en Flatpak peut présenter une légère surcharge de performances due au bac à sable, mais elle est généralement négligeable
- Lorsque vous utilisez Steam en Flatpak, gardez à l'esprit que les jeux s'exécutent dans un environnement bac à sable pour une sécurité renforcée
