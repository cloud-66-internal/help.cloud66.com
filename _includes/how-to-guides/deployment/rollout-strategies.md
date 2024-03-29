## Overview

Whenever you update your application code, you can adjust two aspects of the way it is updated:

1. How the updated code is pushed to your servers (the **deployment strategy**) 
2. How the updated version is shown to visitors (the **rollout strategy**) 

The first aspect is concerned with how the new code gets to your servers - how quickly it happens, in what order, and whether this causes any downtime. If you need help with this aspect, please read our [full guide on the subject](/{{page.collection}}/how-to-guides/deployment/parallel-deployment.html).

The second aspect, the subject of this guide, is concerned with how the new version of your application is presented to your visitors. There are three strategies:

1. **No rollout strategy** (the default) - as soon as new code is deployed, all your visitors see it
2. **Blue / Green rollout** - runs the previous version of your app alongside the new version and directs people to each version based on specific conditions (such as HTTP headers).
3. **Canary rollout** - as with Blue / Green, you maintain both versions of your application but you only direct a small proportion of web traffic to the new version. You then gradually switch your visitors across to the new version if it meets your expectations.

<div class="notice notice-warning"><p>Rollout strategies only apply to direct updates to the code of your web application - they are NOT intended for infrastructure changes (like background process, Ruby version or Web server changes, for example).</p></div>

## Preparing existing applications for rollout strategies

Applications created on Cloud 66 before mid-August 2021 may need to be prepared before they are able to use these rollout strategies - particularly if those applications have [custom Nginx configuration files](/{{page.collection}}/how-to-guides/deployment/customizing-nginx.html). 

Before using rollout strategies with your existing application, you should:

1. Check that there are no [Application Updates](/{{page.collection}}/how-to-guides/common-tools/application-updates.html) that need to be applied
2. If you have made modifications to the Nginx config for your application, follow the steps below.

### Migrating your customized Nginx file.

Supporting Rollout Strategies requires an upgrade of Nginx as well as a new Nginx configuration. If you have made changes to your Nginx configuration, you can follow these steps to ensure your changes are not lost when the Application Updates run.

#### Important 
<div class="notice notice-warning"><p>Application Updates will override the modifications you've made to your Nginx configurations, unless these steps are followed. You can see this as a warning on the Application Updates page shown in yellow. If no warning is shown, then no Nginx configuration update is required and your changes will not be lost.</p></div>

1. Copy your customized Nginx file to a local file for backup and reference
2. Reset the your configs to default using the button on the page, but don’t apply them
3. Add your changes manually to the new file (see below)
4. Commit the new file

A string named `$unique_suffix` should remain in the final Nginx config file otherwise the file will be overwritten during the upgrade. Ensure sure that string doesn’t get removed when you are applying your changes.


## Changing your application’s rollout strategy

There are three ways to set a rollout strategy for an app:

1. Using the Dashboard and selecting “Deploy with options”
2. Creating a deployment profile that defines a strategy
3. Deploying via Cloud 66 Toolbelt using the `rollout-strategy` parameter

{% if include.product == 'rails' %}
<div class="notice"><p>If you are using Unicorn, you will need to acknowledge that you have made the required changes to your <a href="/rails/how-to-guides/rack-servers/unicorn-rack-server.html">Unicorn configuration</a> in your code, otherwise these strategies will not work as desired.</p></div>
{% endif %}

### Using "Deploy with options"

You can trigger a deployment that uses either of the two rollout strategies by clicking the *Deploy* button on your **Application Overview** page and choosing *Deploy with Options*. This will allow you to choose between the two strategies.

**This will only apply to the current deployment** - it does not change the default rollout strategy for your app.

### Using a deployment profile

Deployment profiles allow you to customise how your app will be deployed, including the rollout strategy it should use.

To **create** a profile:

1. From your app dashboard, click on the green *Build* button and then the *Create New Profile* link.
2. Name the profile
3. Choose a rollout strategy 
4. Choose a deployment strategy
5. Choose which components will be deployed (optional)
6. Define upgrade settings (optional)
7. Save the profile

To **deploy** using a profile:

1. From your app dashboard, click on the green *Build* button
2. Click on the name of the profile you'd like to use for this deployment

For more information on deployment profiles, please read [our reference guide](/{{page.collection}}/references/deploy-profiles.html).

### Using the Toolbelt command line

You can add the `rollout-strategy` parameter to a Toolbelt command to roll out your application using your preferred strategy. This is a once-off, and will not change the way any future rollouts are handled. Valid values for the `rollout-strategy` parameter are:

- `canary`
- `blue_green_immediate`
- `blue_green_delayed`

For example, this would deploy your application with a canary rollout variant:

```bash
cx stacks redeploy -rollout-strategy canary -s my-app
```
You can manage most aspects of your rollouts via the Cloud 66 Toolbelt. [See below for more help](#manage-rollouts-using-cloud-66-toolbelt-cx).

## How rollout strategies work

Both Blue / Green and Canary rollouts use the same underlying mechanism:

1. We deploy the new version of your app to your servers and configure it to run alongside the current version.
2. We then use Nginx to route web traffic to these different versions, depending on your chosen strategy.
3. Then you either *Finalize* a rollout (which removes the older version and directs all traffic to the new version) or *Discard* it (essentially a roll back).

You can see an application's current rollout state at the top of the Application Overview page. This interface also allows you to adjust, finalize or discard the current rollout. 

![Rollout panel on Application Overview page](/assets/shared/rollouts-app-overview.png "Rollout panel on Application Overview page")

## Managing a Blue / Green rollout

Blue / Green rollouts are intended for two main purposes: 

1. To allow a specific set of people to test a new version of an app in the live environment before directing visitors to it ("Delayed switchover")
2. To quickly roll back a newly deployed version if problems are encountered ("Immediate switchover")

When you choose to deploy using Blue / Green:

- We will deploy the new version of your code (always referred to as `Green`) to your servers, while continuing to host the previous version of the app (always referred to as `Blue`)
- By default, all visitors will see the current version of the application code. The current version depends on the rollout option selected. If you select "Immediate switchover" then the current version is `Green` - and if you select "delayed switchover" the current version is `Blue`.
- You can then choose to switch web traffic between the different versions of your code using the buttons at the top of your Application Overview (in your Cloud 66 Dashboard) or using your Cloud 66 Toolbelt (see below)
- You can directly browse either version of the application by adding custom HTTP headers (see below)

### Using HTTP headers to view Blue or Green versions

By default, all visitors will see the **current** version of the application code, as explained above.

However you can browse either the Blue or Green version your app directly (regardless of which is current) by adding an `X-Rollout-Version` HTTP header to your requests. You can assign the header a value of either `green` or `blue` as needed. 

This is particularly useful when you have chosen the "Delayed switchover" option because it allows your team (or selected visitors) to see the new version "in the wild" before switching the general public over to the new version.

You can set your HTTP headers in a number of ways, including:

- Browser plugins or extensions
- Using a `curl` command

### Browser plugins for HTTP headers

All of the popular browsers have plugins or extensions that allow you to modify the HTTP headers of your web requests. Here are some examples:

- [ModHeader](https://chrome.google.com/webstore/detail/modheader/idgpnmonknjnojddfkpgkljpfnnfcklj?hl=en) for Chrome
- [ModHeader](https://addons.mozilla.org/en-GB/firefox/addon/modheader-firefox/) for Firefox
- [ModHeader](https://microsoftedge.microsoft.com/addons/detail/modheader/opgbiafapkbbnbnjcdomjaghbckfkglc) for Edge

The allow you to add the `X-Rollout-Version` header to the HTTP requests made by any browser tab, and to easily switch between the `green` and `blue` rollout candidates. 

### Setting an HTTP header via curl

If all you need is to pull the raw HTML, then simply running a `curl` command via your terminal will work perfectly. To add HTTP headers to your `curl` command, use the following format:

```bash
curl -H "X-Rollout-Version: blue" http://wasp.sampleapp-868240.c66.me/
```

You can use either your app's internal Cloud 66 DNS address, or its public address.

## Managing a Canary rollout

Canary rollouts allow you to gradually shift your visitors over from a previous version of your application to a new version. While they use a similar mechanism to Blue / Green rollouts, they behave differently in important ways. 

When you choose to deploy using a Canary release:

- We will deploy the new version of your code to your servers, while continuing to host the previous version of the app
- We randomly direct a small percentage of visitors to the new version (depending on your initial setting)
- You can then adjust the percentage of web traffic being routed to each of the the different versions of your code using the buttons at the top of your Application Overview (in your Cloud 66 Dashboard)
- At any point you can then either *Finalize* a rollout (which removes the older version and directs all traffic to the new version) or *Discard* it (essentially a roll back)

<div class="notice"><p>The random cohort of visitors that is assigned to the Canary release will be directed to that release persistently (i.e. they will not bounce between Canary and non-Canary versions of the code).</p></div>

### Browsing rollout variants for Canary releases

You can browse different variants of a Canary release using the same HTTP header method [described above for Blue / Green releases](#using-http-headers-to-view-blue-or-green-versions). In the context of Canary releases:

- `Blue` is always the previous version of the code
- `Green` is always the new (updated) version of the code (i.e the canary)

## Environment Variables in Rollouts

Rollout Strategies don't support dynamic changes to environment variables. If an environment variable is changed in the system it will be made available to the application when it is deployed next. The existing versions of the app will use the old values of the variables until they are taken down. 

As such if a new version of an application requires a new value for an environment variable, it must be changed before deployment. The previous value will remain in case of a rollback, but  redeployment of the old version will use the new environment variable value.

## Manage rollouts using Cloud 66 Toolbelt (cx)

<div class="Tabs Tabs--enclosed">
<nav>
<ul class="TabMini js_tabs">
<li class="TabMini-item active">
<a href="#cx-command" class="TabMini-link">
Toolbelt (cx) command
</a>
</li>
<li class="TabMini-item">
<a href="#cx-examples" class="TabMini-link">
Examples
</a>
</li>
</ul>
</nav>

<section id="cx-command" class="Tabs-content js_tab_content">

You can control your rollouts entirely via your command line Toolbelt. The operative command is:
<pre class="language-shell">
cx stacks variants
</pre>

<strong>USAGE:</strong>
<pre class="language-shell u-whiteSpaceNoWrap">
cx stacks variants [global options] command [command options] [arguments...]
</pre>

<strong>COMMANDS:</strong>
<pre class="language-shell u-whiteSpaceNoWrap">
   list			list application variants
   commit		commit your new rollout application variant
   rollback		rollback to your old rollout application variant
   update-percentage	update the traffic percentage of your canary rollout
   delete		delete an existing preview application variant
   help, h		Shows a list of commands or help for one command   
</pre>
</section>

<section id="cx-examples" class="Tabs-content js_tab_content is-hidden">

This command will <strong>commit</strong> the "new" rollout variant (aka "green") for the application named <code>my-application</code>:

<pre class="language-shell u-whiteSpaceNoWrap">
cx stacks variants commit -s my-application
</pre>

This command will <strong>roll-back</strong> to the code to the previous version (aka "blue") for the same application:

<pre class="language-shell u-whiteSpaceNoWrap">
cx stacks variants rollback -s my-application
</pre> 

This command will set the Canary variant ("green") to receive 25% of all traffic to the same app:

<pre class="language-shell u-whiteSpaceNoWrap">
cx stacks variants update-percentage 25 -s my-application
</pre>
</section>
</div>

