---
title: Changements en coulisses - prise en charge de Flatpak dans Brew et autres nouveautés
description: Consolidation de nos constructions d’images
slug: consolidation
authors: inffy
---

Voici un rapide point sur ces dernières semaines. Nous avons continué à simplifier notre chaîne de construction et, aujourd’hui, les principaux chantiers sont presque terminés.

Nos Coneheads ont toujours eu un lien avec les dinosaures : nous avons donc travaillé avec l’équipe de Bluefin sur la plupart de ces sujets.

<!-- truncate -->

## Prise en charge de Flatpak dans les Brewfiles {#flatpak-support-in-brewfiles}

Je ne vais pas tout détailler ici : Jorge a publié un excellent article sur le [blog de Bluefin](https://docs.projectbluefin.io/blog/flatpak-support-in-brewfiles), qui présente certaines nouveautés disponibles dans Bluefin depuis quelques semaines.

La prise en charge de Flatpak dans les Brewfiles est arrivée ! Vous pouvez désormais gérer vos applications Flatpak aux côtés de vos formules Homebrew, de vos casks et de vos autres dépendances dans un seul Brewfile.

## Partager pour mieux avancer - mutualisation de ujust et Brew {#sharing-is-caring---consolidating-ujust-brew}

Comme les fonctionnalités d’Aurora et de Bluefin sont presque identiques, il est logique de mutualiser certaines parties de nos images. Il n’y a aucune raison de faire deux fois la même chose dans les deux projets.

Nos recettes ujust, Homebrew et nos créations graphiques ont donc été déplacés dans un nouveau [dépôt](https://github.com/get-aurora-dev/common). Ces changements arriveront sur le canal stable la semaine prochaine (`stable-daily` et `latest` en bénéficient déjà aujourd’hui). Bluefin a fait de même et possède son propre dépôt [ici](https://github.com/projectbluefin/common).

L’objectif est de rendre nos recettes ujust, nos fichiers Brew et les créations graphiques du projet beaucoup plus faciles à gérer. Nous n’avons désormais plus à entretenir une « copie » des recettes ujust dans nos propres dépôts : nous pouvons simplifier tout cela et les récupérer directement depuis Bluefin.

Toutes les créations graphiques des deux projets se trouvent maintenant dans le [dépôt artwork](https://github.com/ublue-os/artwork/). Vous trouverez plus d’informations et les instructions d’installation [ici](https://docs.projectbluefin.io/blog/huntress-holiday-wallpapers).

Il en va de même pour Homebrew : les Brewfiles communs que nous utilisons sont maintenus dans le dépôt Bluefin, et nous les récupérons à cet endroit. Nous disposons ainsi d’un seul emplacement partagé pour les maintenir, sans avoir à les recopier dans nos propres fichiers.

## Installation simplifiée de Homebrew dans les images personnalisées {#easier-homebrew-installation-for-custom-images}

Nous avons créé un nouveau dépôt pour faciliter considérablement l’ajout de Homebrew à vos images bootc personnalisées. Le dépôt [@projectbluefin/brew](https://github.com/projectbluefin/brew) fournit une image de conteneur OCI prête à l’emploi qui regroupe tout le nécessaire pour ajouter Homebrew à vos systèmes personnalisés basés sur des images. C’est une nouvelle étape d’un long travail visant à mieux intégrer Homebrew à nos systèmes Linux. Au lieu d’installer manuellement Homebrew, de configurer les services et de gérer l’intégration au shell, vous pouvez désormais tout inclure avec une seule ligne dans votre Containerfile.

```dockerfile
COPY --from=ghcr.io/projectbluefin/brew:latest /system_files /
```

Au premier démarrage, `brew-setup.service` extrait automatiquement Homebrew dans `/var/home/linuxbrew/.linuxbrew`, configure les permissions appropriées et le rend prêt à l’emploi. L’image inclut également des minuteurs pour les mises à jour automatiques de Homebrew et de ses paquets, afin que votre installation reste à jour.

Cela élimine une grande partie des opérations manuelles nécessaires dans votre modèle pour disposer de l’ensemble complet : c’est maintenant beaucoup plus simple et fiable pour tout le monde. Une fois le travail terminé, le conteneur sera reconstruit après chaque publication de Homebrew, pour nous maintenir à jour et en sécurité !

Consultez le dépôt [github.com/projectbluefin/brew](https://github.com/projectbluefin/brew) pour plus d’informations et d’exemples.

## Autres nouvelles {#other-stuff}

Les mises à jour se poursuivent, et nous continuerons à travailler sur ces sujets dans les semaines à venir.

Nous aurons quelque chose de « plus important » à annoncer un peu plus tard, peut-être dès la semaine prochaine si tout va bien, mais cela reste encore un secret ;)

Bonnes fêtes et à bientôt pour le prochain point d’actualité !
