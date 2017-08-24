<!-- usedin: [ _legacy_docker/stack-management] - post: -->


### Pre-start signal

This is a signal that is sent to the existing containers of the service before the new containers are started during deployment. An example could be `USR1` - but it depends on what your container is running as to which signals make sense.

{% highlight yaml %}
services:
    <service_name>:
        pre_start_signal: USR1
{% endhighlight %}

* * *

