---
title: Removing freeipa-client from Aurora
description: We are removing freeipa-client from Aurora due to SELinux issues.
slug: removing-freeipa
authors: niklas
---

Hello Stargazers!

We are removing `freeipa-client` permanently from Aurora because it is breaking our updates. Among other issues, there are multiple issues, in particular this [upstream ostree/bootc bug](https://bugzilla.redhat.com/show_bug.cgi?id=2332433) and [this bug](https://bugzilla.redhat.com/show_bug.cgi?id=2332433). Our change is tracked in [this PR](https://github.com/ublue-os/aurora/pull/1811), and the related SELinux policy discussion is on the [Fedora SELinux issue tracker](https://github.com/fedora-selinux/selinux-policy/issues/3081).

If you depend on `freeipa-client`, you can build a custom image with the package re-added as a layer. New stable images with the package removed will be pushed out shortly. Thanks to RoyalOughtness for tracking this down!

Cheers ~Niklas
