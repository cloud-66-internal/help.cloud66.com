<!-- usedin: [ _legacy_docker/stack-management/service-lifecycle-management-v1.md, _maestro/stack-management/service-lifecycle-management-v1.md, _node/stack-management/service-lifecycle-management-v1.md, _rails/stack-management/service-lifecycle-management-v1.md] -->


### Restart on deploy

A boolean value to indicate whether the containers of this service should be restarted during deployment (set to _true_ by default).

{% highlight yaml %}
services:
    <service_name>:
        restart_on_deploy: false
{% endhighlight %}

* * *

