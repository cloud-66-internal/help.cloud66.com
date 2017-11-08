---
menuheaders: [ "Orchestration engine", "Deploying your stack", "Configuration", "Health", "Pre-start signal", "Pre-stop sequence", "Requires", "Restart on deploy", "Stop grace", "Post-start command", "Pre-stop command" ]
layout: post
template: one-col
title: Service life-cycle management
categories: stack-management
lead: ""
legacy: true

permalink: /:collection/:path
---



## Orchestration engine

Cloud 66 provides an orchestration engine to roll out Docker images to your servers and initialize containers from them. This is what is provided for you from start to finish:

- Bring up your containers
- Monitoring
- Scaling
- Port forwarding
- Load balancing
- Health checks
- Graceful draining and shutdown of workers
- Traffic switching
- Deployment rollbacks (version control)


## Deploying your stack

The above can be summarized as the life-cycle management of your containers, which occurs with each new deployment of your application. For example, if you have a simple stack running `api` and `web` services, this is what happens when you redeploy your stack (as pertains to the life-cycle management of your containers):

1. Your latest code is pulled from Git and new images are built (on BuildGrid).
2. These images are rolled out to your Docker cluster.
3. Containers are initialized from these images, with all relevant environment variables and internal networking made available to them.
4. If and when your health checks are successful, your old containers are gracefully drained and traffic is switched to the new containers (on the specified port(s)).


## Configuration

There are a number of directives you can set in your service configuration to customize your container life-cycle management:

- [health](#health)
- [pre_start_signal](#pre_start)
- [pre_stop_sequence](#pre_stop)
- [requires](#requires)
- [restart_on_deploy](#restart)
- [stop_grace](#stop_grace)

* * *


### Health

The `health` option allows you to specify rules to automatically determine if your newly started containers are healthy before killing old containers. This effectively provides zero down-time deployments. There are two types of health checks - `inbound` and `outbound`:

**Inbound health checks** use Cloud 66 to determine the health of your containers based on rules that you provide - when a new container is started during deployment, we will automatically attempt to get a response from the container on the specified endpoints. If we don't get the specified HTTP response code back within the "timeout" period we will assume the deploy has failed and roll back the container deployments.

**Outbound health checks** on the other hand allows your container to notify us of its health state, which is useful for services that don't expose an endpoint. The environment variable `CONTAINER_NOTIFY_URL` is automatically created and injected into your container, which accepts a POST request with two different JSON payloads depending on the health state.

A healthy container would be expected to POST `{"ready":true}` as its payload, while an unhealthy container can POST `{"ready":false, "reason":"error message"}`.

The rules below are available to health checks - note that you aren't required to specify all options. Any options not used will use their default values.

- **type** (_defaults to inbound_): Accepted values are `inbound` or `outbound`.
- **endpoint** (_defaults to `/`_): The endpoint tested for status.
- **protocol** (_defaults to HTTP_): Accepted values are `HTTP` or `HTTPS`.
- **timeout** (_defaults to 30s_): Maximum time to wait for a container to start, in seconds.
- **accept** (_defaults to 200 and 300-399_): HTTP response codes to accept.

{% highlight yaml %}
services:
    <service_name>:
        health:
          type: inbound
          endpoint: "/healthy"
          protocol: "http"
          timeout: "45s"
          accept: ["200"]
{% endhighlight %}  

You can also use the default health rules with `health: default`, or explicitly disable health checking by leaving the `health` option out or specifying `health: none`.

* * *


### Pre-start signal

This is a signal that is sent to the existing containers of the service before the new containers are started during deployment. An example could be `USR1` - but it depends on what your container is running as to which signals make sense.

{% highlight yaml %}
services:
    <service_name>:
        pre_start_signal: USR1
{% endhighlight %}

* * *


### Pre-stop sequence

This is a stop sequence that is executed on your running containers before they are shut down. It is a sequence of wait times and signals to send to the process. If the sequence completes and the container is still running, a force kill will be sent. For example:

{% highlight yaml %}
services:
    <service_name>:
        pre_stop_sequence: 1m:USR2:30s:USR1:50s
{% endhighlight %}

The example above, we'll wait 1 minute before sending the USR2 signal, then wait 30 seconds before sending the USR1 signal, and then wait 50 seconds before we force a kill. These are some examples of duration values that `stop_grace` and `pre_stop_sequence` can use - `1m` (1 minute), `30s` (30 seconds) and `1h` (1 hour).

Valid time values are `s` for seconds, `m` for minutes and `h` for hours. Valid signal values for a signal are (without the quotes):

{% highlight ruby %}
'ABRT', 'ALRM', 'BUS', 'CHLD', 'CONT', 'FPE', 'HUP', 'ILL', 'INT', 'IO', 'IOT', 'KILL', 'PIPE', 'PROF', 'QUIT', 'SEGV', 'STOP', 'SYS', 'TERM', 'TRAP', 'TSTP', 'TTIN', 'TTOU', 'URG', 'USR1', 'USR2', 'VTALRM', 'WINCH', 'XCPU', 'XFSZ'
{% endhighlight %}

* * *


### Requires

In some cases, you may want to make sure that a service is only started if another service is started. The `requires` option allows you to set such dependencies. For example:

{% highlight yaml %}
services:
    <service_name>:
        image: cloud66/sample
        requires:
          - "my_api"    
{% endhighlight %}

* * *


### Restart on deploy

A boolean value to indicate whether the containers of this service should be restarted during deployment (set to _true_ by default).

{% highlight yaml %}
services:
    <service_name>:
        restart_on_deploy: false
{% endhighlight %}

* * *


### Stop grace

Sets the duration between the Docker `TERM` and `KILL` signals when Docker stop is run and a container is stopped.

{% highlight yaml %}
services:
    <service_name>:
        stop_grace: 30
{% endhighlight %}


## Post-start command

<span style="background-color: yellow">NOTE: This only applies to container version 2 (Kubernetes)</span>

This hook executes immediately after a container is created. MORE info:
```
services:     
    <service_name>:         
        post_start_command: /tmp/post-start.sh
```

## Pre-stop command

<span style="background-color: yellow">NOTE: This only applies to container version 2 (Kubernetes)</span>

This hook is called immediately before a container is terminated. MORE info:
```
services:
    <service_name>:
        pre_stop_command: /tmp/pre-stop.sh
```
