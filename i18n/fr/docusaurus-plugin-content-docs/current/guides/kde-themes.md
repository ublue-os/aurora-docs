---
title: Thèmes et personnalisation KDE Plasma
description: Un guide pour personnaliser KDE Plasma
---

> **Remarque** : n'installez pas de thèmes via les réglages système, car ils peuvent nécessiter un accès à des fichiers root en lecture seule !

## Instructions universelles {#universal-instructions}

Instructions pas à pas pour installer des thèmes personnalisés sur KDE Plasma.

1. Téléchargez le thème manuellement depuis le [KDE Store](https://store.kde.org/browse/)
2. Extrayez le contenu vers `~/.local/share/plasma/` (vous devrez peut-être créer ce répertoire)
3. Ouvrez les réglages système et sélectionnez votre thème, style, curseur, etc. qui devraient maintenant apparaître

### Emplacements d'extraction des thèmes {#theme-extraction-locations}

Les emplacements où les composants spécifiques de KDE Plasma sont extraits sur le bureau.

#### Thèmes globaux {#global-themes}

Les thèmes globaux sont placés dans `~/.local/share/plasma/look-and-feel/` (_vous devrez peut-être créer ce répertoire_).

#### Thèmes Plasma {#plasma-themes}

Les « thèmes Plasma » sont placés dans `~/.local/share/plasma/desktoptheme/` (_vous devrez peut-être créer ce répertoire_).

#### Thèmes d'icônes / de curseurs {#icon--cursor-themes}

Les « thèmes d'icônes/curseurs » sont placés dans `~/.local/share/icons`

#### Permissions des applications pour utiliser les thèmes {#application-permissions-to-use-themes}

Certains Flatpaks nécessitent des permissions de système de fichiers pour les applications qui rencontrent des problèmes avec les thèmes de curseurs.

> **Exemple** : (xdg-data/icons:ro` dans « Filesystem » pour chaque application concernée, ou globalement dans Flatseal).

#### Thèmes qui nécessitent `kvantum` {#themes-that-require-kvantum}

Certains thèmes nécessitent que [`kvantum`](https://github.com/tsujan/Kvantum/blob/master/Kvantum/README.md) soit installé sur le système hôte.

Installez-le avec cette **commande** :

```
rpm-ostree install kvantum
```
