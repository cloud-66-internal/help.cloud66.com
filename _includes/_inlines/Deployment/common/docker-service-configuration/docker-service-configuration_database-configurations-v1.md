


## Database configurations

You can specify any required databases in the service configuration. As databases are fairly static components that rarely change without a migration, they aren't run in containers. This avoids the complexity and overhead of running databases in a container, and allows Cloud 66 to perform replication and backups as normal. These databases will be deployed and configured automatically, and their addresses and access credentials will be made available to the containers across the stack with environment variables.

The allowed database values are: `postgresql`, `mysql`, `redis`, `mongodb`, `elasticsearch` , `rabbitmq` and `glusterfs`. For example:

{% highlight yaml %}
services:
    <service_name>:
databases:
    - mysql
    - elasticsearch
{% endhighlight %}

