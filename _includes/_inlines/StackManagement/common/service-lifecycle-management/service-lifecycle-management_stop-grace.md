

### Stop grace

Sets the duration between the Docker `TERM` and `KILL` signals when Docker stop is run and a container is stopped.

{% highlight yaml %}
services:
    <service_name>:
        stop_grace: 30
{% endhighlight %}
