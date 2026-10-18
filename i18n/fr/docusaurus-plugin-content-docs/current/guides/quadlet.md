---
title: Exécuter des services avec Quadlet
description: Exécutez des applications de serveur domestique à l'aide de conteneurs.
---

## Qu'est-ce que Quadlet ? {#what-is-quadlet}

Quadlet est une fonctionnalité de [podman](https://podman.io/) qui permet à un utilisateur d'exécuter un conteneur sous forme d'unités [systemd](https://systemd.io/). Il fonctionne avec une syntaxe déclarative comme [docker compose](https://docs.docker.com/compose/), mais s'intègre à systemd et utilise podman comme moteur.

### Exemple rapide : {#quick-example}

Créez un fichier nommé `~/.config/containers/systemd/nginx.container` avec le contenu ci-dessous.

```
[Container]
ContainerName=nginx
Image=docker.io/nginxinc/nginx-unprivileged
PublishPort=8080:8080
```

Enregistrez-le puis exécutez le code ci-dessous.

```sh
systemctl --user daemon-reload
systemctl --user start nginx
xdg-open localhost:8080
```

## Cas d'usage {#use-cases}

Quadlet peut être utilisé pour les applications packagées sous forme de conteneurs, comme les applications serveur. Vous trouverez de nombreux exemples d'applications conteneurisées chez [Linux Server](https://docs.linuxserver.io/images/).

## Gestion de Quadlet {#managing-quadlet}

Quadlet peut être géré comme n'importe quel autre service systemd à l'aide des commandes ci-dessous.

Vérifier l'état du quadlet

```sh
systemctl --user status nginx
```

Arrêter le quadlet

```sh
systemctl --user stop nginx
```

Vous trouverez d'autres commandes dans [man systemctl](https://man.archlinux.org/man/systemctl.1) ou [tldr systemctl](https://tldr.inbrowser.app/pages/linux/systemctl).

### Emplacement des fichiers quadlet {#quadlet-file-location}

Vous pouvez placer vos fichiers quadlet dans ces emplacements, triés par priorité.

- `$XDG_RUNTIME_DIR/containers/systemd/` - Généralement utilisé pour des quadlets temporaires
- `~/.config/containers/systemd/` - Emplacement recommandé
- `/etc/containers/systemd/users/$(UID)`
- `/etc/containers/systemd/users/`

### Exécution du quadlet au démarrage {#running-quadlet-on-startup}

**Remarque** : si vous souhaitez que votre service démarre même lorsque vous n'êtes pas connecté, exécutez `loginctl enable-linger $USER` pour le démarrer automatiquement.

Vous voudrez peut-être exécuter votre quadlet automatiquement au démarrage ; ajoutez simplement une section install au fichier quadlet pour qu'il démarre automatiquement. La plupart du temps, `default.target` convient, mais si vous avez besoin d'une autre cible, vous pouvez consulter la documentation systemd.

```
[Install]
WantedBy=default.target
```

Par exemple :

```
[Container]
ContainerName=nginx
Image=docker.io/nginxinc/nginx-unprivileged
PublishPort=8080:8080

[Install]
WantedBy=default.target
```

Vous n'avez pas besoin d'exécuter `systemctl enable` car les fichiers de service sont générés. De toute façon, vous ne pourriez pas l'exécuter.

### Conversion de Docker Compose en unité Quadlet {#converting-docker-compose-to-quadlet-unit}

Vous constaterez que la plupart des applications conteneurisées présentes sur le web sont construites avec docker compose. Même Linux Server, lié ci-dessus, documente tous ses conteneurs à l'aide de fichiers compose. Vous devrez donc d'abord les convertir avant de les exécuter en quadlet ; heureusement, vous pouvez utiliser [podlet](https://github.com/containers/podlet) pour vous aider à les convertir.

Par défaut, quadlet exige le nom complet du dépôt. La plupart des images se trouvent sur Docker Hub, vous pouvez donc simplement ajouter `docker.io/` (par ex. « nginxinc/nginx-unprivileged » devient « docker.io/nginxinc/nginx-unprivileged »).

### Exécution d'un conteneur rootful en quadlet {#running-rootful-container-as-quadlet}

Idéalement, vous exécuteriez tous les conteneurs avec podman rootless, mais malheureusement tous ne fonctionnent pas ainsi. Comme vous l'avez peut-être remarqué au début, ce guide utilise nginx-unprivileged plutôt que le nginx habituel, car ce dernier a besoin de root pour fonctionner. Pour utiliser podman rootful, vous devrez utiliser un autre emplacement de quadlet et l'exécuter avec systemctl en root (sans `--user`).

Emplacements des quadlets rootful

- `/run/containers/systemd/` - Quadlets temporaires
- `/etc/containers/systemd/` - Emplacement recommandé
- `/usr/share/containers/systemd/` - Défini par l'image

### Description des clés Quadlet courantes {#common-quadlet-key-description}

| Option        | Exemple                                     | Description                                                                                                      |
| ------------- | ------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| ContainerName | ContainerName=nginx                         | Nom du conteneur.                                                                                                |
| Image         | Image=docker.io/nginxinc/nginx-unprivileged | Image de conteneur que vous souhaitez utiliser.                                                                  |
| PublishPort   | PublishPort=8080:8080                       | Port ouvert par le conteneur. (HOST_PORT:CONTAINER_PORT)                                                         |
| Volume        | Volume=/path/to/data:/data:z                | Relie un dossier de l'hôte à un dossier du conteneur. (HOST_FOLDER:CONTAINER_FOLDER:OPTION)                      |
| Network       | Network=host                                | Réseau utilisé par le conteneur. La valeur peut être `host`, `none` ou un nom de réseau défini par l'utilisateur |

L'option `z` du volume sert à empêcher selinux de bloquer l'accès au dossier. Vous pouvez en savoir plus [ici](https://docs.podman.io/en/stable/markdown/podman-run.1.html#volume-v-source-volume-host-dir-container-dir-options).

## Exemple {#example}

### Serveur Minecraft {#minecraft-server}

Documentation : https://docker-minecraft-server.readthedocs.io/en/latest
Fichier Quadlet :

```
[Container]
ContainerName=minecraft
Environment=EULA=TRUE
Image=docker.io/itzg/minecraft-server
PublishPort=25565:25565
Volume=/path/to/data:/data:z

# Remove if you don't want autostart
[Install]
WantedBy=default.target
```

Utilisez un chemin absolu pour le volume, p. ex. `/home/username/minecraft/data`.

### Serveur Plex {#plex-server}

Documentation : https://github.com/plexinc/pms-docker
Fichier Quadlet :

```
[Container]
ContainerName=plex
Environment=TZ=Your/TimeZone
Image=docker.io/plexinc/pms-docker
Network=host
Volume=/path/to/config:/config:z
Volume=/path/to/transcode:/transcode:z
Volume=/path/to/media:/data:z

# Remove if you don't want autostart
[Install]
WantedBy=default.target
```

Vous trouverez une liste des fuseaux horaires [ici](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones).

Utilisez un chemin absolu pour le volume, p. ex. `/home/username/plex/config`.

Vous pouvez monter plusieurs volumes pour vos médias, p. ex. `Volume=/path/to/media:/tv:z` et `Volume=/path/to/another/media:/movie:z`. Consultez la documentation pour plus d'informations.

## Site web du projet {#project-website}

https://podman.io/

### Liens utiles {#useful-links}

- https://docs.podman.io/en/stable/markdown/podman-systemd.unit.5.html
- https://www.redhat.com/en/blog/quadlet-podman

---

Documentation originale empruntée à la [documentation Bazzite](https://docs.bazzite.gg/Installing_and_Managing_Software/Quadlet/) par [@asen23](https://github.com/asen23)
