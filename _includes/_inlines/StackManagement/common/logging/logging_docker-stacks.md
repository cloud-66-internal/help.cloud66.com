<!-- usedin: [ _legacy_docker/stack-management/logging.md, _maestro/stack-management/logging.md, _node/stack-management/logging.md, _rails/stack-management/logging.md] -->


## Docker stacks

Given the ephemeral nature of containers, we recommend you use the `log_folder` directive to persist container logs on your host, so that they don't disappear when the container stops. By default, any folder specified with `log_folder` will be available on the host under `/var/log/containers/
`, for example:

{% highlight yaml %}
services:
    <service_name>:
        log_folder: /var/deploy/app/log
{% endhighlight %}

