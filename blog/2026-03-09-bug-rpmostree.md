---
title: Bug in rpm-ostree stops updates
description: Bug in rpm-ostree stops updates.
slug: bug-rpmostree
authors:
  - inffy
  - renner0e
---

Hello, Stargazers!

This post is relevant if you happen to be running either our `stable-daily` or `latest` stream. And affects images from 6th of March.

One upstream package — rpm-ostree — was updated to version 2026.1 last week, and that version contains a bug that prevents updates.

<!-- truncate -->

We have implemented a fix by downgrading the package to an earlier version. The fix is now live, so make sure you manually update your image:

`rpm-ostree usroverlay`

Now downgrade the package:

`sudo dnf5 install --from-repo=updates-archive rpm-ostree-2025.12-1.fc$(rpm -E %fedora)`

And lastly upgrade your image:

`rpm-ostree upgrade`

to update.

This does not affect our `stable` stream; it only affects users on the `stable-daily` or `latest` streams.

You can check [this](https://github.com/coreos/rpm-ostree/issues/5567) upstream issue if you are interested.

We are sorry for the inconvenience. If you have any further questions then don't hesitate to reach out to us over on [Github](https://github.com/ublue-os/aurora)
