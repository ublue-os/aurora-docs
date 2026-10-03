---
title: "Fedora 45 : tests et obsolescence du backend Wi-Fi IWD dans Aurora"
slug: deprecating-iwd
description: Note d'obsolescence d'IWD et version bêta de Fedora 45.
authors:
  - inffy
---

Bonjour stargazers,

La bêta de Fedora 45 a été [publiée](https://fedoraproject.org/wiki/Releases/45/Beta) et nous proposons déjà des builds basés sur Fedora 45 dans notre branche `testing`. Si vous souhaitez consulter l'ensemble des changements prévus pour Fedora 45, vous pouvez les retrouver [ici](https://fedoraproject.org/wiki/Releases/45/ChangeSet). La liste des bogues bloquants actuels est disponible sur [Fedora QA](https://qa.fedoraproject.org/blockerbugs/milestone/45/final/buglist).

Si vous souhaitez nous aider à tester ces builds, vous pouvez facilement effectuer un rebase vers la branche `testing`.

Nous avons également des nouvelles concernant le backend Wi-Fi IWD, que certains d'entre vous utilisent peut-être.

<!-- truncate -->

## Tests de Fedora 45 Bêta

Nous vous recommandons d'épingler (*pin*) votre déploiement actuel avant de procéder au rebase :

```bash
sudo ostree admin pin 0
```

Vous pouvez ensuite basculer sur la branche `testing` à l'aide de l'outil `rebase-helper` :

```bash
ujust rebase-helper
```

Sélectionnez votre image actuelle (`aurora/aurora-dx` ou la variante `nvidia-open`), puis choisissez la branche `testing` :

![Sélection de la branche dans rebase-helper](/img/blog/rebase-helper.png)

Vous pouvez également le faire manuellement avec la commande `bootc switch` :

```bash
sudo bootc switch --enforce-container-sigpolicy ghcr.io/ublue-os/aurora:testing
```

## Obsolescence du backend Wi-Fi IWD

Aurora proposait jusqu'ici la prise en charge du backend IWD d'Intel en tant que fonctionnalité optionnelle. Sur certains matériels, IWD offrait une meilleure expérience utilisateur que le backend par défaut, `wpa_supplicant`.

Intel a toutefois interrompu le développement officiel d'IWD et aucun autre développeur n'a repris le projet. Cela signifie qu'aucune mise à jour ne sera proposée pour IWD à l'avenir.

Comme indiqué, ce mode n'a jamais été activé par défaut. Les informations suivantes s'adressent donc uniquement aux utilisateurs ayant activé manuellement IWD comme backend sans fil.

### Contexte

Pendant un certain temps, Aurora intégrait une recette optionnelle (`ujust toggle-iwd`) permettant de choisir IWD à la place de `wpa_supplicant` comme backend sans fil pour NetworkManager. Sur certains équipements, IWD présentait des avantages tels qu'un balayage plus rapide, une latence réduite lors de l'itinérance (*roaming*) et une meilleure prise en charge de puces Wi-Fi Intel récentes.

Cependant, en raison de l'arrêt de la maintenance en amont par Intel, ce composant risque de cesser de fonctionner avec les futurs noyaux ou de provoquer d'autres dysfonctionnements. De plus, Fedora finira probablement par retirer son paquet RPM.

### Comment revenir à la configuration par défaut

Si vous avez utilisé notre script `ujust` pour basculer vers IWD, voici les étapes à suivre pour revenir au backend par défaut, `wpa_supplicant`.

Un système de notification hebdomadaire affichera une alerte sur votre bureau si vous utilisez toujours le backend IWD. Une fois le changement effectué, la notification disparaîtra.

Nous vous conseillons d'effectuer ce changement lorsque vous disposez de quelques minutes pour vous reconnecter à votre réseau Wi-Fi :

1. Ouvrez votre terminal et exécutez :

   ```bash
   ujust toggle-iwd
   ```

2. Sélectionnez **Disable IWD**.
3. Redémarrez votre système.

:::warning Les connexions Wi-Fi enregistrées devront être réétablies
Puisque `iwd` et `wpa_supplicant` gèrent les identifiants et profils de connexion de manière différente, le retour en arrière efface les profils de réseaux sans fil enregistrés afin d'éviter tout blocage d'authentification.

Après le redémarrage, **vous devrez sélectionner votre réseau Wi-Fi et ressaisir votre mot de passe** depuis la zone de notification ou les paramètres réseau. Les connexions Ethernet filaires et les connexions VPN ne sont pas affectées.
:::

## [Discussion](https://github.com/ublue-os/aurora/discussions/2954)
