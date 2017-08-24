<!-- usedin: [ _legacy_docker/deployment/service-network-configuration.md, _maestro/Deployment/service-network-configuration.md, _node/deployment/service-network-configuration.md, _rails/deployment/service-network-configuration.md, _skycap/deployment/service-network-configuration.md] -->


### Traffic matches

The `traffic_matches` option allows you to specify an array of string server name matches for your service. These are automatically configured in your reverse proxy service (Nginx). In the following example, if traffic comes in on `app.your_domain.com` or `*.anotherdomain.com` on this service port, then traffic will automatically get routed to it. This option also allows you to have multiple services listening on the same port (port 80 for example) as long as they have different rules for matching server names.

{% highlight yaml %}
services:
    <service_name>:
        traffic_matches: ["app.your_domain.com", "*.anotherdomain.com"]
{% endhighlight %}
