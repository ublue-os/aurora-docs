---
title: Release Streams
description: Understanding Aurora's different release streams and how to choose the right one
---

# Release Streams

Aurora offers different release streams to meet various user needs and preferences. Each stream provides a different balance of stability, features, and update frequency.

## Stream Comparison

:::info stable-daily images removed

We previously had also `stable-daily` images that were built daily with the same gated kernel as `stable` but other packages updated from Fedora. We have stopped building them because they didn't really make much sense and in preparation for our `testing` stream. The `stable-daily` tag has been pointed towards `stable`.

We recommend that `stable-daily` users switch to `stable` using the `ujust rebase-helper` tool.

:::

Aurora provides three release streams with different characteristics:

| Feature                 | Stable      | Latest           | Testing               |
| ----------------------- | ----------- | ---------------- | --------------------- |
| **Target Users**        | Production  | Advanced users   | Enthusiasts & Testers |
| **System Updates**      | Weekly      | Daily / As built | Daily / As built      |
| **Application Updates** | Twice a day | Twice a day      | Twice a day           |
| **Kernel**              | Gated       | Not-gated        | Not-gated             |

The major difference between latest and stable is the kernel cadence and when they do a major upgrade. latest will upgrade to the next major Fedora release as soon as it is available and builds daily. Stable will upgrade when CoreOS does its userspace upgrade, which is usually a few weeks afterwards, and builds weekly. If needed, stable will also be built in the following situations:

- **Patched security vulnerabilities** — critical fixes are backported and released immediately
- **Major feature updates** — significant releases such as new KDE Plasma versions

Testing will be a place for us to test new features and changes before they go into production, so it will be more volatile than latest and should only be used by enthusiasts and testers who are comfortable with potential issues. It is also a good way to contribute to the project by providing feedback on new features and changes before they are released to a wider audience.

All of the streams use the same base images, which means you won't get newer packages faster in `testing` that you would get in `latest`.

### Gated Kernel

The stable tag features a gated kernel. This kernel follows the same version as the [Fedora CoreOS stable stream](https://fedoraproject.org/coreos/release-notes?arch=x86_64&stream=stable), which is a slower cadence than default Fedora Kinoite. The Universal Blue team may temporarily pin to a specific kernel in order to avoid regressions that may affect users.

Adding and editing kernel boot arguments is currently handled by rpm-ostree, check the [upstream documentation](https://docs.fedoraproject.org/en-US/fedora-coreos/kernel-args/#_modifying_kernel_arguments_on_existing_systems) for more information.

## Available Streams

### Stable

The **stable** stream is the recommended choice for most users. It provides:

- **Regular Updates**: Weekly release cycles
- **Unscheduled Builds**: Emergency builds for important fixes such as patched security vulnerabilities and major feature updates (e.g., new KDE Plasma releases)
- **Production Ready**: Suitable for daily use and production environments
- **Gated Kernel**: Uses a gated kernel for enhanced stability

**Image Tags**: `stable`

**Examples**:

- `ghcr.io/ublue-os/aurora:stable`
- `ghcr.io/ublue-os/aurora-dx:stable`
- `ghcr.io/ublue-os/aurora-nvidia-open:stable`
- `ghcr.io/ublue-os/aurora-dx-nvidia-open:stable`

### Latest

The **latest** stream provides:

- **Cutting Edge**: Latest features and improvements
- **Faster Updates**: Updates as soon as they're available
- **Latest Kernel**: Uses the latest available kernel
- **Testing Ground**: Newer packages that may have occasional issues
- **For Enthusiasts**: Best for users who want the newest packages

**Image Tags**: `latest`

**Examples**:

- `ghcr.io/ublue-os/aurora:latest`
- `ghcr.io/ublue-os/aurora-dx:latest`
- `ghcr.io/ublue-os/aurora-nvidia-open:latest`
- `ghcr.io/ublue-os/aurora-dx-nvidia-open:latest`

### Testing

The **testing** stream is for users who want to validate new features and changes before they reach production. It provides:

- **Pre-release Validation**: Test new features before they're promoted to `stable`
- **Most Volatile**: Expect occasional issues — this stream is for enthusiasts and testers who are comfortable with potential breakage
- **Contributing**: Help Aurora by reporting issues early

**Image Tags**: `testing`

**Examples**:

- `ghcr.io/ublue-os/aurora:testing`
- `ghcr.io/ublue-os/aurora-dx:testing`
- `ghcr.io/ublue-os/aurora-nvidia-open:testing`
- `ghcr.io/ublue-os/aurora-dx-nvidia-open:testing`

## Choosing the Right Stream

### Use **Stable** if you want

- A reliable daily driver
- Weekly updates without cutting-edge instability
- The best balance of features and stability
- **Recommended for most users**

### Use **Latest** if you want

- The newest features immediately
- Latest kernel and packages
- To help test upcoming changes
- Are comfortable with occasional issues

### Use **Testing** if you want

- The absolute latest builds, as soon as they're available
- To help validate new features before they move to production
- Are comfortable with potential breakage
- Want to help the project find bugs early

## Switching Between Streams

You can switch between streams using either the `rebase-helper` tool or the `bootc switch` command:

### Using the Rebase Helper Tool (Recommended)

The easiest way to switch between streams is using Aurora's built-in rebase helper:

```bash
ujust rebase-helper
```

<img width="416" height="229" alt="image" src="https://github.com/user-attachments/assets/682057ec-e435-4fe7-aca5-928ee1a7063f" />

This interactive tool will guide you through:

- Switching between different Aurora streams (stable, latest, testing)
- Moving between hardware-specific images (aurora, aurora-dx, aurora-nvidia, etc.)
- Selecting the appropriate image for your system

### Using Bootc Switch Commands

### To Stable Stream

```bash
sudo bootc switch --enforce-container-sigpolicy ghcr.io/ublue-os/aurora:stable
```

### To Latest Stream

```bash
sudo bootc switch --enforce-container-sigpolicy ghcr.io/ublue-os/aurora:latest
```

### To Testing Stream

```bash
sudo bootc switch --enforce-container-sigpolicy ghcr.io/ublue-os/aurora:testing
```

### Hardware-Specific Images

Replace `aurora` with your specific image variant:

- `aurora-dx` for Developer Experience variant
- `aurora-nvidia-open` for NVIDIA open driver support

## Update Frequency and Throttling

### Stable Stream

- Unscheduled builds may occur for:
  - **Patched security vulnerabilities** — critical fixes are backported and released immediately
  - **Major feature updates** — significant releases such as new KDE Plasma versions
- Uses gated kernel for enhanced stability
- Updates include both system packages and container updates

### Latest Stream

- Updates follow Fedora's release schedule closely
- More frequent updates as changes become available
- Uses latest available Fedora kernel
- May include beta or release candidate packages

### Testing Stream

- Early access to new features and changes
- Used for pre-release validation before promotion to `stable` and `latest`
- Most volatile stream — expect occasional issues

## Checking Your Current Stream

To see which stream you're currently using:

```bash
rpm-ostree status
```

Look for the container image URL in the output to identify your current stream.

## Recommendations

- **New Users**: Start with the **stable** stream
- **Developers**: Consider **stable** for reliability or **latest** for newest tools
- **Enthusiasts**: Try **latest** for cutting-edge features, or **testing** for bleeding edge

Remember that you can always switch between streams if your needs change!
