<!-- post: -->


## Pre-defined environment variables

There are some variables that are predefined by Cloud66 which are listed at bellow.

Note that predefined environment variables are referable! for instance you can define `MEMCACHED_ADDRESS` to be `_env(DOCKER_HOST_IP)` to refer to the `DOCKER_HOST_IP` which is one of the predefined ones.

**DOCKER_HOST_IP:** Is injected to each container and is only available inside containers

**SERVER_NAME:** Is on each server and is only available inside the server