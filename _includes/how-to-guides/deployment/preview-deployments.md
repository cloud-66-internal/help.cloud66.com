## Overview

Preview Deployments are automatically generated deployments of newer versions of your application code that run alongside your live application. They are designed to allow you to quickly test changes to your application code without having to deploy to a separate environment. 

Preview Deployments are triggered by changes in the git repository of your application - this means that simply pulling new code into your repo can automatically update your Preview (depending on your settings).

Previews run on separate, unique subdomains so they are only visible to your team and those you specifically choose to share them with (such as clients or beta testers)

<div class="notice"><p>Preview Deployments only apply to your applications <strong>web components</strong>  - they use the same database(s), and the same environment variables, components and manifest settings as the base application. They are <em>not</em> a truly separate instance of your application and should not be treated as such. <strong>We recommend running previews in non-production environments</strong> when you are doing rapid feature iterations.</p></div>

## Types of Preview Deployments

We support three kinds of (mutually exclusive) Preview Deployments:

- **Branches** - creates new Preview Deployments based on git branch names
- **Tags** - creates new Preview Deployments based on git tag names
- **Pull Requests** - creates & removes Preview Deployments based on git pull requests

Both **branches** and **tags** can be matched using the [glob format](https://en.wikipedia.org/wiki/Glob_(programming)) - so, for example, if you specify `feature*` as your branch name, we will create a Preview for any branch with the word "feature" in it.

## Enabling and disabling Preview Deployments

By default Preview Deployments are disabled. You can enable Preview Deployments via you Cloud 66 Dashboard:

1. Log in and click on your application
2. Click on *Settings & Information* in the right-hand column
3. Click the *Preview Deployments* tab at the top of the main panel
4. Select the method of Preview Deployment you prefer
5. If you select **Branches** of **Tags**, you will need to specify at least one name (or glob) to match. You can also specify a branch name for **Pull Requests** but this is optional. 
6. Click *Save*

Once you have enabled Previews for your application, you will need to **add the webhook** to your git provider to complete the setup (see below).

### Disabling Previews

To disable Previews, follow the same process but select **No Preview Deployments** instead. Note that this will not remove any previews currently deployed on your servers. To delete previews - see our guide below.

## Triggering Preview Deployments via your git provider

In order for your git provider to automatically alert us to the fact that a new branch or tag has been created or pushed, you need to add a webhook URL to your provider. 

You can find the webhook URL at the top of the Preview Deployments settings page (under *Settings & Information).* Copy the URL and then use it to set up the automation with your git provider. 

## Setting up Previews on GitHub

To enable Preview Deployments on GitHub:

1. Log into GitHub and open your app's repo page
2. Click on the *Settings* tab
3. Click on Webhooks in the left-hand nav
4. Click the *Add Webhook* button
5. Paste the webhook URL from your dashboard into the *Payload URL* field 
6. Under the events section, select "Send me **everything**" 
7. Click *Add Webhook*

Now, every time you add or push a branch or tag that matches the conditions you set in your Dashboard, we will automatically deploy a Preview to your servers.

## Monitoring Preview Deployments

Whenever a Preview Deployment is underway, a link will appear on the Previews page that will allow you to follow the logs for that deployment. 

If the deployment fails for any reason we will keep the logs, otherwise we will discard them after the deployment is complete.

![Preview Deploymemnt logs interface](/assets/shared/preview-deploy-logs.png)

## Browsing and managing Previews

If you have any Deployment Previews active on your servers, a Previews menu-item will appear in your Dashboard's right-hand navigation column. This page lists all the Previews currently running on your servers, which branch of your code they originate from, and the most recent commit hash.

To browse a Preview:

1. Log into your Dashboard and open your app
2. Click on *Previews* in the right-hand column 
3. Click on the *Preview* link for the branch you wish to browse - this will open the unique subdomain on which your Preview is hosted. 

You can use this URL to share the Preview with people outside of your team, but it should not be made public or used in any DNS settings.

### Redeploying Previews

You can manually trigger the redeploy of a Preview by clicking the icon next to it. Bear in mind that we this will redeploy the current commit. 

### Deleting Previews

You can use this interface to delete old or unwanted Preview Deployments. To do so, click on the trash-bin icon next to any Preview to delete it. Remember that if you push code to the same branch again, you will also spawn the Preview again.

<div class="notice notice-warning"><p>While we do not limit the number of Previews an app can have, we strongly recommend against having more than a few at any time. By their nature, Previews require resources to run (RAM, CPU cycles etc.) and thus reduce the capacity of your application to serve your visitors. For this reason <strong>we recommend running previews in non-production environments</strong> when you are doing rapid feature iterations</p></div>


### Deleting Previews using Cloud 66 Toolbelt

You can also list and delete unwanted Previews using the Cloud 66 Toolbelt (cx) to do this use the following commands:

```bash
cx stacks variants list -s my-stack --type preview  # Lists previews with UIDs

cx stacks variants delete [UID] -s my-stack # Deletes a preview by UID
```