---
title: KDE Plasma Themes and Customization
description: A guide to customizing KDE Plasma
---

>**Note**: Do not use install themes through the system settings since they may require access to read-only root files!

## Universal Instructions

Step-by-step instructions to install custom themes on KDE Plasma.

1. Download the theme manually from the [KDE Store](https://store.kde.org/browse/)
2. Extracting the contents to `~/.local/share/plasma/` (you may need to make this directory)
3. Open the system settings and select your theme, style, cursor etc. as it now should appear

### Theme Extraction Locations

The location where specific KDE Plasma components will be extracted on the desktop.

#### Global Themes

Global themes are placed in `~/.local/share/plasma/look-and-feel/` (_you may need to make this directory_).

#### Plasma Themes

"Plasma themes" are placed in `~/.local/share/plasma/desktoptheme/` (_you may need to make this directory_).

#### SDDM (Login Manager) Themes

SDDM themes are placed in `/etc/sddm/themes` (_you may need to make this directory_).

SDDM themes can also be layered at your own risk if they are available as RPM packages.

#### Icon / Cursor Themes

"Icon/Cursor themes" are placed in `~/.icons`

#### Application Permissions to Use Themes

Some Flatpaks need filesystem permissions for applications that have issues with cursor themes.

>**Example**: (`~/.icons/:ro` in "Filesystem" in each problematic application or globally in Flatseal).

#### Themes that require `kvantum`

Some themes require [`kvantum`](https://github.com/tsujan/Kvantum/blob/master/Kvantum/README.md) to be installed on the host system.

Install it with this **command**:

```
rpm-ostree install kvantum
```
