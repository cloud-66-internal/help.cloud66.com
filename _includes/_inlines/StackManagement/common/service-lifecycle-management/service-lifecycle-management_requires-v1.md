<!-- usedin: [ _legacy_docker/stack-management/service-lifecycle-management-v1.md, _maestro/stack-management/service-lifecycle-management-v1.md, _node/stack-management/service-lifecycle-management-v1.md, _rails/stack-management/service-lifecycle-management-v1.md] -->


### Requires

In some cases, you may want to make sure that a service is only started if another service is started. The `requires` option allows you to set such dependencies. For example:

{% highlight yaml %}
services:
    <service_name>:
        image: cloud66/sample
        requires:
          - "my_api"    
{% endhighlight %}

* * *

