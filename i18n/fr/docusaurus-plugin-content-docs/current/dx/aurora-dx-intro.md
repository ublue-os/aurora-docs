---
title: Introduction à Aurora DX
description: À propos de l’environnement de développement Aurora
---

Aurora Developer Experience `(aurora-dx)` est un environnement dédié qui enrichit Aurora d’outils de développement et d’intégrations pour les développeurs. Contrairement aux distributions Linux traditionnelles, Aurora privilégie fortement la conteneurisation et vous demande de ne pas installer vos outils de développement directement sur l’hôte.

## Emplacement des outils de développement {#scope-of-development-tools}

- Votre dossier personnel, isolé des fichiers système (**[Homebrew](https://formulae.brew.sh/formula/)**)
- Un conteneur (**[Distrobox](https://distrobox.it/)**, **[Devcontainers](https://containers.dev/)**)

Cette approche sécurise la gestion des dépendances en réduisant le risque d’endommager votre installation du système d’exploitation. L’équipe de maintenance d’Aurora ne vous dicte pas votre façon de développer, mais écarte les pièges qui risquent de casser votre machine et, au bout du compte, de perturber votre travail. Aurora-DX propose les fonctionnalités suivantes pour offrir un excellent environnement de développement :

- Intégration de QEMU et de KVM pour faciliter la virtualisation
- Outils et configurations préinstallés pour démarrer rapidement, comme Visual Studio Code et l’intégration des devcontainers
- Moyens pratiques d’installer vos outils favoris, comme JetBrains Toolbox, à l’aide de commandes `ujust`

## Activer le mode développeur {#enable-developer-mode}

Pour activer le mode développeur depuis une installation standard d’Aurora, saisissez `ujust devmode` et suivez les indications dans votre terminal. L’assistant ressemble à ceci :

![Activation d’Aurora DX](/img/dx/enable-dx.png)

Après avoir activé le mode développeur, vous devez ajouter votre compte aux groupes appropriés.

Pour cela, utilisez `ujust dx-group`, puis déconnectez-vous et reconnectez-vous. C’est terminé : docker et d’autres outils très utiles sont désormais à votre disposition, prêts à l’emploi !

# Fonctionnalités

## Visual Studio Code avec Docker {#visual-studio-code-with-docker}

[Visual Studio Code](https://code.visualstudio.com/) est inclus dans l’image comme environnement de développement intégré par défaut. L’[extension devcontainers](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers) y est déjà installée. C’est l’environnement de développement recommandé : commencez ici si vous découvrez le développement conteneurisé !

- [Documentation de Dev Containers](https://code.visualstudio.com/docs/devcontainers/containers) — vous pouvez ignorer la plupart des instructions d’installation et passer directement au [tutoriel](https://code.visualstudio.com/docs/devcontainers/tutorial#_install-the-extension)
- [Spécification de Dev Containers](https://containers.dev/)
- [Série pour débutants : Dev Containers](https://www.youtube.com/watch?v=b1RavPr_878) — un excellent tutoriel d’introduction de la [chaîne YouTube de VS Code](https://www.youtube.com/@code/videos)

La version la plus récente de [Docker Engine](https://docs.docker.com/engine/) est incluse par défaut et configurée comme moteur de conteneurs par défaut pour vscode. [docker compose](https://danielquinn.org/blog/developing-with-docker/) constitue également un excellent point de départ pour développer avec des conteneurs, si les devcontainers ne correspondent pas à votre façon de travailler.

## Podman et Podman Desktop {#podman-and-podman-desktop}

![Podman Desktop](https://github.com/user-attachments/assets/69f64ed1-7fcc-4040-9a3d-12b71308da1b)

[Podman Desktop](https://podman-desktop.io/) est inclus pour gérer les conteneurs. Consultez la [documentation](https://podman-desktop.io/docs/intro) de Podman Desktop pour en savoir plus. Tous les outils `podman` du projet amont sont inclus. Il s’agit du moteur de conteneurs système par défaut et de la configuration recommandée pour le développement fournie par Fedora.

> Bien qu’Aurora utilise docker et vscode par défaut pour le développement, tous les outils amont de Fedora sont inclus pour les personnes qui préfèrent cet environnement.

## Outils d’analyse des performances intégrés {#built-in-performance-tooling}

[Sysprof](https://www.sysprof.com/) est inclus pour profiler les performances à l’échelle du système, ainsi que les outils en ligne de commande recommandés par [Brendan Gregg](https://www.brendangregg.com/) :

- `bcc`, `bpftrace`, `iproute2`, `nicstat`, `numactl`, `sysprof`, `sysstat`, `tiptop`, `trace-cmd` et `util-linux`

Merci à Ubuntu et à Canonical pour la [spécification détaillée](https://discourse.ubuntu.com/t/spec-include-performance-tooling-in-ubuntu/43134) et son argumentaire. Nous espérons que l’inclusion d’outils d’analyse des performances [contribuera à améliorer les logiciels en amont](https://blogs.gnome.org/chergert/2024/09/25/messaging-needs/).

## Améliorations du confort d’utilisation {#quality-of-life-improvements}

- [Cockpit](https://cockpit-project.org/) pour l’administration locale et distante
- [Tailscale](https://universal-blue.discourse.group/t/tailscale-vpn-on-bluefin/290) pour le VPN
- Le lanceur de tâches [Just](https://github.com/casey/just) pour l’automatisation
- `fish` et `zsh` disponibles comme shells facultatifs

### Polices {#fonts}

Aurora DX inclut une collection de polices à chasse fixe soigneusement sélectionnées. Vous pouvez ajouter d’autres polices avec Homebrew à partir du [dépôt de casks de polices](https://formulae.brew.sh/cask-font/). Vous pouvez également installer les [polices Microsoft](https://github.com/colindean/homebrew-fonts-nonfree) si nécessaire.

Lancez simplement `ujust bbrew` et sélectionnez « fonts » dans la liste.

- Polices Microsoft :
  Si vous devez installer des polices Microsoft pour assurer la compatibilité avec certains documents, la plupart sont disponibles dans Homebrew.

Notez que certaines de ces polices sont protégées par les droits d’auteur de Microsoft.

Microsoft UK a confirmé que vous êtes autorisé à les posséder à condition de détenir une copie de l’un des produits suivants :

- Microsoft PowerPoint Viewer (gratuit, retiré)
- Éventuellement PowerPoint Mobile (gratuit)
- Microsoft Office (n’importe quelle version, Windows ou Mac)

Calibri, Cambria, Candara, Consolas, Constantia et Corbel sont incluses dans font-microsoft-office ; les autres doivent être installées individuellement. Vous pouvez toutes les installer en une fois en exécutant la commande suivante dans un terminal :

```
brew tap colindean/fonts-nonfree && brew install --cask font-microsoft-office font-microsoft-aptos font-arial font-arial-black font-courier-new font-times-new-roman font-georgia
```

### Conteneurs personnels persistants {#pet-containers}

Les conteneurs personnels persistants (« pet containers ») sont accessibles sous forme de terminaux interactifs grâce à [distrobox](https://distrobox.it/). Gérez-les avec l’application [Kontainer](https://github.com/DenysMb/Kontainer) incluse.

Utilisez Kontainer pour créer vos propres conteneurs personnels persistants à partir de n’importe quelle distribution de la liste :

Si vous êtes adepte de la ligne de commande, vous pouvez gérer vos conteneurs grâce à la prise en charge intégrée au terminal :

![Gestion des conteneurs dans le terminal](https://github.com/user-attachments/assets/2a4dc4b5-f1a8-4781-80a4-92ea4dfeeb97)

- Le terminal par défaut est [Konsole](https://apps.kde.org/konsole/), qui intègre désormais les conteneurs distrobox. Auparavant, [Ptyxis](https://gitlab.gnome.org/chergert/ptyxis) était utilisé.
- [Podman Desktop](https://flathub.org/apps/io.podman_desktop.PodmanDesktop) — conteneurs et Kubernetes pour les développeurs d’applications
- [Pods](https://flathub.org/apps/com.github.marhkb.Pods) est également un excellent moyen de gérer vos conteneurs avec une interface graphique

# Autres outils

## JetBrains {#jetbrains}

`ujust jetbrains-toolbox` télécharge et installe l’application [JetBrains Toolbox](https://www.jetbrains.com/toolbox-app), qui gère l’installation de la suite d’outils JetBrains. Cette application prend en charge l’installation, la suppression et la mise à niveau des produits JetBrains, entièrement dans votre dossier personnel et indépendamment de l’image du système d’exploitation. Nous ne recommandons pas les Flatpaks JetBrains.

- Consultez la [documentation de JetBrains](https://www.jetbrains.com/help/idea/podman.html) pour intégrer ces outils au moteur podman.
- Découvrez comment [configurer JetBrains avec des devcontainers](https://www.jetbrains.com/help/idea/connect-to-devcontainer.html)
- [Instructions de désinstallation](https://toolbox-support.jetbrains.com/hc/en-us/articles/115001313270-How-to-uninstall-Toolbox-App-)

Le blog JetBrains fournit également davantage d’informations sur la prise en charge de Dev Containers par JetBrains :

- [Utiliser Dev Containers dans les IDE JetBrains — Partie 1](https://blog.jetbrains.com/idea/2024/07/using-dev-containers-in-jetbrains-ides-part-1/)

## Neovim {#neovim}

Exécutez `brew install neovim devcontainer`, puis suivez ces instructions pour configurer un devcontainer :

- [Exécuter Neovim avec des devcontainers](https://cadu.dev/running-neovim-on-devcontainers/)
- [Démarrage rapide de DevPod pour Neovim](https://devpod.sh/docs/getting-started/quickstart-vim)

## Kubernetes et autres outils cloud natifs {#kubernetes-and-other-cloud-native-tooling}

Exécutez `ujust bbrew` et sélectionnez `k8s-tools` pour commencer :

| Nom                                                 | Description                                                                                                                                            |
| --------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [cdk8s](https://formulae.brew.sh/formula/cdk8s)     | Définit des applications Kubernetes et des abstractions réutilisables à l’aide de langages de programmation familiers.                                 |
| [k0sctl](https://formulae.brew.sh/formula/k0sctl)   | Outil en ligne de commande pour initialiser et gérer des clusters Kubernetes k0s.                                                                      |
| [k3sup](https://formulae.brew.sh/formula/k3sup)     | Utilitaire léger pour installer k3s sur n’importe quelle machine virtuelle locale ou distante.                                                         |
| [kind](https://formulae.brew.sh/formula/kind)       | Outil pour exécuter des clusters Kubernetes locaux en utilisant des conteneurs Docker comme « nœuds ».                                                 |
| [dagger](https://formulae.brew.sh/formula/dagger)   | Kit de développement portable pour les pipelines CI/CD.                                                                                                |
| [grype](https://formulae.brew.sh/formula/grype)     | Analyseur de vulnérabilités pour les images de conteneurs et les systèmes de fichiers.                                                                 |
| [helm](https://formulae.brew.sh/formula/helm)       | Gestionnaire de paquets pour Kubernetes.                                                                                                               |
| [kubectl](https://formulae.brew.sh/formula/kubectl) | Outil en ligne de commande de Kubernetes permettant d’exécuter des commandes sur des clusters Kubernetes.                                              |
| [k9s](https://formulae.brew.sh/formula/k9s)         | Interface dans le terminal pour interagir avec vos clusters Kubernetes.                                                                                |
| [kubectx](https://formulae.brew.sh/formula/kubectx) | Outil permettant de changer plus rapidement de contexte (cluster) dans kubectl.                                                                        |
| [pack](https://formulae.brew.sh/formula/pack)       | Outil en ligne de commande pour construire des applications avec Cloud Native Buildpacks.                                                              |
| [syft](https://formulae.brew.sh/formula/syft)       | Outil en ligne de commande et bibliothèque pour générer une nomenclature logicielle (SBOM) à partir d’images de conteneurs et de systèmes de fichiers. |

### Outils CNCF {#cncf-tools}

Pour accéder à l’ensemble des outils de la [Cloud Native Computing Foundation](https://l.cncf.io), utilisez `ujust cncf` afin de parcourir et d’installer les outils d’une vaste collection de 89 projets CNCF, aux stades de maturité « graduated », « incubating » et « sandbox ». Vous y trouverez notamment Argo, Cilium, Envoy, Flux, Istio, Linkerd, Prometheus et bien d’autres.

## Ramalama, llmman et autres outils d’IA {#ramalama-llmman-and-other-ai-tools}

[Ramalama](https://github.com/containers/ramalama) et [llmman](https://github.com/llmmanorg/llmman) peuvent être installés avec `ujust bbrew` en sélectionnant l’option `ai`, pour gérer des modèles d’IA en local et les rendre accessibles par un serveur. Consultez la [documentation sur l’IA](/fr/guides/local-ai) pour en savoir plus.

## Virtualisation et moteurs de conteneurs {#virtualization-and-container-runtimes}

- [virt-manager](https://virt-manager.org/) et les outils associés (KVM, qemu)
- [Incus](https://linuxcontainers.org/incus/) fournit des conteneurs système
