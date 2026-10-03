---
title: Démarrer en mode secours et en mode d'urgence
description: Comment démarrer en mode secours et en mode d'urgence sur Aurora.
---

Fedora dispose déjà d'un mécanisme intégré (fourni par `systemd`) pour démarrer en mode [secours](https://docs.fedoraproject.org/en-US/fedora/latest/system-administrators-guide/kernel-module-driver-configuration/Working_with_the_GRUB_2_Boot_Loader/#sec-Booting_to_Rescue_Mode) et en mode [d'urgence](https://docs.fedoraproject.org/en-US/fedora/latest/system-administrators-guide/kernel-module-driver-configuration/Working_with_the_GRUB_2_Boot_Loader/#sec-Booting_to_Emergency_Mode).

Cependant, ces documents ont leurs limites : par défaut, Fedora (et donc les systèmes Universal Blue) ne définit pas de mot de passe `root` lors de l'installation. Ainsi, lorsque le mode d'urgence ou le mode secours est atteint, l'utilisateur voit l'erreur :

```
Cannot open access to console, the root account is locked.
```

### Nous avons amélioré la situation pour tous les dérivés d'_Universal Blue_ (dont _Bazzite_ et _Bluefin_) en nous inspirant de _Fedora CoreOS_. {#weve-improved-the-situation-for-all-universal-blue-derivatives-including-bazzite-and-bluefin-using-inspiration-from-fedora-coreos}

Désormais, lors du démarrage en mode [d'urgence](#booting-to-emergency-mode) ou [secours](#booting-to-rescue-mode) avec un compte root verrouillé, une invite plus classique s'affiche à la place :

```
Press Enter for maintenance
(or press Control-D to continue):
```

À ce stade, appuyer sur <kbd>Enter</kbd> ouvre le shell root approprié. SELinux est également actif dans ce mode (sauf s'il a été désactivé par une autre configuration), ce qui en fait un mode adapté notamment à la réinitialisation de votre mot de passe.

Vous trouverez plus de détails ci-dessous :

---

## Démarrer en mode d'urgence {#booting-to-emergency-mode}

Le mode d'urgence fournit l'environnement le plus minimal possible et vous permet de réparer votre système même lorsqu'il est impossible d'accéder au mode secours. En mode d'urgence, le système monte le système de fichiers `root` en lecture seule, ne tente pas de monter les autres systèmes de fichiers locaux, n'active pas les interfaces réseau et ne démarre que quelques services essentiels.

1. Appuyez sur <kbd>Esc</kbd> au clavier pour accéder au menu de démarrage GRUB.
   a. Si vous appuyez trop de fois sur <kbd>Esc</kbd>, vous risquez d'arriver à une invite `grub>`.
   b. Revenez au menu de démarrage en saisissant `exit`, puis en appuyant sur <kbd>Enter</kbd>
2. Sélectionnez le déploiement souhaité (la première entrée est généralement la bonne) et modifiez-le en appuyant sur <kbd>E</kbd> au clavier.
3. Descendez avec les flèches jusqu'à la ligne commençant par `linux`, puis appuyez sur <kbd>Ctrl</kbd>+<kbd>E</kbd> pour atteindre la fin de la ligne.
4. Ajoutez le mot `emergency` à la fin de la ligne.
   a. Veillez à laisser un espace entre `emergency` et le texte existant.
   b. Vous pouvez ajouter les paramètres équivalents `-b` ou `systemd.unit=emergency.target` à la place de `emergency`.
5. Appuyez sur <kbd>Ctrl</kbd>+<kbd>X</kbd> pour démarrer le système.

---

## Démarrer en mode secours {#booting-to-rescue-mode}

Le mode secours fournit un environnement mono-utilisateur pratique et vous permet de réparer votre système lorsqu'il ne parvient pas à terminer un démarrage normal. En mode secours, le système tente de monter tous les systèmes de fichiers locaux et de démarrer certains services système importants, mais il n'active pas les interfaces réseau et n'autorise pas plusieurs utilisateurs à se connecter simultanément. Dans Fedora, le mode secours équivaut au mode mono-utilisateur.

1. Appuyez sur <kbd>Esc</kbd> au clavier pour accéder au menu de démarrage GRUB.
   a. Si vous appuyez trop de fois sur <kbd>Esc</kbd>, vous risquez d'arriver à une invite `grub>`.
   b. Revenez au menu de démarrage en saisissant `exit`, puis en appuyant sur <kbd>Enter</kbd>
2. Sélectionnez le déploiement souhaité (la première entrée est généralement la bonne) et modifiez-le en appuyant sur <kbd>E</kbd> au clavier.
3. Descendez avec les flèches jusqu'à la ligne commençant par `linux`, puis appuyez sur <kbd>Ctrl</kbd>+<kbd>E</kbd> pour atteindre la fin de la ligne.
4. Ajoutez le mot `single` à la fin de la ligne.
   a. Veillez à laisser un espace entre `single` et le texte existant.
   b. Vous pouvez ajouter les paramètres équivalents `1`, `s`, `S` ou `systemd.unit=rescue.target` à la place de `single`.
5. Appuyez sur <kbd>Ctrl</kbd>+<kbd>X</kbd> pour démarrer le système.

---

## Un shell root sans mot de passe ! Comment est-ce sécurisé ? {#root-shell-with-no-password-how-can-this-be-secure}

Cette amélioration exige que l'utilisateur puisse modifier la ligne de commande du noyau. Si votre chargeur de démarrage (par exemple GRUB) est configuré avec un mot de passe empêchant les utilisateurs de modifier cette ligne de commande, le contournement du mot de passe pour un compte root verrouillé ne sera pas activé. C'est particulièrement important, car le mode `emergency` peut être atteint lorsqu'une vérification du système de fichiers échoue au démarrage, et pas seulement lorsqu'il est indiqué sur la ligne de commande du noyau.

Grâce à cette protection, cette méthode améliorée de secours et d'urgence est aussi sûre que de définir `init=/bin/bash`, etc. De plus, l'utilisateur risque moins d'endommager les étiquettes SELinux avec cette méthode.

---

Merci à [Colin Walters](https://github.com/cgwalters) et à [ Timothée Ravier](https://github.com/travier) pour [avoir inspiré cette solution](https://github.com/ublue-os/main/issues/470).
