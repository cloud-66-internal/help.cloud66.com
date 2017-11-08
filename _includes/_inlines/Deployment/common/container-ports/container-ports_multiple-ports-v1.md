


## Multiple ports

Sometimes a service can listen to multiple ports. An example is InfluxDB where it listens to differnet ports for queries and admin controls. All different options to configure ports of a service can be repeated in a YAML array. Here is an example:

{% highlight yaml %}
services:
    my_service:
        ports:
          - container: 8787
            tcp: 9000
          - container: 8788
            tcp: 9001
{% endhighlight %}

or for HTTP / HTTPS:

{% highlight yaml %}
services:
    my_service:
        ports: ["3000:80", "3001:8080"]
{% endhighlight %}

See [Service Network Settings](https://help.cloud66.works/{{ include.product }}/deployment/service-network-configuration.html) for more information on all features around Container Port Mapping.
