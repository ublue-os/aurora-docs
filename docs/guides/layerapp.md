---
title: Layer apps via repofiles onto the system
description: How to layer apps with rpm-ostree.
---
## Layering Fedora Packages

**WARNING**: **Layering certain packages can pause system updates until removed**!

**NOTE**: **Don't install apps as layers unless you absolutely have to!**

Layering applications with `rpm-ostree` can be quite daunting when you first look at it.  See the software installation "hierarchy" from our friends over at Bazzite: <a href="https://docs.bazzite.gg/Installing_and_Managing_Software/">Software Installation Methods ranked by most recommended.</a> Specific software must layered to function properly. This applies to packages like 1Password when you want to use the SSH feature or a VPN clients like Mullvad.  This guide is aiming to show you how you can install / layer apps on the system and have it update itself when the base image get's updated. To accomplish this, your app needs to have a Fedora Repository setup. 

<sub>**Please also note that installing software as a layer will increase the time it takes for system updates to complete. While you should not notice this in day-to-day usage because the system updates silently in the background, it's still slower.**</sub>

## Steps

**Example**: Mullvad VPN Software

### 1. Identify the repo file you need (if necessary)
Mullvad conveniently provides the link to the repository file directly on their website. 
In this example, the repo file is located at <a href="https://repository.mullvad.net/rpm/stable/mullvad.repo">https://repository.mullvad.net/rpm/stable/mullvad.repo</a>.

### 2. Add the repo file (if necessary)

Now we can take that URL and execute the following commands: 

```bash
cd /etc/yum.repos.d/ #Change into the repository directory
sudo wget https://repository.mullvad.net/rpm/stable/mullvad.repo #Save the repo file to the directory
```

### 3. Layering the package
`rpm-ostree` will now index the new repository and after that search for the desired application there.

With a little

```bash
rpm-ostree install mullvad-vpn
```
We have now successfully layered Mullvad on our system. Reboot the system and you should now find Mullvad in your application list.
