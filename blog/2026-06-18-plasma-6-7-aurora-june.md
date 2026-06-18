---
title: Stargazer (6) 7 - Aurora June 2026 status update
description: Aurora June 2026 status update
slug: june26-update
authors:
  - inffy
  - renner0e
---

Hey Stargazers,

The year is progressing and we are already halfway through 2026. A lot of things have been happening behind the scenes, so this is a great time to give you a status update on what we have been up to and what is coming next.

## KDE Plasma 6.7 released

KDE has [released Plasma 6.7](https://kde.org/announcements/plasma/6/6.7.0/), and it is already available on all of our streams.

We are very excited to see the per-screen workspaces feature and the dark mode toggle.

## Stable-daily retirement and testing streams

As we [posted](https://docs.getaurora.dev/blog/retiring-stable-daily) a few weeks back, we have removed the `stable-daily` stream option from our images. It lowers our maintenance burden and to allow us to more easily implement a separate `testing` stream.

### Testing stream

The new `testing` stream was implemented a couple weeks ago, but because we wanted to test it ourselves first, we haven't really talked about it until now.

Here is a breakdown of how our current streams look:

| Feature                 | Stable      | Latest           | Testing               |
| ----------------------- | ----------- | ---------------- | --------------------- |
| **Target Users**        | Production  | Advanced users   | Enthusiasts & Testers |
| **System Updates**      | Weekly      | Daily / As built | Daily / As built      |
| **Application Updates** | Twice a day | Twice a day      | Twice a day           |
| **Kernel**              | Gated       | Not gated        | Not gated             |

Our [docs](https://docs.getaurora.dev/guides/release-streams) have been updated to reflect these changes and to provide more general information about each stream.

If you are interested in how this works behind the scenes then check out [this document](https://github.com/ublue-os/aurora/blob/5ce45617833279b2e8c3a510af34dab99d2c6abe/CONTRIBUTING.md).

Running the testing builds is an excellent way to help us find issues before they reach our `stable` images. We don't recommend running these on critical production systems, but if you have a spare laptop or desktop, then this is a great way to help us out (thank you!).

In practice, this means that the `latest` stream especially is now better tested and if you were already fine on the daily images before, then you probably won't mind the testing branches either, as those were effectively our testing ground. Even if they didn't have the scary "testing label."

You can use our `ujust rebase-helper` tool, which features an option to select the `testing` stream, or you can switch manually using the commands below:

```bash
sudo bootc switch --enforce-container-sigpolicy ghcr.io/ublue-os/aurora:testing
sudo bootc switch --enforce-container-sigpolicy ghcr.io/ublue-os/aurora-dx:testing
sudo bootc switch --enforce-container-sigpolicy ghcr.io/ublue-os/aurora-nvidia-open:testing
sudo bootc switch --enforce-container-sigpolicy ghcr.io/ublue-os/aurora-dx-nvidia-open:testing
```

## New rechunker (again)

Previously, we used `hhd-rechunker` to handle the rechunking of our images to make updates smaller (just like Bazzite and Bluefin did) for quite a big chunk of the project's history. [Since spring](https://docs.getaurora.dev/blog/aurora-spring26-update), we have used the built-in `rpm-ostree` rechunker.

Now we have implemented a newer and more promising rechunker called [chunkah](https://github.com/coreos/chunkah).

Chunkah is actively maintained, and its algorithm seems to provide a more stable layer plan. This results in smaller download sizes for weekly updates compared to `rpm-ostree`. You probably won't notice a massive difference if you are on daily builds like `latest` or `testing`, but for users on our weekly builds, update sizes should be a bit smaller.

This change currently only lives in our testing stream but we expect to make this available to the other streams in the coming weeks.

If you maintain a custom image with the [image-template](https://github.com/ublue-os/image-template/), then you definitely want to keep an eye out for this as well. The image-template has also seen some [major changes](https://github.com/ublue-os/image-template/commit/7f9dd326ec891735fa8e7c482ae88ac178f89219), which make it easier to locally iterate and implement either of the aforementioned rechunkers yourself. Bluebuild is also [actively working on implementing Chunkah](https://github.com/blue-build/cli/pull/790) if you are using their template.

## Upcoming changes

### ZFS removal in Fall 2026

As we [previously](https://docs.getaurora.dev/blog/aurora44-beta#important-notice-related-to-fedora-45) mentioned, ZFS will be removed from the images when Fedora 45 is released in the fall (currently scheduled for Tuesday, 2026-10-20).

This was not an easy decision, but we arrived at it due to release cadence issues as there have been several instances where we were forced to delay our stable image releases. Fedora's kernel moves aggressively - whenever a new kernel version rolls out, it requires corresponding support from ZFS, which can often take a while to catch up.

See the [Github issue](https://github.com/ublue-os/aurora/issues/1765).

This is all for today.

Have a nice summer, stargazers!

## [Discussion](https://github.com/ublue-os/aurora/discussions/2413)
