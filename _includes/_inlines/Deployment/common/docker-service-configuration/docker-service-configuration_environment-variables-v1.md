<!-- usedin: [ _legacy_docker/deployment/docker-service-configuration-v1.md, _maestro/Deployment/docker-service-configuration-v1.md, _skycap/deployment/docker-service-configuration-v1.md] -->


## Environment variables

Any environment variable defined in your stack will be made available within your service container. You can also define new environment variable for a service or reference an environment variable in other stacks or services using the following syntax:

{% highlight yaml %}
services:
    <service_name>:
        env_vars:
            # Setting an environment variable
            ENV_NAME1: VALUE

            # Referencing a stack-wide variable
            ENV_NAME2: _env(STACK_ENV_VAR_NAME)

            # Referencing a stack-wide variable (with default fall-back)
            ENV_NAME3: _env(STACK_ENV_VAR_NAME:Default)

            # Referencing a service's variable
            ENV_NAME4: _env(SERVICE[SERVICE_NAME].ENV_VAR_NAME)

            # Referencing a service's variable (with default fall-back)
            ENV_NAME5: _env(SERVICE[SERVICE_NAME].ENV_VAR_NAME:Default)

            # Referencing another stack's variable
            ENV_NAME6: _env(STACK[STACK_UID].ENV_VAR_NAME)

            # Referencing another stack's variable (with default fall-back)
            ENV_NAME7: _env(STACK[STACK_UID].ENV_VAR_NAME:Default)

            # Referencing another stacks' service variable
            ENV_NAME8: _env(STACK[STACK_UID].SERVICE[SERVICE_NAME].ENV_VAR_NAME)

            # Referencing another stacks' service variable (with default fall-back)
            ENV_NAME9: _env(STACK[STACK_UID].SERVICE[SERVICE_NAME].ENV_VAR_NAME:Default)
{% endhighlight %}

In above example, all defined environment variables except `ENV_NAME1` are referenced to other environment variables. You can specify a default value for referenced environment variables that will be set if there is no suitable link value (such as `ENV_NAME3`).

In addition to this, you can pass environment variables into your Dockerfile during your build process (if using BuildGrid) with the `$VARIABLE` syntax, which will be populated with environment variable(s) set on the stack.
