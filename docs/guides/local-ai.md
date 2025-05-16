---
title: Local AI
description: Some guidance on Local AI using Aurora
---

Aurora fully supports local AI workflows using both Nvidia and AMD GPUs. Acceleration packages for both vendors are included by default and do not require manual intervention to get working properly.

_Use the robots to your advantage!_

## Ramalama

[Ramalama](https://github.com/containers/ramalama) is a tool which is included on the developer experience images that makes managing and working with AI models on your local machine super easy and smoooth.

It can pull models from Huggingface, Ollama and other providers without extra configuration or hassle. By default it is pulling its models from the Ollama Model Registry, which you can find here: [Ollama Model Registry](https://ollama.com/search).

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

If you are on a laptop or other computer with an unsupported CPU but have Vulkan acceleration available (e.g. an iGPU from a Ryzen APU) then you can use the Vulkan-accelerated image to serve models, like so:

```
ramalama --image=quay.io/ramalama/ramalama:latest run llama3.2:3b
```

It will automatically pull down the needed image and all model files that are needed.

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

## Ollama

_This part is heavily based on the guide from Bluefin which is found [here](https://docs.projectbluefin.io/ai)._

Ollama can also be used if preferred. It integrates very well with many programs and plugins in popular IDEs and code editors like Zed, IntelliJ IDEA or VSCode using [Continue.dev](https://www.continue.dev/).

To run the ollama container on a Nvidia machine using Aurora, you first have to configure the nvidia container runtime like so:

```
sudo nvidia-ctk runtime configure --runtime=docker
sudo systemctl restart docker
```

Choose a folder where you would like to store `docker-compose.yml` file which is holding your Ollama Container configuration.

Create a compose file with the following configuration:

```
services:
  ollama:
    image: ollama/ollama
    container_name: ollama
    restart: unless-stopped
    ports:
      - 11434:11434
    volumes:
      - ./ollama_v:/root/.ollama
    deploy:
      resources:
        reservations:
          devices:
            - capabilities:
                - gpu
```

For folks rocking a supported ROCM AMD GPU, you can this compose file to get you started:

```
services:
  ollama:
    image: ollama/ollama:rocm
    container_name: ollama
    restart: unless-stopped
    devices:
      - /dev/kfd
      - /dev/dri
    volumes:
      - ./ollama_v:/root/.ollama
    ports:
      - "11434:11434"
```

Then run `docker compose up -d` while being inside the folder in your terminal. You should now have a accelerated Ollama server running on your local machine.

The endpoint on which you can connect to Ollama is located at `http://localhost:11434`.
