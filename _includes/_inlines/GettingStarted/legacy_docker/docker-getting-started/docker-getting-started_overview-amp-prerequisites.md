<!-- usedin: [ _legacy_docker/getting-started] - post: -->


## Overview & Prerequisites

The process of building a Docker stack is split into two distinct parts. First you **build images** for your services, then once you're ready you  **setup a deployment**.

Your project can be composed of services that use pre-built images or source code you want to build into images. You can mix and match these as required.



* **Pre-built Docker Images** - Can be hosted in an image repo like Dockerhub or in your own private repository.

* **Build from Source** - Your code should be hosted in a git repo and contain a [**Dockerfile**](https://www.digitalocean.com/community/tutorials/docker-explained-using-dockerfiles-to-automate-building-of-images) located in the root directory. We provide basic Dockerfile templates for building common web frameworks that you can use to get started.

* * *

