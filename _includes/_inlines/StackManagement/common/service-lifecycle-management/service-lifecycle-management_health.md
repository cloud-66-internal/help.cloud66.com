<!-- usedin: [ _legacy_docker/stack-management] - post: -->


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

