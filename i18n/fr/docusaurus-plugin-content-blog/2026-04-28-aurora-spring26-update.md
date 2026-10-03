---
title: "Mise à jour de printemps 2026 d'Aurora - Le flux latest est désormais basé sur Fedora 44"
slug: aurora-spring26-update
description: Mise à jour de printemps 2026 d'Aurora !
authors:
  - inffy
  - renner0e
  - niklas
  - ledif
---

Bonjour Stargazers,

[Fedora 44 sort aujourd'hui](https://fedoramagazine.org/announcing-fedora-linux-44/) (mardi 28) et nous avons activé les builds d'Aurora basés sur Fedora 44 sur notre flux `latest`, destiné aux passionnés qui veulent le meilleur et le plus récent.

Les utilisateurs déjà sur le flux `latest` seront automatiquement mis à jour vers la nouvelle base, ou vous pouvez lancer `ujust update` si vous ne voulez pas attendre :).

Les utilisateurs actuels de `:beta` peuvent souhaiter rebaser vers `:latest` dès maintenant, car nous désactiverons les builds bêta dans les semaines à venir.

<!-- truncate -->

## Changements dans Aurora {#changes-in-aurora}

Voici un bref résumé des changements qui accompagnent Aurora, tiré de notre [article de blog sur la bêta](/fr/blog/aurora44-beta).

### SDDM remplacé par Plasma Login Manager {#sddm-replaced-with-plasma-login-manager}

Avec les images basées sur Fedora 44, nous abandonnerons également SDDM comme gestionnaire de session au profit du Plasma Login Manager natif, introduit avec Plasma 6.6. Vous ne remarquerez pas de différence immédiate, car ils sont pour l'instant quasiment identiques.

### Plasma Setup {#plasma-setup}

Cette version introduit également le nouvel assistant de « premier démarrage » appelé Plasma setup. Cela ne concernera que les nouvelles installations, et seulement après que nous aurons commencé à construire de nouvelles ISO stables (une fois que `stable` sera passé à F44). Cela remplacera la partie création d'utilisateur de l'installateur Anaconda et la déplacera au premier démarrage, comme GNOME le fait depuis des années.

### Konsole devient le terminal par défaut {#konsole-becomes-the-default}

Nous avons remplacé notre terminal par défaut, Ptyxis, par Konsole. Beaucoup s'étaient déjà demandé pourquoi nous utilisions par défaut une application de terminal basée sur GTK ; la raison principale tenait à l'intégration distrobox/conteneurs de Ptyxis. Konsole dispose désormais enfin de cette prise en charge des conteneurs, ce qui rend le changement évident. Si vous souhaitez continuer à utiliser Ptyxis, vous pouvez l'installer depuis Bazaar.

### Distroshelf remplacé par Kontainer {#distroshelf-switched-to-kontainer}

[Distroshelf](https://flathub.org/en/apps/com.ranfdev.DistroShelf) sera remplacé par [Kontainer](https://flathub.org/en/apps/io.github.DenysMb.Kontainer) pour les nouvelles installations.

### Starship {#starship}

Starship sera également retiré de l'image, car il s'installe très facilement depuis brew. Cela s'inscrit dans notre objectif de long terme consistant à alléger les images en supprimant les paquets que l'on trouve facilement dans Homebrew ou Flathub.

```
brew install starship
```

### AppImages {#appimages}

Un changement à venir avec Fedora 44 est le retrait de [Fuse2](https://fedoraproject.org/wiki/Changes/AtomicDesktopDropFuse2). Cela signifie que de nombreux AppImages plus anciens ne fonctionneront plus. Il existe un format plus récent pour les AppImages, mais malheureusement beaucoup de paquets n'y sont pas (encore) passés.

### Fw-fanctrl {#fw-fanctrl}

L'outil en ligne de commande `fw-fanctrl`, spécifique à Framework, est présent dans nos images depuis un certain temps. Malheureusement, le paquet est cassé depuis un certain temps et il n'est pas vraiment nécessaire (beaucoup de nos utilisateurs n'ont probablement jamais touché aux profils de ventilation), il sera donc lui aussi retiré. De plus, il a également causé de petits problèmes sur d'autres ordinateurs portables.

### Module noyau et démon Openrazer {#openrazer-kernel-module-and-daemon}

OpenRazer (module noyau et démon) est un autre paquet que nous incluons depuis assez longtemps. Mais comme nous souhaitons garder des images propres et maintenables, nous avons décidé de retirer ces outils d'Aurora. L'outil officiel (actuellement réservé à Windows), Synapse, semble évoluer vers une solution basée sur le navigateur web, ce qui profitera aussi aux utilisateurs de Linux. Cette solution est [actuellement en bêta](https://www.razer.com/newsroom/product-news/synapse-web-beta/) et prend déjà en charge certains appareils Razer.

### Prise en charge d'Asus dans homebrew {#asus-support-in-homebrew}

Une nouveauté, sans lien direct avec la sortie de Fedora 44, est l'inclusion de correctifs jusqu'ici hors arbre apportant la prise en charge des ordinateurs portables ASUS ROG (et de quelques autres). La plupart de ces correctifs font désormais partie du noyau, et il ne vous reste qu'à installer [`asusctl`](https://github.com/NeroReflex/asusctl).

Nous disposons d'un nouveau cask homebrew pour `asusctl`, grâce au travail de Daegalus. Il est désormais disponible dans le [homebrew-tap d'ublue-os](https://github.com/ublue-os/homebrew-tap). Avec lui, vous pouvez contrôler l'éclairage du clavier, etc. Essayez-le si vous possédez ces ordinateurs portables Asus (malheureusement ce n'est pas notre cas) et dites-nous ce que cela donne.

### Améliorations générales du système de build {#general-build-system-enhancements}

Nous avons légèrement amélioré notre pipeline de build : mise en place de caches de paquets et d'autres changements qui ont rendu les builds locaux itératifs plus rapides, un nouveau rechunker qui réduit encore la taille des mises à jour, ainsi que la compression zstd.

### Nouvelle image de base {#new-base-image}

Au début de l'année, nous avons changé notre image de base. Auparavant, nous utilisions nos propres images [https://github.com/ublue-os/main](https://github.com/ublue-os/main). Nous avons jugé plus simple de récupérer l'image de base directement depuis la source amont, maintenue par [Timothée Ravier](https://github.com/travier) sur la [GitLab de Fedora](https://gitlab.com/fedora/ostree/ci-test). Pour l'instant, ces images ne sont pas « officielles Fedora », mais elles nous rendent bien service en attendant que nous ayons des images officielles. Grand merci à Timothée et aux innombrables autres contributeurs de Fedora ! Nous ne serions rien sans eux 🙂♥️.

### SBOM et journaux des versions {#sboms--release-changelogs}

Nous avons intégré les SBOM (Software Bill of Materials) et l'[attestation de build](https://docs.github.com/en/actions/concepts/security/artifact-attestations) à notre pipeline de build. Cela faisait partie d'un effort plus vaste visant à nous éloigner de l'implémentation legacy-rechunk, qui gérait nos [journaux des versions GitHub](https://github.com/ublue-os/aurora/releases).

## Et Aurora:stable ? {#what-about-aurora}

Comme précédemment, le flux `stable` suit une cadence « gated » issue de [CoreOS](https://fedoraproject.org/coreos/). Leur calendrier de publication pour les images F44 se situe actuellement dans quelques semaines (généralement deux). Ensuite, nous rendrons également les builds F44 disponibles sur `stable` et `stable-daily`. Bien entendu, nous publierons une nouvelle annonce lorsque ce sera prêt.

## Je veux F44 tout de suite {#i-want-f44-now}

Si vous êtes actuellement sur `stable` ou `stable-daily`, vous pouvez facilement rebaser vers le flux `latest` pour passer à Aurora 44, puis rebaser en arrière une fois que `stable` sera publié. C'est vraiment solide, promis, et nous l'avons utilisé nous-mêmes pendant toute la période bêta.

Vous pouvez utiliser l'outil `ujust rebase-helper` ou le menu Préférences d'Aurora dans les paramètres. Choisissez votre image préférée et sélectionnez le flux `latest` lorsque l'outil vous le demande.

![Préférences d'Aurora](/img/blog/auroraprefs.png)

## Changements à venir à l'automne 2026 {#upcoming-changes-in-fall-2026}

Comme nous l'avons [mentionné précédemment](/fr/blog/aurora44-beta#important-notice-related-to-fedora-45), à l'automne, une fois Fedora 45 publiée, nous retirerons la prise en charge de ZFS d'Aurora. Vous trouverez plus d'informations sur ce changement dans l'article lié.

## Un regard vers le futur {#a-look-into-the-future}

Montons à présent dans la machine à remonter le temps pour jeter un œil au futur, un futur où nous n'aurons plus besoin d'une image Developer Experience séparée. [JumpyVi](https://github.com/jumpyvi) travaille ici sur un [nouveau type de couche](https://github.com/projectbluefin/common/pull/288), qui apporte l'expérience développeur à l'image de base via homebrew, des quadlets et autres astuces malines. Intégrer la couche DX à l'image de base réduit de moitié la charge de maintenance, d'image et de build pour tout le monde, et vous permet de démarrer plus vite lors de la configuration de votre station de développement. C'est actuellement à un stade très précoce et cela ne doit pas être utilisé dans un système de production, mais c'est tout de même sympa. L'avenir s'annonce radieux !

À la prochaine fois, Stargazers !

_L'équipe Aurora_

_PS : N'oubliez pas de contempler le ciel nocturne !_

## [Discussion](https://github.com/ublue-os/aurora/discussions/2127) {#discussion}
