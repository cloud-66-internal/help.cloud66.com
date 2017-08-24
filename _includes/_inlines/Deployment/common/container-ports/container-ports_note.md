<!-- usedin: [ _legacy_docker/deployment/container-ports.md, _maestro/Deployment/container-ports.md, _node/deployment/container-ports.md, _rails/deployment/container-ports.md, _skycap/deployment/container-ports.md] -->


### Note

For HTTPS traffic to be available to the outside world you still need to [setup your SSL certificates](/stack-add-ins/ssl-certificate).




Omitting the HTTPS port is possible by dropping the last part:

{% highlight yaml %}
services:
    my_service:
        ports: ["3000:80"]
{% endhighlight %}

