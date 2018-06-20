---
layout: post
template: one-col
title:  "About Service life-cycle management"
categories: tutorials
lead: How you can manage your service life cycle
legacy: false
tags: ['service', 'operations']
permalink: /:collection/:path
---

<h2 id="orchestration">Orchestration engine</h2>

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

<h2 id="deploying">Deploying your stack</h2>

The above can be summarized as the life-cycle management of your containers, which occurs with each new deployment of your application. For example, if you have a simple stack running `api` and `web` services, this is what happens when you redeploy your stack (as pertains to the life-cycle management of your containers):

1. Your latest code is pulled from Git and new images are built (on BuildGrid).
2. These images are rolled out to your Docker cluster.
3. Containers are initialized from these images, with all relevant environment variables and internal networking made available to them.
4. If and when your health checks are successful, your old containers are gracefully drained and traffic is switched to the new containers (on the specified port(s)).

<h2 id="configuration">Configuration</h2>

There are a number of directives you can set in your service configuration to customize your container life-cycle management:

- [health](#health)
- [pre_start_signal](#pre_start)
- [pre_stop_sequence](#pre_stop)
- [requires](#requires)
- [restart_on_deploy](#restart)
- [stop_grace](#stop_grace)

<hr>

<h3 id="health">Health</h3>
The `health` option allows you to specify one of two types of checks on your containers - **readiness** checks, and **liveness** checks. Both checks define a set of rules that are used to determine whether your application is currently healthy. For instance, you can check that the application is responding on an HTTP endpoint; or a post-initialization file is present.

<b>Readiness health checks</b> are used to determine if your newly started containers are ready to replace the old containers. Until the new containers are ready, the old containers will not be killed, and the new containers will not be served traffic. This effectively provides zero down-time deployments.

<b>Liveness health checks</b>, on the other hand, are used to continuously monitor your application once it's already running. If your application fails a liveness check, it will be restarted - this is useful for issues that can not be resolved otherwise.

The rules below are available to both health checks - note that you aren't required to specify all options. Any options not used will use their default values.

- **type** (_string, defaults to 'http'_): Accepted values are **http**, **https**, **tcp**, and **exec**.
- **endpoint** (_string, defaults to '/'_): The endpoint tested for status. Only for the **http**, and the **https** types.
- **command** (_string, no default_): The command executed to test for status. Must return exit-code 0. Only for the **exec** type.
- **timeout** (_integer, defaults to 5_): Maximum time in seconds to wait for a health check to complete.
- **success_threshold** (_integer, defaults to 1_): Number of consecutive successes to be considered healthy.
- **failure_threshold** (_integer, defaults to 1_): Number of consecutive failures to be considered unhealthy.
- **initial_delay** (_integer, defaults to 1_): Time in seconds to wait after container has started before starting liveness checks.
- **period** (_integer, defaults to 5_): Number of seconds between each consecutive health check.
- **port** (_integer, defaults to container port_): The port to run the health check against. Only for the **http**, **https**, and **tcp** types.
- **http_headers** (_array, defaults to []_): Custom headers to add for HTTP traffic. Only for the **http**, and **https** types. Contains an array of hashes with the **name** and **value** keys, both of string type.

{% highlight yaml %}
services:
    [service_name]:
        health:
            ready:
                type: exec
                command: 'cat /tmp/initialization_complete'
            alive:
                type: http
                endpoint: /healthz
                success_threshold: 2
                failure_threshold: 2
                initial_delay: 10
                period: 30
                http_headers:
                - name: 'X-ID-Header'
                  value: 'john-smith'
{% endhighlight %}

You can also use the default health rules with `health: default`, or explicitly disable health checking by leaving the `health` option out or specifying `health: none`.

<hr>

<h3 id="pre_start">Pre-start signal</h3>
This is a signal that is sent to the existing containers of the service before the new containers are started during deployment. An example could be <code>USR1</code> - but it depends on what your container is running as to which signals make sense.

{% highlight yaml %}
services:
    [service_name]:
        pre_start_signal: USR1
{% endhighlight %}

<hr>

<h3 id="pre_stop">Pre-stop sequence</h3>
This is a stop sequence that is executed on your running containers before they are shut down. It is a sequence of wait times and signals to send to the process. If the sequence completes and the container is still running, a force kill will be sent. For example:

{% highlight yaml %}
services:
    [service_name]:
        pre_stop_sequence: 1m:USR2:30s:USR1:50s
{% endhighlight %}

The example above, we'll wait 1 minute before sending the USR2 signal, then wait 30 seconds before sending the USR1 signal, and then wait 50 seconds before we force a kill. These are some examples of duration values that `stop_grace` and `pre_stop_sequence` can use - `1m` (1 minute), `30s` (30 seconds) and `1h` (1 hour).

Valid time values are `s` for seconds, `m` for minutes and `h` for hours. Valid signal values for a signal are (without the quotes):

{% highlight ruby %}
'ABRT', 'ALRM', 'BUS', 'CHLD', 'CONT', 'FPE', 'HUP', 'ILL', 'INT', 'IO', 'IOT', 'KILL', 'PIPE', 'PROF', 'QUIT', 'SEGV', 'STOP', 'SYS', 'TERM', 'TRAP', 'TSTP', 'TTIN', 'TTOU', 'URG', 'USR1', 'USR2', 'VTALRM', 'WINCH', 'XCPU', 'XFSZ'
{% endhighlight %}

<hr>

<h3 id="requires">Requires</h3>

In some cases, you may want to make sure that a service is only started if another service is started. The `requires` option allows you to set such dependencies. For example:

{% highlight yaml %}
services:
    [service_name]:
        image: cloud66/sample
        requires:
          - "my_api"
{% endhighlight %}

<hr>

<h3 id="restart">Restart on deploy</h3>
A boolean value to indicate whether the containers of this service should be restarted during deployment (set to <i>true</i> by default).

{% highlight yaml %}
services:
    [service_name]:
        restart_on_deploy: false
{% endhighlight %}

<hr>

<h3 id="stop_grace">Stop grace</h3>

Sets the duration between the Docker <code>TERM</code> and <code>KILL</code> signals when Docker stop is run and a container is stopped.

{% highlight yaml %}
services:
    [service_name]:
        stop_grace: 30
{% endhighlight %}

