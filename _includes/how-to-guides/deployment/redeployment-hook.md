## Overview

Redeployment hooks allow you to achieve continuous deployment by deploying your application whenever you push a change to your Git repository or when your continuous integration pipeline builds successfully.

Cloud 66 offers several methods for achieving continuous integration. Please read our [continuous integration guide](/{{page.collection}}/how-to-guides/deployment/continuous-deployment.html) to compare and select the ideal method to suit your requirements.

## Accessing redeployment hooks

A unique redeployment hook URL is automatically generated for each Cloud 66 application. To access it:

1. Open the Application Overview from your [Dashboard](https://app.cloud66.com/dashboard)
2. Click on *Settings & Information*  in the **Application** panel on the right of the screen
3. Click on the *Information* panel

You can use the **Redeployment Hook** URL to trigger automated deployments via your preferred Git or CI service.

### Usage example

An example of a standard redeployment hook:

```shell
https://hooks.cloud66.com/stacks/redeploy/xxxx/yyyy
```

#### Note 
<div class="notice"><p>The xxxx/yyyy in the examples is for illustrative purposes only and should be replaced with your redeployment URL on your Application Information page.</p></div>

{% if include.product == 'maestro' or include.product == 'skycap' %}

## Services modifiers

You might have multiple services which rely on a combination of images or Git sources. Furthermore, the Git sources can be the same or different branches, or even completely different repositories. 

To handle this you can append your redployment hook with a  _services modifier_ as a query string parameter.

### Usage examples

An example redeployment **hook with a single services modifier:**

```shell
https://hooks.cloud66.com/stacks/redeploy/xxxx/yyyy?services=my-web-service
```

An example redeployment **hook with a many-service modifier:**

```shell
https://hooks.cloud66.com/stacks/redeploy/xxxx/yyyy?services=my-web-service,api
```

### How service modifiers work

When a redeployment hook is invoked:

* If the commit hook payload **includes Git information** (Git source, branch and/or reference) then we will attempt to find a matching service on your application that corresponds to this, and build that service. We will deploy _only_ the services that have a Git type (_not_ the image-based services).

* If the commit hook payload **does not include Git information**, then we will automatically redeploy _all_ services defined on your application.

* If you use the services modifier to **specify specific services** to deploy, then the same logic applies as in 1) and 2) above, the only difference being that we will only deploy the services you have specified.

{% endif %}

#### Note
<div class="notice"><p>In the case where the payload of the commit hook does not contain any branch information (Github and Bitbucket payload formats are supported) then the application will redeploy without attempting to match branch.</p></div>

{% if include.product != 'node' and include.product != 'prepress' %}

## Calling a deployment profile via a redeployment hook

[Deployment profiles](/{{page.collection}}/references/deploy-profiles.html) allow you to customise the deployment process depending on your requirements - for example deploying some components and not others. You can also call deployment profiles directly via redeployment hooks using the following syntax:

```shell
https://hooks.cloud66.com/stacks/redeploy/xxxx/yyyy/?deployment_profile=name_of_deployment_profile
```

The name of the profile can be found via your app Dashboard under Settings & Information &rarr; Build & Deployment Profiles. If your deployment profile's name has spaces in it, you should replace each space with either `+` or `%20`. 

{% endif %}
{% if include.product != 'prepress' %}
## Github integration

Users who have signed in through Github (and who have enough access to create and edit deployment events for their applications on GitHub) can activate continuous deployments on GitHub. 

To do this: access your [Application settings](/{{page.collection}}/references/toolbelt/toolbelt-commands.html#settings-set) via the toolbelt and set **continuous.deploy** to _true_.

```shell
$ cx settings set -s my_app_name continuous.deploy true
```

This will create a new webhook for your repository on GitHub or simply modify an existing one to let Cloud66 receive _deployment_ events as well.

#### Warning
<div class="notice notice-warning"><p>If you edit your webhooks manually on Github, they must be configured to be triggered by both <em>Push</em> and <em>Deployment</em> events in order for continuous deployment to work.</p></div>

With this feature enabled, whenever you push a new commit, Cloud 66 will automatically generate a new _deployment event_ based on receiving the _push event_ from GitHub. We will also send _deployment status events_ on different deployment statuses, such as started, canceled, succeeded and failed.

#### Note
<div class="notice"><p>The deployment event will be created with the same environment as your application.</p></div>
{% endif %}

## Adding redeployment hooks to your pipeline

The process of adding the hook differs by Git host, so we will guide you through doing this with GitHub, Bitbucket and a generic solution.

### GitHub Setup

On your Application Overview, click _Settings & information_ in the right sidebar and then the *Information* tab. Then copy the URL provided in the _Redeployment hook_ field. 

Next, visit your GitHub repository, click _Settings_ in the right sidebar, and then _Webhooks & Services_ in the left sidebar.

In the _Webhooks_ window, click _Add webhook_ and paste the redeployment hook URL into the _Payload URL_ field. When you confirm by clicking _Add webhook_, GitHub will automatically test your hook with a _Ping_ and you should get a green HTTP200 response.


### Bitbucket Setup

On your Application Overview, click _Settings & information_ in the right sidebar and then the *Information* tab. Then copy the URL provided in the _Redeployment hook_ field.  

Next, visit your Bitbucket repository, click _Settings_ in the left sidebar, and then _Hooks_ in the settings menu that appears. In the _Select a hook_ field, select a _POST_ hook, click _Add hook_ and paste your redeployment hook URL into the field provided. Click _Save_ to confirm.

### Generic Setup

Most Git providers have a commit hook mechanism that you can use to post to the Cloud 66 redeployment hook URL. Please check your Git provider documentation for this information. If your Git provider has a non-conforming payload format (not compatible with Github or BitBucket formats) then please get in touch and we can extend our payload support!


### Invoking your redeployment hook manually

To invoke the redeployment hook manually, you can POST an HTTP request to your redeployment hook URL. You can do this in curl like this:

```shell
curl -X POST [your redeployment hook URL]
```

{% if include.product != 'prepress' %}
#### Note
<div class="notice"><p>If you are manually invoking redeployments you should consider using <a href="/{{page.collection}}/references/toolbelt.html#redeploy-your-stack">Cloud 66 Toolbelt</a> instead, as it has additional features!</p></div>
{% endif %}