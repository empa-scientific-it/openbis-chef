# Webapp development for Polypro - 402

## Introduction and Motivation

This project is the development environment for a web app for the polypro group @ EMPA

## Requirements

To work on the project, you need the following tools installed:

- Docker with docker compose
- [Taskfile](https://taskfile.dev/)
- Gradle
- Jq


## Workflows

### Initialize project for local development

The project is managed using taskfile

1. Checkout this project from git
2. Install taskfile, gradle and jq
3. Go on the instance-io project [here](https://gitlab.empa.ch/openbis-tools/instance-io/) and get an API token
4. Store the token in [env](./.env) under `TOKEN`
5. Add your admin username and password from the openBIS instance 402 in env under `OPENBIS_SOURCE_USER` and `OPENBIS_SOURCE_PASSWORD`
5. Run `task dev`
    
    
In case of problems, you should manually download `instance-io` [here](https://gitlab.empa.ch/openbis-tools/instance-io/-/packages/57) and place it in the root of the project with the name `instance-io.jar`.