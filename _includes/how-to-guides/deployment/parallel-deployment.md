


When you deploy in parallel, all the deployment tasks for the servers in your application will run in parallel as opposed to running in serial. In other words, the tasks will run against each server simultaneously instead of running on one server at a time. For large applications, this can have significant time benefits.

Deploying in serial involves removing each server from your load balancer, deploying to it, and re-adding it to the load balancer. When you deploy in parallel, your servers won't be removed from the load balancer, because you could end up with no servers serving the load balancer if this were the case.

### Note

To run database migrations during deployment, it is advisable to deploy in serial.

Although database migrations only occur on one server, depending on the changes, they could stop deployments on other servers from succeeding. Refer to our page on [controlling your database migrations]({% if page.collection == "maestro" %}/maestro/how-to-guides/databases/database-customization.html{% else %}/{{page.collection}}/how-to-guides/databases/database-customization.html{% endif %}) for more information.

## Configure parallel deployment

To activate parallel deployments, access your [Application settings]({% if page.collection == "maestro" %}/maestro/references/toolbelt.html{%else%}/{{page.collection}}/references/toolbelt.html{%endif%}#settings-variables) via [Toolbelt](/{{page.collection}}/quickstarts/using-cloud66-toolbelt.html) and set `deploy.parallel` to `true`. 

```
$ cx settings set -s my_app deploy.parallel true
```
Once set, any future deployments will be done in parallel. Should you wish to do a one-off deployment in serial, you can do so by clicking _Deploy_ -> _Deploy with options_ and selecting _Deploy in serial_. Similarly, if you have your application set to deploy in serial, you can perform a one-off deploying in parallel through this menu.

{% if include.product == 'rails' %}
Parallel deployments are activated by default for [Rack-based applications with a custom web server](/rails/how-to-guides/deployment/shells/nginx-modules.html#passenger) (e.g. Unicorn as it supports zero downtime restarts), but not for applications based on Passenger.
{% endif %}
