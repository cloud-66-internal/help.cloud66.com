<!-- post: -->


### Stop grace

Sets the duration between the Docker `TERM` and `KILL` signals when Docker stop is run and a container is stopped.

{% highlight yaml %}
services:
    &#60;service_name&#62;:
        stop_grace: 30
{% endhighlight %}
