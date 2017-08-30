<!-- usedin: [ _legacy_docker/deployment/container-ports-v1.md, _maestro/Deployment/container-ports-v1.md, _node/deployment/container-ports-v1.md, _rails/deployment/container-ports-v1.md, _skycap/deployment/container-ports-v1.md] -->


### Note

For HTTPS traffic to be available to the outside world you still need to [setup your SSL certificates](/stack-add-ins/ssl-certificate).




Omitting the HTTPS port is possible by dropping the last part:

{% highlight yaml %}
services:
    my_service:
        ports: ["3000:80"]
{% endhighlight %}

