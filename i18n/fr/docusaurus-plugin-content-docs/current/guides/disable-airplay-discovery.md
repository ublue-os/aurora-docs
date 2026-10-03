---
title: Désactiver la découverte Airplay par Pipewire
description: Guide pour désactiver la découverte Airplay par Pipewire
---

Si vous voyez un grand nombre de sorties dans votre liste d'entrées audio correspondant à des Macbooks ou à d'autres appareils compatibles AirPlay comme des Homepods, vous pouvez empêcher Pipewire de les découvrir automatiquement si vous le souhaitez.

Créez le répertoire de configuration pipewire dans votre dossier personnel comme ceci :

```bash
mkdir -p ~/.config/pipewire/pipewire.conf.d/
```

Rendez-vous dans ce dossier :

```bash
cd ~/.config/pipewire/pipewire.conf.d/
```

Créons le fichier de configuration et ouvrons-le pendant que nous y sommes :

```bash
touch disable-raop.conf

# Open the file with your default text editor
open disable-raop.conf
```

Collez le code suivant dedans :

```conf
context.properties = { module.raop = false }
```

Enregistrez le fichier et redémarrez votre machine. Les sorties sonores AirPlay devraient désormais avoir disparu de vos réglages audio.
