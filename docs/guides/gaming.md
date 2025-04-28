---
title: Gaming on Aurora
description: A comprehensive guide to gaming options and configurations on Aurora
---

## Prerequisites

Before starting with gaming on Aurora, ensure you have:

1. The correct Aurora image for your system:

   - `aurora:stable` for Intel/AMD GPU systems
   - `aurora-nvidia:stable` for NVIDIA GPU systems (older propietary Nvidia driver)
   - `aurora-nvidia-open:stable` for newer (Turing+ / 16XX+) Nvidia cards supported by the new open driver

   All available builds, including specialized images for Surface devices, Framework laptops, and ASUS hardware, can be found at [https://getaurora.dev](https://getaurora.dev).

2. Enough storage space for games
3. A stable internet connection for downloads

## Overview

Despite not being primarily a gaming-focused image, you can still run video games at _nearly_ the same performance as nearly any other Linux operating system out there. Aurora supports gaming through various methods including Flatpak Steam, Lutris, and containerized gaming environments. This guide will help you set up and choose the best gaming solution for your needs. However, [Bazzite](https://bazzite.gg) is the better choice if your gaming needs rank higher over productivity, development, or general computing usage.

## Quick Install Gaming Tools

The fastest way to get started with gaming is to install all necessary gaming Flatpaks and dependencies using:

```command
ujust install-gaming-flatpaks
```

This command will install:

- [Steam](https://store.steampowered.com/about/)
- [Lutris](https://lutris.net/)
- [Heroic Games Launcher](https://heroicgameslauncher.com/)
- [ProtonUp-Qt](https://davidotek.github.io/protonup-qt/)
- Essential Vulkan runtimes and tools ([Gamescope](https://github.com/ValveSoftware/gamescope), [MangoHud](https://github.com/flightlessmango/MangoHud), [OBS VKCapture](https://github.com/nowrep/obs-vkcapture))

## Gaming Options

### Flatpak Steam

Steam through Flatpak provides several advantages:

1. Sandboxed environment for improved security with granular and adjustable permissions
2. Automatic updates
3. Consistent runtime environment
4. Cross-distribution compatibility

View the [Steam Flatpak Github Wiki](https://github.com/flathub/com.valvesoftware.Steam/wiki) for a short list of workarounds that may need to be done in comparison to other package formats.

### Steam Appimage

For those wanting a dedicated gaming environment without switching distributions but also didn't want to use distrobox Steam Appimage can be a solution.

It provides almost same benefit with Bazzite-Arch container but without need to mess around with command line.

How to install Steam Appimage:

1.  First you need to download Steam Appimage from [here](https://github.com/ivan-hc/Steam-appimage/releases).
2.  Then install [GearLever](https://flathub.org/apps/it.mijorus.gearlever) from Flathub.
3.  After that right click AppImage file and select open with GearLever, if you seen this menu select Unlock then select
    Move to The App Menu.
    ![GearLever](/img/steam/gearlever1.png)
    ![GearLever](/img/steam/gearlever2.png)
4.  Now Steam Appimage is ready to game!

If gaming is your primary focus, consider switching to Bazzite as your main operating system since it offers:

1. Pre-configured gaming optimizations
2. Latest gaming-related drivers and tools
3. Built-in support for multiple gaming platforms
4. Regular updates focused on gaming performance
5. Active gaming-focused community

To switch to Bazzite from Aurora , use:

```command
rpm-ostree rebase ostree-unverified-registry:ghcr.io/ublue-os/bazzite:stable
```

## Recommendations

1. **Casual Gaming**: Use Flatpak Steam and gaming tools installed through `ujust install-gaming-flatpaks`
2. **Mixed Usage**: Consider the Bazzite-Arch container for a dedicated gaming environment while keeping Aurora as your daily driver
3. **Gaming Focus**: Switch to full Bazzite installation for the best gaming experience

## Tools and Performance Monitoring

The `ujust install-gaming-flatpaks` command installs several useful gaming tools and runtimes:

1. Gaming Platforms:

   - Steam
   - Heroic Games Launcher
   - Lutris
   - ProtonUp-Qt

2. Performance Tools:
   - Gamescope Vulkan Layer
   - OBS VKCapture for recording

## Managing Multiple Gaming Platforms

When using both Steam and Lutris:

1. Steam is best for games in your Steam library
2. Lutris can manage:
   - Traditional Windows games
   - Native Linux games
   - Emulators
3. Heroic Games Launcher can manage:
   - GOG games
   - Epic Games Store titles
   - Amazon Games

## Troubleshooting Common Issues

### Performance Issues

- Verify you're using the correct Aurora image for your hardware (aurora-stable for Intel/AMD or aurora-nvidia-stable for NVIDIA)
- Check if a game is running through the correct Proton version
- Monitor system resources with MangoHud to identify bottlenecks

### Game Launch Problems

- Try updating Proton or switching to a different Proton version
- Verify game files through Steam
- Check game compatibility through ProtonDB

### Storage Issues

- Games are stored in their respective platform directories
- Steam: `~/.var/app/com.valvesoftware.Steam/data/Steam`
- Lutris: Games can be installed in custom locations

## Community Support

This guide is regularly updated as Aurora evolves. For the most recent information, troubleshooting help, or if you have any questions:

- Join the [Aurora Discord community](https://discord.gg/WEu6BdFEtp)

## Additional Notes

- The [bazzite-arch container](https://github.com/ublue-os/bazzite-arch) comes with `paru` pre-installed and modified `xdg-utils` for seamless integration with your host system
- Flatpak Steam may have slight performance overhead due to sandboxing, but this is usually negligible
- When using Flatpak Steam, be aware that games are run in a sandboxed environment for improved security
