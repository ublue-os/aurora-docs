---
title: Retrait de freeipa-client d’Aurora
description: Nous retirons freeipa-client d’Aurora en raison de problèmes liés à SELinux.
slug: removing-freeipa
authors: niklas
---

Bonjour, observateurs des étoiles !

Nous retirons définitivement `freeipa-client` d’Aurora, car il empêche nos mises à jour de fonctionner. Plusieurs problèmes sont en cause, notamment ce [bogue en amont dans ostree/bootc](https://bugzilla.redhat.com/show_bug.cgi?id=2332433) et [cet autre bogue](https://bugzilla.redhat.com/show_bug.cgi?id=2332433). Notre modification est suivie dans [cette demande de fusion](https://github.com/ublue-os/aurora/pull/1811), et la discussion concernant la politique SELinux se trouve dans le [suivi des problèmes de Fedora SELinux](https://github.com/fedora-selinux/selinux-policy/issues/3081).

Si vous dépendez de `freeipa-client`, vous pouvez créer une image personnalisée en y rajoutant le paquet sous forme de couche. De nouvelles images stables sans ce paquet seront publiées prochainement. Merci à RoyalOughtness d’avoir identifié la cause !

À bientôt ~Niklas

## [Discussion](https://github.com/ublue-os/aurora/discussions/1813) {#discussion}
