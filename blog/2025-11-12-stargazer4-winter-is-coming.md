---
title: Stargazer #4 - Winter is coming (and F43 hits stable)
description: Stable F43 builds
slug: stargazer-4
authors: inffy
---

![stargazer4-banner](https://github.com/user-attachments/assets/f36f5e8e-2b5d-4ef1-bb97-97da0d62e185)

A couple of weeks have went by from our [last update](https://universal-blue.discourse.group/t/stargazer-3-aurora-october-update/10911/). And Winter is indeed coming, atleast here in the North :smile:

<!-- truncate -->

## Fedora 43 based images are now available

`Aurora-stable` has today been updated and is now based on Fedora 43. Unfortunately this time the update took a little longer than we would have hoped, but we had to wait for ZFS to get support for the new 6.17 kernel series.

Fedora 43 is a "minor" update and doesn't bring many big updates in itself but we have still done some backend work on the Aurora side. Changes are mostly uninvasive and just to make our source more light and easier to manage.

KDE Plasma 6.5 also finally reached our stable images. People on daily images have already been enjoying Plasma 6.5 for the past few weeks.

Check out their [extensive changelog](https://kde.org/announcements/changelogs/plasma/6/6.4.5-6.5.0/).

We also have a new fall wallpaper
![Yes we are very funny now by showing a fall wallpaper](https://i.imgur.com/WY1eoLx.jpeg)

## Refactoring the build pipeline

Most of the work this cycle has been to our build pipeline. We have made some cleanup how we build our images. The work is mostly done but there are some small things that we still need to do, but this is mostly backend stuff so won't really show up for end users.

## Bazaar changes

As we mentioned in our [last update](https://universal-blue.discourse.group/t/stargazer-3-aurora-october-update/10911/), one of the biggest changes is regarding Bazaar, the Flathub appstore.

We have now fully moved to the Flatpak version of Bazaar, which provides us more frequent updates as it is now decoupled from the image. Furthermore it is now easier to help upstream to get issues fixed for everyone.

This brings some changes how Bazaar is integrated into the system. On startup Bazaar will automatically be downloaded, it is only a couple MBs big. Depending on your installed applications it may also download the new GNOME 49 Flatpak Runtime, which is a bit larger in size (500MB). During the download you may notice a missing icon on the Panel where Bazaar used to be located. Do not worry, when the download has finished it will appear again and is ready to be used.

We tested this change extensively in our Beta Stream in cooperation with [Bluefin](https://projectbluefin.io).

Nevertheless, if you notice any issues feel free to reach out to us. Thanks!

## Application changes

We replaced [InputLeap](https://flathub.org/en/apps/io.github.input_leap.input-leap) with [Deskflow](https://flathub.org/en/apps/org.deskflow.deskflow) as it is more actively developed and is therefore better suited for our default set of applications.

## Goodbye to nvidia-legacy and HWE

As we progress and grow there are somethings that have to be deprecated and as stated [previously this year](https://universal-blue.discourse.group/t/aurora-stable-is-now-based-on-fedora-42/8463#p-22443-deprecation-notices-5), the old "nvidia-legacy" images (`aurora-nvidia*`) and all HWE images (`aurora-hwe*`) are now deprecated and won't receive any more updates.

Depending on your hardware we recommend you to rebase to the -nvidia-open images (for current nvidia users - only Turing cards and newer) or to the base images (HWE users).

We will have a new tool created called [eol-rebaser](https://github.com/ledif/eol-rebaser) that will automatically rebase users that are on an end-of-life image to a supported image.

The tool itself will ship with an upcoming update, but it will be configured to perform the automated rebase 1 month after the images become end-of-life to allow plenty of time for users to manually intervene if they wish to rebase to a different OS (maybe Bazzite!).

### vfio & kvmfr

We have also removed the kvmfr module and the vfio ujust scripts. These were removed from our akmods repo when Bazzite moved to building them on their own infra.
These are also in "stale" state currently and Hikari is working on a new version of these, so they might come back if we deem them to be important (we are not making any promises though).

Someone from the community made [this custom image](https://github.com/dmhuisma/aurora-dmhuisma) for themselves that adds this functionality back. If you are interested then you might want to get in touch with them.

If you need these, we recommend you go with a custom image with these added, or rebase to Bazzite as that will keep supports them.

## Font changes

We have also made changes for font handling. Before we had few packages for fonts in the image, which are now removed. We recommend to get fonts from Brew going forward.

You can use our recipe to get the fonts: `ujust aurora-fonts`

## Live ISOs with the new WebUI in BETA now

With Fedora 43 we finally can build our Live ISO installer with the new Anaconda WebUI and have a working webUI installer in KDE Plasma. Previously there were issues with keyboard layout that couldn't be switched from US layout, which then caused issues with LUKS passwords for non-US layout users.
We will have these available shortly in BETA. We hope you test drive these and give us feedback so we can start using these as our default installer ISOs.

These new ISO images should make the install part more faster and it looks nicer too :smile:. Oh and they should be a little bit smaller in size as well :thumbsup:.

Next up we are planning on looking at implementing the new "plasma-welcome" feature where you can create your user during the first-boot after installation. Just like Gnome has done this for years already.

## Growth

![image](upload://AoXJPzbW9q5k8W5N5u7t7Y7gHeA.png)

## Closing words

We hope you enjoy your new shiny F43 based images. If you find bugs or issues, please always report them to our Github repo: https://github.com/ublue-os/aurora/issues

It doesn't matter how small they are. If you think there is an issue, let us know. Also if you think you have a good idea for a feature or enhancement for a current feature, report it there as well.

## Support Aurora by donating to people we depend on

[@chandeleer](https://ko-fi.com/chandeleer) and [@kolunmi](https://ko-fi.com/kolunmi) have been doing spectacular work on the wallpapers and Bazaar for the past few months.

Please consider donating to both of them and of course all the [other projects](https://docs.getaurora.dev/project-docs/credits/#upstream-projects-included-in-aurora)!
