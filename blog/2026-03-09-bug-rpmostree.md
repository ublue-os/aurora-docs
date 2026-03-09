---
title: Bug in rpm-ostree stops updates
description: Bug in rpm-ostree stops updates.
slug: bug-rpmostree
authors: inffy
---

Hello, Stargazers!

This post is relevant if you happen to be running either our `stable-daily` or `latest` stream.

One upstream package — rpm-ostree — was updated to version 2026.1 last week, and that version contains a bug that prevents updates.

We have implemented a fix by downgrading the package to an earlier version. The fix is now live, so make sure you manually update your image:

`rpm-ostree usroverlay`

Now update the affected package:

`sudo dnf5 install --from-repo=updates-archive rpm-ostree-2025.12-1.fc$(rpm -E %fedora)`

And then upgrade your image:

`rpm-ostree upgrade`

to update.

This does not affect our `stable` stream; it only affects users on the `stable-daily` or `latest` streams.

We are sorry for the inconvenience.
