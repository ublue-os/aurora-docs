---
title: Stargazer (6) 7 - Point d'étape Aurora de juin 2026
description: Point d'étape Aurora de juin 2026
slug: june26-update
authors:
  - inffy
  - renner0e
---

Bonjour Stargazers,

L'année avance et nous sommes déjà à mi-parcours de 2026. Beaucoup de choses se sont passées dans les coulisses ; c'est donc le moment idéal pour vous donner un point d'étape sur ce que nous avons réalisé et sur ce qui arrive.

## KDE Plasma 6.7 est disponible {#kde-plasma-67-released}

KDE a [publié Plasma 6.7](https://kde.org/announcements/plasma/6/6.7.0/), et il est déjà disponible sur tous nos flux.

Nous sommes très impatients de voir la fonctionnalité d'espaces de travail par écran et le sélecteur de mode sombre.

## Retrait de stable-daily et flux testing {#stable-daily-retirement-and-testing-streams}

Comme nous l'avons [annoncé](/fr/blog/retiring-stable-daily) il y a quelques semaines, nous avons retiré l'option de flux `stable-daily` de nos images. Cela allège notre charge de maintenance et nous permet de mettre en œuvre plus facilement un flux `testing` séparé.

### Le flux testing {#testing-stream}

Le nouveau flux `testing` a été mis en place il y a quelques semaines, mais comme nous voulions d'abord le tester nous-mêmes, nous n'en avons pas vraiment parlé jusqu'à présent.

Voici un aperçu de nos flux actuels :

| Fonctionnalité                    | Stable             | Latest                           | Testing                          |
| --------------------------------- | ------------------ | -------------------------------- | -------------------------------- |
| **Utilisateurs visés**            | Production         | Utilisateurs avancés             | Passionnés et testeurs           |
| **Mises à jour système**          | Hebdomadaires      | Quotidiennes / au fil des builds | Quotidiennes / au fil des builds |
| **Mises à jour des applications** | Deux fois par jour | Deux fois par jour               | Deux fois par jour               |
| **Noyau**                         | Gated              | Non gated                        | Non gated                        |

Notre [documentation](/fr/guides/release-streams) a été mise à jour pour refléter ces changements et fournir des informations plus générales sur chaque flux.

Si vous souhaitez savoir comment cela fonctionne en coulisses, consultez [ce document](https://github.com/ublue-os/aurora/blob/5ce45617833279b2e8c3a510af34dab99d2c6abe/CONTRIBUTING.md).

Exécuter les builds testing est un excellent moyen de nous aider à trouver les problèmes avant qu'ils n'atteignent nos images `stable`. Nous ne recommandons pas de les utiliser sur des systèmes de production critiques, mais si vous avez un ordinateur portable ou de bureau disponible, c'est une excellente façon de nous aider (merci !).

En pratique, cela signifie que le flux `latest` en particulier est désormais mieux testé et, si vous étiez déjà à l'aise avec les images quotidiennes, les branches testing ne devraient pas vous déranger non plus, car elles constituaient de fait notre terrain de test. Même si elles ne portaient pas la redoutable étiquette « testing ».

Vous pouvez utiliser notre outil `ujust rebase-helper`, qui propose une option pour sélectionner le flux `testing`, ou basculer manuellement à l'aide des commandes ci-dessous :

```bash
sudo bootc switch --enforce-container-sigpolicy ghcr.io/ublue-os/aurora:testing
sudo bootc switch --enforce-container-sigpolicy ghcr.io/ublue-os/aurora-dx:testing
sudo bootc switch --enforce-container-sigpolicy ghcr.io/ublue-os/aurora-nvidia-open:testing
sudo bootc switch --enforce-container-sigpolicy ghcr.io/ublue-os/aurora-dx-nvidia-open:testing
```

## Nouveau rechunker (encore) {#new-rechunker-again}

Auparavant, nous utilisions `hhd-rechunker` pour gérer le rechunking de nos images afin de réduire la taille des mises à jour (comme le faisaient Bazzite et Bluefin), et ce pendant une bonne partie de l'histoire du projet. [Depuis le printemps](/fr/blog/aurora-spring26-update), nous utilisons le rechunker intégré de `rpm-ostree`.

Nous avons désormais mis en place un rechunker plus récent et plus prometteur, appelé [chunkah](https://github.com/coreos/chunkah).

Chunkah est activement maintenu, et son algorithme semble fournir un plan de couches plus stable. Il en résulte des téléchargements plus petits pour les mises à jour hebdomadaires par rapport à `rpm-ostree`. Vous ne remarquerez probablement pas de différence majeure si vous êtes sur des builds quotidiens comme `latest` ou `testing`, mais pour les utilisateurs de nos builds hebdomadaires, la taille des mises à jour devrait être un peu plus réduite.

Ce changement ne se trouve pour l'instant que dans notre flux testing, mais nous comptons le rendre disponible sur les autres flux dans les semaines à venir.

Si vous maintenez une image personnalisée avec [image-template](https://github.com/ublue-os/image-template/), alors vous devriez aussi surveiller ce point de près. image-template a également connu quelques [changements majeurs](https://github.com/ublue-os/image-template/commit/7f9dd326ec891735fa8e7c482ae88ac178f89219), qui facilitent l'itération locale et l'implémentation vous-même de l'un ou l'autre des rechunkers mentionnés. Bluebuild [travaille aussi activement à l'implémentation de Chunkah](https://github.com/blue-build/cli/pull/790) si vous utilisez leur modèle.

## Changements à venir {#upcoming-changes}

### Retrait de ZFS à l'automne 2026 {#zfs-removal-in-fall-2026}

Comme nous l'avions [précédemment](/fr/blog/aurora44-beta#important-notice-related-to-fedora-45) indiqué, ZFS sera retiré des images lorsque Fedora 45 sera publiée à l'automne (actuellement prévue pour le mardi 2026-10-20).

Ce n'était pas une décision facile, mais nous y sommes arrivés en raison de problèmes de cadence de publication : à plusieurs reprises, nous avons été contraints de retarder la sortie de nos images stables. Le noyau de Fedora avance de manière agressive : dès qu'une nouvelle version du noyau sort, elle nécessite une prise en charge correspondante de la part de ZFS, ce qui prend souvent du temps à rattraper.

Voir l'[issue GitHub](https://github.com/ublue-os/aurora/issues/1765).

C'est tout pour aujourd'hui.

Bel été à tous, Stargazers !

## [Discussion](https://github.com/ublue-os/aurora/discussions/2413) {#discussion}
