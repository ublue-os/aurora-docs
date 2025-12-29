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

[just](https://just.systems) is used as a task runner on Aurora. These are commonly community convenience aliases, or more complex scripts that help automate some tasks or initial setup. This is aliased as `ujust`, so that you can use `just` itself for your other projects.

### Getting Started with ujust

- `ujust --choose` - Shows every command and the script that is being executed when that command is chosen. Useful for browsing the available commands
- `ujust -n $command` - The `-n` will run a command in dry-run mode, this is useful for inspecting the commands being run

:::tip

Pro tip, keep your own tasks and aliases in `~/.Justfile`, and they are also handy to put in the root of your project files to automate common tasks, check out this example from [Fedora Kinoite](https://gitlab.com/fedora/ostree/ci-test/-/blob/main/justfile?ref_type=heads).

:::

### Curated Tool Bundles

Aurora includes curated CLI tools shared as Brewfiles. These commands install curated collections of tools via Homebrew:

| Command            | Description                                                                                                                 |
| ------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| `ujust aurora-cli` | Modern CLI tools: atuin, bat, chezmoi, direnv, eza, fd, gh, glab, ripgrep, starship, tealdeer, television, zoxide, and more |
| `ujust bbrew`      | Launch [Bold Brew](https://bold-brew.com/) to select Brewfile bundles                                                       |

### System Commands

| Command                        | Description                                                                                                                                                                                                       |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `ujust update`                 | Manually update the system, flatpaks, and brew formulas                                                                                                                                                           |
| `ujust toggle-updates`         | Enable or disable automatic system updates                                                                                                                                                                        |
| `ujust changelogs`             | Show the changelogs for each package since the last update                                                                                                                                                        |
| `ujust bios`                   | Reboot the PC and enter the BIOS/UEFI. Useful for running dual boot systems from independent disks                                                                                                                |
| `ujust bios-info`              | Display BIOS/UEFI information (manufacturer, product name, version, release date)                                                                                                                                 |
| `ujust device-info`            | Sends the status, flatpak list, and system info to the CentOS pastebin, and returns the URL to the terminal. This allows the end user to conveniently paste the URL with their info so others can help them debug |
| `ujust rebase-helper`          | Interactive assistant to switch between streams, rebase to different images, or roll back to a previous version                                                                                                   |
| `ujust clean-system`           | Clean up unused containers, volumes, flatpak runtimes, and rpm-ostree deployments                                                                                                                                 |
| `ujust check-idle-power-draw`  | Measure your system's idle power consumption using powerstat                                                                                                                                                      |
| `ujust check-local-overrides`  | Show files that differ between `/usr/etc` and `/etc` to identify local customizations                                                                                                                             |
| `ujust logs-this-boot`         | Show all system log messages from the current boot                                                                                                                                                                |
| `ujust logs-last-boot`         | Show all system log messages from the previous boot                                                                                                                                                               |
| `ujust enroll-secure-boot-key` | Enroll the Nvidia driver & KMOD signing key for secure boot (password: "universalblue")                                                                                                                           |
| `ujust toggle-user-motd`       | Toggle display of the message of the day in terminal                                                                                                                                                              |
| `ujust toggle-tpm2`            | Toggle automatic LUKS disk unlock via TPM (enable/disable with optional PIN)                                                                                                                                      |
| `ujust toggle-iwd`             | Switch between iwd and wpa_supplicant for Wi-Fi networking (iwd can improve throughput and reduce latency)                                                                                                        |
| `ujust benchmark`              | Run a one-minute system benchmark using stress-ng                                                                                                                                                                 |

### Developer Experience Commands

| Command                | Description                                                                                                                   |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `ujust devmode`        | Toggle between Aurora and the Developer Experience (Aurora-dx)                                                                |
| `ujust dx-group`       | Add your user to docker, incus-admin, libvirt, and dialout groups for full developer access                                   |
| `ujust aurora-cli`     | Install Aurora's curated command line experience with modern tools (atuin, bat, eza, fd, ripgrep, starship, zoxide, and more) |
| `ujust toggle-devmode` | Alias for `ujust devmode`                                                                                                     |

### Application Installation Commands

| Command                          | Description                                                                                          |
| -------------------------------- | ---------------------------------------------------------------------------------------------------- |
| `ujust jetbrains-toolbox`        | Install [JetBrains Toolbox](https://www.jetbrains.com/toolbox-app/) for managing JetBrains IDEs      |
| `ujust install-opentabletdriver` | Install or uninstall [OpenTabletDriver](https://opentabletdriver.net/), an open source tablet driver |
| `ujust install-system-flatpaks`  | Install the default system flatpaks (useful after rebasing)                                          |
| `ujust cncf`                     | Launch Bold Brew with the CNCF tools Brewfile for cloud native development tools                     |

Note that generally speaking Aurora tries to keep the system Justfiles finely scoped, most of these are workarounds and not full-fledged commands. They may get removed or changed depending on the problem they were initially meant to solve.

## Updates

System updates and applications are automatically updated on a daily schedule. You can change the update channel in the system settings under the "Aurora Preferences" category.

### Rolling back bad system upgrades

If a regression occurs during a system update, then you can rollback to the last deployment.

```
rpm-ostree rollback
```

#### Rebasing to specific Aurora images

> **Note**: System updates are paused when you rebase to an older image until you rebase back to `:stable` update channel.

Use the `rebase-helper` tool to rebase for the following reasons:

- Switching to an older Aurora build temporarily
- Swapping to a different update channel
- Hardware changes that require switching to or moving away from a hardware specific image (like an image preinstalled with Nvidia drivers)

```
ujust rebase-helper
```
