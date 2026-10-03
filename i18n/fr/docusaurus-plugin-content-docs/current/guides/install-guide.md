---
title: Guide d'installation
description: Installer Aurora sur votre ordinateur de bureau ou portable.
---

## Téléchargement et écriture de l'image {#downloading--flashing}

Téléchargez l'ISO à l'aide du sélecteur de téléchargement du [site web](https://getaurora.dev).

Écrivez l'ISO sur votre support avec l'un de ces outils :

- [Fedora Media Writer](https://fedoraproject.org/workstation/download)
- [Rufus](https://rufus.ie/en/)
- [Etcher](https://etcher.balena.io/)

## Démarrage du programme d'installation d'Aurora {#booting-auroras-installer}

**Remarque** : le programme d'installation actuel pourrait [changer](https://github.com/ublue-os/titanoboa) prochainement et cette documentation pourrait devenir obsolète.

Démarrez sur l'ISO au lancement de votre appareil. Suivez les instructions du programme d'installation. Attention : le compte administrateur « Root Account » doit rester **désactivé**.

### Informations sur le démarrage sécurisé {#secure-boot-information}

Si le démarrage sécurisé est activé sur votre matériel, enregistrez la clé de démarrage sécurisé d'Universal Blue pendant l'installation en sélectionnant « Enroll MOK » lorsque cela vous est proposé.

**Le mot de passe du démarrage sécurisé est** : `universalblue`.

Sinon, cliquez sur « Continue Boot » si votre matériel ne prend pas en charge le démarrage sécurisé ou si celui-ci est désactivé.

## Remarque sur le double démarrage avec Windows {#note-about-dual-booting-windows}

Le double démarrage n'est généralement pas pris en charge par Fedora Atomic Desktop. La méthode recommandée consiste à installer Windows sur son propre disque ou à utiliser Windows-to-Go, créé avec Rufus, sur un disque externe dédié à Windows.

La commande suivante crée une entrée dans votre lanceur d'applications qui utilise [efibootmgr](https://github.com/rhboot/efibootmgr) pour démarrer directement sous Windows depuis Aurora.

```
ujust configure-boot-to-windows
```

Le double démarrage sur un seul disque n'est **PAS** pris en charge.
