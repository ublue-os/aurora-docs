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

Install [Ramalama](https://github.com/containers/ramalama) via `brew install ramalama`: manage local models and is the preferred default experience. It's for people who work with local models frequently and need advanced features. It offers the ability to pull models from huggingface, ollama, and any container registry. By default it pulls from ollama.com, check the [Ramalama documentation](https://github.com/containers/ramalama/tree/main/docs) for more information.

Ramalama's command line experience is similar to Podman. Bluefin sets `rl` as an alias for `ramalama`, for brevity. Examples include:

```
rl pull llama3.2:latest
rl run llama3.2
rl run deepseek-r1
```

You can also serve the models locally:

```
rl serve deepseek-r1
```

Then go to `http://127.0.0.0:8080` in your browser.

Ramalama will automatically pull in anything your host needs to do the workload. The images are also stored in the same container storage as your other containers. This allows for centralized management of the models and other podman images:

```
❯ podman images
REPOSITORY                                 TAG         IMAGE ID      CREATED        SIZE
quay.io/ramalama/rocm                      latest      8875feffdb87  5 days ago     6.92 GB
```

### Integrating with Existing Tools

`ramalama serve` will serve an OpenAI compatible endpoint at `http://0.0.0.0:8080`, you can use this to configure tools that do not support ramalama directly:

![Newelle](/img/user-attachments/ff079ed5-43af-48fb-8e7b-e5b9446b3bfe.png)

## Alpaca

To get a more graphical experience managing and interacting with your models, you can use the graphical client [Alpaca](https://flathub.org/apps/com.jeffser.Alpaca) It is running an embedded Ollama engine and features a beautiful graphical interface to answer your most burning questions.

To have proper AMD GPU Acceleration support, install the `com.jeffser.Alpaca.Plugins.AMD` plugin via the CLI <br/>
(`flatpak install com.jeffser.Alpaca.Plugins.AMD`) or from Discover by searching for it. This addon requires a compatible ROCM AMD GPU, like a 7900 XTX or Radeon 6900 XT.

![Alpaca Client](/img/local-ai/alpaca.png)
