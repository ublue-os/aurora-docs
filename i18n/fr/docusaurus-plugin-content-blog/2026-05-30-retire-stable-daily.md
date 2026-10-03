---
title: "Retrait du flux stable-daily"
slug: retiring-stable-daily
description: Retrait des images stable-daily
authors:
  - inffy
  - renner0e
---

Bonjour Stargazers,

Nous avons une petite annonce à faire concernant nos flux d'images stable-daily.

Aujourd'hui, nous retirons ce flux et nous ne le construirons plus à l'avenir. Le tag stable-daily sera redirigé vers le flux stable, ce qui signifie des mises à jour système hebdomadaires.

<!-- truncate -->

## Mais pourquoi ? {#but-why}

Nous l'avions en réalité brièvement mentionné dans notre [article de bilan 2025](/fr/blog/aurora-2025). Lorsque nous avons commencé à étudier les moyens de mettre en œuvre la future branche testing, nous nous sommes rendu compte que la construction d'images quotidiennes représentait une charge de maintenance et créait trop de frictions avec la manière dont nous voulions que ces nouveaux flux fonctionnent.

Comme nous l'avons mentionné, un plan prévoit de passer à un processus en deux étapes pour la construction et les tests. Actuellement, nous devons tout tester sur `latest`, et comme certains utilisateurs préfèrent l'utiliser comme une version « rolling » de la base Fedora, cela peut parfois casser.

## Utilisateurs actuels de stable-daily {#current-users-of-stable-daily}

Le flux `stable-daily` pointe désormais vers `stable` : vous continuerez donc à recevoir des mises à jour, mais dorénavant elles seront basées sur des builds hebdomadaires.

Vous n'avez rien à faire ; nous recommandons toutefois aux utilisateurs de rebaser vers le flux stable à l'aide de `ujust rebase-helper`. Si vous souhaitez toujours recevoir des mises à jour quotidiennes, nous vous recommandons de rebaser vers le flux `latest` ; la différence entre `stable-daily` et `latest` est que le premier inclut ZFS et embarque un noyau Fedora CoreOS plus ancien. [Consultez notre documentation](/fr/guides/release-streams/).

## [Discussion](https://github.com/ublue-os/aurora/discussions/2279) {#discussion}
