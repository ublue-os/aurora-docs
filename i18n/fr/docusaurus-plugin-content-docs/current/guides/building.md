---
title: Construire Aurora localement sans GitHub
description: Comment construire Aurora sur votre ordinateur
---

# Construire Aurora localement sans GitHub

La plupart de ces conseils ne sont pas propres à Aurora : leurs principes s'appliquent à toute image de conteneur, amorçable ou non.

Nous supposons que vous êtes assez à l'aise avec les outils en ligne de commande utilisés ici, comme git, podman ou un éditeur de texte.

Nous n'expliquerons pas tout ici : il s'agit seulement d'un aperçu général du fonctionnement. Vous devez pouvoir chercher vous-même des informations complémentaires sur les outils mentionnés pour déployer nos images (`man`, `--help` ou toute autre forme de documentation).

N'hésitez toutefois pas à nous contacter si vous avez des questions !

## Comprendre l'architecture d'Aurora {#understanding-auroras-architecture}

Les images d'Aurora sont construites à partir de plusieurs dépôts qui fonctionnent ensemble :

- **[ublue-os/aurora](https://github.com/ublue-os/aurora)** - Dépôt principal des images, qui orchestre le processus de construction et définit les images finales
- **[get-aurora-dev/common](https://github.com/get-aurora-dev/common)** - Configurations d'Aurora, recettes ujust, [éléments graphiques](https://github.com/ublue-os/artwork) et personnalisations reposant sur [aurorafin-shared](https://github.com/ublue-os/aurorafin-shared) (ujust, MOTD, configuration des outils en ligne de commande, etc.)
- **[ublue-os/brew](https://github.com/ublue-os/brew)** - Installation et configuration de Homebrew
- **[ublue-os/akmods](https://github.com/ublue-os/akmods)** - Paquets liés au noyau partagés par Universal Blue (Nvidia, V4L2, xone)

## Préparatifs {#preparations}

### Dépendances de construction {#build-dependencies}

- [git](https://git-scm.com/)
- [just](https://github.com/casey/just)
- [podman](https://podman.io/)
- [jq](https://jqlang.org/)
- [yq](https://mikefarah.gitbook.io/yq/)
- [cosign](https://www.sigstore.dev/)

### Cloner le dépôt principal d'Aurora {#clone-the-main-aurora-repository}

```sh
git clone https://github.com/ublue-os/aurora
```

## Construire les images {#building-images}

Le `Justfile` à la racine du dépôt sert à construire les images. Voici quelques exemples :

| Commande                                                          | Description                                                      |
| ----------------------------------------------------------------- | ---------------------------------------------------------------- |
| `just build`                                                      | Utilise par défaut `latest` et main                              |
| `just build --image aurora-dx`                                    | Construit Aurora DX                                              |
| `just build --image aurora-dx --tag testing --flavor nvidia-open` | Construit la version `testing` `nvidia-open` d'Aurora DX         |
| `just build --tag stable --flavor nvidia-open`                    | Construit la version `nvidia-open` de la branche stable d'Aurora |

- Images : `aurora`,`aurora-dx`
- Étiquettes : `stable`,`latest`,`testing`
- Variantes : `main`,`nvidia-open`

Nous vous recommandons de faire précéder ces commandes de construction par sudo.

Nous utilisons `just` parce que la construction de nos images est assez complexe : nous ajoutons de nombreux `build-arg` et `label`. Cette recette just génère essentiellement une grande commande `buildah build` et vérifie l'authenticité de nos conteneurs de construction avec `cosign`.

### Tester les modifications locales des couches communes {#testing-local-changes-to-common-layers}

Si vous souhaitez modifier et tester localement des configurations propres à Aurora (recettes ujust, éléments graphiques, etc.), suivez cette procédure :

### Cloner et modifier le dépôt Common {#clone-and-modify-the-common-repository}

```sh
git clone https://github.com/get-aurora-dev/common
cd common
```

Apportez les modifications souhaitées aux fichiers du dépôt common.

### Construire le conteneur Common localement {#build-the-common-container-locally}

```sh
(sudo) just build
```

Cela crée une image locale portant l'étiquette `localhost/aurora-common:latest`.

### Modifier le Containerfile d'Aurora {#modify-auroras-containerfile}

Dans votre dépôt local `ublue-os/aurora`, vous devez modifier le fichier `Containerfile.in` pour qu'il référence votre construction locale de common plutôt que celle du dépôt distant.

Dans le fichier `Containerfile.in` à la racine du dépôt, recherchez la ligne `FROM ${COMMON} AS common` et modifiez-la pour qu'elle pointe vers votre construction locale :

```patch
-FROM ${COMMON} AS common
+FROM localhost/aurora-common AS common
```

### Construire Aurora avec vos modifications locales de Common {#build-aurora-with-your-local-common-changes}

Rendez-vous maintenant dans ublue-os/aurora et construisez l'image d'Aurora :

```
just build
```

Aurora sera ainsi construit avec votre couche common modifiée localement.

### Construire une image dérivée {#building-a-derived-image}

Vous pouvez bien entendu construire une image dérivée en suivant la procédure classique des conteneurs, plutôt que de construire Aurora « à partir de zéro ».

```Docker
FROM ghcr.io/ublue-os/aurora:stable

RUN ...
```

Nous recommandons le modèle [image-template](https://github.com/ublue-os/image-template).

### Tester vos modifications {#test-your-changes}

La méthode dépend fortement de vos modifications, mais l'option la plus sûre consiste à créer une machine virtuelle avec la recette `disk-image`, puis à la démarrer avec qemu. C'est ce qui se rapproche le plus d'une installation d'Aurora depuis l'ISO d'installation.

### Répéter la procédure {#iterate}

Si vous devez apporter d'autres modifications :

1. Modifiez les fichiers du dépôt common
2. Reconstruisez le conteneur common
3. Reconstruisez l'image d'Aurora
4. Basculez vers la nouvelle image locale

### Proposer vos modifications {#contributing-your-changes}

Une fois vos modifications testées localement :

- Pour les fonctionnalités propres à Aurora (configurations, éléments graphiques, recettes ujust d'Aurora), ouvrez une pull request dans [get-aurora-dev/common](https://github.com/get-aurora-dev/common)
- Pour les fonctionnalités partagées qui concernent Aurora et Bluefin (recettes ujust de base, MOTD, configuration des outils en ligne de commande), contribuez à [ublue-os/aurorafin-shared](https://github.com/ublue-os/aurorafin-shared)
- Pour les modifications liées à Homebrew, contribuez à [ublue-os/brew](https://github.com/ublue-os/brew)
- Pour les modifications de l'image d'Aurora elle-même (paquets installés, scripts de construction), contribuez à [ublue-os/aurora](https://github.com/ublue-os/aurora)

Veillez à n'inclure dans vos commits que les modifications réellement souhaitées, à l'aide d'outils comme `git add -p`.

## Basculer vers une image construite localement {#rebasing-to-a-locally-built-image}

Pour que `bootc` puisse basculer vers la nouvelle image, celle-ci doit être transférée du stockage de conteneurs de l'utilisateur vers celui du compte root.

```sh
podman image scp localhost/aurora:latest root@localhost
```

_Vous pouvez aussi ajouter `sudo` devant les commandes just build : vous n'aurez alors pas besoin de l'étape `podman image scp`._

```sh
sudo bootc switch --transport containers-storage localhost/aurora:latest
```

Enfin, redémarrez sur la nouvelle image :

```sh
systemctl reboot
```

## Tester sans construire d'image {#testing-without-building-an-image}

Cette méthode rend `/usr` accessible en écriture jusqu'au prochain redémarrage, ce qui suffit généralement pour tester des modifications très simples.

#### overlayfs sur /usr {#overlayfs-over-usr}

```sh
sudo bootc usr-overlay
```

Utilisez `dnf` ou apportez les modifications souhaitées à `/usr`.

```sh
sudo dnf install/swap/remove/downgrade ...
```

Redémarrez pour annuler toutes les modifications apportées après le montage d'overlayfs sur `/usr`.

Voici une autre façon de procéder sans redémarrer le système :

```
sudo rm /run/ostree/deployment-state/*.0/unlocked-development
sudo umount -l /usr
```

N'oubliez pas que `/etc` et `/var` ne sont pas réinitialisés après un redémarrage : vous pouvez donc toujours endommager votre système et y laisser des fichiers résiduels !

Vous pouvez aussi créer une couche de superposition plus persistante :

Cela peut être utile pour revenir à une version antérieure d'un micrologiciel ou pour diagnostiquer des bogues qui ne se produisent qu'à l'arrêt, par exemple.

```sh
sudo ostree admin unlock --hotfix
```

```sh
rpm-ostree status
```

```
● ostree-image-signed:docker://ghcr.io/ublue-os/aurora-dx:stable
                   Digest: sha256:4d08e32db51d634eb6fa1cf27e8472de074db783aee5c89849899e00c36c4b59
                  Version: 42.20250630 (2025-06-30T04:54:48Z)
                 Unlocked: hotfix
```

```sh
sudo dnf -y downgrade atheros-firmware-20250311-1$(rpm -E %{dist})
```

Pour supprimer ce déploiement accessible en écriture, vous pouvez simplement effectuer une mise à jour ou attendre la prochaine : il finira par être nettoyé. Vous pouvez aussi démarrer sur le déploiement précédent depuis Grub et exécuter :

```sh
rpm-ostree cleanup --pending
```
