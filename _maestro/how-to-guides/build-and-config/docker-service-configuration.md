---
layout: post
template: one-col
title: Custom service configurations 
categories: how-to-guides/build-and-config
order: 2
lead: "How to specify custom service configurations for your application"
legacy: false
tags: ["customization", "service.yml"]
permalink: /:collection/:path:output_ext
---

## Overview

Service configuration allows you to be more explicit about your Maestro services and control settings that are not usually available through the user interface or Cloud 66 Toolbelt. These are defined in the `service.yml` file. 

These settings describe the composition of your services. Here are some common examples of service configurations you can define:

- Defining build and deploy commands
- Specifying a central logging folder
- Setting port definitions for your containers
- Mounting volumes into your containers
- Setting dependencies between your containers

For a full list of available options, see the [table](#service-configuration-options) at the end of this document.

## Accessing service.yml

While you're building your application, custom service configurations can be accessed by clicking on the *Advanced* tab. This gives you direct access to editing the `service.yml` for your application.

Once your application has been built, you can access `service.yml` under *Configuration Files* in the right menu of your Application Overview.

## Service configuration examples

We have taken these examples from our public samples repository that you can [access here](https://github.com/cloud66-samples). They are not intended for use as anything except examples.

### Single service with MySQL database

In this example, we'll be configuring a service called *web*, which is pulled from a Git repository and requires a MySQL database.

```yaml
services:
 web:
  log_folder: "/usr/src/app/log"
  ports:
   - container: 3000
      http: 80
      https: 443
   git_url: https://github.com/cloud66-samples/pilot
   git_branch: master
   dockerfile_path: Dockerfile
databases:
- mysql
```

As you can see above, the *web* service is pulled from a sample project on GitHub called Pilot. It specifies both a path for the Dockerfile and a logging folder. Finally, the container is set to listen on port 3000 and uses external ports 80 and 443.

### Multiple services and databases

In this example, we'll be running three services - one called *seller*, one called *buyer* and one called *dashboard* as well as a Redis database. You can define as many services as you need. 

```yaml
services:
 seller:
  git_url: https://github.com/cloud66-samples/acme.git
  git_branch: master
  dockerfile_path: "./Dockerfile"
  build_root: seller
  command: seller --redis redis:6379
 buyer:
  git_url: https://github.com/cloud66-samples/acme.git
  git_branch: master
  dockerfile_path: "./Dockerfile"
  build_root: buyer
  command: buyer --redis redis:6379
 dashboard:
  git_url: https://github.com/cloud66-samples/acme.git
  git_branch: master
  ports:
  - container: 5000
     http: 80
  dockerfile_path: "./Dockerfile"
  build_root: dashboard
  command: "/go/src/dashboard/dashboard --redis redis:6379"
 redis:
  image: redis
  ports:
  - 6379
```

### Using Habitus for builds

[Habitus is a build workflow tool for Docker-based applications](http://www.habitus.io/). It allows you to create a build workflow consisting of multiple steps for your Maestro application. Maestro fully supports Habitus. To enable Habitus on your Maestro application, you need to do the following:

1. Add a `build.yml` to your repository
2. Set `use_habitus` attribute to `true` in your `service.yml`
3. Set the `use_habitus_step` to the step you would like to use for your service in your `service.yml`

You can edit your `service.yml` directly from the Dashboard by clicking *Edit service* and then clicking the *Advanced* tab.

A Habitus build usually has multiple steps and each step can generate a Docker image. Using `use_habitus_step` attribute you can specify which step's results you would like to use as the image for the container.

Check out the [Habitus website](http://www.habitus.io/) for more information about generating a `build.yml`.

## Adding a DaemonSet

A DaemonSet ensures that a (single) copy of a specific Pod is added to every Node. This is useful for running background processes (aka daemons) but has many other uses. For more detail pleased read our [explanatory doc](/maestro/the-basics/concepts-and-terminology.html#daemonsets) on the subject.

To create a DaemonSet we simply set the `type` of any service to `daemon_set`. For example:

```yaml
service:
 web:
  image: training/webapp
  type: daemon_set
  ports:
  - container: 5000
     http: 80
```

This will use the image called "webapp" to spawn a single Pod called "web" on every Node in your Cluster.

## Database configurations

The first time you deploy an application, you can specify any required databases in the service configuration. These databases will be deployed and configured automatically, and their addresses and access credentials will be made available to the containers across the application with environment variables.

Once your application has been deployed, you can still add databases, but you need to do so using our database [Add-Ins](/maestro/how-to-guides/add-ins/) feature. 

As databases are fairly static components that rarely change without a migration, they aren't run in containers. This avoids the complexity and overhead of running databases in a container and allows Cloud 66 to perform replication and backups as normal. 

The allowed database values are: `postgresql`, `mysql`, `redis`, `mongodb`, `elasticsearch` , `rabbitmq` and `glusterfs`. For example:

```yaml
services:
 <service_name>:
  databases:
  - mysql
  - elasticsearch
```

## Environment variables

Any [environment variable](/maestro/how-to-guides/build-and-config/env-vars-advanced.html) defined in your application will be made available within your service container.

The syntax for defining environment variables in a service definition is:

```yaml
services:
 service_name:
  env_vars:
  VAR1: _env(VALUE_OF_VARIABLE)
```

You can also reference environment variable in other applications or services. For more info please read our [detailed guide](/maestro/how-to-guides/build-and-config/env-vars-advanced.html#syntax-examples) to the sharing env vars between apps and services.

## Setting a Service Account name

Kubernetes relies on its "[Service Accounts](https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/)" feature to manage the identity of processes running inside Pods.

By default all services belong to a service account named `default`. Normally this provides sufficient access for your application. However, should you require elevated access (e.g. to allow for log collection or metrics gathering), you can set a custom Service Account for any service using the `service_account_name`. For example:

```yaml
services:
 web:
  ports:
  - container: 3000
    http: 80
 service_account_name: public-front-end
```

This will make the service named "web" run under the "public-front-end" Service Account in Kubernetes.

Bear in mind that this service account will first need to be created on your cluster (with associated access bindings) before it will function correctly. Please read the [Kubernetes guide to configuring Service Accounts](https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/) for more detail.

## Service configuration options

Below is a table of the available configurations for a given service with a brief description. For more detailed information about an option, click the link provided.

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

<table class="table table-bordered table-striped table-small"> 
   <tbody> 
    <tr> 
     <td> <strong>Option</strong> </td> 
     <td> <strong>Description</strong> </td> 
    </tr> 
    <tr> 
     <td> <a href="/maestro/how-to-guides/deployment/service-tags-annotations.html#service-annotations">annotations</a> </td> 
     <td>Annotations for your services in key/value format - these will also become annotations on your Kubernetes resources </td> 
    </tr>  
    <tr> 
     <td> <a href="/maestro/how-to-guides/build-and-config/building-your-service.html">build_command</a> </td> 
     <td> Specifies the command you would like to run during application build. </td> 
    </tr> 
    <tr> 
     <td> <a href="/maestro/how-to-guides/build-and-config/building-your-service.html">build_root</a> </td> 
     <td> Specifies the directory of your repository in which you wish to run your Docker build. </td> 
    </tr> 
    <tr> 
     <td> <a href="/maestro/how-to-guides/build-and-config/building-your-service.html">command</a> </td> 
     <td> Specifies the command used to start your container. </td> 
    </tr> 
    <tr> 
     <td> <a href="/maestro/how-to-guides/build-and-config/service-resources.html">constraints</a> </td> 
     <td>Limits the <a href="/maestro/how-to-guides/build-and-config/service-resources.html#limiting-the-number-of-containers">number of containers</a> or the <a href="/maestro/how-to-guides/build-and-config/service-resources.html">resource usage</a> of a service across the cluster, or <a href="/maestro/how-to-guides/build-and-config/service-resources.html#allocating-services-to-nodes">allocates services to nodes</a> based on names and/or tags. </td> 
    </tr> 
    <tr> 
     <td> constraints/tolerations </td> 
     <td> This is an optional hash for advanced configuration of <a href="https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/">Kubernetes Tolerations</a>.</td> 
    </tr>
    <tr> 
     <td> <a href="/maestro/how-to-guides/build-and-config/building-your-service.html">deploy_command</a> </td> 
     <td> Specifies the command you would like to run during application deploy (runs once per service). </td> 
    </tr> 
    <tr> 
     <td> <a href="/maestro/how-to-guides/build-and-config/service-network-configuration.html#dns_behaviour">dns_behaviour</a> </td> 
     <td> Specifies the dns behaviour for this service. Accepted values: <em>versioned</em>, <em>non-versioned</em>. Defaults to <em>versioned</em>. </td> 
    </tr> 
    <tr> 
     <td> <a href="/maestro/how-to-guides/build-and-config/building-your-service.html">dockerfile_path</a> </td> 
     <td> Specifies the location of the Dockerfile to be used for building this service, eg. <em>docker/Dockerfile</em>. </td> 
    </tr> 
    <tr> 
     <td> <a href="/maestro/how-to-guides/build-and-config/building-your-service.html">git_url</a> </td> 
     <td> The URL for the Git repository from which your Docker image will be built. </td> 
    </tr> 
    <tr> 
     <td> <a href="/maestro/how-to-guides/build-and-config/building-your-service.html#git-branch">git_branch</a> </td> 
     <td> The Git repository branch your Docker image will be based on. </td> 
    </tr> 
    <tr> 
     <td> <a href="#using-habitus-for-builds">use_habitus</a> </td> 
     <td> Use <a href="http://www.habitus.io">Habitus</a> build workflow </td> 
    </tr> 
    <tr> 
     <td> <a href="#using-habitus-for-builds">use_habitus_step</a> </td> 
     <td> The <a href="http://www.habitus.io">Habitus</a> step to use for the build. </td>
    </tr> 
    <tr>
     <td> <a href="/maestro/how-to-guides/build-and-config/service-lifecycle-management.html#health">health</a> </td>
     <td> One of the values: <em>default</em>, <em>none</em> or a hash. Use this to configure <em>Readiness</em>, <em>Liveness</em>, and <em>Startup</em> probes</td>
    </tr>
    <tr> 
     <td> <a href="/maestro/how-to-guides/build-and-config/building-your-service.html#image">image</a> </td> 
     <td> The image you would typically run <code>docker pull</code> from. </td> 
    </tr> 
    <tr> 
     <td> <a href="/maestro/how-to-guides/build-and-config/service-network-configuration.html#load_balancing">load_balancing</a> </td> 
     <td> Specifies the load balancing method for this service. Accepted values: <em>roundrobin</em>, <em>sticky</em>, <em>closest</em>. Default value is <em>roundrobin</em> </td> 
    </tr> 
    <tr> 
     <td> <a href="/maestro/how-to-guides/build-and-config/setting-up-custom-livelogs.html">log_folder</a> </td> 
     <td> Folder your services logs to, mounted to <code>/var/log/containers/service</code> on the host filesystem. </td> 
    </tr> 
    <tr> 
     <td> <a href="/maestro/how-to-guides/build-and-config/service-network-configuration.html#ports">ports</a> </td> 
     <td> The ports that are running within the container, as well as their corresponding external ports. </td> 
    </tr>
    <tr> 
     <td> <a href="#setting-a-service-account-name">service_account_name</a> </td> 
     <td> Assigns the service to a specific Kubernetes Service Account. The default value is <code>default</code> </td> 
    </tr>   
    <tr> 
     <td> <a href="/maestro/how-to-guides/build-and-config/service-lifecycle-management.html#pre_start">pre_start_signal</a> </td> 
     <td> This is a signal that is sent to the existing running containers of the service before the new service containers are started during deployment. </td> 
    </tr> 
    <tr> 
     <td> <a href="/maestro/how-to-guides/build-and-config/service-lifecycle-management.html#pre_stop">pre_stop_sequence</a> </td> 
     <td> This is a stop sequence that is executed on your running containers before they are shut down. </td> 
    </tr> 
    <tr> 
     <td> <a href="/maestro/how-to-guides/build-and-config/service-network-configuration.html#requires">requires</a> </td> 
     <td> Array of other defined service names that should be started before this service during build and deployment. </td> 
    </tr> 
    <tr> 
     <td> <a href="/maestro/how-to-guides/build-and-config/service-network-configuration.html#restart">restart_on_deploy</a> <em>(default: true)</em> </td> 
     <td> Boolean value to indicate whether the containers of this service should be restarted during deployment. </td> 
    </tr> 
    <tr> 
     <td> security_context </td> 
     <td> This is an optional hash for advanced configuration of Kubernetes Security Context. Valid keys are: <i>fs_group, host_ipc, host_network, host_pid, privileged, run_as_group, run_as_non_root, run_as_user, supplemental_groups</i>. </td> 
    </tr>
    <tr> 
     <td> <a href="/maestro/how-to-guides/build-and-config/service-network-configuration.html#stop_grace">stop_grace</a> </td> 
     <td> Duration between the Docker <code>TERM</code> and <code>KILL</code> signals when Docker stop is run and a container is stopped. </td> 
    </tr>
    <tr> 
     <td> <a href="/maestro/how-to-guides/build-and-config/service-network-configuration.html#traffic-matches">traffic_matches</a> </td> 
     <td> The automatically configured traffic names in your Nginx config that will route traffic to these containers based on request DNS name. Allows microservices on the same port routes by subdomain for instance. </td> 
    </tr>
    <tr> 
     <td> <a href="/maestro/how-to-guides/deployment/service-tags-annotations.html">tags</a> </td> 
     <td>Arbitrary text tags for your services - these will also become labels on your Kubernetes resources </td> 
    </tr>    

    <tr> 
     <td>type</td> 
     <td> Specifies the type of service being defined. Accepted values: <code>service</code>, <code>deployment</code>, <code>daemon_set</code> </td> 
    </tr>  
    <tr> 
     <td> <a href="/maestro/how-to-guides/build-and-config/service-storage.html">volumes</a> </td> 
     <td> The volumes that are mounted from your host into your container. <span style="background-color: #FFFF00"><strong>Note:</strong> must use absolute paths.</span> </td> 
    </tr> 
    <tr> 
     <td> work_dir </td> 
     <td> Specifies the <a href="https://docs.docker.com/reference/builder/#workdir">working directory</a> in your image for any command to be run.<br> </td> 
    </tr> 
    <tr> 
     <td> <a href="/maestro/how-to-guides/build-and-config/service-lifecycle-management.html#pre_stop">pre_stop_command</a> </td> 
     <td> This hook is called immediately before a container is terminated. </td> 
    </tr> 
    <tr> 
     <td> <a href="/maestro/how-to-guides/build-and-config/service-lifecycle-management.html#pre_start">post_start_command</a> </td> 
     <td> This hook executes immediately after a container is created. </td> 
    </tr> 
   </tbody> 
  </table> 

</section>


<section id="V1-First" class="Tabs-content js_tab_content is-hidden">

<table class="table table-bordered table-striped table-small"> 
   <tbody> 
    <tr> 
     <td> <strong>Option</strong> </td> 
     <td> <strong>Description</strong> </td> 
    </tr> 
    <tr> 
     <td> <a href="/maestro/how-to-guides/build-and-config/building-your-service.html">build_command</a> </td> 
     <td> Specifies the command you would like to run during application build. </td> 
    </tr> 
    <tr> 
     <td> <a href="/maestro/how-to-guides/build-and-config/building-your-service.html">build_root</a> </td> 
     <td> Specifies the directory of your repository in which you wish to run your Docker build. </td> 
    </tr> 
    <tr> 
     <td> <a href="/maestro/how-to-guides/build-and-config/building-your-service.html">command</a> </td> 
     <td> Specifies the command used to start your container. </td> 
    </tr> 
    <tr> 
     <td> <a href="/maestro/how-to-guides/build-and-config/building-your-service.html">deploy_command</a> </td> 
     <td> Specifies the command you would like to run during application deploy (runs once per service). </td> 
    </tr> 
    <tr> 
     <td> <a href="/maestro/how-to-guides/build-and-config/service-network-configuration.html#dns_behaviour">dns_behaviour</a> </td> 
     <td> Specifies the dns behaviour for this service. Accepted values: <em>versioned</em>, <em>non-versioned</em>. Defaults to <em>versioned</em>. </td> 
    </tr> 
    <tr> 
     <td> <a href="/maestro/how-to-guides/build-and-config/building-your-service.html#dockerfile_path">dockerfile_path</a> </td> 
     <td> Specifies the location of the Dockerfile to be used for building this service, eg. <em>docker/Dockerfile</em>. </td> 
    </tr> 
    <tr> 
     <td> tags </td> 
     <td> Arbitrary tags for services </td> 
    </tr> 
    <tr> 
     <td> <a href="/maestro/how-to-guides/build-and-config/building-your-service.html">git_url</a> </td> 
     <td> The URL for the Git repository from which your Docker image will be built. </td> 
    </tr> 
    <tr> 
     <td> <a href="/maestro/how-to-guides/build-and-config/building-your-service.html#git-branch">git_branch</a> </td> 
     <td> The Git repository branch your Docker image will be based on. </td> 
    </tr> 
    <tr> 
     <td> <a href="/maestro/how-to-guides/build-and-config/building-your-service.html#using-habitus-for-builds">use_habitus</a> </td> 
     <td> Use <a href="http://www.habitus.io">Habitus</a> build workflow </td> 
    </tr> 
    <tr> 
     <td> <a href="/maestro/how-to-guides/build-and-config/building-your-service.html#using-habitus-for-builds">use_habitus_step</a> </td> 
     <td> The <a href="http://www.habitus.io">Habitus</a> step to use for the build. </td> 
    </tr> 
    <tr>
     <td> <a href="/maestro/how-to-guides/build-and-config/service-lifecycle-management.html#health">health</a> </td>
     <td> One of the values: <em>default</em>, <em>none</em> or a hash containing at least one of <em>type</em>, <em>endpoint</em>, <em>protocol</em>, <em>accept</em> or <em>timeout</em>. </td>
    </tr>
    <tr> 
     <td> <a href="/maestro/how-to-guides/build-and-config/building-your-service.html#image">image</a> </td> 
     <td> The image you would typically run <code>docker pull</code> from. </td> 
    </tr> 
    <tr> 
     <td> <a href="/maestro/how-to-guides/build-and-config/service-network-configuration.html#load-balancing">load_balancing</a> </td> 
     <td> Specifies the load balancing method for this service. Accepted values: <em>roundrobin</em>, <em>sticky</em>, <em>closest</em>. Default value is <em>roundrobin</em> </td> 
    </tr> 
    <tr> 
     <td> <a href="/maestro/how-to-guides/build-and-config/setting-up-custom-livelogs.html">log_folder</a> </td> 
     <td> Folder your services logs to, mounted to <code>/var/log/containers/service</code> on the host filesystem. </td> 
    </tr> 
    <tr> 
     <td> <a href="/maestro/how-to-guides/build-and-config/service-network-configuration.html#ports">ports</a> </td> 
     <td> The ports that are running within the container, as well as their corresponding external ports. </td> 
    </tr> 
    <tr> 
     <td> privileged <em>(default: false)</em> </td> 
     <td> Boolean value to indicate whether the container should be <a href="https://docs.docker.com/engine/reference/run/#runtime-privilege-and-linux-capabilities">run with extended privileges</a>. </td> 
    </tr> 
    <tr> 
     <td> <a href="/maestro/how-to-guides/build-and-config/service-lifecycle-management.html#pre_start">pre_start_signal</a> </td> 
     <td> This is a signal that is sent to the existing running containers of the service before the new service containers are started during deployment. </td> 
    </tr> 
    <tr> 
     <td> <a href="/maestro/how-to-guides/build-and-config/service-lifecycle-management.html#pre_stop">pre_stop_sequence</a> </td> 
     <td> This is a stop sequence that is executed on your running containers before they are shut down. </td> 
    </tr> 
    <tr> 
     <td> <a href="/maestro/how-to-guides/build-and-config/service-network-configuration.html#requires">requires</a> </td> 
     <td> Array of other defined service names that should be started before this service during build and deployment. </td> 
    </tr> 
    <tr> 
     <td> <a href="/maestro/how-to-guides/build-and-config/service-network-configuration.html#restart">restart_on_deploy</a> <em>(default: true)</em> </td> 
     <td> Boolean value to indicate whether the containers of this service should be restarted during deployment. </td> 
    </tr> 
    <tr> 
     <td> <a href="/maestro/how-to-guides/build-and-config/service-network-configuration.html#stop_grace">stop_grace</a> </td> 
     <td> Duration between the Docker <code>TERM</code> and <code>KILL</code> signals when Docker stop is run and a container is stopped. </td> 
    </tr> 
    <tr> 
     <td> <a href="/maestro/how-to-guides/build-and-config/service-network-configuration.html#traffic_matches">traffic_matches</a> </td> 
     <td> The automatically configured traffic names in your Nginx config that will route traffic to these containers based on request DNS name. Allows microservices on the same port routes by subdomain for instance. </td> 
    </tr> 
    <tr> 
     <td> volumes </td> 
     <td> Volumes mounted from host into container. Syntax: Array of absolute paths, with the format <code>HOST_FOLDER:CONTAINER_FOLDER</code>. Optional 'ro' on the end for read-only. e.g.
<pre><code class="language-yaml">volumes:
 - "/tmp/host:/tmp/container"
 - "/tmp/host:/tmp/container:ro"
</code></pre>
</td> 
    </tr> 
    <tr> 
     <td> work_dir </td> 
     <td> Specifies the <a href="https://docs.docker.com/reference/builder/#workdir">working directory</a> in your image for any command to be run.<br> </td> 
    </tr> 
   </tbody> 
  </table> 
  
  
</section>
</div>

## More help

* Learn how to call environment variables in a service defintion 
* [Using environment variables in a Dockerfile](/maestro/how-to-guides/build-and-config/env-vars-advanced.html#using-environment-variables-in-a-dockerfile)