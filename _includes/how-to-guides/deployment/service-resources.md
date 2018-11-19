## Limiting CPU and RAM usage

By default, Docker services will use as much CPU and memory as they require. You may wish to set a hard limit on memory, or the relative CPU shares used by a service. 

This can be accomplished by adding the `constraints/resources` directive to your service's configuration files. This usually means the `service.yml` but can also mean the service's [Stencils](/skycap/the-basics/formations-stencils-and-snapshots.html#what-is-a-stencil) if you use Skycap.

The default number of CPU shares given to a service is 1024. This is a relative number - if the service of container A has 1024 CPU shares, and the service of container B has 512 CPU shares, and both containers attempt to use 100% of the CPU, then container B will receive half of the total CPU time. This only applies when CPU-intensive tasks are running, as if one container is idle then the others can use the remaining CPU time.

The memory limit will apply to RAM usage, and SWAP usage. A valid entry is a positive number, followed by one of "b", "k", "m", or "g", with the minimum being "4m".

{% highlight yaml %}
services:
    your_service_name:
        constraints:
            resources:
                memory: "100m"
                cpu: 512
{% endhighlight %}

## Removing existing constraints

<div class="notice notice-warning"><p>If you have added constraints to your application in the past and now need to remove them, you will need to explicitly recreate your services (and the containers that embody them) via the Dashboard.</p></div>

To recreate your services without constraints:

1. Remove the `constraints/resources` directive from your configuration files and ensure you've saved them.
2. In the Cloud 66 Dashboard navigate to the application in question.
3. Click on the name of the service in question under *App Services*
4. Click the *Recreate Service* button to the right of the Containers list. This will recreate your containers and remove the constraints on that service.

<img src="/assets/shared/remove_constraints.png" alt="Recreate service button">
