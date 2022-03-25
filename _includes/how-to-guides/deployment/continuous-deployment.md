## Overview

Cloud 66 offers several ways to achieve continuous deployment for your applications. These methods all use triggers (such as commits to git repositories) to initiate the deployment process for your apps. This doc explores and compares each of the options.

| Method | Pros | Cons |
| --- | --- | --- |
| Cloud 66 GitHub application | Very quick & easy, no manual set up required | Limited to GitHub, less configurable and extensible, no access to deployment profiles |
| [Redeployment hooks](/{{page.collection}}/how-to-guides/deployment/redeployment-hook.html) | Can be used on non-Github repos, can use deployment profiles, more extensible (for example can be used with a continuous integration platform) | Requires some manual set up, lacks some more advanced deployment features |{% if include.product == 'prepress' %}
{: .table .table-bordered .table-striped}
{% endif %}
{% if include.product != 'prepress' %}| [Cloud 66 Toolbelt](#continuous-deployment-via-the-cloud-66-toolbelt) (or API) | The most customisable option with full access to all deployment features. Very flexible and extensible. | Requires some engineering work and careful configuration |
{: .table .table-bordered .table-striped}
{% endif %}

## Enabling automated continuous deployment

This method is only available if you have connected your Cloud 66 account to GitHub by installing the Cloud 66 GitHub account. If you have not done this, please [follow our guide](/{{page.collection}}/how-to-guides/common-tools/access-your-code.html).

you can enable (and disable) continuous deployment in the Cloud 66 Dashboard:

1. Log into your [Cloud 66 Dashboard](https://app.cloud66.com/) and click on your app
2. Click on ⚙️ *Settings & Information* in the **Application** panel on the right of the screen
3. Scroll down to the **Deployment** panel
4. Check the box next to **Continuous Deployment**

{% if include.product != 'prepress' %}
You can also enable (and disable) continuous deployment via the Cloud 66 Toolbelt:

To do this modify your **[application settings](/{{page.collection}}/references/toolbelt/toolbelt-commands.html#settings-set)** via the toolbelt and set **continuous.deploy** to *true*. For example:

```bash
$ cx settings set -s my_app_name continuous.deploy true
```
{% endif %}
Your application will now be deployed every time you commit changes to the branch of your repo which the application is set to use. 

<div class="notice notice-warning"><p markdown="1">
🚨 This is particularly useful for development versions of your application, but we advise caution when using this feature with your live application.
</p></div>

## Continuous integration tests

When you enable continuous deployment (as above) your application will deploy as soon as we detect an update to its repository. However, if you have tests or other integration tasks that run on GitHub (or that GitHub is aware of), you can set your application to wait for these to pass before deploying. 

To do so, check the box next to *Wait for continuous integration tests to pass before deploying.* (This option only appears once you have enabled continuous deployment - see above).

## Continuous deployment via redeployment hooks

Redeployment hooks are unique (per application) webhooks that trigger a deployment process for their related application. They will work with any system or service that accepts webhooks and can also be invoked manually, or via shell scripts. They can call deployment profiles, and their payloads can contain information on the branch being deployed.

Read our guide to [redeployment hooks](/{{page.collection}}/how-to-guides/deployment/redeployment-hook.html) for more information on setting them up.

{% if include.product != 'prepress' %}
## Continuous deployment via the Cloud 66 Toolbelt

The [Cloud 66 Toolbelt](/{{page.collection}}/quickstarts/using-cloud66-toolbelt.html) (cx) gives you full control over your applications, including settings not available via the Dashboard. 

The `redeploy` command can be used to trigger the deployment of any existing application.

### The cx redeploy command
{% include references/toolbelt/redeploy.md %}

You can find more info about Toolbelt commands in the [full reference guide](/{{page.collection}}/references/toolbelt/toolbelt-commands.html).
{% endif %}
## Via the Cloud 66 API

You can also use the `deployments` method in the Cloud API to trigger deployments. Read the [API guide](https://developers.cloud66.com/#redeploy) for more info.