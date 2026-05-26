---
title: "Retiring stable-daily stream"
slug: retiring-stable-daily
description: Retiring stable-daily images
authors:
  - inffy
  - renner0e
---

Hello stargazers,

We have a small announcement to make regarding our stable-daily image streams.

Today we are going to retire that stream and won't be building it going forward. The stable-daily tag will be set to point to the stable stream, which means weekly system updates.

<!-- truncate -->

## But Why?

We actually briefly mentioned this in our 2025 wrap-up post. When we started looking into the ways of implementing the upcoming testing branch, we realised that building daily images was a maintenance burden and caused too much friction with how we wanted these new streams to work.

As we mentioned, there is a plan to move us to a two-step process for how we build and test things. Currently we have to test everything on `latest`, and as some users prefer to use it as a "rolling" release for Fedora base, it sometimes can break.

## Current users of stable-daily

The `stable-daily` stream is now pointed to `stable`, so you will still keep getting updates — but from now on they'll be based on weekly builds.

This ensures the streams stay working without needing user intervention to keep receiving updates. However, we still recommend users rebase to the stable stream using the `ujust rebase-helper`.

## [Discussion](https://github.com/ublue-os/aurora/discussions/XXX)
