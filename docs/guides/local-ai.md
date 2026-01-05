---
title: Local AI
description: Some guidance on Local AI using Aurora
---

Aurora fully supports local AI workflows using both Nvidia and AMD GPUs. Acceleration packages for both vendors are included by default and do not require manual intervention to get working properly.

_Use the robots to your advantage!_

## AI Tools

The following AI-focused command-line tools are available via homebrew, install individually or use this command to install them all: `ujust bbrew` and choose the `ai` menu option:

| Name                                                                | Description                                                      |
| ------------------------------------------------------------------- | ---------------------------------------------------------------- |
| [aichat](https://formulae.brew.sh/formula/aichat)                   | All-in-one AI-Powered CLI Chat & Copilot                         |
| [block-goose-cli](https://formulae.brew.sh/formula/block-goose-cli) | Block Protocol AI agent CLI                                      |
| [claude-code](https://formulae.brew.sh/cask/claude-code)            | Claude coding agent with desktop integration                     |
| [codex](https://formulae.brew.sh/cask/codex)                        | Code editor for OpenAI's coding agent that runs in your terminal |
| [copilot-cli](https://formulae.brew.sh/cask/copilot-cli)            | GitHub Copilot CLI for terminal assistance                       |
| [crush](https://github.com/charmbracelet/crush)                     | AI coding agent for the terminal, from charm.sh                  |
| [gemini-cli](https://formulae.brew.sh/formula/gemini-cli)           | Command-line interface for Google's Gemini API                   |
| [kimi-cli](https://formulae.brew.sh/formula/kimi-cli)               | CLI for Moonshot AI's Kimi models                                |
| [llm](https://formulae.brew.sh/formula/llm)                         | Access large language models from the command line               |
| [lm-studio](https://lmstudio.ai/)                                   | Desktop app for running local LLMs                               |
| [mistral-vibe](https://formulae.brew.sh/formula/mistral-vibe)       | CLI for Mistral AI models                                        |
| [mods](https://formulae.brew.sh/formula/mods)                       | AI on the command-line, from charm.sh                            |
| [opencode](https://formulae.brew.sh/formula/opencode)               | AI coding agent for the terminal                                 |
| [qwen-code](https://formulae.brew.sh/formula/qwen-code)             | CLI for Qwen3-Coder models                                       |
| [ramalama](https://formulae.brew.sh/formula/ramalama)               | Manage and run AI models locally with containers                 |
| [whisper-cpp](https://formulae.brew.sh/formula/whisper-cpp)         | High-performance inference of OpenAI's Whisper model             |

## Ramalama

[Ramalama](https://github.com/containers/ramalama) is a tool which can be installed with the `ujust install-ai-tools` recipe, that makes managing and working with AI models on your local machine super easy and smoooth.

It can pull models from Huggingface, Ollama and other providers without extra configuration or hassle. By default it is pulling its models from the Ollama Model Registry, which you can find here: [Ollama Model Registry](https://ollama.com/search).

Ramalama will probe your system on first run and install the needed support for GPU/iGPUs (for example vulkan / rocm).

Here are some example commands to run models:

```
ramalama pull llama3.1:8b
ramalama run llama3.1:8b
ramalama run deepseek-r1
```

If you want to pull a small Web-UI to use the model rather than the cli, use the `serve` command that Ramalama provides out of the box. Like this:

```
ramalama serve deepseek-r1
```

Models and OCI images of runners are stored in your local podman storage, like the rest of your container images.

```
aurora ~> podman images
REPOSITORY                         TAG         IMAGE ID      CREATED       SIZE
registry.fedoraproject.org/fedora  latest      9f3411e5c4ba  10 days ago   330 MB
quay.io/admiller/ramalama-fedora   rocm-42     79126d1c9dbd  3 weeks ago   7.87 GB
quay.io/ramalama/rocm              latest      9ec451829443  4 weeks ago   7.71 GB
quay.io/ramalama/vulkan            latest      db288c77cab0  5 weeks ago   1.07 GB
```

## Alpaca

To get a more graphical experience managing and interacting with your models, you can use the graphical client [Alpaca](https://flathub.org/apps/com.jeffser.Alpaca) It is running an embedded Ollama engine and features a beautiful graphical interface to answer your most burning questions.

To have proper AMD GPU Acceleration support, install the `com.jeffser.Alpaca.Plugins.AMD` plugin via the CLI <br/>
(`flatpak install com.jeffser.Alpaca.Plugins.AMD`) or from Discover by searching for it. This addon requires a compatible ROCM AMD GPU, like a 7900 XTX or Radeon 6900 XT.

![Alpaca Client](/img/local-ai/alpaca.png)
