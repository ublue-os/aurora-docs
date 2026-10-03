---
title: Installation alternative
description: Si vous rencontrez des problèmes d'installation depuis l'ISO, vous pouvez essayer de basculer depuis une autre image.
---

# Installation alternative

## Instructions générales {#general-instructions}

L'assistance pour ce guide est fournie dans la mesure du possible : attendez-vous à quelques petits désagréments !

Si vous rencontrez des problèmes d'installation avec l'ISO d'Aurora et souhaitez essayer de basculer depuis une installation de Fedora Kinoite (**la migration depuis Silverblue n'est PAS prise en charge !**), ce guide est pour vous. Cette migration vous offrira presque la même expérience qu'une installation neuve depuis notre ISO, mais vous devez suivre quelques étapes.

1. Déterminez le nom de votre image. Sélectionnez la version d'Aurora souhaitée dans l'écran de téléchargement des ISO sur <a target="_blank" href="https://getaurora.dev">getaurora.dev</a> et notez son nom. Vous en aurez besoin aux étapes suivantes.

2. Téléchargez Fedora Kinoite (**<a target="_blank" href="https://fedoraproject.org/atomic-desktops/kinoite/">ici</a>**) et installez-le si vous ne disposez pas déjà d'une installation. La procédure est très similaire à celle d'Aurora. **_Ne créez pas de compte root._**

3. Une fois votre installation de Kinoite, nouvelle ou existante, démarrée, exécutez la commande suivante en remplaçant la valeur de substitution par le nom de l'image noté précédemment, puis redémarrez :

```
sudo bootc switch ghcr.io/ublue-os/<imagename>
```

_Par exemple : `sudo bootc switch ghcr.io/ublue-os/aurora-dx:stable`_

4. Après avoir basculé vers Aurora, vous devez effectuer une seconde migration. Cette fois, choisissez une version signée de l'image afin de disposer d'une copie vérifiée et sécurisée du système d'exploitation.

```
sudo bootc switch --enforce-container-sigpolicy ghcr.io/ublue-os/<imagename>
```

_Par exemple : `sudo bootc switch --enforce-container-sigpolicy ghcr.io/ublue-os/aurora-dx:stable`_

5. Maintenant que vous êtes sur Aurora, ajoutez Flathub :

```
flatpak remote-add --if-not-exists --system flathub https://flathub.org/repo/flathub.flatpakrepo
```

6. Téléchargez l'application Warehouse avec `flatpak install flathub io.github.flattool.Warehouse`, cliquez sur Paquets -> Filtrer les paquets -> Tout sélectionner, puis désinstallez-les. Rendez-vous ensuite dans l'onglet des dépôts distants et supprimez le dépôt Flatpak Fedora. Cette opération ne supprimera aucune donnée d'application.

7. Une fois ces opérations terminées, vous pouvez souffler un peu. Il reste une dernière étape : installez notre sélection de Flatpaks pour profiter au mieux de votre système. Exécutez la commande suivante dans votre terminal :

```
ujust install-system-flatpaks
```

## Basculer depuis une installation existante de Fedora Kinoite {#rebasing-from-an-existing-fedora-kinoite-installation}

Vous souhaiterez peut-être commencer par conserver votre déploiement actuel de façon permanente :

```
sudo ostree admin pin 0
```

La commande suivante supprimera toutes les modifications effectuées avec rpm-ostree, comme les paquets superposés et les paramètres du noyau, afin d'assurer une migration réussie vers Aurora.

```
rpm-ostree reset
```

Vous pouvez ensuite reprendre directement à l'étape 3 ci-dessus.

## Basculer depuis une autre image de conteneur amorçable, par exemple Bazzite {#rebasing-from-another-bootable-container-image-eg-bazzite}

Si vous souhaitez basculer d'une installation de Bazzite-KDE vers Aurora, vous pouvez simplement sauter les étapes 1 à 3 et utiliser la commande correspondant à l'image souhaitée à l'étape 4 du guide d'installation ci-dessus.

**Remarque** : Bazzite [bloque](https://github.com/ublue-os/bazzite/blob/d67570f37329e20d26869648cfa759c10bfc667f/system_files/desktop/shared/usr/share/ublue-os/flatpak-blocklist) des applications comme Steam en Flatpak. Vous devrez annuler ce blocage avec `flatpak remote-modify --system --no-filter flathub` sur Aurora.

**Remarque :** ne basculez pas d'une image basée sur Gnome vers Aurora, ni dans le sens inverse !
