---
title: ISO Testing
description: Aurora ISO testing
---

Our ISO testing program is an easy way to contribute back to the project. These ISOs get refreshed every Tuesday, two hours after the `aurora:stable` weekly build has completed. If you find issues, please file an issue on the [ISO repo](https://github.com/get-aurora-dev/iso).

## Things to Test For

- Installation experience
- Secure Boot
- Bare metal if possible but not required
- If you've got the time, go through the docs and run through the new user experience. These bugs are highly prized, so if you find one, file it!

## Aurora (stable ISOs)

| Version | GPU       | Download                                                                                                                  | Checksum                                                                                       |
| ------- | --------- | ------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Aurora  | AMD/Intel | [📥 aurora-stable-webui-x86_64.iso](https://dl-test.getaurora.dev/aurora-stable-webui-x86_64.iso)                         | [🔐 Verify](https://dl-test.getaurora.dev/aurora-stable-webui-x86_64.iso-CHECKSUM)             |
| Aurora  | Nvidia    | [📥 aurora-nvidia-open-stable-webui-x86_64.iso](https://dl-test.getaurora.dev/aurora-nvidia-open-stable-webui-x86_64.iso) | [🔐 Verify](https://dl-test.getaurora.dev/aurora-nvidia-open-stable-webui-x86_64.iso-CHECKSUM) |

## Aurora BETA ISOs

These images are built on `aurora:beta` and are meant to test Fedora 44 based ISOs. These have the new plasma-setup workflow.

| Version | GPU       | Download                                                                                                              | Checksum                                                                                     |
| ------- | --------- | --------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| Aurora  | AMD/Intel | [📥 aurora-beta-webui-x86_64.iso](https://dl-test.getaurora.dev/aurora-beta-webui-x86_64.iso)                         | [🔐 Verify](https://dl-test.getaurora.dev/aurora-beta-webui-x86_64.iso-CHECKSUM)             |
| Aurora  | Nvidia    | [📥 aurora-nvidia-open-beta-webui-x86_64.iso](https://dl-test.getaurora.dev/aurora-nvidia-open-beta-webui-x86_64.iso) | [🔐 Verify](https://dl-test.getaurora.dev/aurora-nvidia-open-beta-webui-x86_64.iso-CHECKSUM) |

## Verifying Downloads with Checksums

**Checksums** allow you to verify that your download completed successfully and wasn't corrupted or tampered with. After downloading an ISO, you can compare its checksum to the official checksum file to ensure integrity. While optional, verification is recommended for important installations.

#### How to verify checksums using sha256sum

1. **Download both the ISO file and its corresponding CHECKSUM file**
   - For example: `aurora-stable-webui-x86_64.iso` and `aurora-stable-webui-x86_64.iso-CHECKSUM`

2. **Verify the checksums match:**

   ```bash
   sha256sum -c aurora-stable-webui-x86_64.iso-CHECKSUM
   ```

**Example:**

```bash

# Check that the checksums match
$ sha256sum -c aurora-stable-webui-x86_64.iso-CHECKSUM
aurora-stable-webui-x86_64.iso: OK
```
