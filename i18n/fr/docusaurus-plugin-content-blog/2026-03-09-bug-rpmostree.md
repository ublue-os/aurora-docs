---
title: Un bogue dans rpm-ostree bloque les mises à jour
description: Un bogue dans rpm-ostree bloque les mises à jour.
slug: bug-rpmostree
authors:
  - inffy
  - renner0e
---

Bonjour, observateurs des étoiles !

Cet article vous concerne si vous utilisez notre canal `stable-daily` ou `latest`. Le problème touche les images du 6 mars.

Un paquet en amont — rpm-ostree — a été mis à jour vers la version 2026.1 la semaine dernière, et cette version contient un bogue qui empêche les mises à jour.

<!-- truncate -->

Nous avons mis en place un correctif en revenant à une version antérieure du paquet. Ce correctif est maintenant disponible : veillez donc à mettre à jour votre image manuellement :

`sudo rpm-ostree usroverlay`

Revenez ensuite à la version antérieure du paquet :

`sudo dnf5 install --from-repo=updates-archive rpm-ostree-2025.12-1.fc$(rpm -E %fedora)`

Enfin, lancez la mise à jour de votre image :

`rpm-ostree upgrade`

Cette dernière commande effectue la mise à jour.

Notre canal `stable` n’est pas concerné ; seuls les utilisateurs des canaux `stable-daily` ou `latest` sont touchés.

Si cela vous intéresse, vous pouvez consulter [ce signalement](https://github.com/coreos/rpm-ostree/issues/5567) auprès du projet en amont.

Nous sommes désolés pour la gêne occasionnée. Si vous avez d’autres questions, n’hésitez pas à nous contacter sur [GitHub](https://github.com/ublue-os/aurora).

## [Discussion](https://github.com/ublue-os/aurora/discussions/1857) {#discussion}
