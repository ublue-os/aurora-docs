---
title: Gaming on Aurora Linux
description: A comprehensive guide to gaming options and configurations on Aurora Linux
---

## Prerequisites

Before starting with gaming on Aurora Linux, ensure you have:

1. The correct Aurora Linux image for your system:

   - `aurora-stable` for Intel/AMD systems
   - `aurora-nvidia-stable` for NVIDIA systems

   All available builds, including specialized images for Surface devices, Framework laptops, and ASUS hardware, can be found at [https://getaurora.dev](https://getaurora.dev).

2. Enough storage space for games
3. A stable internet connection for downloads

## Overview

Aurora Linux supports gaming through various methods including Flatpak Steam, Lutris, and containerized gaming environments. This guide will help you set up and choose the best gaming solution for your needs.

## Quick Install Gaming Tools

The fastest way to get started with gaming is to install all necessary gaming Flatpaks and dependencies using:

```command
ujust install-gaming-flatpaks
```

This command will install:

- Steam
- Heroic Games Launcher
- Lutris
- ProtonUp-Qt
- Essential Vulkan runtimes and tools (gamescope, MangoHud, OBS VKCapture)

## Gaming Options

### Flatpak Steam

Steam through Flatpak provides several advantages:

1. Sandboxed environment for improved security
2. Automatic updates
3. Consistent runtime environment
4. Cross-distribution compatibility

### Bazzite-Arch Container

For those wanting a dedicated gaming environment without switching distributions, Bazzite-Arch provides a containerized solution:

```command
distrobox-create --unshare-netns --nvidia --image ghcr.io/ublue-os/bazzite-arch --name bazzite-arch -Y
```

After creation, export the gaming applications to your host system:

```command
distrobox-enter -n bazzite-arch -- 'distrobox-export --app steam'
distrobox-enter -n bazzite-arch -- 'distrobox-export --app lutris'
distrobox-enter -n bazzite-arch -- 'distrobox-export --app protontricks'
distrobox-enter -n bazzite-arch -- 'mkdir -p ~/.steam && distrobox-export --bin /usr/bin/steamcmd --export-path ~/.steam && mv ~/.steam/steamcmd ~/.steam/steamcmd.sh'
```

## Switching to Full Bazzite

If gaming is your primary focus, consider switching to Bazzite as your main operating system. It offers:

1. Pre-configured gaming optimizations
2. Latest gaming-related drivers and tools
3. Built-in support for multiple gaming platforms
4. Regular updates focused on gaming performance
5. Active gaming-focused community

To switch to Bazzite from Aurora Linux, use:

```command
rpm-ostree rebase ostree-unverified-registry:ghcr.io/ublue-os/bazzite:stable
```

## Recommendations

1. **Casual Gaming**: Use Flatpak Steam and gaming tools installed through `ujust install-gaming-flatpaks`
2. **Mixed Usage**: Consider the Bazzite-Arch container for a dedicated gaming environment while keeping Aurora Linux as your daily driver
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
   - GOG games
   - Epic Games Store titles
   - Traditional Windows games
   - Emulators

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

This guide is regularly updated as Aurora Linux evolves. For the most recent information, troubleshooting help, or if you have any questions:

- Join the Aurora Linux [Discord community](https://discord.gg/WEu6BdFEtp)

## Additional Notes

- The Bazzite-Arch container comes with paru pre-installed and modified xdg-utils for seamless integration with your host system
- Flatpak Steam may have slight performance overhead due to sandboxing, but this is usually negligible
- When using Flatpak Steam, be aware that games are run in a sandboxed environment for improved security
