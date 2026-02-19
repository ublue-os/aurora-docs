---
title: Release Streams
description: Understanding Aurora's different release streams and how to choose the right one
---

# Release Streams

Aurora offers different release streams to meet various user needs and preferences. Each stream provides a different balance of stability, features, and update frequency.

## Stream Comparison

Aurora provides three main release streams with different characteristics:

| Feature                 | Stable      | Stable-Daily | Latest                  |
| ----------------------- | ----------- | ------------ | ----------------------- |
| **Target Users**        | Production  | Enthusiasts  | Advanced users, testers |
| **System Updates**      | Weekly      | Daily        | As available            |
| **Application Updates** | Twice a day | Twice a day  | Twice a day             |
| **Kernel**              | Gated       | Gated        | Not-gated               |

The major difference between latest and stable is the kernel cadence and when they do a major upgrade. latest will upgrade to the next major Fedora release as soon as it is available and builds daily. stable will upgrade when CoreOS does its userspace upgrade, which is usually a few weeks afterwards, and builds weekly or daily. Users can choose the stable-daily image for daily stable updates, or stick to stable for weekly builds.

#### Gated Kernel

The stable tag features a gated kernel. This kernel follows the same version as the [Fedora CoreOS stable stream](https://fedoraproject.org/coreos/release-notes?arch=x86_64&stream=stable), which is a slower cadence than default Fedora Kinoite. The Universal Blue team may temporarily pin to a specific kernel in order to avoid regressions that may affect users.

Adding and editing kernel boot arguments is currently handled by rpm-ostree, check the [upstream documentation](https://docs.fedoraproject.org/en-US/fedora-coreos/kernel-args/#_modifying_kernel_arguments_on_existing_systems) for more information.

## Available Streams

### Stable

The **stable** stream is the recommended choice for most users. It provides:

- **Regular Updates**: Weekly release cycles
- **Production Ready**: Suitable for daily use and production environments
- **Gated Kernel**: Uses a gated kernel for enhanced stability

**Image Tags**: `stable`

**Examples**:

- `ghcr.io/ublue-os/aurora:stable`
- `ghcr.io/ublue-os/aurora-dx:stable`
- `ghcr.io/ublue-os/aurora-nvidia:stable`
- `ghcr.io/ublue-os/aurora-nvidia-open:stable`

### Stable-Daily

The **stable-daily** stream provides:

- **Daily Updates**: Daily builds of the stable stream
- **Gated Kernel**: Same gated kernel as stable for reliability
- **More Frequent**: Updates daily instead of weekly

**Image Tags**: `stable-daily`

**Examples**:

- `ghcr.io/ublue-os/aurora:stable-daily`
- `ghcr.io/ublue-os/aurora-dx:stable-daily`
- `ghcr.io/ublue-os/aurora-nvidia:stable-daily`
- `ghcr.io/ublue-os/aurora-nvidia-open:stable-daily`

### Latest

The **latest** stream provides:

- **Cutting Edge**: Latest features and improvements
- **Faster Updates**: Updates as soon as they're available
- **Latest Kernel**: Uses the latest available kernel
- **Testing Ground**: Newer packages that may have occasional issues
- **For Enthusiasts**: Best for users who want the newest features

**Image Tags**: `latest`

**Examples**:

- `ghcr.io/ublue-os/aurora:latest`
- `ghcr.io/ublue-os/aurora-dx:latest`

## Choosing the Right Stream

### Use **Stable** if you want:

- A reliable daily driver
- Weekly updates without cutting-edge instability
- The best balance of features and stability
- **Recommended for most users**

### Use **Stable-Daily** if you want:

- Daily (package) updates instead of weekly
- Gated kernel reliability with more frequent updates
- **Good for users who want stable but more current**

### Use **Latest** if you want:

- The newest features immediately
- Latest kernel and packages
- To help test upcoming changes
- Are comfortable with occasional issues

## Switching Between Streams

You can switch between streams using either the `rebase-helper` tool or the `bootc switch` command:

### Using the Rebase Helper Tool (Recommended)

The easiest way to switch between streams is using Aurora's built-in rebase helper:

```bash
ujust rebase-helper
```

<img width="416" height="229" alt="image" src="https://github.com/user-attachments/assets/682057ec-e435-4fe7-aca5-928ee1a7063f" />

This interactive tool will guide you through:

- Switching between different Aurora streams (stable, stable-daily, latest)
- Moving between hardware-specific images (aurora, aurora-dx, aurora-nvidia, etc.)
- Selecting the appropriate image for your system

### Using Bootc Switch Commands

### To Stable Stream

```bash
sudo bootc switch --enforce-container-sigpolicy ghcr.io/ublue-os/aurora:stable
```

### To Stable-Daily Stream

```bash
sudo bootc switch --enforce-container-sigpolicy ghcr.io/ublue-os/aurora:stable-daily
```

### To Latest Stream

```bash
sudo bootc switch --enforce-container-sigpolicy ghcr.io/ublue-os/aurora:latest
```

### Hardware-Specific Images

Replace `aurora` with your specific image variant:

- `aurora-dx` for Developer Experience variant
- `aurora-nvidia-open` for NVIDIA open driver support

## Update Frequency and Throttling

### Stable Stream

- Weekly release cadence
- Uses gated kernel for enhanced stability
- Updates include both system packages and container updates

### Stable-Daily Stream

- Daily builds of the stable stream
- Same gated kernel as stable
- More frequent updates for users who want the latest stable changes
- Updates include both system packages and container updates

### Latest Stream

- Updates follow Fedora's release schedule closely
- More frequent updates as changes become available
- Uses latest available Fedora kernel
- May include beta or release candidate packages

## Checking Your Current Stream

To see which stream you're currently using:

```bash
rpm-ostree status
```

Look for the container image URL in the output to identify your current stream.

## Recommendations

- **New Users**: Start with the **stable** stream
- **Users wanting frequent updates**: Consider **stable-daily** for daily stable builds
- **Developers**: Consider **stable** or **stable-daily** for reliability or **latest** for newest tools
- **Enthusiasts**: Try **latest** for cutting-edge features

Remember that you can always switch between streams if your needs change!
