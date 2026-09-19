---
title: Configuration requise pour Aurora
description: Configuration requise pour utiliser Aurora confortablement
---

Utiliser Aurora sur votre ordinateur ne demande rien de particulier, mais vous devez connaître quelques exigences matérielles. Outre la nécessité absolue d'un processeur 64 bits (AMD/Intel), votre ordinateur Aurora doit disposer au minimum de la configuration suivante :

- Architecture : x86_64
- Micrologiciel : UEFI (le démarrage CSM/Legacy ne fonctionne pas)
- Processeur (CPU) : quatre cœurs à 2 GHz ou mieux
- Mémoire système (RAM) : 4 Go (8 Go ou plus recommandés)
- Carte graphique : un GPU moderne compatible avec Vulkan 1.3 ou une version ultérieure
  - Pour les utilisateurs de **Nvidia** : un GPU RTX 16XX/20XX ou plus récent est requis. Aucune image n'est proposée pour les anciens GPU Nvidia. Si vous possédez un ancien GPU Nvidia, vous pouvez essayer les éditions sans Nvidia afin d'utiliser le pilote libre nouveau. Si vous avez besoin de la prise en charge d'anciennes cartes Nvidia, notamment Pascal et Maxwell, veuillez basculer vers Bazzite ou le réinstaller.
- Stockage : un SSD avec au moins 40 Go d'espace libre, afin de garder une marge pour les mises à jour actuelles et futures
  - Aurora peut fonctionner sur un disque dur mécanique, mais les mises à jour et les autres opérations sollicitant fortement les entrées-sorties réduiront considérablement les performances.

> **Remarque** : les anciens GPU intégrés Intel, comme le HD 4600 (Haswell, 2013), ne prennent pas entièrement en charge Vulkan 1.3 ; les applications GTK4 ne s'afficheront donc pas correctement. Le contournement ci-dessous n'est toutefois explicitement pas pris en charge par l'équipe Aurora. Consultez cet [article des développeurs de GTK](https://blog.gtk.org/2024/01/28/new-renderers-for-gtk/) pour en savoir plus.

```
sudo flatpak override --system --env=GSK_RENDERER=gl
```
