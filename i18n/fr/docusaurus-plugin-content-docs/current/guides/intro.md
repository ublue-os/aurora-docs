---
title: Introduction à Aurora
slug: /
pagination_next: guides/system-requirements
---

## Aurora {#aurora}

**La station de travail ultime pour la productivité, pensée pour tout le monde, est arrivée**.

Aurora associe l'environnement de bureau KDE, familier et proche de Windows, à la robustesse et à une facilité d'utilisation incomparable. Il est conçu pour être sans maintenance, fiable, rapide et simple d'emploi. L'âge d'or du bureau Linux est là.

![Aurora](/img/aurora-desktop.png)

- Développeurs, découvrez [Aurora-DX](/fr/dx/aurora-dx-intro) pour des images dédiées au développement !

> « Le désir d'atteindre les étoiles est ambitieux. Le désir de toucher les cœurs est sage. » - Maya Angelou

## Fonctionnalités {#features}

**Cette image repose fortement sur les _concepts natifs du cloud_.**

Les mises à jour du système sont basées sur des images et automatiques. Les applications sont logiquement séparées du système grâce aux Flatpaks pour les applications graphiques et à `brew` pour les applications en ligne de commande. Les charges de travail de développement sont conteneurisées.

## Pour les utilisateurs {#for-users}

- [Konsole](https://apps.kde.org/konsole/) pour la gestion des conteneurs
- [Kontainer](https://github.com/DenysMb/Kontainer) pour la gestion des conteneurs
- [Tailscale](https://tailscale.com) + [KTailctl](https://github.com/f-koehler/KTailctl) - inclus pour le VPN, avec `wireguard-tools`
- [Bazaar](https://github.com/kolunmi/bazaar) pour [Flathub](https://flathub.org) :
  - Découvrir et installer des applications graphiques
  - [Warehouse](https://flathub.org/apps/io.github.flattool.Warehouse) inclus pour la gestion des Flatpaks
- Fonctionnalités de confort au quotidien
  - Les images Developer Edition de Docker & Podman contiennent les deux moteurs pour répondre à vos besoins de conteneurisation.
  - [Input Leap](https://github.com/input-leap/input-leap) intégré.
  - `libratbagd` pour [Solaar](https://flathub.org/apps/io.github.pwr_solaar.solaar)
  - [rclone](https://rclone.org/) et [restic](https://restic.net/) inclus
  - `zsh` et `fish` inclus (en option)
- Construit sur les [images Kinoite Bootc](https://gitlab.com/fedora/ostree/ci-test)
- Règles udev supplémentaires pour les manettes de jeu et [autres périphériques](https://github.com/projectbluefin/common) incluses dès l'installation
- Codecs multimédia inclus
- Désactivation du collage au clic du milieu
- Système conçu pour l'application automatique des mises à jour
  - Si vous n'avez jamais utilisé de Linux basé sur des images, utilisez simplement votre ordinateur normalement
  - Ne vous posez pas de questions : éteignez votre ordinateur quand vous ne l'utilisez pas

### Applications {#applications}

- [Mozilla Firefox](https://www.firefox.com/), [Thunderbird](https://www.thunderbird.net), [DejaDup](https://apps.gnome.org/DejaDup/), [Flatseal](https://github.com/tchx84/flatseal) et le [lecteur multimédia Haruna](https://apps.kde.org/haruna/).
- Applications KDE essentielles installées :
  - [Clock](https://apps.kde.org/kclock/)
  - [Dolphin File Manager](https://apps.kde.org/dolphin/)
  - [Filelight](https://apps.kde.org/filelight/)
  - [Gwenview](https://apps.kde.org/gwenview/)
  - [KDE Partition Manager](https://apps.kde.org/partitionmanager/)
  - [KWeather](https://apps.kde.org/kweather/)
  - [Kate](https://apps.kde.org/kate/)
  - [Kcalc](https://apps.kde.org/kcalc/)
  - [Konsole](https://apps.kde.org/konsole/)
  - [Kontact](https://apps.kde.org/kontact/)
  - [Okular](https://apps.kde.org/okular/)
  - [Skanpage](https://apps.kde.org/skanpage/)

## En quoi est-ce différent d'un bureau Linux traditionnel ? {#how-is-this-different-from-a-traditional-linux-desktop}

- Aurora adopte une [approche de terrain vierge](https://en.wikipedia.org/wiki/Greenfield_project) pour les applications Linux en privilégiant par défaut Flathub et `brew`.
- Aurora recommande les outils conteneurisés - il mise sur [Devcontainers](https://containers.dev) pour un développement déclaratif conteneurisé. Vous pouvez utiliser Podman ou Docker pour exécuter et initialiser vos conteneurs.
- Aurora _tente_ de vous éviter d'utiliser directement `rpm-ostree` ou `bootc`
- Aurora mise sur l'automatisation des services et des mises à niveau du système plutôt que sur l'intervention de l'utilisateur. Les mises à niveau sont automatiques et silencieuses : vous n'avez plus à y penser.

## Actualités et mises à jour {#news--updates}

Les annonces liées au projet se trouvent sur le [**blog**](https://docs.getaurora.dev/fr/blog), auquel vous pouvez également vous abonner via le [**flux RSS**](https://docs.getaurora.dev/fr/blog/rss.xml). Les notes de version de chaque mise à jour sont disponibles sur [**GitHub**](https://github.com/ublue-os/aurora/releases).
