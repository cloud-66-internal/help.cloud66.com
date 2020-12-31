## Overview

A manifest file allows you to be more explicit about your application composition and control settings that are not usually available through the user interface or Cloud 66 toolbelt.

The file describes the setup of the components that run your application. See [Getting started with manifest files](/{{page.collection}}/quickstarts/getting-started-with-manifest.html) for an introduction.

{% if include.product == 'rails' %}

For _Rails/Rack_ applications, place a file called `manifest.yml` in a folder named `.cloud66`, that is in turn located in the root of your source code and checked into your repository.

{% endif %}

{% if include.product == 'maestro' %}

In Maestro there are two opportunities to edit your manifest file:

* After your application code has been analyzed (and before you deploy it) by using the _advanced_ tab.
* After your application has been deployed, by clicking on *Configuration Files* and then the *Manifest* tab in the Dashboard

#### Important
<div class="notice notice-warning"><p>It is vital that you understand the limits and caveats of manifest settings. Please read our <a href="/maestro/references/manifest-structure.html#classes-of-manifest-file-settings">reference guide</a> before you start creating your own manifest files.</p></div>

{% endif %}

Once you're ready, start by going through each section below to build your manifest file.

#### Problems upgrading?
<div class="notice"><p>
If you explicitly set the version of any component in your manifest file, we will respect that setting even if it conflicts with other system changes or upgrades (for example upgrading Ubuntu). If you are having trouble upgrading any component of your application, remember to check your manifest file to ensure you have not previously locked the version of that component or one of its dependents. </p></div>

## Which environment?

The first level of your manifest file is the **environment** - this allows you to use the same `manifest.yml` for multiple applications with different environments. Some examples are:

- production
- staging
- development

You can also use your own custom environment names in your manifest file.

### Applying settings across all environments

If you would like you a manifest setting to apply to **all environments**, you can simple drop the root level environment node from your YAML. This will ensure a component is always provisioned, regardless of environment.


## Which component?

Next, select which component you would like to specify settings for. You can choose from the following:

{% if include.product == "maestro" %}
*   [Docker](#docker){% endif %}
*   [ElasticSearch](#elasticsearch)
*   [Gateway](#gateway)
*   [GlusterFS](#glusterfs)
*   [Load balancers](#load-balancers)
*   [Memcached](#memcached)
*   [MongoDB](#mongodb)
*   [MySQL](#mysql)
*   [Nginx](#nginx) {% if include.product == "rails" %}
*   [Node version](#node-version) {% endif %}
*   [PostGIS](#postgis)
*   [PostgreSQL](#postgresql)
*   [Redis](#redis) {% if include.product == "rails" %}
*   [Sinatra](#sinatra)
*   [Rails](#rails)
*   [Rails health checks](#rails-rack-deployment-health-checks){% endif %}


## Which server?

Every component defined in the manifest file must be bound to a server. However, if you'd like configurations to apply to all your servers, you don't need to specify a server type.

Servers can be deployed specifically to host a single component, be shared between multiple components (e.g. Rails and MySQL on the same server) or be an external server (e.g. using an external database).

Here is an example of a server definition:

```yml
production:
  rails:
    servers:
    - server:
      unique_name: app
```

These are the parameters that the _server_ section can take:

- **unique_name** (_Required if you are specifying a server type_): A unique name for this server.
- **root_disk_size** (_Optional, AWS EC2, Azure and GCE only_): Default size of root disk (in GB) for servers used by application. Default value is 50.
- **root_disk_type** (_Optional, AWS EC2 and GCE only_): Disk type, accepted values being _ssd_ and _magnetic_. Default value is _ssd_.
- **subnet_id** (_Optional, AWS EC2 only_): ID of the AWS subnet in which you would like to create your servers.
- **vendor** (_Optional_): Cloud vendor where the server will be built. Valid values: aws, azure (use azure_rm for new Azure accounts), digitalocean, googlecloud, linode, rackspace, and clouda
- **key_name** (_Optional_): Key name of cloud vendor where the server will be built. This is used when an account has multiple keys for a given cloud vendor. The default value is `Default`.
- **region** (_Optional_): [Data center region](http://developers.cloud66.com/#cloud-vendor-instance-regions)where the server will be built.
- **size** (_Optional_): [Size of the server instance](http://developers.cloud66.com/#cloud-vendor-instance-names) created.
- **availability_zone** (_Optional, AWS EC2 only_): Availability zone of the server instance in AWS EC2 region.

#### Important
<div class="notice notice-warning">
<p>Only a single cloud vendor and region is supported for servers used by an application.</p>
</div>

```yml
production:
  rails:
    servers:
      server:
        unique_name: app
        vendor: aws
        key_name: Default
        region: us-east-1
        size: m3.medium
        root_disk_size: 100
        root_disk_type: ssd
        subnet_id: subnet-40000000
        availability_zone: us-east-1c
```

### Deploy to your own server

- **address** (_Optional, Registered Server only_): Address of the server, only applicable to Registered Servers. For Registered Servers, _unique_name_ and _address_ should be defined.

```yml
production:
  rails:
    server:
      unique_name: frontend
      address: 123.123.123.123
```

### Shared Servers

You can share a server between two components. This could be in cases like using the same server for both your Rails app and the MySQL server behind it.

Each shared server definition specifies the name of another server definition in the manifest file for which the components will then share the physical server:

```yaml
production:
  rails:
    server:
      same_as: *another_existing_servers_unique_name*
```


### External Servers

If you would like to use an external server for a component (like using your own MySQL or AWS RDS instance, for example), you can define that server as external.

External server definitions specify that the component is hosted on a server external to Cloud 66. This is not a valid target for your main application (e.g. rails) but may be appropriate for another component (e.g. MongoDB):

```yml
production:
  mysql:
    server: external
```

#### Important
<div class="notice notice-warning">
You are <b>required</b> to specify a <a href="#which-server">server</a> for components, whereas configurations are <b>optional</b>.
</div>


## Specify environment variables

You can add your environment variables to your manifest files.

Here is an example:

```yml
production:
  environment_variables:
    SOME_VARIABLE: value
    ANOTHER_ONE: another_value
    THIRD_ONE: AUTO_GENERATE
    LONG_ONE: AUTO_GENERATE_15
```

If you need to auto generate a value, you can use the `AUTO_GENERATE` keyword. It generates a 10 character long random string unless you specify the length after it: `AUTO_GENERATE_15` which generates a 15 character random string.

Environment variables set in your manifest file will only apply during the initial build of your application. Please refer to our documentation on [environment variables](/{{page.collection}}/tutorials/env-vars.html) if you'd like to set them beyond this point.

Any environment variable that is generated by the result of the code analysis (like database addresses) will override any value specified in the manifest file. In other words, you cannot specify a value like `MYSQL_ADDRESS` in your manifest file as it will be ignored.

{% if include.product == 'rails' %}
## Processes

[Background processes](/{{page.collection}}/how-to-guides/deployment/systemd.html) can be deployed and managed by Cloud 66. Any process in a `Procfile` will be picked up, deployed and monitored by the system.

If you would like more flexibility over the signals used to control the processes, you can use the `procfile_metadata` section. Here is an example:

```yml
production:
  procfile_metadata:
    worker:
      stop_sequence: ttin, 120, term, 5, kill
    web:
      restart_signal: usr1
      stop_sequence: usr1, 30, kill
    nsq:
      restart_on_deploy: false
```

In this example, a process called `worker` is stopped using a `TTIN` signal first. After waiting for 120 seconds, if the process is still running, a `TERM` signal will be sent. If it is still running after 5 seconds, it will be killed.

As for `web` or `custom_web` processes, you can specify a `restart_signal` which will be sent to the process serving web. This is useful for web servers that can do "phased" or zero-downtime restarts.

All processes restart during each redeployment of the application. If you want to avoid this, you can set `restart_on_deploy` to `false`.

The default values for **process signals** depend on which web server and/or process manager you are using. 

For the default signals for web servers, click the links below:

- [Puma](/rails/how-to-guides/rack-servers/puma-rack-server.html#customizing-shutdown-and-reload-signals)
- [Unicorn](/rails/how-to-guides/rack-servers/unicorn-rack-server.html#customizing-shutdown-and-reload-signals)
- [Thin](/rails/how-to-guides/rack-servers/thin-rack-server.html#customizing-shutdown-and-reload-signals)

For non-web processes:

- [systemd](/rails/how-to-guides/deployment/systemd.html) (our default process manager)
- [Bluepill](/rails/how-to-guides/deployment/bluepill-legacy.html) (legacy pre-June 2020)
{% endif %}

## Specify additional LiveLog files

Each component supports the additional partial configuration to add custom live log files for that component. For example:

```yml
production:
  rails:
    configuration:
      custom_log_files: ["/tmp/mylog/*/*.log"]
```
...or

```yml
production:
  docker:
    configuration:
      custom_log_files: ["/tmp/mylog/*/*.log"]
```
{% if include.product != 'maestro' %}
For more information about **LiveLogs** and additional examples, please see the [LiveLogs help page](/{{page.collection}}/how-to-guides/deployment/setting-up-custom-livelogs.html).
{% endif %}
{% if include.product == 'maestro' %}
For more information about **LiveLogs** and additional examples, please see the [LiveLogs help page](/{{page.collection}}/how-to-guides/build-and-config/setting-up-custom-livelogs.html).
{% endif %}
