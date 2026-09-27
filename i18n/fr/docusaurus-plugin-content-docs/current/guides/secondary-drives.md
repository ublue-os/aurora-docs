---
title: Montage automatique des disques secondaires
description: Montez automatiquement au démarrage les disques secondaires connectés à votre appareil !
---

## Avertissements préalables {#preliminary-warnings}

**Une mauvaise configuration peut entraîner une perte de données sur les disques ou rendre le système impossible à démarrer.**

Suivez ce guide **à votre propre discrétion** et veillez à lire l'ensemble des instructions concernant votre méthode afin de ne rien manquer !

## Formater un disque {#formatting-a-disk}

Cette opération effacera toutes les données présentes sur le disque.

### Remarque sur le formatage dans **KDE Partition Manager** {#note-when-formatting-in-kde-partition-manager}

Veillez à définir les permissions pour **tout le monde**.

Utilisez une interface graphique de gestion des disques comme KDE Plasma ou GNOME Disques pour formater votre disque. Nous recommandons de formater les disques secondaires en **BTRFS** ou **Ext4**. BTRFS est le système de fichiers que nous recommandons, mais Ext4 peut être préférable pour les anciens disques durs mécaniques utilisés comme disques secondaires.

### Créer un répertoire pour un disque secondaire et choisir où le monter {#creating-a-secondary-drive-directory-and-where-to-mount-drives}

Le chemin ne doit PAS être `/var/mnt` : créez plutôt un nouveau **répertoire** dans `/var/mnt` ou `/var/run/media/`.

- `/var/mnt/...` pour les disques **permanents**
- `/var/run/media/...` pour les disques **amovibles**

Il est recommandé de nommer les répertoires des disques en **minuscules**, **sans espaces**.

Vous pouvez créer un répertoire dans `/var/mnt/` en ouvrant un terminal sur l'hôte et en **y saisissant cette commande** :

```command
sudo mkdir /var/mnt/data
```

Le disque sera désormais monté dans un répertoire nommé `data`.

#### Permissions du disque {#permissions-for-the-drive}

```command
sudo chown $USER:$USER /var/mnt/data
```

Si vous prévoyez de reformater la partition, pensez à modifier le point de montage et à « Supprimer » le chemin de montage avant de reformater ! Sinon, vous devrez modifier manuellement `/etc/fstab`.

## Méthodes de montage automatique avec une interface graphique {#graphical-user-interface-gui-methods-for-auto-mounting}

Ne configurez pas le montage automatique pour ensuite démonter et formater un disque ! Cela peut perturber le logiciel avec lequel vous configurez les disques. À la place, **supprimez d'abord le montage automatique avant de formater le disque**.

## Instructions {#instructions}

1.  Ouvrez KDE Partition Manager
2.  Repérez le disque et la partition que vous souhaitez monter
3.  Faites un clic droit sur la partition et cliquez sur « Modifier le point de montage »
4.  Sélectionnez « Identifier par : UUID » (cela garantit que vous montez CETTE partition plutôt qu'une autre si les nœuds de périphériques changent pour une raison quelconque)
5.  Choisissez un chemin de montage (utilisez `/var/mnt/data` ou un chemin similaire pour les montages permanents)
6.  **Décochez toutes les cases de l'application graphique si elles sont cochées**
7.  Cliquez sur « Plus… » et ajoutez des options supplémentaires selon le système de fichiers de la partition (lisez la section « Arguments du système de fichiers »)
8.  Cliquez sur OK dans les deux fenêtres pour enregistrer les points de montage.
9.  Un message indiquera que ces actions modifieront `/etc/fstab` (cliquez sur « OK » pour continuer)
10. Montez le disque manuellement dans KDE Partition Manager et saisissez votre mot de passe sudo
11. Ouvrez le terminal pour tester les montages en exécutant la **commande** :

    `sudo systemctl daemon-reload && sudo mount -a`

12. **Si aucune erreur n'est apparue, vous devriez pouvoir redémarrer sans risque.**

Si une erreur survient, renseignez-vous sur cette erreur, annulez vos modifications et réessayez.

Ajoutez également un nom d'affichage au disque. Choisissez le nom sous lequel vous souhaitez l'identifier.

### Options supplémentaires requises selon le **système de fichiers** {#required-additional-options-depending-on-filesystem}

Utilisez les options génériques ci-dessous selon votre système de fichiers (ce sont simplement de bonnes valeurs par défaut).
Vous pouvez les copier-coller dans la boîte de dialogue « Plus… » : elles seront valides.
« Les utilisateurs peuvent monter et démonter » est un paramètre **facultatif**.

### Arguments du système de fichiers {#filesystem-arguments}

Si un disque est formaté, ne le supprimez pas de `/etc/fstab` ; l'option « nofail » est donc indispensable pour éviter des problèmes au démarrage.

#### **BTRFS** : {#btrfs}

```command
defaults,compress-force=zstd:3,noatime,lazytime,commit=120,space_cache=v2,nofail
```

#### **Ext4** : {#ext4}

```command
defaults,noatime,errors=remount-ro,nofail,rw,users,exec
```

#### **NTFS** : {#ntfs}

```command
defaults,noatime,nofail,rw,users,exec
```

### Options avancées (inutiles pour la plupart des configurations) {#advanced-options-not-required-for-most-setups}

Modifiez-les à vos risques et périls !

#### Informations sur la compression : {#information-about-compression}

**3** est un bon compromis ; les processeurs plus anciens devraient utiliser **1**.

#### Informations sur les sous-volumes : {#information-about-subvolumes}

Utilisez `subvol=name` comme option. KDE et GNOME Disques ne permettent de monter qu'un seul sous-volume via leur interface graphique. Vous pouvez monter la racine avec `subvol=/` si un sous-volume par défaut est configuré dans le système de fichiers.

## Autres méthodes pour monter automatiquement les disques secondaires {#alternative-methods-to-auto-mount-secondary-drives}

Il existe également deux méthodes en ligne de commande (CLI).

1.  Utiliser `systemd.mount`

2.  Modifier le fichier `/etc/fstab`
