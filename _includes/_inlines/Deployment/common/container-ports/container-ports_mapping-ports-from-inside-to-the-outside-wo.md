<!-- usedin: [ _legacy_docker/deployment/container-ports.md, _maestro/Deployment/container-ports.md, _node/deployment/container-ports.md, _rails/deployment/container-ports.md, _skycap/deployment/container-ports.md] -->


## Mapping ports from inside to the outside world

Let's imagine you have a Rails application, serving traffic on port 3000 by default. To make it available to the outside world you simple need to choose the inside port (3000) and the outside HTTP ports (80) for the service. If you would like t the service to be server on HTTPS as well, choose 443 as the port number for HTTPS for the service in the UI.

If you are using the `service.yml` file to configure your services, you can use the following format to specify the ports: `InsidePort:HTTP_Port:HTTPS_Port`. Here is an example:

{% highlight yaml %}
services:
    my_service:
        ports: ["3000:80:443"]
{% endhighlight %}

This syntax allows you to tell Cloud 66 that you don't want the service to be available on HTTP (HTTPS only). Here is how:

{% highlight yaml %}
services:
    my_service:
        ports: ["3000::443"]
{% endhighlight %}




