## Overview

Your Cloud 66 app has multiple layers of health checks to ensure that you are kept informed about any issues affecting deployments and uptime. Applications can use any combination of the following checks:

{% if include.product == 'rails' %}- [Deployment Success Checks](#deployment-success-checks){% endif %}
- [Load Balancer Checks](#load-balancer-health-checks)
- [Global Availability Checks](#global-availability-checks)
{% if include.product == 'maestro' %}- [Service Checks](#service-checks){% endif %}

This doc explains how each health check works, how they differ and how to implement them.

## Deployment Success Checks

Deployment Success Checks monitor whether your code has been deployed properly by checking on the status of your Rails application. There are three varieties of Deployment Success Checks:

- Web Success Checks
- Non-Web Success Checks
- Process success checks

Depending on your deployment strategy, the deployment process will stop if a server fails its Deployment Success Check. This can help to catch deployments that don’t throw any errors, but are problematic for other reasons (such as issues at the code or database level). This is particularly useful for serial or rolling **[deployment strategies](/{{page.collection}}/how-to-guides/deployment/parallel-deployment.html)** to ensure that bad code doesn’t bring your entire application down.

### Web Success Checks

Web Success Checks send a request to a **web server’s** HTTP endpoint and assign a status (“pass” or “fail”) based on the range of acceptable HTTP response code. You can configure a non-standard endpoint if required. See below for how to configure these checks.

The deployment process will stop if a server fails its Web Success Check. This can help to catch deployments that don’t throw any errors, but are problematic for other reasons (such as issues at the code or database level). This is useful for serial and rolling deployment strategies.

<!--
### Non-Web Success Checks

For Non-Web Success Checks, **we offer an endpoint** that *your* code can call after it is deployed to confirm it is available. This is the mirror image of Web Success Checks above - *your* code calls *our* internal endpoint. See below for how to configure these checks.
-->

### Process Success Checks

If your application uses a custom web server such as Puma, Unicorn or Thin (i.e. anything other than Passenger, our default web server) then we offer automated Process Success Checks after each deployment.

We use two methods to ensure your application is healthy:

- We check if **[systemd](https://help.cloud66.com/rails/how-to-guides/deployment/systemd.html)** is reporting that your application is healthy
- We check that your application process IDs change in some way on redeployment.

If either of these two checks fail, we mark the deployment as failed. This is particularly useful for rolling deployments because it will stop the deployment process and ensure the other servers are not brought down by the same issue.

## Configuring Web Success Checks

Web Success Checks are defined in your application’s **[manifest file](/{{page.collection}}/quickstarts/getting-started-with-manifest.html)**. They have the following options:

```yaml
    rails:
    	configuration:
    		health:
    			protocol: 'http'
    			host: 'localhost'
    			port: 80
    			endpoint: '/'
    			accept: ["200", "300-399"]
    			timeout: 30

```

{% if include.product == 'rails' %}
The values above are the default values and are all optional. Any options that are excluded will simply use the defaults above. You can see a complete list of supported options in our **[detailed manifest guide](/{{page.collection}}/how-to-guides/deployment/building-a-manifest-file.html)**.
{% endif %}
{% if include.product == 'maestro' %}
The values above are the default values and are all optional. Any options that are excluded will simply use the defaults above. You can see a complete list of supported options in our **[detailed manifest guide](/{{page.collection}}/how-to-guides/build-and-config/building-a-manifest-file.html)**.
{% endif %}
To simply use all these defaults with no changes, you can set:

```yaml
    rails:
    	configuration:
    		health: default
```

### Dealing with domain access controls

Some applications are set to only accept requests that originate from their own domain(s). In this case the health checks would always fail. The best way to work around this issue is to add an entry to your `/etc/hosts` file that maps your **localhost** (127.0.0.1) to your primary domain.

### The limitations of Web Success Checks

As you can see these checks are quite simple - they confirm that the endpoints defined are returning acceptable HTTP response codes. They do this by running a `curl` command from the server itself once new code has been deployed.

If you have set up custom error handling for your application, be sure these checks account for that customisation.

In particular you should check that your application correctly reports response codes and does not mask them. This applies to both false positives (i.e. health checks that should fail but appear to pass) and to false negatives (failed checks of healthy deployments).

## Load Balancer health checks

When a load balancer is set up it will begin to ping your web endpoints to check their health. By default load balancers ping the root path of your application (`/`) and if they receive a `200` response code, they will consider a server healthy.

If your application does not have a valid endpoint or route set for `/` then you can specify a custom path under the `httpchk` option in your **[manifest file](/{{page.collection}}/references/manifest-loadbalancer-settings.html)** to ensure your application responds appropriately (note that Rackspace does not support this feature). We will configure the load balancer to ping that path rather than the root.

If your web servers respond positively to the ping test, the load balancer will distribute the load between them. If any of these ping tests fail, the load balancer will not distribute traffic to those servers that failed this test.

## Global Availability Checks

Global Availability Checks query your application’s web endpoints from multiple servers around the world to test whether they respond appropriately. You can instantly check the public, global availability of your application from your Cloud 66 Dashboard. You can also set your application to automatically check the availability of endpoints after each deployment.

### Running an on-demand check

To run an on-demand Global Availability Check on an application:

1. Log into your Dashboard
2. Click on the app you wish to check
3. Click the *Health Check* link at the top of the main panel (next to your application's name)

![Health Check link](/assets/shared/application-health-checks.png)

This will open a drawer from the left of the screen which will show you the results of the test.

## Post-deployment global availability checks

You can configure your application to run a health check after each deployment. There are two ways to configure these checks:

1. Via the Dashboard interface (documented below)
2. Via your Manifest file (please see the [Manifest reference guide](/{{page.collection}}/references/manifest-web-settings.html#post-deployment-health-checks))

Post-deployment health checks have the following options:

- A **health check path** - this allows you to query a specific endpoint within your application. This uses the app's Cloud 66 DNS name (see below for more info). Defaults to the root of your app (`/`)
- A list of **accepted HTTP status codes** - we will treat an HTTP response containing any of these status codes as a *pass*. You can also specify ranges of codes (`300-399`)
- A **timeout** value in seconds - if we don't get a response within this time we will treat the test as a *fail*. The maximum allowed is `10`.
- A **maximum redirects** limit - if the number of redirects exceeds this value we will treat the test as a *fail*. The maximum allowed is `10`.
- A post-deployment **cooldown** - this is how long we will wait (in seconds) after a deployment in completed before we check the endpoint. The maximum allowed is `1800`(30 minutes).

### Configuring a post-deployment check

To configure (or update) a post-deployment health check:

1. Log into your Cloud 66 Dashboard
2. Click on ⚙️*Settings & Information* in the right-hand column
3. Click on the *Health Check* tab at the top of the main panel
4. Click on the *Post Deployment* sub-tab
5. Click on the *Yes, Run a Post Deployment Health Check* radio button
6. Configure your settings (see above for details of each setting)
7. Click the *SAVE* button

To disable the check, click the *No Health Check will be run* radio button.

### Viewing results of post-deployment checks

The results of your post-deployment health checks will be displayed under ActiveProtect:

1. Log into your Cloud 66 Dashboard
2. Click on *ActiveProtect* in the right-hand column
3. Any failed checks will appear on the front page of ActiveProtect but you can click on the *Health Checks* tab to filter down to the checks.

### How availability tests work

We send an `HTTP GET` from multiple datacenter regions to your application using its Cloud 66 DNS name (e.g.`your-app-name.c66.me`).

If your application redirects traffic using HTTP Redirect, we will follow the redirections up to 3 times. Your application should respond to the call within 1 second.

The datacenter regions that we check from are:

- US West (Los Angeles)
- US East (North Virginia)
- Europe West (Netherlands)
- Australia (Sydney)

This testing uses our open source project, **[Watchman](https://github.com/cloud66-oss/watchman)**, a light, multi-instance service in different geographical locations that provides a full picture of a web endpoint’s general health and global accessibility.

{% if include.product == 'maestro' %}
## Service Checks

Service Checks in **Maestro** allow you to specify different types of checks on your containers - **readiness checks**, **liveness checks**, and **startup checks**. These checks define a set of rules that determine whether your application is currently healthy. For instance, you can check whether an application is responding on an HTTP endpoint, or if a post-initialization file is present.

Service Checks are configured via your `service.yml` file. For more information please read our separate guide to setting up [Service Checks in Maestro](/maestro/how-to-guides/build-and-config/service-lifecycle-management.html#health).
{% endif %}