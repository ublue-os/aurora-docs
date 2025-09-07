---
title: Disable Airplay Discovery by Pipewire
description: Guide to display Airplay Discovery by Pipewire
---

If you have a bunch of outputs in your audio input list that correlate to Macbooks or other AirPlay enabled devices like Homepods, you can disable Pipewire from automatically discovering them if you wish to do so.

Create the pipewire configuration directory in your home folder like so:

```bash
mkdir -p ~/.config/pipewire/pipewire.conf.d/
```

Switch to the folder:

```bash
cd ~/.config/pipewire/pipewire.conf.d/
```

Let's create the configuration file and open it while we're in there:

```bash
touch disable-raop.conf

# Open the file with your default text editor
open disable-raop.conf
```

Paste the following code in there:

```conf
context.properties = { module.raop = false }
```

Save the file and reboot your machine. The AirPlay Sound Outputs should now be gone from your sound settings.
