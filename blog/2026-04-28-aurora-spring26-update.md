---
title: "Aurora Spring 2026 Update - Latest Stream now based on Fedora 44"
slug: aurora-spring26-update
description: Aurora Spring 2026 Update!
authors:
  - inffy
  - renner0e
  - niklas
  - ledif
---

Hey Stargazers,

[Fedora 44 releases today](https://fedoramagazine.org/announcing-fedora-linux-44/) (Tuesday 28th) and we have enabled Fedora 44 based builds of Aurora on our `latest` stream, which is aimed at enthusiasts who want the latest and greatest.

Users who are already on the `latest` stream will be automatically updated to the new base or you can run `ujust update` if you don't want to wait :).

Current `:beta` users may want to rebase to `:latest` now as we will be turning beta builds off in the coming weeks.

<!-- truncate -->

## Changes in Aurora

Here is a short summary of the changes that are coming with Aurora from our [beta blog post](https://docs.getaurora.dev/blog/aurora44-beta).

### SDDM replaced with Plasma Login Manager

With Fedora 44 based images we will also move away from SDDM as the login manager and switch to the native Plasma Login Manager that was part of the Plasma 6.6 release. You won't notice an immediate difference because they look basically identical for now.

### Plasma Setup

Also coming with this release is the new "first boot wizard" called Plasma setup. This will only affect new installs and only after we start building new stable ISOs (after `stable` moves to F44). This will replace the user creation parts of the Anaconda installer and move it to the first boot, just like Gnome has done for years.

### Konsole becomes the default

We have switched our default terminal from Ptyxis to Konsole. Many have previously questioned why we had a GTK based terminal app as our default, and the main reason has been the distrobox/container integration of Ptyxis. Konsole now finally has that container support, making the switch a no-brainer. If you still want to keep using Ptyxis, you can install it from Bazaar.

### Distroshelf switched to Kontainer

[Distroshelf](https://flathub.org/en/apps/com.ranfdev.DistroShelf) will be switched to [Kontainer](https://flathub.org/en/apps/io.github.DenysMb.Kontainer) for new installs.

### Starship

Starship will also be removed from the image as it is available to install easily from brew. This aligns with our long-term goal to make the images leaner by removing packages that can easily be found from Homebrew or Flathub.

```
brew install starship
```

### AppImages

One change coming with Fedora 44 is the removal of [Fuse2](https://fedoraproject.org/wiki/Changes/AtomicDesktopDropFuse2). This means that many older AppImages will not work anymore. There is a newer format for AppImages, but unfortunately many packages have not (yet) updated to it.

### Fw-fanctrl

The Framework-specific `fw-fanctrl` command-line tool has been included in our images for quite a while. Unfortunately, the package has been broken for some time now and it's not really needed (many of our users probably never touched the fan profiles), so it will also be removed. Furthermore, it has also caused small issues on other laptops.

### Openrazer kernel module and daemon

OpenRazer (kernel module and daemon) is another package that we have bundled for a pretty long time. But as we want to keep our images tidy and maintainable, we have decided to remove these tools from Aurora. The official (Windows only currently) tool, Synapse, seems to be moving to a web browser-based solution, which would also help Linux users. The solution is [currently in beta](https://www.razer.com/newsroom/product-news/synapse-web-beta/) and already supports some Razer devices.

### Asus support in homebrew

One new thing, not directly related to the release of Fedora 44, is the inclusion of previously out-of-tree patches providing support for ASUS ROG laptops (and some others). Most of the patches are now included in the kernel, and the only thing you need is [`asusctl`](https://github.com/NeroReflex/asusctl).

We have a new homebrew cask for `asusctl`, thanks to work from Daegalus. It is now available in the [ublue-os homebrew-tap](https://github.com/ublue-os/homebrew-tap). With that you are able to control the keyboard lights etc. Take it for a spin if you have these Asus laptops (unfortunately we don't) and let us know how it works out.

### General build system enhancements

We have slightly improved our build pipeline; such as implementing package caches and other changes which made iterative local builds faster, a new rechunker that further shrinks update sizes, along with zstd compression.

### New base image

In the beginning of the year, we changed our base image. Previously we used our own [https://github.com/ublue-os/main](https://github.com/ublue-os/main) images. We decided that it would be easier to just get the base image directly from the upstream source, which are maintained by [Timothée Ravier](https://github.com/travier) over on [Fedora's GitLab](https://gitlab.com/fedora/ostree/ci-test). Currently these are not "Fedora official" images, but they serve us well until we have official ones. Big Thanks to Timothée and the other countless Fedora contributors! We would be nothing without them 🙂♥️.

### SBOMs & Release changelogs

We've implemented SBOMs (Software Bill of Materials) and [Build Attestation](https://docs.github.com/en/actions/concepts/security/artifact-attestations) into our build pipeline. This was part of a bigger endeavour of moving away from the legacy-rechunk implementation, which handled our [GitHub release changelogs](https://github.com/ublue-os/aurora/releases).

## What about Aurora:stable?

Just like previously, the `stable` stream follows a gated cadence from [CoreOS](https://fedoraproject.org/coreos/). Currently their release timeline for F44 images looks to be after a few weeks (usually two). After that, we will also make the F44 builds available on `stable` and `stable-daily`. We will of course make another announcement when those are ready.

## I want F44 now

If you are currently on `stable` or `stable-daily` you can easily rebase to the `latest` stream to get going with Aurora 44, and after `stable` is released, you can rebase back. It is really solid, we promise, and we have been dogfooding it the whole beta period.

You can use the `ujust rebase-helper` tool or the Aurora Preferences menu in the settings. Choose your preferred image and select the `latest` stream when the tool asks you.

![Aurora Preferences](/img/blog/auroraprefs.png)

## Upcoming changes in Fall 2026

As we mentioned [previously](https://docs.getaurora.dev/blog/aurora44-beta#important-notice-related-to-fedora-45), in fall, once Fedora 45 releases, we will be removing ZFS support from Aurora. You can find more info about the change from the linked post.

## A look into the future

Now let's get into the time machine and have a look into the future, a future where we don't need a separate Developer Experience Image anymore. [JumpyVi](https://github.com/jumpyvi) is working on a [new kind of layer](https://github.com/projectbluefin/common/pull/288) here, which brings the developer experience to the base image via homebrew, quadlets and other neat tricks. Bringing the DX layer to the base image effectively halves the maintenance, image and build burden for everyone and get's you started faster when setting up your developer workstation. This is currently in super-early stages and should not be used in a production system, but its cool nonetheless. The future is bright!

Until next time, stargazers!

_The Aurora team_

_PS: Don't forget to gaze at the night sky!_

## [Discussion]()
