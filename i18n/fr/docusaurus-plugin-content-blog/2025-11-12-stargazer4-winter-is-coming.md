---
title: Stargazer 4 - L’hiver arrive (et F43 passe en stable)
description: Images stables basées sur F43
slug: stargazer-4
authors: inffy
---

![Bannière de Stargazer 4](https://github.com/user-attachments/assets/f36f5e8e-2b5d-4ef1-bb97-97da0d62e185)

Quelques semaines se sont écoulées depuis notre [dernier point d’actualité](https://universal-blue.discourse.group/t/stargazer-3-aurora-october-update/10911/). Et l’hiver arrive bel et bien, du moins ici, dans le Nord :smile:

<!-- truncate -->

## Les images basées sur Fedora 43 sont disponibles {#fedora-43-based-images-are-now-available}

`Aurora-stable` a été mis à jour aujourd’hui et repose désormais sur Fedora 43. Malheureusement, cette mise à jour a pris un peu plus de temps que nous l’aurions souhaité : nous avons dû attendre que ZFS prenne en charge la nouvelle série 6.17 du noyau.

Fedora 43 est une mise à jour « mineure » qui n’apporte pas en elle-même de grands changements, mais nous avons tout de même travaillé sur les coulisses d’Aurora. Les modifications sont pour l’essentiel peu intrusives, puisque KDE Plasma 6.5 est déjà là depuis un moment ; elles visent surtout à alléger nos sources et à les rendre plus faciles à gérer.

Nous avons aussi un nouveau fond d’écran automnal.
![Oui, nous sommes très drôles de présenter un fond d’écran automnal maintenant](https://i.imgur.com/WY1eoLx.jpeg)

## Réorganisation de la chaîne de construction {#refactoring-the-build-pipeline}

L’essentiel du travail de ce cycle a porté sur notre chaîne de construction. Nous avons fait du ménage dans la manière dont nous construisons nos images. Le plus gros est terminé, même s’il reste quelques petites choses à faire. Tout cela se passe surtout en coulisses et ne sera donc pas vraiment visible pour les utilisateurs.

## Changements concernant Bazaar {#bazaar-changes}

Comme nous l’avons mentionné dans notre [dernier point d’actualité](https://universal-blue.discourse.group/t/stargazer-3-aurora-october-update/10911/), l’un des changements les plus importants concerne Bazaar, la boutique d’applications Flathub.

Nous sommes désormais entièrement passés à la version Flatpak de Bazaar. Comme elle est maintenant indépendante de l’image, nous bénéficions de mises à jour plus fréquentes. Il est également plus facile d’aider le projet en amont à corriger les problèmes pour tout le monde.

Cela entraîne quelques changements dans l’intégration de Bazaar au système. Au démarrage, Bazaar sera téléchargé automatiquement ; il ne pèse que quelques Mo. Selon les applications installées, le nouvel environnement d’exécution Flatpak GNOME 49 pourra aussi être téléchargé. Celui-ci est un peu plus volumineux (500 Mo). Pendant le téléchargement, vous remarquerez peut-être l’absence de l’icône dans le panneau, à l’emplacement habituel de Bazaar. Ne vous inquiétez pas : une fois le téléchargement terminé, elle réapparaîtra et Bazaar sera prêt à l’emploi.

Nous avons testé ce changement de manière approfondie sur notre canal bêta, en coopération avec [Bluefin](https://projectbluefin.io).

![Section développement de Bazaar](https://i.imgur.com/Cr9pbR6.png)

Si vous constatez malgré tout un problème, n’hésitez pas à nous contacter. Merci !

## Changements d’applications {#application-changes}

Nous avons remplacé [InputLeap](https://flathub.org/en/apps/io.github.input_leap.input-leap) par [Deskflow](https://flathub.org/en/apps/org.deskflow.deskflow), dont le développement est plus actif et qui convient donc mieux à notre sélection d’applications par défaut.

## Adieu à nvidia-legacy et HWE {#goodbye-to-nvidia-legacy-and-hwe}

À mesure que le projet progresse et grandit, certains éléments doivent être abandonnés. Comme annoncé [plus tôt cette année](https://universal-blue.discourse.group/t/aurora-stable-is-now-based-on-fedora-42/8463#p-22443-deprecation-notices-5), les anciennes images « nvidia-legacy » (`aurora-nvidia*`) et toutes les images HWE (`aurora-hwe*`) sont désormais abandonnées et ne recevront plus de mises à jour.

Selon votre matériel, nous vous recommandons de basculer vers les images -nvidia-open (pour les utilisateurs actuels de Nvidia : cartes Turing et plus récentes uniquement) ou vers les images de base (pour les utilisateurs de HWE).

Nous disposerons d’un nouvel outil, [eol-rebaser](https://github.com/ledif/eol-rebaser), qui fera automatiquement passer les utilisateurs d’une image en fin de vie à une image prise en charge.

L’outil sera livré dans une prochaine mise à jour, mais il sera configuré pour effectuer cette migration automatique un mois après la fin de vie des images. Cela laissera suffisamment de temps aux utilisateurs pour intervenir manuellement s’ils préfèrent passer à un autre système d’exploitation (peut-être Bazzite !).

### vfio et kvmfr {#vfio--kvmfr}

Nous avons également retiré le module kvmfr et les scripts ujust pour vfio. Ils ont été supprimés de notre dépôt akmods lorsque Bazzite a commencé à les construire sur sa propre infrastructure.
Ils sont aussi actuellement en sommeil, et Hikari travaille sur une nouvelle version. Ils pourraient donc revenir si nous les jugeons importants, mais nous ne promettons rien.

Si vous en avez besoin, nous vous recommandons une image personnalisée qui les inclut, ou une migration vers Bazzite, qui continuera à les prendre en charge.

Un membre de la communauté a créé [cette image personnalisée](https://github.com/dmhuisma/aurora-dmhuisma) pour son propre usage, afin de rétablir ces fonctionnalités. Si cela vous intéresse, vous pouvez prendre contact avec cette personne.

## Changements concernant les polices {#font-changes}

Nous avons également modifié la gestion des polices. L’image contenait auparavant quelques paquets de polices, que nous avons maintenant retirés. Nous vous recommandons désormais d’obtenir vos polices via [Brew](https://formulae.brew.sh/cask-font).

Vous pouvez utiliser notre recette pour obtenir les polices : `ujust aurora-fonts`

## ISO autonomes avec la nouvelle interface web {#live-isos-with-the-new-webui}

Avec Fedora 43, nous pouvons enfin construire notre ISO d’installation autonome avec la nouvelle interface web d’Anaconda et disposer d’un programme d’installation web fonctionnel dans KDE Plasma. Auparavant, des problèmes empêchaient de remplacer la disposition de clavier américaine, ce qui entraînait des difficultés avec les mots de passe LUKS pour les utilisateurs d’autres dispositions.

Ces nouvelles images ISO devraient accélérer l’installation, tout en offrant une interface plus agréable. Et elles devraient aussi être un peu moins volumineuses.

Téléchargez l’ISO avec l’interface web :

[Intel/AMD](https://dl.getaurora.dev/aurora-stable-webui-x86_64.iso)

[Nvidia-open](https://dl.getaurora.dev/aurora-nvidia-open-stable-webui-x86_64.iso)

## Croissance {#growth}

![Croissance d’Aurora](https://raw.githubusercontent.com/ublue-os/countme/refs/heads/main/growth_aurora.svg)

## Pour conclure {#closing-words}

Nous espérons que vous apprécierez vos nouvelles images basées sur F43. Si vous rencontrez des bogues ou des problèmes, signalez-les toujours dans notre dépôt GitHub : https://github.com/ublue-os/aurora/issues

Peu importe leur importance. Si vous pensez qu’il y a un problème, dites-le-nous. De même, si vous avez une bonne idée de fonctionnalité ou d’amélioration d’une fonctionnalité existante, signalez-la également à cet endroit.

## Soutenez Aurora en faisant un don aux personnes dont nous dépendons {#support-aurora-by-donating-to-people-we-depend-on}

[@chandeleer](https://ko-fi.com/chandeleer) et [@kolunmi](https://ko-fi.com/kolunmi) ont accompli un travail remarquable sur les fonds d’écran et Bazaar ces derniers mois.

Pensez à leur faire un don, ainsi qu’à tous les [autres projets](https://docs.getaurora.dev/fr/project-docs/credits/#upstream-projects-included-in-aurora), bien sûr !
