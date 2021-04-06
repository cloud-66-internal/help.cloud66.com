## Limiting CPU and RAM usage

By default, Docker services will use as much CPU and memory as they require. You may wish to set a hard limit on memory, or the relative CPU shares used by a service. 

This can be accomplished in Maestro by adding the `constraints/resources` directive to your service's `service.yml`. Read [our guide to using service.yml](/maestro/how-to-guides/build-and-config/docker-service-configuration.html) for more help.

### CPU limits

The default number of CPU shares given to a service is 1024. This is a relative number - if the service of container A has 1024 CPU shares, and the service of container B has 512 CPU shares, and both containers attempt to use 100% of the CPU, then container B will receive half of the total CPU time. This only applies when CPU-intensive tasks are running, as if one container is idle then the others can use the remaining CPU time.

### RAM limits

<div class="Tabs Tabs--enclosed">
    <nav>
      <ul class="TabMini js_tabs">
        <li class="TabMini-item active">
          <a href="#V2-First" class="TabMini-link">
            Maestro V2
          </a>
        </li>
        <li class="TabMini-item">
          <a href="#V1-First" class="TabMini-link">
            Maestro V1
          </a>
        </li>
      </ul>
    </nav>

<section id="V2-First" class="Tabs-content js_tab_content">

<p>The memory limit will apply to RAM usage, and SWAP usage. A valid entry is a positive number, followed by one of, "K", "M", or "G", with the minimum being "4M". (You can also use the power-of-two equivalents like Gi, Mi, Ki if you prefer.)</p>

<p><strong>For example:</strong></p>

```yaml
services:
    your_service_name:
        constraints:
            resources:
                memory: "100M"
                cpu: 512
```

        </section>

        <section id="V1-First" class="Tabs-content js_tab_content is-hidden">

<p>The memory limit will apply to RAM usage, and SWAP usage. A valid entry is a positive number, followed by one of, "k", "m", or "g", with the minimum being "4m".</p>

<p><strong>For example:</strong></p>

```yaml
services:
    your_service_name:
        constraints:
            resources:
                memory: "100m"
                cpu: 512
```

        </section>
</div>

## Removing existing constraints

<div class="notice notice-warning"><p>If you have added constraints to your Maestro application in the past and now need to remove them, you will need to explicitly recreate your services (and the containers that embody them) via the Dashboard.</p></div>

To recreate your services without constraints:

1. Remove the `constraints/resources` directive from your configuration file(s) and ensure you've saved them.
2. In the Cloud 66 Dashboard navigate to the application in question.
3. Click on the name of the service in question under *App Services*
4. Click the *Recreate Service* button to the right of the Containers list. This will recreate your containers and remove the constraints on that service.

<img src="/assets/shared/remove_constraints.png" alt="Recreate service button">
