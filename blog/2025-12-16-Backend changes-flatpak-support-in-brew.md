---
title: Backend changes - flatpak support in brew and some other changes
description: Consolidating our builds
slug: consolidation
authors: inffy
---
Just a quick update on the last few weeks. We have continued to streamline our build pipeline and today we have mostly finished the biggest parts of the work.

Our coneheads have always had a bond with dinosaurs so we have worked with the bluefin people on most of this stuff.

<!-- truncate -->
## Flatpak support in Brewfiles
I won't go over everything, there is a great post by Jorge on the [bluefin blog](https://docs.projectbluefin.io/blog/flatpak-support-in-brewfiles) about some of the things that have been in Bluefin for few weeks.

Flatpak support in Brewfiles is here! You can now manage your Flatpak applications alongside your Homebrew formulae, casks, and other dependencies in a single Brewfile.

## Sharing is caring - Consolidating ujust, brew
As Aurora and Bluefin are mostly 1:1 on features it kind of makes sense to consolidate parts of our images. There is no reason why we should do the same things twice in both projects

So coming next week to stable (`stable-daily` and `latest` are already enjoying these  starting today), our ujust recipes, homebrew and also our artwork have been moved to a new [repo](https://github.com/get-aurora-dev/common). Bluefin has done the same and has their own repo [here](https://github.com/projectbluefin/common).

The idea here is that our ujust recipes, brew files and project artwork can be much more easily managed. From now on, we don't have to upkeep "a copy" of ujust recipes in our own repos, we can just streamline this and pull them from Bluefin.

Same thing with Homebrew, the common brewfiles that we would still use are maintained in the Bluefin repo and we pull them from there. So there is just one common place where we can maintain these and don't need to copy them over to our own files.

## Easier Homebrew installation for custom images
We've created a new repository to make it much easier to add Homebrew to your custom bootc images. [@projectbluefin/brew](https://github.com/projectbluefin/brew) repository provides a pre-packaged OCI container image that bundles everything you need to add Homebrew to your custom image-based systems. This is an evolution of a long journey to integrate homebrew better onto our Linux systems. Instead of manually setting up Homebrew, configuring services, and managing shell integrations, you can now include everything with a single line in your Containerfile.

```dockerfile
COPY --from=ghcr.io/projectbluefin/brew:latest /system_files /
```
On first boot, the `brew-setup.service` automatically extracts Homebrew to `/var/home/linuxbrew/.linuxbrew`, sets up proper permissions, and makes it ready to use. The image also includes timers for automatic updates and upgrades, keeping your Homebrew installation current.

This removes a bunch of the manual stuff you had to do in your template to get the full thing, now it's much easier and reliable for everyone. Once we're done the container will rebuild after a Homebrew release, keeping us up to date and safe!

Check out the repository at [github.com/projectbluefin/brew](https://github.com/projectbluefin/brew) for more information and examples.

## Other stuff
There are still updates happening and we keep working on in the following weeks with these.

We will have something "bigger" to announce a little bit later, hopefully maybe already next week but its still a secret ;)

Happy Holidays and we'll see you in the next one!
