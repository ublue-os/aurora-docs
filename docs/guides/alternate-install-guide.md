---
title: Alternate Installation
description: When you have problems installing from the ISO, you can try rebasing.
---

# Rebasing from a Fedora Kinoite

If you have issues installing with the Aurora ISO and want to try rebasing from a Fedora Kinoite installation (**rebasing from Silverblue is NOT supported!**), this guide is for you. Rebasing will give you almost the same great experience as a fresh installation from our ISO, but there are some steps you need to follow.

Here's what you need to do:

1. Determine your image name. Select your desired Aurora Version in the ISO download screen on <a target="_blank" href="https://getaurora.dev">getaurora.dev</a> and note it down. You're gonna need it in the next steps.

2. Download Fedora Kinoite (**<a target="_blank" href="https://fedoraproject.org/atomic-desktops/kinoite/">from here</a>**) and install it when you don't have an existing installation. The process is very similar to the Aurora installation process. **_Do not create a root user._**

3. Once you are booted into your new or existing Kinoite installation, run the following command (substituting the placeholder with the image name you noted down earlier):

```
rpm-ostree rebase ostree-unverified-registry:ghcr.io/ublue-os/<imagename>
```

_For example: `rpm-ostree rebase ostree-unverified-registry:ghcr.io/ublue-os/aurora-dx:stable`_

4. After you have rebased to Aurora, you need to rebase a second time. This time, to a signed version of the image so you have a verified and secure copy of the OS.

```
rpm-ostree rebase ostree-image-signed:docker://ghcr.io/ublue-os/<imagename>
```

_For example: `rpm-ostree rebase ostree-image-signed:docker://ghcr.io/ublue-os/aurora-dx:stable`_

5. After all of that is done, you can relax a bit. Now it's time for the last step, you will want to install our curated flatpaks to get the best out of your experience. Run the following command in you terminal:

```
ujust install-system-flatpaks
```
