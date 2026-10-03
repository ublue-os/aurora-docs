---
title: Méthodes de travail pour le développement
description: Différentes méthodes de travail pour développer avec Aurora-DX.
---

## Méthodes de travail pour développer avec Aurora {#developer-workflows-on-aurora}

Nous ne vous imposons aucune méthode pour développer vos applications. Il existe plusieurs façons d’obtenir le résultat souhaité. Nous en présentons quelques-unes ici pour vous donner un aperçu des méthodes de développement recommandées sur Aurora.

### Uniquement en local {#local-only}

Vous pouvez installer des outils de développement avec Homebrew ou par d’autres moyens directement dans votre dossier personnel et les rendre accessibles grâce à votre propre variable `$PATH`.

Pour installer des outils ou les chaînes d’outils d’autres langages de programmation avec Homebrew, procédez ainsi :

```
brew install nodejs # or go, rust, openjdk
```

Cette commande télécharge et installe toutes les dépendances nécessaires à NodeJS. Une fois l’installation terminée, vous pouvez utiliser l’outil ou le langage de programmation que vous venez d’installer.

Pour certaines chaînes d’outils, comme Python ou OpenJDK, vous pouvez préciser la version en ajoutant le symbole @ suivi de la version, comme ceci :

```
brew install openjdk@21
```

## Devcontainers {#devcontainers}

Les devcontainers adoptent une approche à l’opposé des méthodes recommandées ci-dessus. Ils vous permettent de développer dans des environnements préconfigurés et isolés, à l’intérieur de conteneurs. Vous pouvez mettre en place un environnement reproductible qui fonctionne de la même manière pour chaque machine et chaque personne participant au projet, ce qui simplifie le développement.

Consultez ces ressources pour commencer à utiliser les devcontainers avec Visual Studio Code, JetBrains et d’autres éditeurs :

- [**Site officiel de DevContainers**](https://containers.dev)
- [**Documentation des DevContainers pour IntelliJ (également applicable à WebStorm, IntelliJ IDEA, etc.)**](https://www.jetbrains.com/help/idea/connect-to-devcontainer.html)
- [**Guide officiel des devcontainers pour VSCode**](https://code.visualstudio.com/docs/devcontainers/containers)
