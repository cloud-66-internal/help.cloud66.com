<!-- usedin: [ _legacy_docker/deployment] - post: -->


#### Advanced ports

You can also specify ports declaratively, and assign tcp/udp mappings directly to the host. This will mean that containers are mapped directly to the corresponding tcp/udp port on the host. Please note that if you use tcp/udp port mappings then you can only have a single container of that service running per server (can not map multiple containers to the same host port). Note that each port specification is optional. Http/Https ports will be mapped via Nginx automatically. For example:

{% highlight yaml %}
services:
    <service_name>:
        ports:
          - container: 3000
            http: 80
            https: 443
            tcp: 25
            udp: 111
{% endhighlight %}

* * *

