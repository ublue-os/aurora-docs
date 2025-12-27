---
title: Gaming on Aurora
description: A comprehensive guide to gaming options and configurations on Aurora
---

## Prerequisites

Before starting with gaming on Aurora, ensure you have:

1. The correct Aurora image for your system:
   - `aurora:stable` for Intel/AMD GPU systems
   - `aurora-nvidia-open:stable` for newer (Turing+ / 16XX+) cards supported by NVIDIA's open driver

2. Enough storage space for games
3. A stable internet connection for downloads

## Overview

Despite not being primarily a gaming-focused image, you can still run video games at _nearly_ the same performance as nearly any other Linux operating system out there. Aurora supports gaming through various methods including Flatpak Steam, Lutris, and containerized gaming environments. This guide will help you set up a casual gaming environment through flatpaks.

## Gaming Tools

![bazaar-gaming-category](/img/software/bazaar-gaming-section.webp)

- [Steam](https://flathub.org/en/apps/com.valvesoftware.Steam)

- [Lutris](https://flathub.org/en/apps/net.lutris.Lutris)

- [Heroic Games Launcher](https://flathub.org/en/apps/com.heroicgameslauncher.hgl)

Other utilities that might be useful:

- Essential Vulkan runtimes and tools ([Gamescope](https://github.com/ValveSoftware/gamescope), [MangoHud](https://github.com/flightlessmango/MangoHud), [OBS VKCapture](https://github.com/nowrep/obs-vkcapture))

Steam through Flatpak provides several advantages:

1. Sandboxed environment for improved security with granular and adjustable permissions
2. Automatic updates
3. Consistent runtime environment
4. Cross-distribution compatibility

View the [Steam Flatpak Github Wiki](https://github.com/flathub/com.valvesoftware.Steam/wiki) for a short list of workarounds that may need to be done in comparison to other package formats.

## Switch to Bazzite from Aurora

[Bazzite](https://bazzite.gg) is the better choice if your gaming needs rank higher over productivity, development, or general computing usage.

**Note**: Make sure you are not rebasing to a GNOME image of Bazzite as rebasing to a different Desktop Environment is not supported.

[Pick the correct Bazzite image](https://bazzite.gg/#image-picker) and insert it in the bootc command below, you don't have to download any ISOs or reinstall for this:

```
rpm-ostree reset
sudo bootc switch --enforce-container-sigpolicy ghcr.io/ublue-os/bazzite:stable
```

## Recommendations

1. **Casual Gaming**: Use Flatpak Steam and gaming tools installed from Bazaar
2. **Gaming Focus**: Switch to full Bazzite installation for the best gaming experience

## Tools and Performance Monitoring

- [Gamescope Vulkan Layer](https://flathub.org/en/apps/org.freedesktop.Platform.VulkanLayer.gamescope)
- [OBS VKCapture for recording](https://flathub.org/en/apps/org.freedesktop.Platform.VulkanLayer.OBSVkCapture)

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

- Join the [Aurora Discord community](https://discord.gg/z4TPpSVbxX)

## Additional Notes

- Flatpak Steam may have slight performance overhead due to sandboxing, but this is usually negligible
- When using Flatpak Steam, be aware that games are run in a sandboxed environment for improved security
