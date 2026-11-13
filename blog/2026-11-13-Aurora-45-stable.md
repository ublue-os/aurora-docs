---
title: "Stargazer 8 - Aurora 45 available (Aurora Fall 2026 Update)"
slug: stargazer8-aurora45
description: Aurora 45 is now available
authors:
  - inffy
  - renner0e
  - NiHaiden
---

# Stargazer 8 - Aurora 45 available (Aurora Fall 2026 Update)

Hello Stargazers,

Six months has again passed and that means that it's time for another Fedora release. Fedora 45 was [released](https://fedoramagazine.org/announcing-fedora-linux-45/) on 3rd of November. Aurora's `testing` branch has been rocking the F45 base since the beta was released and today is the time for our `stable` branch to get the update.

<!-- truncate -->

## Upstream Changes

Fedora 45 mostly consists of backend changes, which you can check out full details from their [release notes](https://docs.fedoraproject.org/en-US/release-notes/f45/). The most prominent changes for upstream atomic images can be found in [Fedora Magazine](https://fedoramagazine.org/whats-new-for-fedora-atomic-desktops-in-fedora-linux-45/).

## Aurora Changes

In addition to upstream changes, we also have a few changes to Aurora itself. These are also mostly related to the backend and build process.

### Password Managers (and Browser Extensions) Work with Firefox

A lasting pain point has been connecting Flatpak browsers to password managers and their respective browser extensions. Mozilla recently implemented a solution which we are enabling on Aurora for Firefox.

Fiefox should now better support KeepassXC and Bitwarden, which you can enable via Firefox's settings.

Support for Chrome and related browsers is still under development and progress can be follwed at [TRACKER](https://example.com)

**TODO**: ( look where this is tracked on chromium bugtracker/flathub

### `uupd` Has a New Maintainer

Our tool for automatic updates ,[uupd](https://github.com/ublue-os/uupd), has received some much needed love and now has a new offical maintainer: Hello [Quinn!](https://github.com/HuntedRaven7) and welcome!

### `fcitx` Moves to Flatpak

This section mainly applies to users who rely on multilingual input methods or CJKV support.

As part of our ongoing effort to keep Aurora's base image lean and maintainable, we have migrated `fcitx` (our input method framework for CJKV and multilingual input) to Flatpak. Previously, shipping this package and all of its language addons directly in the base OS image had an unintended side effect of pulling in outdated components onto the image.

Existing Fcitx users will get a one-time notification to install the [Flatpak](https://flathub.org/en/apps/org.fcitx.Fcitx5) along with the language addons from Bazaar.

You can find more info on [Github](https://github.com/ublue-os/aurora/issues/3038). If you encounter issues, please reach out on Discord or GitHub :).

### Plasma 6.8 Available

Aurora is shipping a new version of the desktop environment Plasma 6.8! You can now set custom borders for applications like Discord or Steam, change CPU core affinity in System Monitor and much more. [You can read a full list of changes here](https://kde.org/announcements/plasma/6/6.8.0/).

### Bazaar User Flatpaks

The team behind [Bazaar](https://gitlab.gnome.org/World/bazaar/) recently implemented a long standing request related to managing certain applications on per-user Flatpak installations.

Please support Bazaar if you have a chance by donating to the team [here](https://ko-fi.com/kolunmi) or [here](https://ko-fi.com/alexandervanhee).

### Cardwire Now In Testing

Multi-GPU support with the new application [Cardwire](https://opengamingcollective.github.io/cardwire/) is now in `testing`. If you have a multi-GPU system, we would appreciate your help with feedback and testing!

Cardwire is replacing `switcheroo`, as it should provide a better experience for multi-GPU systems. It is also the default in Bazzite, so this change better aligns across Universal Blue images.

### ZFS Now Removed

A final reminder: as [previously mentioned](https://docs.getaurora.dev/blog/aurora44-beta/#important-notice-related-to-fedora-45), ZFS is now removed from the `stable` builds of Aurora.
