---
title: ISO Testing
description: Aurora ISO testing
---

Our ISO testing program is an easy way to contribute back to the project. We plan to refresh these ISO images every first of the month. If you find issues, please raise on github issue on the [ISO repo](https://github.com/get-aurora-dev/iso).

## Things to Test For

- Installation experience
- Secure Boot
- Bare metal if possible but not required
- If you've got the time, go through the docs and run through the new user experience. These bugs are highly prized, so if you find one, file it!

## Aurora

| Version | GPU       | Download                                                                                                                  | Checksum                                                                                       |
| ------- | --------- | ------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| Aurora  | AMD/Intel | [📥 aurora-stable-webui-x86_64.iso](https://dl-test.getaurora.dev/aurora-stable-webui-x86_64.iso)                         | [🔐 Verify](https://dl-test.getaurora.dev/aurora-stable-webui-x86_64.iso-CHECKSUM)             |
| Aurora  | Nvidia    | [📥 aurora-nvidia-open-stable-webui-x86_64.iso](https://dl-test.getaurora.dev/aurora-nvidia-open-stable-webui-x86_64.iso) | [🔐 Verify](https://dl-test.getaurora.dev/aurora-nvidia-open-stable-webui-x86_64.iso-CHECKSUM) |

## Verifying Downloads with Checksums

**Checksums** allow you to verify that your download completed successfully and wasn't corrupted or tampered with. After downloading an ISO, you can compare its checksum to the official checksum file to ensure integrity. While optional, verification is recommended for important installations.

#### How to verify checksums using sha256sum

1. **Download both the ISO file and its corresponding CHECKSUM file**
   - For example: `aurora-stable-webui-x86_64.iso` and `aurora-stable-webui-x86_64.iso-CHECKSUM`

2. **Generate the checksum of your downloaded ISO:**

   ```bash
   sha256sum aurora-stable-webui-x86_64.iso
   ```

3. **Compare with the official checksum file:**

   ```bash
   cat aurora-stable-webui-x86_64.iso-CHECKSUM
   ```

4. **Verify they match:** The output from step 2 should match the hash in the CHECKSUM file. If they match, your download is verified and safe to use.

**Example:**

```bash
# Generate checksum of downloaded file
$ sha256sum aurora-stable-webui-x86_64.iso
a1b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef123456  aurora-stable-webui-x86_64.iso

# Check official checksum
$ cat aurora-stable-webui-x86_64.iso-CHECKSUM
a1b2c3d4e5f6789012345678901234567890abcdef1234567890abcdef123456  aurora-stable-webui-x86_64.iso

```
