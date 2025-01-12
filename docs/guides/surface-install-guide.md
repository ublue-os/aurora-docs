---
title: Installing Aurora on Surface Laptops
description: Guide for installing Aurora Linux on Microsoft Surface laptops using Ventoy's GRUB2 mode
---

## Prerequisites

- Download the **Surface version** of Aurora Linux from the official website
- USB drive with Ventoy installed:
  - When installing Ventoy, choose MBR as partition style
  - Disable Secure Boot support in Ventoy installer
  - Use default settings for other options

## Important Note

Due to firmware specifics in Surface laptops, you must use Ventoy's GRUB2 mode to boot the Aurora installation media.

## Installation Steps

### 1. Prepare Your Surface

1. Enter UEFI/BIOS settings (hold Volume Up + Power button while turning on)
2. Disable Secure Boot
3. Save and exit

### 2. Boot from USB

1. Boot from your Ventoy USB containing the Aurora Surface ISO
2. When the Ventoy menu appears, press `Ctrl + R` to switch to GRUB2 mode
   - You should see a red "GRUB2 MODE" text at the bottom
3. Select the Aurora Surface ISO

### 3. Install Aurora

Follow the normal installation process.

### 4. First Boot

After installation, during the first boot:

1. At the MOK management screen, select "Enroll MOK"
2. Select "Continue"
3. Enter the password: `universalblue`
4. Select "Yes" to enroll the key
5. Select "Reboot"

### 5. Final Step

After successful boot:

1. Enter UEFI/BIOS settings again
2. Re-enable Secure Boot
3. Save and exit

## Troubleshooting

If the system won't boot:

- Make sure you used GRUB2 mode (Ctrl + R)
- Verify you're using the Surface version of Aurora
- Verify Secure Boot is disabled during installation
