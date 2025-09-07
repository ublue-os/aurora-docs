---
title: Virtual Private Networks (VPNs)
description: How to install and use VPNs on Aurora
---

VPNs are usually not offered on Flathub as the Flatpak sandbox is too strict for most VPN clients to work as is.

We recommend you the following options:

## Tailscale

[Tailscale](https://tailscale.com) is included by default to provide VPN services for both desktop and development use cases. [Tailscale is pretty useful](https://blog.6nok.org/tailscale-is-pretty-useful/).

- [Using Tailscale with Mullvad](https://tailscale.com/kb/1258/mullvad-exit-nodes) - provides the best out of the box experience
  - [Using Tailscale with Docker](https://tailscale.com/kb/1282/docker) - for development
  - `ujust toggle-tailscale` will remove the built in desktop integration if you prefer to use something else
  - Tailscale's [YouTube channel](https://www.youtube.com/@Tailscale) has lots of great tips and tricks
- Good VPNs provide Wireguard configuration files that can be imported directly into NetworkManager, check your VPN providers documentation for more information
- Only as a last resort [layer the VPN with rpm-ostree](/guides/software#rpm-ostree)

## Import VPN configuration files in KDE Plasma

This option may be good enough for you if you don't need special features provided by your VPN client, like kill-switches, split tunneling and other custom features not built-in to the VPN protocol.
These VPNs can be toggled on and off at will.

1. Open Systemsettings
2. Navigate to the Networking Section and go into the "Wi-Fi & Internet" settings
3. Click the "+" button at the bottom

<img src="/img/vpn/vpn_settings.png" alt="Settings page of Networking Settings" width="668" height="487" />

4. Select your downloaded configuration file

<img src="/img/vpn/add_vpn.png" alt="Import VPN config file dialog" width="500" height="617" />

## Using functional VPN Flatpaks

- [Mozilla VPN](https://flathub.org/apps/org.mozilla.vpn)
- [ProtonVPN](https://flathub.org/apps/com.protonvpn.www)
