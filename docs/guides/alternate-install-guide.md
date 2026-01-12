---
title: Alternate Installation
description: When you have problems installing from the ISO, you can try rebasing.
---

# Alternate Installation

If you have issues installing with the Aurora ISO and want to try rebasing from a Fedora Kinoite installation (**rebasing from Silverblue is NOT supported!**), this guide is for you. Rebasing will give you almost the same great experience as a fresh installation from our ISO, but there are some steps you need to follow.

Here's what you need to do:

1. Determine your image name. Select your desired Aurora Version in the ISO download screen on <a target="_blank" href="https://getaurora.dev">getaurora.dev</a> and note it down. You're gonna need it in the next steps.

2. Download Fedora Kinoite (**<a target="_blank" href="https://fedoraproject.org/atomic-desktops/kinoite/">from here</a>**) and install it when you don't have an existing installation. The process is very similar to the Aurora installation process. **_Do not create a root user._**

3. Once you are booted into your new or existing Kinoite installation, run the following command (substituting the placeholder with the image name you noted down earlier):

```
sudo bootc switch ghcr.io/ublue-os/<imagename>
```

_For example: `sudo bootc switch ghcr.io/ublue-os/aurora-dx:stable`_

4. After you have rebased to Aurora, you need to rebase a second time. This time, to a signed version of the image so you have a verified and secure copy of the OS.

```
sudo bootc switch --enforce-container-sigpolicy ghcr.io/ublue-os/<imagename>
```

_For example: `sudo bootc switch --enforce-container-sigpolicy ghcr.io/ublue-os/aurora-dx:stable`_

5. Now that you are on Aurora, add the flathub repo as your system flatpak repo:

```
flatpak remote-add --if-not-exists --system flathub https://flathub.org/repo/flathub.flatpakrepo
```

6. After all of that is done, you can relax a bit. Now it's time for the last step, you will want to install our curated flatpaks to get the best out of your experience. Run the following command in you terminal:

```
ujust install-system-flatpaks
```

# Rebasing from an existing Fedora Kinoite Installation

First you might want to permanently save your current deployment:

```
sudo ostree admin pin 0
```

The following command will remove all changes you made with rpm-ostree, like layered packages and kernel parameters to ensure a successful rebase to Aurora.

```
rpm-ostree reset
```

After that you can start right from step 3 above.

# Rebasing from another Universal Blue Image (e.g. Bazzite)

If you want to rebase from a Bazzite-KDE Installation to Aurora, you can just skip steps 1-3 and grab a command with your desired image from step 4, from the installation guide above.

**Note**: Bazzite [blocklists](https://github.com/ublue-os/bazzite/blob/d67570f37329e20d26869648cfa759c10bfc667f/system_files/desktop/shared/usr/share/ublue-os/flatpak-blocklist) applications like Flatpak Steam, you will have to undo that with `flatpak remote-modify --system --no-filter flathub` on Aurora.

**NOTE:** Do not rebase from a Gnome-based image to Aurora or back!
