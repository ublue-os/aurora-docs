---
title: Aurora System Requirements
description: System requirements to comofortably use Aurora
---

Using Aurora on your computer does not require any special sauce, but there are some system requirements you should be aware of. Other than the hard requirement of a 64-bit capable CPU (AMD/Intel) you should have at least the following system specifications on your Aurora Box:

- Architecture: x86_64
- Firmware: UEFI (CSM Support should be _disabled_ in the Firmware Setup if available)
- Processor (CPU): 2GHz quad core or better
- System Memory (RAM): 4GB (8 GB recommended)
- Graphics: A modern GPU that is Vulkan 1.3+ compliant
  - For **Nvidia** Users: A GPU with Turing or newer is required. This means RTX 2000+, GTX 1660 and GTX 1650 and onwards are supported. If you have an older Nvidia GPU, then you can try the non-Nvidia editions to utilize the open source nouveau support.
- Storage: SSD with at least 40GB of free space to have headroom for now and future updates
  - A spinning hard disk drive will run Aurora, but updates and other I/O heavy operations will decrease performance greatly.

> **Note**: older Intel iGPUs like HD 4600 (Haswell, 2013) don't fully support Vulkan 1.3, therefore GTK4 Applications will not display properly. However, the following workaround for this problem is explicitly unsupported by the Aurora Team. See this [blog by the GTK developers](https://blog.gtk.org/2024/01/28/new-renderers-for-gtk/) for more info

```
sudo flatpak override --system --env=GSK_RENDERER=gl
```
