---
title: Stargazer 8 - Aurora 45 disponible (mise à jour d'automne 2026 d'Aurora)
slug: stargazer8-aurora45
description: Aurora 45 est désormais disponible
authors:
  - inffy
  - renner0e
  - niklas
---

# Stargazer 8 - Aurora 45 disponible (mise à jour d'automne 2026 d'Aurora)

Bonjour les _stargazers_,

Six mois se sont encore écoulés, ce qui signifie qu'il est temps pour une nouvelle version de Fedora. Fedora 45 a été [publiée](https://fedoramagazine.org/announcing-fedora-linux-45/) le 3 novembre. La branche `testing` d'Aurora utilise la base F45 depuis la sortie de la bêta, et c'est aujourd'hui au tour de notre branche `stable` de recevoir la mise à jour.

## Changements en amont {#upstream-changes}

Fedora 45 contient principalement de changements en coulisses, dont vous pouvez consulter le détail complet dans les [notes de version](https://docs.fedoraproject.org/en-US/release-notes/f45/). Les changements les plus marquants pour les images atomiques en amont se trouvent dans le [Fedora Magazine](https://fedoramagazine.org/whats-new-for-fedora-atomic-desktops-in-fedora-linux-45/).

## Changements dans Aurora {#aurora-changes}

En plus des changements en amont, Aurora elle-même évolue un peu. Ces changements concernent eux aussi principalement le _backend_ et le processus de construction.

### Les gestionnaires de mots de passe (et leurs extensions de navigateur) fonctionnent avec Firefox {#password-managers-and-browser-extensions-work-with-firefox}

La connexion des navigateurs Flatpak aux gestionnaires de mots de passe et à leurs extensions de navigateur était un point de friction de longue date. Mozilla a récemment mis en place une solution que nous activons dans Aurora pour Firefox.

Firefox devrait désormais mieux prendre en charge KeePassXC et Bitwarden, que vous pouvez activer depuis les paramètres de Firefox.

La prise en charge de Chrome et des navigateurs apparentés est toujours en cours de développement ; vous pouvez suivre l'avancement sur le [gestionnaire de tickets de KeePassXC](https://github.com/keepassxreboot/keepassxc-browser/issues/1267).

### `uupd` a un nouveau mainteneur {#uupd-has-a-new-maintainer}

Notre outil de mises à jour automatiques, [uupd](https://github.com/ublue-os/uupd), a reçu un peu d'attention bien méritée et dispose désormais d'un nouveau mainteneur officiel : bonjour [Quinn !](https://github.com/HuntedRaven7) et bienvenue !

### `fcitx` passe en Flatpak et est retiré de l'image {#fcitx-moves-to-flatpak-and-gets-removed-from-the-image}

Cette section concerne principalement les utilisateurs qui s'appuient sur des méthodes de saisie multilingues ou sur la prise en charge du CJCV (chinois, japonais, coréen, vietnamien).

Dans le cadre de nos efforts continus pour garder l'image de base d'Aurora légère et maintenable, nous avons migré `fcitx` (notre framework de méthodes de saisie pour le CJCV et la saisie multilingue) vers Flatpak. Auparavant, livrer ce paquet et tous ses modules de langue directement dans l'image du système de base avait pour effet secondaire involontaire d'y introduire des composants obsolètes.

Les utilisateurs actuels de Fcitx recevront une notification unique les invitant à installer le [Flatpak](https://flathub.org/en/apps/org.fcitx.Fcitx5) ainsi que les modules de langue depuis Bazaar.

Les réglages et configurations sont migrés vers le nouvel emplacement dans la mesure du possible.

Vous trouverez plus d'informations sur [GitHub](https://github.com/ublue-os/aurora/issues/3038). Si vous rencontrez des problèmes, n'hésitez pas à nous contacter sur Discord ou GitHub :).

### Plasma 6.8 disponible {#plasma-68-available}

Aurora embarque une nouvelle version de l'environnement de bureau Plasma 6.8 ! Vous pouvez désormais définir des bordures personnalisées pour des applications comme Discord ou Steam, modifier l'affinité des cœurs du processeur dans le Moniteur système, et bien plus encore. [Vous pouvez consulter la liste complète des changements ici](https://kde.org/announcements/plasma/6/6.8.0/).

### Flatpaks utilisateur dans Bazaar {#bazaar-user-flatpaks}

L'équipe derrière [Bazaar](https://gitlab.gnome.org/World/bazaar/) a récemment implémenté une demande de longue date concernant la gestion de certaines applications dans les installations Flatpak par utilisateur.

Si vous en avez la possibilité, soutenez Bazaar en faisant un don à l'équipe [ici](https://ko-fi.com/kolunmi) ou [ici](https://ko-fi.com/alexandervanhee).

### Cardwire désormais en phase de test {#cardwire-now-in-testing}

La prise en charge multi-GPU grâce à la nouvelle application [Cardwire](https://opengamingcollective.github.io/cardwire/) est désormais disponible dans `testing`. Si vous avez un système multi-GPU, nous apprécierions votre aide pour les retours et les tests !

Cardwire remplace `switcheroo`, car il devrait offrir une meilleure expérience sur les systèmes multi-GPU. Il est également utilisé par défaut dans Bazzite, ce qui permet d'harmoniser ce changement entre les images Universal Blue.

Pour l'essayer vous-même, vous pouvez rebaser vers la branche `testing` à l'aide de `ujust rebase-helper`.

### ZFS désormais retiré {#zfs-now-removed}

Un dernier rappel : comme [indiqué précédemment](https://docs.getaurora.dev/blog/aurora44-beta/#important-notice-related-to-fedora-45), ZFS est désormais retiré des builds `stable` d'Aurora.

## [Discussion](https://github.com/ublue-os/aurora/discussions/3210) {#discussion}
