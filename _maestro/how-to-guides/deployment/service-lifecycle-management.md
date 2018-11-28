---
layout: post
template: one-col
title:  "Customizing service life-cycle management"
categories: how-to-guides/deployment
order: 2
lead: How to manage your container life cycle
legacy: false
tags: ['service', 'operations']
permalink: /:collection/:path
---

## Orchestration engine

Maestro provides an orchestration engine to roll out Docker images to your servers and initialize containers from them. This includes:

- Bringing up containers
- Monitoring
- Scaling
- Port forwarding
- Load balancing
- Health checks
- Graceful draining and shutdown of workers
- Traffic switching
- Deployment rollbacks (version control)

#### Note
<div class="notice"><p>In the case of <strong>Maestro Version 2</strong> this engine is Kubernetes. In the case of <strong>Version 1</strong> it is Cloud 66's own engine.</p></div>

## Deploying your application

The above can be summarized as the life-cycle management of your containers, which occurs with each new deployment of your application. This is what happens when you redeploy your application:

1. Your latest code is pulled from Git and new images are built
2. These images are rolled out to your server(s)
3. Containers are initialized from these images, with all relevant environment variables and internal networking made available to them.
4. If and when your health checks are successful, your old containers are gracefully drained and traffic is switched to the new containers (on the specified port(s)).

## Configuration

There are a number of directives you can set in your service configuration (`service.yml`) to customize your container life-cycle management:

- [health](#health)
- [pre_start_signal](#pre_start)
- [pre_stop_sequence](#pre_stop)
- [requires](#requires)
- [restart_on_deploy](#restart)
- [stop_grace](#stop_grace)


### Health

<div class="Tabs Tabs--enclosed">
    <nav>
      <ul class="TabMini js_tabs">
        <li class="TabMini-item active">
          <a href="#V2-First" class="TabMini-link">
            Version 2
          </a>
        </li>
        <li class="TabMini-item">
          <a href="#V1-First" class="TabMini-link">
            Version 1
          </a>
        </li>
      </ul>
    </nav>

<section id="V2-First" class="Tabs-content js_tab_content">
 
<p>The <code>health</code> option allows you to specify one of two types of checks on your containers - <strong>readiness</strong> checks, and <strong>liveness</strong> checks. Both checks define a set of rules that are used to determine whether your application is currently healthy. For instance, you can check that the application is responding on an HTTP endpoint; or a post-initialization file is present.
</p><p>
<b>Readiness health checks</b> are used to determine if your newly started containers are ready to replace the old containers. Until the new containers are ready, the old containers will not be killed, and the new containers will not be served traffic. This effectively provides zero down-time deployments.
</p><p>
<b>Liveness health checks</b>, on the other hand, are used to continuously monitor your application once it's already running. If your application fails a liveness check, it will be restarted - this is useful for issues that can not be resolved otherwise.
</p><p>
The rules below are available to both health checks - note that you aren't required to specify all options. Any options not used will use their default values.
</p>
<ul>
<li> <strong>type</strong> (<em>string, defaults to 'http'</em>): Accepted values are <strong>http</strong>, <strong>https</strong>, <strong>tcp</strong>, and <strong>exec</strong>.</li>

<li> <strong>endpoint</strong> (<em>string, defaults to '/'</em>): The endpoint tested for status. Only for the <strong>http</strong>, and the <strong>https</strong> types.</li>

<li> <strong>command</strong> (<em>string, no default</em>): The command executed to test for status. Must return exit-code 0. Only for the <strong>exec</strong> type.</li>

<li> <strong>timeout</strong> (<em>integer, defaults to 5</em>): Maximum time in seconds to wait for a health check to complete.</li>

<li> <strong>success_threshold</strong> (<em>integer, defaults to 1</em>): Number of consecutive successes to be considered healthy.</li>

<li> <strong>failure_threshold</strong> (<em>integer, defaults to 1</em>): Number of consecutive failures to be considered unhealthy.</li>

<li> <strong>initial_delay</strong> (<em>integer, defaults to 1</em>): Time in seconds to wait after container has started before starting liveness checks.</li>

<li> <strong>period</strong> (<em>integer, defaults to 5</em>): Number of seconds between each consecutive health check.</li>

<li> <strong>port</strong> (<em>integer, defaults to container port</em>): The port to run the health check against. Only for the <strong>http</strong>, <strong>https</strong>, and <strong>tcp</strong> types.</li>

<li> <strong>http_headers</strong> (<em>array, defaults to []</em>): Custom headers to add for HTTP traffic. Only for the <strong>http</strong>, and <strong>https</strong> types. Contains an array of hashes with the <strong>name</strong> and <strong>value</strong> keys, both of string type.</li>
</ul>

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

You can also use the default health rules with <code>health: default</code>, or explicitly disable health checking by leaving the <code>health</code> option out or specifying <code>health: none</code>.
</section>

<section id="V1-First" class="Tabs-content js_tab_content is-hidden">

<p>The <code>health</code> option allows you to specify rules to automatically determine if your newly started containers are healthy before killing old containers. This effectively provides zero down-time deployments. There are two types of health checks - <code>inbound</code> and <code>outbound</code>:
</p><p>
<b>Inbound health checks</b> use Maestro to determine the health of your containers based on rules that you provide - when a new container is started during deployment, we will automatically attempt to get a response from the container on the specified endpoints. If we don't get the specified HTTP response code back within the "timeout" period we will assume the deploy has failed and roll back the container deployments.
</p><p>
<b>Outbound health checks</b> on the other hand allows your container to notify us of its health state, which is useful for services that don't expose an endpoint. The environment variable <code>CONTAINER_NOTIFY_URL</code> is automatically created and injected into your container, which accepts a POST request with two different JSON payloads depending on the health state.
</p><p>
A healthy container would be expected to POST <code>{"ready":true}</code> as its payload, while an unhealthy container can POST <code>{"ready":false, "reason":"error message"}</code>.
</p><p>
The rules below are available to health checks - note that you aren't required to specify all options. Any options not used will use their default values.
</p>
<p>
<ul>
<li><strong>type</strong> (<em>defaults to inbound</em>): Accepted values are <code>inbound</code> or <code>outbound</code>.</li>
<li><strong>endpoint</strong> (<em>defaults to <code>/</code></em>): The endpoint tested for status.</li>
<li><strong>protocol</strong> (<em>defaults to HTTP</em>): Accepted values are <code>HTTP</code> or <code>HTTPS</code>.</li>
<li><strong>timeout</strong> (<em>defaults to 30s</em>): Maximum time to wait for a container to start, in seconds.</li>
<li><strong>accept</strong> (<em>defaults to 200 and 300-399</em>): HTTP response codes to accept.</li>
</ul>
</p>

{% highlight yaml %}
services:
    [service_name]:
        health:
          type: inbound
          endpoint: "/healthy"
          protocol: "http"
          timeout: "45s"
          accept: ["200"]
{% endhighlight %}

<p>You can also use the default health rules with <code>health: default</code>, or explicitly disable health checking by leaving the <code>health</code> option out or specifying <code>health: none</code>.</p>

</section>
</div>

<hr>

### Pre-start signal

<div class="Tabs Tabs--enclosed">
<nav>
      <ul class="TabMini js_tabs">
        <li class="TabMini-item active">
          <a href="#V2-2" class="TabMini-link">
            Maestro V2
          </a>
        </li>
        <li class="TabMini-item">
          <a href="#V1-2" class="TabMini-link">
            Maestro V1
          </a>
        </li>
      </ul>
</nav>

<section id="V2-2" class="Tabs-content js_tab_content">

<p>This is a signal that is sent to the existing containers of the service before the new containers are started during deployment. An example could be <code>USR1</code> - but it depends on what your container is running as to which signals make sense.</p>

{% highlight yaml %}
services:
    [service_name]:
        pre_start_signal: USR1
{% endhighlight %}

</section>

<section id="V1-2" class="Tabs-content js_tab_content is-hidden">

<p><strong>This command is not supported by Maestro Version 1.</strong></p>

</section>
</div>

<hr>

### Pre-stop sequence

<div class="Tabs Tabs--enclosed">
    <nav>
      <ul class="TabMini js_tabs">
        <li class="TabMini-item active">
          <a href="#V2-3" class="TabMini-link">
            Maestro V2
          </a>
        </li>
        <li class="TabMini-item">
          <a href="#V1-3" class="TabMini-link">
            Maestro V1
          </a>
        </li>
      </ul>
    </nav>

<section id="V2-3" class="Tabs-content js_tab_content">

<p>This is a stop sequence that is executed on your running containers before they are shut down. It is a sequence of wait times and signals to send to the process. If the sequence completes and the container is still running, a force kill will be sent. For example:</p>

{% highlight yaml %}
services:
    [service_name]:
        pre_stop_sequence: 1m:USR2:30s:USR1:50s
{% endhighlight %}

<p>The example above, we'll wait 1 minute before sending the USR2 signal, then wait 30 seconds before sending the USR1 signal, and then wait 50 seconds before we force a kill. These are some examples of duration values that <code>stop_grace</code> and <code>pre_stop_sequence</code> can use - <code>1m</code> (1 minute), <code>30s</code> (30 seconds) and <code>1h</code> (1 hour).</p>

<p>Valid time values are <code>s</code> for seconds, <code>m</code> for minutes and <code>h</code> for hours. Valid signal values for a signal are (without the quotes):</p>

{% highlight ruby %}
'ABRT', 'ALRM', 'BUS', 'CHLD', 'CONT', 'FPE', 'HUP', 'ILL', 'INT', 'IO', 'IOT', 'KILL', 'PIPE', 'PROF', 'QUIT', 'SEGV', 'STOP', 'SYS', 'TERM', 'TRAP', 'TSTP', 'TTIN', 'TTOU', 'URG', 'USR1', 'USR2', 'VTALRM', 'WINCH', 'XCPU', 'XFSZ'
{% endhighlight %}

</section>

<section id="V1-3" class="Tabs-content js_tab_content is-hidden">

<p><strong>This command is not supported by Maestro Version 1.</strong></p>

</section>
</div>

<hr>

### Requires

In some cases, you may want to make sure that a service is only started if another, related service is also started. The `requires` option allows you to set such dependencies. For example:

{% highlight yaml %}
services:
    [service_name]:
        image: cloud66/sample
        requires:
          - "my_api"
{% endhighlight %}


### Restart on deploy

A boolean value to indicate whether the containers of this service should be restarted during deployment (set to <i>true</i> by default). For example:

{% highlight yaml %}
services:
    [service_name]:
        restart_on_deploy: false
{% endhighlight %}



### Stop grace

Sets the duration between the Docker <code>TERM</code> and <code>KILL</code> signals when Docker stop is run and a container is stopped. For example:

{% highlight yaml %}
services:
    [service_name]:
        stop_grace: 30
{% endhighlight %}

