## Overview

Continuous deployment is a feature that automatically deploys your application every time new code is committed to your repository.

There are two ways to set up continuous deployment for your Cloud 66 application:

1. The automated method (via the [Cloud 66 Dashboard](https://app.cloud66.com/))
2. The manual method (via [redeployment hooks](/{{page.collection}}/how-to-guides/deployment/redeployment-hook.html))

The first method is only available if you have given Cloud 66 access to your repository by installing our GitHub app during deployment. It is easier to set up, but the second method is more flexible and will also work with non-GitHub repositories. Please read our [guide to redeployment hooks](/{{page.collection}}/how-to-guides/deployment/redeployment-hook.html) for more details. 

## Enabling automated continuous deployment

This method is only available if you have connected your Cloud 66 account to GitHub by installing the Cloud 66 GitHub account. If you have not done this, please [follow our guide](/{{page.collection}}/how-to-guides/common-tools/access-your-code.html).

To enable continuous deployment:

1. Log into your Cloud 66 Dashboard
2. Click on your application
3. Click on ⚙️ *Settings & Information* in the right-hand panel
4. Check the box next to **Continuous Deployment**

Now, each time you commit code to the branch your application relies on, it will trigger an automatic deployment.

## Continuous integration tests

When you enable continuous deployment (as above) your application will deploy as soon as we detect an update to its repository. However, if you have tests or other integration tasks that run on GitHub (or that GitHub is aware of), you can set your application to wait for these to pass before deploying. 

To do so, check the box next to *Wait for continuous integration tests to pass before deploying.* (This option only appears once you have enabled continuous deployment - see above).