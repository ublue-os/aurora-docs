---
title: Canaux de publication
description: Comprendre les différents canaux de publication d'Aurora et choisir celui qui vous convient
---

# Canaux de publication

Aurora propose différents canaux de publication pour répondre aux besoins et aux préférences de chacun. Chaque canal offre un équilibre différent entre stabilité, fonctionnalités et fréquence des mises à jour.

## Comparaison des canaux {#stream-comparison}

:::info Suppression des images stable-daily

Nous proposions auparavant des images `stable-daily`, construites chaque jour avec le même noyau à progression contrôlée que `stable`, mais avec les autres paquets mis à jour depuis Fedora. Nous avons arrêté de les construire, car elles n'avaient pas vraiment de raison d'être, et en préparation de notre canal `testing`. L'étiquette `stable-daily` pointe désormais vers `stable`.

Nous recommandons aux utilisateurs de `stable-daily` de passer à `stable` à l'aide de l'outil `ujust rebase-helper`.

:::

Aurora propose trois canaux de publication aux caractéristiques différentes :

| Caractéristique                   | Stable                  | Latest                               | Testing                              |
| --------------------------------- | ----------------------- | ------------------------------------ | ------------------------------------ |
| **Public cible**                  | Production              | Utilisateurs avancés                 | Passionnés et testeurs               |
| **Mises à jour du système**       | Hebdomadaires           | Quotidiennes / À chaque construction | Quotidiennes / À chaque construction |
| **Mises à jour des applications** | Deux fois par jour      | Deux fois par jour                   | Deux fois par jour                   |
| **Noyau**                         | À progression contrôlée | Sans progression contrôlée           | Sans progression contrôlée           |

La différence majeure entre latest et stable concerne le rythme des mises à jour du noyau et le moment des mises à niveau majeures. latest passe à la version majeure suivante de Fedora dès qu'elle est disponible et est construit quotidiennement. Stable passe à cette version lorsque CoreOS met à niveau son espace utilisateur, généralement quelques semaines plus tard, et est construit chaque semaine. Si nécessaire, stable est également construit dans les situations suivantes :

- **Correction de failles de sécurité** — les correctifs critiques sont rétroportés et publiés immédiatement
- **Mises à jour majeures de fonctionnalités** — des versions importantes, comme de nouvelles versions de KDE Plasma

Testing nous permettra de tester de nouvelles fonctionnalités et modifications avant leur arrivée en production. Ce canal sera donc moins stable que latest et ne doit être utilisé que par les passionnés et les testeurs prêts à rencontrer d'éventuels problèmes. C'est aussi un bon moyen de contribuer au projet en donnant votre avis sur les nouvelles fonctionnalités et modifications avant leur diffusion à un public plus large.

Tous les canaux utilisent les mêmes images de base : vous n'obtiendrez donc pas les nouveaux paquets plus vite dans `testing` que dans `latest`.

### Noyau à progression contrôlée {#gated-kernel}

L'étiquette stable utilise un noyau à progression contrôlée. Ce noyau suit la même version que le [canal stable de Fedora CoreOS](https://fedoraproject.org/coreos/release-notes?arch=x86_64&stream=stable), dont le rythme est plus lent que celui de Fedora Kinoite par défaut. L'équipe Universal Blue peut temporairement figer une version particulière du noyau afin d'éviter des régressions susceptibles d'affecter les utilisateurs.

L'ajout et la modification des arguments de démarrage du noyau sont actuellement gérés par rpm-ostree ; consultez la [documentation du projet amont](https://docs.fedoraproject.org/en-US/fedora-coreos/kernel-args/#_modifying_kernel_arguments_on_existing_systems) pour plus d'informations.

## Canaux disponibles {#available-streams}

### Stable {#stable}

Le canal **stable** est recommandé pour la plupart des utilisateurs. Il offre :

- **Mises à jour régulières** : cycles de publication hebdomadaires
- **Constructions non planifiées** : constructions d'urgence pour des correctifs importants, comme la correction de failles de sécurité et les mises à jour majeures de fonctionnalités (par exemple de nouvelles versions de KDE Plasma)
- **Prêt pour la production** : adapté à une utilisation quotidienne et aux environnements de production
- **Noyau à progression contrôlée** : utilise un noyau à progression contrôlée pour une stabilité accrue

**Étiquettes d'image** : `stable`

**Exemples** :

- `ghcr.io/ublue-os/aurora:stable`
- `ghcr.io/ublue-os/aurora-dx:stable`
- `ghcr.io/ublue-os/aurora-nvidia-open:stable`
- `ghcr.io/ublue-os/aurora-dx-nvidia-open:stable`

### Latest {#latest}

Le canal **latest** offre :

- **À la pointe** : les dernières fonctionnalités et améliorations
- **Mises à jour plus rapides** : des mises à jour dès qu'elles sont disponibles
- **Dernier noyau** : utilise le dernier noyau disponible
- **Terrain d'essai** : des paquets plus récents qui peuvent parfois poser problème
- **Pour les passionnés** : idéal pour les utilisateurs qui souhaitent les paquets les plus récents

**Étiquettes d'image** : `latest`

**Exemples** :

- `ghcr.io/ublue-os/aurora:latest`
- `ghcr.io/ublue-os/aurora-dx:latest`
- `ghcr.io/ublue-os/aurora-nvidia-open:latest`
- `ghcr.io/ublue-os/aurora-dx-nvidia-open:latest`

### Testing {#testing}

Le canal **testing** s'adresse aux utilisateurs qui souhaitent valider les nouvelles fonctionnalités et modifications avant leur arrivée en production. Il offre :

- **Validation avant publication** : testez les nouvelles fonctionnalités avant leur promotion vers `stable`
- **Le moins stable** : attendez-vous à des problèmes occasionnels ; ce canal s'adresse aux passionnés et aux testeurs prêts à faire face à d'éventuels dysfonctionnements
- **Contribution** : aidez Aurora en signalant les problèmes en amont

**Étiquettes d'image** : `testing`

**Exemples** :

- `ghcr.io/ublue-os/aurora:testing`
- `ghcr.io/ublue-os/aurora-dx:testing`
- `ghcr.io/ublue-os/aurora-nvidia-open:testing`
- `ghcr.io/ublue-os/aurora-dx-nvidia-open:testing`

## Choisir le bon canal {#choosing-the-right-stream}

### Utilisez **Stable** si vous souhaitez {#use-stable-if-you-want}

- Un système fiable au quotidien
- Des mises à jour hebdomadaires sans l'instabilité des toutes dernières nouveautés
- Le meilleur équilibre entre fonctionnalités et stabilité
- **Recommandé pour la plupart des utilisateurs**

### Utilisez **Latest** si vous souhaitez {#use-latest-if-you-want}

- Profiter immédiatement des nouvelles fonctionnalités
- Disposer du dernier noyau et des derniers paquets
- Aider à tester les changements à venir
- Et si les problèmes occasionnels ne vous dérangent pas

### Utilisez **Testing** si vous souhaitez {#use-testing-if-you-want}

- Les constructions les plus récentes, dès leur disponibilité
- Aider à valider de nouvelles fonctionnalités avant leur arrivée en production
- Et si vous êtes prêt à faire face à d'éventuels dysfonctionnements
- Aider le projet à repérer les bogues au plus tôt

## Passer d'un canal à l'autre {#switching-between-streams}

Vous pouvez changer de canal à l'aide de l'outil `rebase-helper` ou de la commande `bootc switch` :

### Utiliser l'outil Rebase Helper (recommandé) {#using-the-rebase-helper-tool-recommended}

Le moyen le plus simple de changer de canal consiste à utiliser l'assistant de rebase intégré à Aurora :

```bash
ujust rebase-helper
```

<img width="416" height="229" alt="image" src="https://github.com/user-attachments/assets/682057ec-e435-4fe7-aca5-928ee1a7063f" />

Cet outil interactif vous guide pour :

- Passer d'un canal Aurora à l'autre (stable, latest, testing)
- Passer d'une image spécifique au matériel à une autre (aurora, aurora-dx, aurora-nvidia, etc.)
- Sélectionner l'image adaptée à votre système

### Utiliser les commandes Bootc Switch {#using-bootc-switch-commands}

### Vers le canal Stable {#to-stable-stream}

```bash
sudo bootc switch --enforce-container-sigpolicy ghcr.io/ublue-os/aurora:stable
```

### Vers le canal Latest {#to-latest-stream}

```bash
sudo bootc switch --enforce-container-sigpolicy ghcr.io/ublue-os/aurora:latest
```

### Vers le canal Testing {#to-testing-stream}

```bash
sudo bootc switch --enforce-container-sigpolicy ghcr.io/ublue-os/aurora:testing
```

### Images spécifiques au matériel {#hardware-specific-images}

Remplacez `aurora` par votre variante d'image :

- `aurora-dx` pour la variante Developer Experience
- `aurora-nvidia-open` pour la prise en charge du pilote ouvert NVIDIA

## Fréquence et régulation des mises à jour {#update-frequency-and-throttling}

### Canal Stable {#stable-stream}

- Des constructions non planifiées peuvent avoir lieu pour :
  - **Correction de failles de sécurité** — les correctifs critiques sont rétroportés et publiés immédiatement
  - **Mises à jour majeures de fonctionnalités** — des versions importantes, comme de nouvelles versions de KDE Plasma
- Utilise un noyau à progression contrôlée pour une stabilité accrue

### Canal Latest {#latest-stream}

- Les mises à jour suivent de près le calendrier de publication de Fedora
- Des mises à jour plus fréquentes à mesure que les changements deviennent disponibles
- Utilise le dernier noyau Fedora disponible
- Peut inclure des paquets en version bêta ou candidate à la publication

### Canal Testing {#testing-stream}

- Accès anticipé aux nouvelles fonctionnalités et modifications
- Utilisé pour la validation avant publication, avant promotion vers `stable` et `latest`
- Canal le moins stable : attendez-vous à des problèmes occasionnels

## Vérifier votre canal actuel {#checking-your-current-stream}

Pour voir quel canal vous utilisez actuellement :

```bash
rpm-ostree status
```

Recherchez l'URL de l'image de conteneur dans la sortie pour identifier votre canal actuel.

## Recommandations {#recommendations}

- **Nouveaux utilisateurs** : commencez par le canal **stable**
- **Développeurs** : envisagez **stable** pour sa fiabilité ou **latest** pour les outils les plus récents
- **Passionnés** : essayez **latest** pour les dernières fonctionnalités, ou **testing** pour les nouveautés encore plus expérimentales

N'oubliez pas que vous pouvez toujours changer de canal si vos besoins évoluent !
