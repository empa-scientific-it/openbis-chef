# Webapp development for Polypro - 402

## Introduction and Motivation

This project is the development environment for a web app for the polypro group @ EMPA

## Requirements

To work on the project, you need the following tools installed:

- Docker with docker compose
- [Taskfile](https://taskfile.dev/)
- wmill, the windmill CLI app, see [here](https://www.windmill.dev/docs/advanced/cli/installation) for install instructions

## Workflows

### Initialize project for local development

Windmill projects consist of a series of (python, go, typescript) scripts and YAML configuration files. These can be edited either using the windmill editor in the webapp or locally through any IDE. When using the second approach, the scripts should be synced using the `wmill` CLI [tool](https://www.windmill.dev/docs/advanced/cli). To initialize a project for local development, follow these steps:

1. Checkout this project from git
2. Start the docker compose project

   ```bash
   docker compose up -d
   ```

3. Create a new local windmill workspace:

    ```bash
    wmill workspace add local local http://localhost:8000
    ```

4. Synchronize the local workspace from the scripts cloned from git:

    ```bash
    cd services/windmill
    wmill sync push --raw
    ```

5. Now your scripts are available on windmill

### Local development workflow

To develop locally, edit the scripts in [windmill](.services/windmill/u). The subdirectories correspond to the various users that own these scripts. 

Anytime you do changes to the local scripts, run the following command to synchronize:

```bash
wmill sync push
```

If you change the scripts from the webapp, run:

```bash
wmill sync pull
```

this will synchronize the remote changes and apply them to the local scripts.


### How to contribute

- Use type annotations
- Format your code with `black`