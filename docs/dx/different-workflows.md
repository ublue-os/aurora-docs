---
title: Development Workflows
description: Different development workflows that you can use on Aurora-DX.
---

## Developer Workflows on Aurora

We don't restrict which path you want to choose to develop your apps. There are several ways to achieve your desired result, some of which we want to highlight here to give you a taste of the recommended developer workflow on Aurora.

### Local Only

You can install developer tools via Homebrew or other means directly into your home-folder and link them up in your own `$PATH` variable. 

You install tools or other programming languages toolchains with Homebrew like so:

```
brew install nodejs # or go, rust, openjdk
```

This will download all the necessary dependencies for NodeJS and install them. After it is done, you are able to use your desired tool or programming language you just installed.

For some toolchains, like Python or OpenJDK, you can specify the version with a @ symbol and after that their version, like so:

```
brew install openjdk@21
```

## Devcontainers

Devcontainers are the polar opposite to the recommended workflows above. They let you do your development work in preconfigured and isolated environments inside of containers. You can setup a reproducible environment that works the same for every machine and collaborator, making development simpler.

Please checkout these resources for getting started with devcontainers on Visual Studio Code, Jetbrains and other editors:

- [**The Official DevContainers Website**](https://containers.dev)
- [**The IntelliJ DevContainers Docs (Applies to Webstorm, IntelliJ Idea etc.)**](https://www.jetbrains.com/help/idea/connect-to-devcontainer.html)
- [**Official VSCode Devcontainers Guide**](https://code.visualstudio.com/docs/devcontainers/containers)
