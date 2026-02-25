---
title: Removing FreeIPA-Client due to SELinux Issue
description: Removing FreeIPA-Client due to SELinux Issue
slug: removing-freeipa
authors: niklas
---

Hello Stargazers!

This is quick but necessary heads up. We are removing freeipa-client in Aurora. The package is breaking updates because of a SELinux Issue so we had to remove it out of necessity. Check out the issue [here](https://github.com/ublue-os/aurora/pull/1811). If you depend on freeipa-client, please create a custom image yourself with the package installed as we can currently not ship it in this state. The issue with the falsely labeled SELinux Policy was also brought up in an issue to the Fedora Issue Tracker [here](https://github.com/fedora-selinux/selinux-policy/issues/3081), if you want to keep track.

We will push out new stable updates with the package removed shortly. Thank you for your understanding.

Cheers ~Niklas
