---
title: Auto-Mounting Secondary Drives
description: Make your secondary drives connected to your device automatically mount on startup!
---
**This is an edited version of the [Bazzite documentation](https://docs.bazzite.gg/Advanced/Auto-Mounting_Secondary_Drives/).**

!!! warning

    You may lose data on the drive(s) or result in an unbootable system if configured improperly.

Follow this guide **at your own discretion** and make sure to read the entire document relevant to your method, so you do not miss anything!

<hr>

## Formatting a disk

!!! warning 

    This will wipe all existing data on it

### Note when formatting in **KDE Partition Manager**

Make sure you set permissions to **everyone**.

Use a disk graphical user interface like KDE Plasma or GNOME Disks to format your drive. We recommend formatting secondary drives to **BTRFS** or **Ext4**. BTRFS is our recommended filesystem, but Ext4 may be better for older spinning mechanical HDDs as secondary drives.

### Creating a secondary drive directory and where to mount drives?

!!! note
    
    Drive directories should be **lowercase** with **no spaces** for best practice.

!!! attention 
    
    `/var/mnt` should NOT be the path, but create a new **directory** in either `/var/mnt` or `/var/run/media/`.

- `/var/mnt/...` for **permanent** drives
- `/var/run/media/...` for **removable** drives

You can make a directory in `/var/mnt/` by opening a host terminal and **entering this command in a host terminal**:

```command
sudo mkdir /var/mnt/games
```

The drive will now be mounted in a directory known as `games`.

!!! note
     
     The `games` directory can be named anything you desire that fits best practices.

#### Permissions for the drive

```command
sudo chown $USER:$USER /var/mnt/games
```

!!! note
    
    If you plan to reformat the partition, remember to edit the mount point and "Remove" the mount path before you reformat! If not you will have to manually edit `/etc/fstab`.

## Graphical User Interface (GUI) Methods for Auto-Mounting

!!! warning 

    Do not set up auto-mount, unmount then format a drive! It can confuse the software you are configuring drives with. Instead, **remove the auto-mount first before formatting the drive**.
    
## Instructions

1.  Open KDE Partition Manager
2.  Locate the disk and partition you want to mount
3.  Right click on the partition and click "Edit Mount Point"
4.  Select "Identify by: UUID" (This will guarantee you mount THIS partition instead of a different one if the device nodes change for some reason)
5.  Select a mounting path (You would want to use `/var/mnt/games` or something similar for permanent mounts)
6.  **Untick all the boxes in the graphical application if they are checked**
7.  Click "More..." and add extra options depending on what filesystem is on the partition (read the "Filesystem Arguments" section)
8.  Click OK on both windows to save the mount points.
9.  A message will appear that the actions will edit `/etc/fstab` (Click "OK" to continue)
10. Mount the disk manually in KDE Partition Manager and enter your sudo password
11. Open the terminal to test the mounts by running the **command**:

    `sudo systemctl daemon-reload && sudo mount -a`

12. **If no errors appeared then it should be safe to reboot.**

If an error occurs, then research the error and undo what you did and try again.

Also a Display Name should be added to the drive too. Name it whatever you want it to be identified as.

### Required additional options depending on **filesystem**

Use the below generic options depending on your filesystem (these are just good defaults)
You can copy+paste these into the "More.." dialog and they will be valid

!!! note
    
    "Users can mount and unmount" is an **optional** setting.

### Filesystem arguments

!!! warning 

    If a drive is formatted, then do not remove it from `/etc/fstab`, so the "nofail" option is a must to avoid issues with booting.

#### **BTRFS**:

```command
defaults,compress-force=zstd:3,noatime,lazytime,commit=120,space_cache=v2,nofail
```

#### **Ext4**:

```command
defaults,noatime,errors=remount-ro,nofail,rw,users,exec
```

#### **NTFS**:

```command
defaults,noatime,nofail,rw,users,exec
```

### Advanced Options (Not required for most setups)

!!! warning
    
    Change at your own risk!

#### Information about compression:

**3** is a good balance, older CPUs should use **1**.

#### Information about subvolumes:

use `subvol=name` as an option, KDE and GNOME Disks let you only mount 1 subvolume through the GUI, you can mount the root with `subvol=/` if a default subvolume is configured in the filesystem.

## Alternative Methods (CLI)

There are also two command-line interface (CLI) methods.

1.  Using `systemd.mount`

2.  Editing the `/etc/fstab` file
