---
title: Game Streaming with Sunshine
description: A comprehensive guide to using Sunshine for game streaming on Aurora
---

Sunshine is a self-hosted game streaming server that allows you to stream games from your Aurora desktop to any device running a Moonlight client. It offers low-latency gaming with hardware-accelerated encoding support for AMD, Intel, and NVIDIA GPUs.

## What is Sunshine?

Sunshine is an open-source, self-hosted alternative to NVIDIA GameStream that works with any GPU. It allows you to:

- Stream games from your Aurora desktop to phones, tablets, laptops, and other devices
- Play games remotely with low latency using hardware acceleration
- Access your desktop remotely for productivity tasks
- Use any Moonlight-compatible client for streaming

Sunshine is included by default in Aurora and provides a web-based configuration interface for easy setup.

## Prerequisites

### System Requirements

**Minimum Requirements:**

- **GPU**: Hardware encoding support (see compatibility below)
- **CPU**: Intel Core i3 / AMD Ryzen 3 or higher
- **RAM**: 4GB or more
- **Network**: 5GHz 802.11ac WiFi or wired connection

**For 4K Streaming:**

- **GPU**: More recent hardware encoding support
- **CPU**: Intel Core i5 / AMD Ryzen 5 or higher
- **Network**: Wired ethernet connection recommended

### GPU Compatibility

**AMD GPUs:**

- VCE 1.0 or higher for basic streaming
- VCE 3.1 or higher recommended for 4K
- VCE 3.4 or higher for HDR

**Intel GPUs:**

- VAAPI-compatible on Linux
- Skylake or newer with QuickSync for Windows compatibility
- HD Graphics 510+ for 4K
- HD Graphics 730+ for HDR

**NVIDIA GPUs:**

- NVENC-enabled cards
- GTX 1080+ for 4K on Windows
- RTX 2000 series+ for 4K on Linux
- GTX 10-series+ for HDR

## Getting Started

### Initial Setup with ujust

Aurora provides a convenient command to manage the Sunshine service:

```bash
ujust setup-sunshine
```

This command provides options to:

- **Enable** the Sunshine service and start it automatically
- **Disable** the Sunshine service
- **Open Portal** to access the web interface at https://localhost:47990
- **Exit** without making changes

The command will prompt you to choose from these options, or you can specify them directly (e.g., `ujust setup-sunshine enable`).

### Installing Moonlight Client

You'll need a Moonlight client on the device you want to stream to:

- **Android/iOS**: Install from app stores
- **Windows/Mac/Linux**: Download from [moonlight-stream.org](https://moonlight-stream.org)
- **Steam Deck**: Available through Discover
- **Nintendo Switch**: Available through homebrew
- **Web Browser**: Some web-based clients available

### First-Time Setup

1. **Enable Sunshine Service**:

   ```bash
   ujust setup-sunshine enable
   ```

   Or run `ujust setup-sunshine` and select "Enable" from the menu.

2. **Configure Firewall** (required for network access):

   ```bash
   # Allow Sunshine through firewall
   sudo firewall-cmd --permanent --add-port=47989/tcp
   sudo firewall-cmd --permanent --add-port=47990/tcp
   sudo firewall-cmd --permanent --add-port=48010/tcp
   sudo firewall-cmd --reload
   ```

3. **Access Sunshine Web UI**:

   ```bash
   # Open the web interface
   ujust setup-sunshine portal
   # Or manually navigate to: https://localhost:47990
   ```

4. **Create Admin Account**:
   - On first access, you'll be prompted to create an admin username and password
   - Use a secure password as this controls access to your streaming server

5. **Configure Basic Settings**:
   - Set your desired streaming resolution and framerate
   - Configure audio settings
   - Set up client authentication

## Configuration

### Web Interface Configuration

Access the Sunshine web interface at `https://localhost:47990` to configure:

**Display Settings:**

- Output resolution (1080p, 1440p, 4K)
- Framerate (30, 60, 120 FPS)
- Bitrate settings
- HDR support (if hardware supports it)

**Audio Settings:**

- Audio device selection
- Surround sound configuration
- Audio codec preferences

**Input Settings:**

- Gamepad support
- Keyboard and mouse input
- Touch input handling

**Network Settings:**

- Port configuration (default 47989-47990)
- UPnP settings
- External IP configuration

### Adding Applications

1. **Navigate to Applications** in the web UI
2. **Add New Application**:
   - **Name**: Display name for the app
   - **Command**: Full path to executable
   - **Working Directory**: Application folder
   - **Image Path**: Optional icon for the app

**Example Game Configuration:**

```
Name: Steam Big Picture
Command: flatpak run com.valvesoftware.Steam steam://open/bigpicture
Working Directory: /home/username
```

**Example Desktop Configuration:**

```
Name: Desktop
Command: /usr/bin/plasma-desktop
Working Directory: /home/username
```

### Firewall Configuration

The `ujust setup-sunshine` command only manages the service, so you'll need to configure firewall rules manually. Sunshine requires certain ports to be open:

```bash
# Allow Sunshine through firewall
sudo firewall-cmd --permanent --add-port=47989/tcp
sudo firewall-cmd --permanent --add-port=47990/tcp
sudo firewall-cmd --permanent --add-port=48010/tcp
sudo firewall-cmd --reload
```

For systems using UFW:

```bash
sudo ufw allow 47989/tcp
sudo ufw allow 47990/tcp
sudo ufw allow 48010/tcp
```

## Client Setup and Pairing

### Pairing a New Device

1. **Start Sunshine**: Ensure Sunshine is running on Aurora
2. **Get Pairing PIN**:
   - Access the web UI at `https://localhost:47990`
   - Go to "Pin" section to generate a pairing PIN
3. **Add Host in Moonlight**:
   - Open Moonlight on your client device
   - Add host using your Aurora IP address
   - Enter the pairing PIN when prompted

### Finding Your IP Address

```bash
# Find your local IP address
ip addr show | grep 'inet ' | grep -v '127.0.0.1'
# Or use the simpler command:
hostname -I
```

## Optimizing Performance

### Network Optimization

**For Best Performance:**

- Use wired ethernet connection when possible
- Ensure strong WiFi signal (5GHz preferred)
- Consider gaming routers with QoS features
- Minimize network traffic during streaming

**Bitrate Guidelines:**

- **1080p 60fps**: 10-20 Mbps
- **1440p 60fps**: 20-40 Mbps
- **4K 60fps**: 50-100 Mbps

### Hardware Acceleration

Sunshine automatically detects and uses available hardware encoders:

**Check Hardware Encoding Status:**

- Monitor the Sunshine logs for encoder information
- NVENC (NVIDIA), QuickSync (Intel), or VCE (AMD) should be detected
- Software encoding will be used as fallback

**GPU Settings for NVIDIA:**

```bash
# Ensure NVIDIA drivers are properly installed
nvidia-smi
# Check for NVENC support
nvidia-ml-py3
```

### Gaming-Specific Optimizations

**Steam Configuration:**

- Enable Hardware Accelerated GPU Scheduling in Windows (if dual-booting)
- Use Steam Big Picture mode for controller support
- Configure Steam In-Home Streaming settings

**Reduce Input Lag:**

- Use "Fast" encoding preset
- Lower framerate cap if needed
- Enable "Reduce Buffering" in Moonlight client
- Use wired controllers when possible

## Managing Sunshine

### Sunshine Service Control

Aurora provides a convenient command for service management:

```bash
# Interactive service management (recommended for beginners)
ujust setup-sunshine

# Or specify the action directly:
ujust setup-sunshine enable    # Enable and start the service
ujust setup-sunshine disable   # Disable and stop the service
ujust setup-sunshine portal    # Open the web interface
```

For manual service management using systemctl:

```bash
# Check Sunshine status
systemctl --user status sunshine

# Start Sunshine
systemctl --user start sunshine

# Stop Sunshine
systemctl --user stop sunshine

# Enable automatic startup
systemctl --user enable sunshine

# Disable automatic startup
systemctl --user disable sunshine
```

### Configuration Files

Sunshine configuration is stored in:

```
~/.config/sunshine/
├── sunshine.conf    # Main configuration
├── apps.json       # Application definitions
└── credentials.json # Authentication data
```

### Viewing Logs

```bash
# View real-time logs
journalctl --user -f -u sunshine

# View recent logs
journalctl --user -u sunshine --since "1 hour ago"
```

## Troubleshooting

### Common Issues

**Cannot Connect to Web UI:**

- Verify Sunshine is running: `systemctl --user status sunshine`
- Check firewall settings
- Try accessing via `http://localhost:47990` instead of https

**Client Cannot Find Host:**

- Verify Aurora IP address
- Check firewall configuration
- Ensure both devices are on same network
- Try manual IP entry in Moonlight

**Poor Streaming Quality:**

- Check network bandwidth and latency
- Reduce resolution or framerate
- Adjust bitrate settings
- Verify hardware encoding is working

**Audio Issues:**

- Check audio device selection in Sunshine
- Verify audio is working on Aurora host
- Test different audio codecs
- Check client device audio settings

**Controller Not Working:**

- Verify controller works on Aurora host
- Check input settings in Sunshine
- Try different controller mapping
- Ensure gamepad support is enabled

### Performance Issues

**High Latency:**

- Use wired connection
- Reduce encoding settings
- Close unnecessary applications
- Check for network interference

**Stuttering or Lag:**

- Monitor CPU/GPU usage during streaming
- Adjust encoder settings
- Check for thermal throttling
- Verify sufficient network bandwidth

**Black Screen Issues:**

- Try different display capture method
- Check GPU driver status
- Verify application compatibility
- Test with desktop streaming first

### Getting Help

**Log Collection:**

```bash
# Collect detailed logs for troubleshooting
journalctl --user -u sunshine > sunshine_logs.txt
```

**Community Support:**

- [LizardByte Discord](https://discord.gg/A7MXQKM)
- [Sunshine GitHub Issues](https://github.com/LizardByte/Sunshine/issues)
- [Aurora Community Forums](https://universal-blue.discourse.group/)

## Advanced Usage

### Custom Applications

**Adding Non-Steam Games:**

```json
{
  "name": "Custom Game",
  "cmd": "/path/to/game/executable",
  "working-dir": "/path/to/game/",
  "image-path": "/path/to/icon.png"
}
```

**Desktop Environments:**

- Stream entire desktop for productivity use
- Configure multiple desktop environments
- Set up virtual displays for dedicated streaming

### Remote Access

Sunshine isn't just for gaming - it can provide full remote desktop access:

**Desktop Streaming:**

- Add KDE Plasma as an application
- Stream productivity applications
- Access files and settings remotely

**Security Considerations:**

- Use strong authentication
- Consider VPN for external access
- Regularly update Sunshine
- Monitor access logs

### Multiple GPU Setups

For systems with multiple GPUs:

- Configure which GPU handles encoding
- Set up GPU-specific profiles
- Monitor GPU usage during streaming

## Best Practices

### Security

- **Use Strong Passwords**: For both Aurora user account and Sunshine admin
- **Network Isolation**: Consider separate network for streaming if needed
- **Regular Updates**: Keep Sunshine updated through system updates
- **Access Control**: Monitor which devices are paired

### Performance

- **Dedicated Streaming Setup**: Consider dedicated GPU for encoding if available
- **Network Infrastructure**: Invest in quality network equipment
- **System Maintenance**: Keep Aurora updated and optimized
- **Monitor Resources**: Watch CPU/GPU usage during streaming

### User Experience

- **Test Configurations**: Try different settings for optimal experience
- **Multiple Profiles**: Set up different quality profiles for different devices
- **Controller Setup**: Ensure controllers work well on target devices
- **Backup Configuration**: Save working configurations

## Conclusion

Sunshine provides excellent game streaming capabilities on Aurora, allowing you to enjoy your games anywhere in your home or remotely. With proper setup and optimization, you can achieve near-native gaming performance on various devices.

The combination of Aurora's stability and Sunshine's flexibility makes for a powerful streaming solution that rivals commercial alternatives while giving you complete control over your setup.

For the best experience, start with a wired network connection and gradually optimize settings based on your specific hardware and network conditions.
