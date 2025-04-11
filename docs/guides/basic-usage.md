---
title: Basic Usage
description: Day-to-day usage guide for Aurora.
---

## Installing Software

| Graphical Applications | Command-Line / Terminal | Other Linux Package Formats |
| ---------------------- | ----------------------- | --------------------------- |
| Flatpak                | Homebrew                | Distrobox                   |

Read the [Software Guide](https://docs.getaurora.dev/guides/software/) for more information.

## Managing Installed Applications

### Flatseal

Manage Flatpak permissions thoroughly. KDE Plasma's system settings can also change permissions, but not as granular.

### Warehouse

Manage installed Flatpaks by downgrading, backing up user data, and adding additional Flatpak remotes.

### Pre-Installed Aurora Packages

Unfortunately, due to a limitation with OCI images, there are too many downsides to recommend uninstalling the pre-installed packages that ship with Aurora without [forking the project](https://github.com/ublue-os/aurora/fork), building your own based on our [template](https://github.com/ublue-os/image-template), or using the unaffiliated [Blue-Build](https://blue-build.org/learn/universal-blue/) project.

These downsides include:

- Longer upgrades times
- More storage will be used despite the package being removed

## Using `ujust` in Aurora

`ujust` is a set of scripts by Universal Blue maintainers and contributors that can perform the following actions:

- Installing specific software
- Managing the system and maintenance

View the entire list of `ujust` commands by entering this terminal command:

```
ujust
```

## Updates

System updates and applications are automatically updated on a daily schedule. You can change the update channel in the system settings.

### Rolling back bad system upgrades

If a regression occurs during a system update, then you can rollback to the last deployment.

```
rpm-ostree rollback
```

#### Rebasing to specific Aurora images

> **Note**: System updates are paused when you rebase to an older image until you rebase back to `:stable`!

Use the `rebase-helper` tool to rebase for the following reasons:

- Switching to an older Aurora build temporarily
- Swapping to a different update cadence
- Hardware changes that require switching to or moving away from a hardware specific image (like an image preinstalled with Nvidia drivers)

```
ujust rebase-helper
```
