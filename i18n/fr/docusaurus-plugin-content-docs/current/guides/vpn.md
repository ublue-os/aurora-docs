---
title: Réseaux privés virtuels (VPN)
description: Comment installer et utiliser des VPN sur Aurora
---

Les VPN ne sont généralement pas proposés sur Flathub, car le bac à sable Flatpak est trop strict pour que la plupart des clients VPN fonctionnent tels quels.

Nous vous recommandons les options suivantes :

## Tailscale {#tailscale}

[Tailscale](https://tailscale.com) est inclus par défaut pour fournir des services VPN, tant pour le bureau que pour le développement. [Tailscale est très pratique](https://blog.6nok.org/tailscale-is-pretty-useful/).

- [Utiliser Tailscale avec Mullvad](https://tailscale.com/kb/1258/mullvad-exit-nodes) - offre la meilleure expérience prête à l'emploi
  - [Utiliser Tailscale avec Docker](https://tailscale.com/kb/1282/docker) - pour le développement
  - `ujust toggle-tailscale` supprime l'intégration de bureau intégrée si vous préférez utiliser autre chose
  - La [chaîne YouTube](https://www.youtube.com/@Tailscale) de Tailscale regorge d'astuces et de conseils
- Les bons VPN fournissent des fichiers de configuration Wireguard qui peuvent être importés directement dans NetworkManager ; consultez la documentation de votre fournisseur VPN pour plus d'informations
- Uniquement en dernier recours, [superposez le VPN avec rpm-ostree](/fr/guides/software#rpm-ostree)

## Importer des fichiers de configuration VPN dans KDE Plasma {#import-vpn-configuration-files-in-kde-plasma}

Cette option peut vous suffire si vous n'avez pas besoin des fonctionnalités spéciales fournies par votre client VPN, comme les kill-switch, le split tunneling et autres fonctions personnalisées non intégrées au protocole VPN.
Ces VPN peuvent être activés et désactivés à volonté.

1. Ouvrez les paramètres système
2. Rendez-vous dans la section Réseau et ouvrez les paramètres « Wi-Fi & Internet »
3. Cliquez sur le bouton « + » en bas

<img src="/img/vpn/vpn_settings.png" alt="Page des paramètres réseau" width="668" height="487" />

4. Sélectionnez votre fichier de configuration téléchargé

<img src="/img/vpn/add_vpn.png" alt="Boîte de dialogue d'importation du fichier de configuration VPN" width="500" height="617" />

## Utiliser des Flatpaks VPN fonctionnels {#using-functional-vpn-flatpaks}

- [Mozilla VPN](https://flathub.org/apps/org.mozilla.vpn)
- [ProtonVPN](https://flathub.org/apps/com.protonvpn.www)
