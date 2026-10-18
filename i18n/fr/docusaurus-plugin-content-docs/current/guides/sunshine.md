---
title: Le streaming de jeux avec Sunshine
description: Un guide complet de l'utilisation de Sunshine pour le streaming de jeux sur Aurora
---

Sunshine est un serveur de streaming de jeux auto-hébergé qui vous permet de diffuser vos jeux depuis votre bureau Aurora vers tout appareil exécutant un client Moonlight. Il offre une expérience de jeu à faible latence avec prise en charge de l'encodage matériel pour les GPU AMD, Intel et NVIDIA.

## Qu'est-ce que Sunshine ? {#what-is-sunshine}

Sunshine est une alternative open source et auto-hébergée à NVIDIA GameStream qui fonctionne avec n'importe quel GPU. Il vous permet de :

- Diffuser des jeux depuis votre bureau Aurora vers téléphones, tablettes, ordinateurs portables et autres appareils
- Jouer à distance avec une faible latence grâce à l'accélération matérielle
- Accéder à votre bureau à distance pour des tâches de productivité
- Utiliser n'importe quel client compatible Moonlight pour le streaming

Sunshine est inclus par défaut dans Aurora et fournit une interface de configuration web pour une prise en main facile.

## Prérequis {#prerequisites}

### Configuration système requise {#system-requirements}

**Configuration minimale :**

- **GPU** : prise en charge de l'encodage matériel (voir la compatibilité ci-dessous)
- **CPU** : Intel Core i3 / AMD Ryzen 3 ou supérieur
- **RAM** : 4 Go ou plus
- **Réseau** : WiFi 802.11ac 5 GHz ou connexion filaire

**Pour le streaming 4K :**

- **GPU** : prise en charge de l'encodage matériel plus récente
- **CPU** : Intel Core i5 / AMD Ryzen 5 ou supérieur
- **Réseau** : connexion Ethernet filaire recommandée

### Compatibilité GPU {#gpu-compatibility}

**GPU AMD :**

- VCE 1.0 ou supérieur pour un streaming basique
- VCE 3.1 ou supérieur recommandé pour la 4K
- VCE 3.4 ou supérieur pour le HDR

**GPU Intel :**

- Compatible VAAPI sous Linux
- Skylake ou plus récent avec QuickSync pour la compatibilité Windows
- HD Graphics 510+ pour la 4K
- HD Graphics 730+ pour le HDR

**GPU NVIDIA :**

- Cartes compatibles NVENC
- GTX 1080+ pour la 4K sous Windows
- Série RTX 2000+ pour la 4K sous Linux
- Série GTX 10+ pour le HDR

## Premiers pas {#getting-started}

### Configuration initiale avec ujust {#initial-setup-with-ujust}

Aurora fournit une commande de configuration pratique pour paramétrer Sunshine avec des réglages optimaux :

```bash
ujust setup-sunshine
```

Cette commande va :

- Configurer Sunshine avec les réglages recommandés pour Aurora
- Mettre en place les règles de pare-feu appropriées
- Activer le service Sunshine
- Fournir des repères de configuration initiale

### Installation du client Moonlight {#installing-moonlight-client}

Vous aurez besoin d'un client Moonlight sur l'appareil vers lequel vous souhaitez diffuser :

- **Android/iOS** : installez-le depuis les boutiques d'applications
- **Windows/Mac/Linux** : téléchargez-le depuis [moonlight-stream.org](https://moonlight-stream.org)
- **Steam Deck** : disponible via Discover
- **Nintendo Switch** : disponible via homebrew
- **Navigateur web** : quelques clients web sont disponibles

### Première configuration {#first-time-setup}

1. **Exécuter la commande de configuration Aurora** (recommandé) :

   ```bash
   ujust setup-sunshine
   ```

2. **Accéder à l'interface web de Sunshine** :

   ```bash
   # After running setup-sunshine, or if Sunshine is running by default
   # Open your web browser and go to:
   # https://localhost:47990
   ```

3. **Créer un compte administrateur** :
   - À la première connexion, vous serez invité à créer un identifiant et un mot de passe administrateur
   - Utilisez un mot de passe sécurisé, car il contrôle l'accès à votre serveur de streaming

4. **Configurer les réglages de base** :
   - Définissez la résolution et la fréquence d'images de streaming souhaitées
   - Configurez les paramètres audio
   - Mettez en place l'authentification des clients

## Configuration {#configuration}

### Configuration via l'interface web {#web-interface-configuration}

Accédez à l'interface web de Sunshine sur `https://localhost:47990` pour configurer :

**Réglages d'affichage :**

- Résolution de sortie (1080p, 1440p, 4K)
- Fréquence d'images (30, 60, 120 FPS)
- Réglages du débit binaire
- Prise en charge du HDR (si le matériel le permet)

**Réglages audio :**

- Sélection du périphérique audio
- Configuration du son surround
- Préférences de codec audio

**Réglages des entrées :**

- Prise en charge des manettes
- Entrées clavier et souris
- Gestion des entrées tactiles

**Réglages réseau :**

- Configuration des ports (47989-47990 par défaut)
- Paramètres UPnP
- Configuration de l'IP externe

### Ajouter des applications {#adding-applications}

1. **Rendez-vous dans Applications** dans l'interface web
2. **Ajouter une nouvelle application** :
   - **Nom** : nom affiché pour l'application
   - **Commande** : chemin complet de l'exécutable
   - **Répertoire de travail** : dossier de l'application
   - **Chemin de l'image** : icône facultative pour l'application

**Exemple de configuration d'un jeu :**

```
Name: Steam Big Picture
Command: flatpak run com.valvesoftware.Steam steam://open/bigpicture
Working Directory: /home/username
```

**Exemple de configuration du bureau :**

```
Name: Desktop
Command: /usr/bin/plasma-desktop
Working Directory: /home/username
```

### Configuration du pare-feu {#firewall-configuration}

Si vous avez utilisé `ujust setup-sunshine`, la configuration du pare-feu est gérée automatiquement. Sinon, Sunshine nécessite que certains ports soient ouverts :

```bash
# Allow Sunshine through firewall
sudo firewall-cmd --permanent --add-port=47989/tcp
sudo firewall-cmd --permanent --add-port=47990/tcp
sudo firewall-cmd --permanent --add-port=48010/tcp
sudo firewall-cmd --reload
```

Pour les systèmes utilisant UFW :

```bash
sudo ufw allow 47989/tcp
sudo ufw allow 47990/tcp
sudo ufw allow 48010/tcp
```

## Configuration du client et appairage {#client-setup-and-pairing}

### Appairer un nouvel appareil {#pairing-a-new-device}

1. **Démarrez Sunshine** : assurez-vous que Sunshine est en cours d'exécution sur Aurora
2. **Obtenez le code d'appairage (PIN)** :
   - Accédez à l'interface web sur `https://localhost:47990`
   - Allez dans la section « Pin » pour générer un code d'appairage
3. **Ajoutez l'hôte dans Moonlight** :
   - Ouvrez Moonlight sur votre appareil client
   - Ajoutez l'hôte à l'aide de l'adresse IP de votre Aurora
   - Saisissez le code d'appairage lorsque vous y êtes invité

### Trouver votre adresse IP {#finding-your-ip-address}

```bash
# Find your local IP address
ip addr show | grep 'inet ' | grep -v '127.0.0.1'
# Or use the simpler command:
hostname -I
```

## Optimiser les performances {#optimizing-performance}

### Optimisation du réseau {#network-optimization}

**Pour des performances optimales :**

- Utilisez une connexion Ethernet filaire quand c'est possible
- Assurez-vous d'avoir un signal WiFi puissant (5 GHz de préférence)
- Envisagez des routeurs de jeu dotés de fonctions QoS
- Réduisez au minimum le trafic réseau pendant le streaming

**Repères de débit binaire :**

- **1080p 60 fps** : 10-20 Mbit/s
- **1440p 60 fps** : 20-40 Mbit/s
- **4K 60 fps** : 50-100 Mbit/s

### Accélération matérielle {#hardware-acceleration}

Sunshine détecte et utilise automatiquement les encodeurs matériels disponibles :

**Vérifier l'état de l'encodage matériel :**

- Surveillez les journaux de Sunshine pour obtenir des informations sur l'encodeur
- NVENC (NVIDIA), QuickSync (Intel) ou VCE (AMD) doivent être détectés
- L'encodage logiciel sera utilisé en solution de repli

**Réglages GPU pour NVIDIA :**

```bash
# Ensure NVIDIA drivers are properly installed
nvidia-smi
# Check for NVENC support
nvidia-ml-py3
```

### Optimisations spécifiques au jeu {#gaming-specific-optimizations}

**Configuration Steam :**

- Activez Hardware Accelerated GPU Scheduling sous Windows (en cas de dual-boot)
- Utilisez le mode Big Picture de Steam pour la prise en charge des manettes
- Configurez les paramètres Steam In-Home Streaming

**Réduire la latence d'entrée :**

- Utilisez le préréglage d'encodage « Fast »
- Abaissez la limite de fréquence d'images si nécessaire
- Activez « Reduce Buffering » dans le client Moonlight
- Utilisez des manettes filaires quand c'est possible

## Gérer Sunshine {#managing-sunshine}

### Contrôle du service Sunshine {#sunshine-service-control}

Pour la configuration initiale, utilisez la commande pratique d'Aurora :

```bash
# Complete setup including service enablement
ujust setup-sunshine
```

Pour la gestion manuelle du service :

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

### Fichiers de configuration {#configuration-files}

La configuration de Sunshine est stockée dans :

```
~/.config/sunshine/
├── sunshine.conf    # Main configuration
├── apps.json       # Application definitions
└── credentials.json # Authentication data
```

### Consulter les journaux {#viewing-logs}

```bash
# View real-time logs
journalctl --user -f -u sunshine

# View recent logs
journalctl --user -u sunshine --since "1 hour ago"
```

## Dépannage {#troubleshooting}

### Problèmes courants {#common-issues}

**Impossible d'accéder à l'interface web :**

- Vérifiez que Sunshine est en cours d'exécution : `systemctl --user status sunshine`
- Vérifiez les réglages du pare-feu
- Essayez d'accéder via `http://localhost:47990` plutôt qu'en https

**Le client ne trouve pas l'hôte :**

- Vérifiez l'adresse IP d'Aurora
- Vérifiez la configuration du pare-feu
- Assurez-vous que les deux appareils sont sur le même réseau
- Essayez la saisie manuelle de l'IP dans Moonlight

**Qualité de streaming médiocre :**

- Vérifiez la bande passante et la latence du réseau
- Réduisez la résolution ou la fréquence d'images
- Ajustez les réglages du débit binaire
- Vérifiez que l'encodage matériel fonctionne

**Problèmes audio :**

- Vérifiez la sélection du périphérique audio dans Sunshine
- Vérifiez que l'audio fonctionne sur l'hôte Aurora
- Testez différents codecs audio
- Vérifiez les réglages audio de l'appareil client

**La manette ne fonctionne pas :**

- Vérifiez que la manette fonctionne sur l'hôte Aurora
- Vérifiez les réglages d'entrée dans Sunshine
- Essayez une autre configuration de manette
- Assurez-vous que la prise en charge des manettes est activée

### Problèmes de performances {#performance-issues}

**Latence élevée :**

- Utilisez une connexion filaire
- Réduisez les réglages d'encodage
- Fermez les applications inutiles
- Vérifiez l'absence d'interférences réseau

**Saccades ou lags :**

- Surveillez l'utilisation CPU/GPU pendant le streaming
- Ajustez les réglages de l'encodeur
- Vérifiez l'absence de bridage thermique
- Vérifiez que la bande passante réseau est suffisante

**Écran noir :**

- Essayez une autre méthode de capture d'écran
- Vérifiez l'état du pilote GPU
- Vérifiez la compatibilité de l'application
- Testez d'abord avec le streaming du bureau

### Obtenir de l'aide {#getting-help}

**Collecte des journaux :**

```bash
# Collect detailed logs for troubleshooting
journalctl --user -u sunshine > sunshine_logs.txt
```

**Support communautaire :**

- [Discord LizardByte](https://discord.gg/A7MXQKM)
- [Tickets GitHub de Sunshine](https://github.com/LizardByte/Sunshine/issues)
- [Forums de la communauté Aurora](https://universal-blue.discourse.group/)

## Utilisation avancée {#advanced-usage}

### Applications personnalisées {#custom-applications}

**Ajouter des jeux hors Steam :**

```json
{
  "name": "Custom Game",
  "cmd": "/path/to/game/executable",
  "working-dir": "/path/to/game/",
  "image-path": "/path/to/icon.png"
}
```

**Environnements de bureau :**

- Diffusez tout le bureau pour un usage de productivité
- Configurez plusieurs environnements de bureau
- Mettez en place des affichages virtuels pour un streaming dédié

### Accès à distance {#remote-access}

Sunshine ne sert pas qu'aux jeux : il peut fournir un accès complet à distance au bureau :

**Streaming du bureau :**

- Ajoutez KDE Plasma comme application
- Diffusez vos applications de productivité
- Accédez à distance aux fichiers et aux réglages

**Considérations de sécurité :**

- Utilisez une authentification robuste
- Envisagez un VPN pour l'accès externe
- Mettez régulièrement Sunshine à jour
- Surveillez les journaux d'accès

### Configurations multi-GPU {#multiple-gpu-setups}

Pour les systèmes équipés de plusieurs GPU :

- Configurez le GPU qui gère l'encodage
- Mettez en place des profils spécifiques à chaque GPU
- Surveillez l'utilisation des GPU pendant le streaming

## Bonnes pratiques {#best-practices}

### Sécurité {#security}

- **Utilisez des mots de passe robustes** : pour le compte utilisateur Aurora et pour l'administrateur Sunshine
- **Isolement réseau** : envisagez un réseau distinct pour le streaming si nécessaire
- **Mises à jour régulières** : maintenez Sunshine à jour via les mises à jour du système
- **Contrôle des accès** : surveillez les appareils appairés

### Performances {#performance}

- **Configuration de streaming dédiée** : envisagez un GPU dédié à l'encodage si disponible
- **Infrastructure réseau** : investissez dans du matériel réseau de qualité
- **Maintenance du système** : gardez Aurora à jour et optimisé
- **Surveillez les ressources** : observez l'utilisation CPU/GPU pendant le streaming

### Expérience utilisateur {#user-experience}

- **Testez les configurations** : essayez différents réglages pour une expérience optimale
- **Profils multiples** : mettez en place différents profils de qualité pour différents appareils
- **Configuration des manettes** : assurez-vous que les manettes fonctionnent bien sur les appareils cibles
- **Sauvegarde de la configuration** : conservez les configurations qui fonctionnent

## Conclusion {#conclusion}

Sunshine offre d'excellentes capacités de streaming de jeux sur Aurora, vous permettant de profiter de vos jeux partout dans votre maison ou à distance. Avec une configuration et une optimisation appropriées, vous pouvez atteindre des performances de jeu proches du natif sur divers appareils.

La combinaison de la stabilité d'Aurora et de la flexibilité de Sunshine constitue une solution de streaming puissante, rivalisant avec les alternatives commerciales tout en vous donnant un contrôle total sur votre installation.

Pour une expérience optimale, commencez par une connexion réseau filaire puis optimisez progressivement les réglages en fonction de votre matériel et de vos conditions réseau spécifiques.
