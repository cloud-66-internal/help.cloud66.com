<!-- post: -->


### Ports

The `ports` option allows you to specify ports definitions for your service. The format of the ports definition is a list of `CONTAINER_PORT:HTTP_PORT:HTTPS_PORT`. Note that the `HTTP_PORT` and `HTTPS_PORT` fields are optional, and you can have HTTPS without HTTP if you wish and vica-versa by including the colons, but leaving that corresponding port number blank. You can define multiple port definition triplets for a single service using the above format, for example:

{% highlight yaml %}
services:
    <service_name>:
        ports: ["3000:80:443", "4000::8443", "5000"]
{% endhighlight %}

In this example, the application is listening on port 3000 in the container, and that port is exposed via HTTP on port 80, and HTTPS on port 443. Port 4000 inside the container is also available on port 8443 externally, and port 5000 in the container is available locally on the server. These HTTP/HTTPS ports are available from outside the server, and any traffic to these ports will be redirected to any containers running this service. During scaling, any containers running this service will get traffic distributed to them in a round robin fashion. 

