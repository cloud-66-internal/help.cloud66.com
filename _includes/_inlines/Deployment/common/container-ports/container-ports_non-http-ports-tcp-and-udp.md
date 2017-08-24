<!-- usedin: [ _legacy_docker/deployment] - post: -->


## Non-HTTP ports (TCP and UDP)

If your application does not server HTTP traffic (like a database) you can map the ports by specifying the protocol (TCP or UDP) and the ports it listens to inside the container and the port you would like it to be available publicly.

Let's imagine we have a service that listens on port 5454 on UDP and we would like to make it available to the outside world on port 111. Here is how:

{% highlight yaml %}
services:
    my_service:
        ports:
          - container: 5454
            udp: 111
{% endhighlight %}

Here is an example for a service that listens to TCP port 8787 and we want to make it available on port 9000 to the outside world:

{% highlight yaml %}
services:
    my_service:
        ports:
          - container: 8787
            tcp: 9000
{% endhighlight %}

