---
title: Signaler des bugs
description: Comment signaler correctement des problèmes avec Aurora.
---

**Remarque** : le [**traceur de bugs de KDE**](https://bugs.kde.org/buglist.cgi?chfield=%5BBug%20creation%5D&chfieldfrom=7d&f1=product&o1=notequals&v1=Spam) contient une liste des problèmes connus de l'environnement de bureau et des applications préinstallées dans cet environnement.

## Collecte des journaux {#gathering-logs}

Faites vos signalements de manière appropriée sur le [**traceur de tickets GitHub**](https://github.com/ublue-os/aurora/issues) et sur les [**forums**](https://universal-blue.discourse.group/c/aurora/11) d'Aurora.

Les informations matérielles et les informations sur l'image sont affichées à l'aide de cette **commande** :

```
sudo bootc status
```

### Plantage système ? {#system-crash}

```
ujust logs-last-boot
```
