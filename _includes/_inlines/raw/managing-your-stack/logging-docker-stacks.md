## Docker stacks

Given the ephemeral nature of containers, we recommend you use the `log_folder` directive to persist container logs on your host, so that they don't disappear when the container stops. By default, any folder specified with `log_folder` will be available on the host under `/var/log/containers/
`, for example:

{% highlight yaml %}
services:
    &#60;service_name&#62;:
        log_folder: /var/deploy/app/log
{% endhighlight %}

