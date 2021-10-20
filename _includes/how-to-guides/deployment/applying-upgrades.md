## Automated package update policy

Cloud 66 aims to make it easier to build **immutable** infrastructure. Building servers and applications from scratch is much better than modifying existing server configurations and tinkering with settings until things start to work.

When a new server is provisioned we automatically install the latest versions of packages. After the server is created we only auto-install packages that are marked as `security updates`. Cloud 66 doesn't (typically) automatically update other packages because it doesn't want to risk disrupting your existing application. However, depending on your configuration, we *may* update your packages each time you redeploy your app (see below).

{% include general/do_not_configure_servers_manually.html product = page.collection %}

## Controlling package updates
{% if include.product != 'maestro' %}
You can add custom Linux (Ubuntu) packages to your application using Deploy Hooks (read [our full guide here](/{{page.collection}}/how-to-guides/deployment/managing-custom-packages.html).)  Depending on how you've set them up,  Deploy Hooks can either install packages only when a new server is created, or on every (re)deploy (or both).{% endif %}
{% if include.product == 'maestro' %}
You can add custom Linux (Ubuntu) packages to your application using Deploy Hooks (read [our full guide here](/{{page.collection}}/how-to-guides/build-and-config/managing-custom-packages.html).)  Depending on how you've set them up,  Deploy Hooks can either install packages only when a new server is created, or on every (re)deploy (or both).{% endif %}

## Managing high-risk updates

If you're concerned about a major update to one of the packages you depend on, our first recommendation is to build a new application and redirect your traffic to the new application using your [Failover Address](/{{page.collection}}/tutorials/failover-groups.html).

If rebuilding is impractical or impossible, there are three approaches to dealing with the issue:

- Ignore the package update — this is the safest bet if you're concerned about app stability, but can create issues in the longer term. Be sure to check and update your Deploy Hooks so that the package doesn't get automatically installed the next time you deploy.
- Manually update the packages by logging into the servers and using `sudo apt-get -y upgrade` or `dist-upgrade`
- Update the packages indirectly through scaling up a new server, and then dropping the old one. New servers will have the latest packages installed on them unless you have explicitly locked package versions using Deploy Hooks.

#### Note
<div class="notice"><p>Some package updates require server-reboot. When scaling up we restart your new servers automatically to ensure everything works correctly. Alternatively, you can reboot your servers manually or via the Toolbelt.</p></div>

## Upgrade package types

### Security updates

In the event of a security vulnerability on any of the components we deploy on the servers, we aim to be as quick as possible to roll out the recommended patches.

### Ubuntu

To manually trigger security upgrades:

1. Open the Application Overview from your [Dashboard](https://app.cloud66.com/dashboard)
2. Clicking on the *Build / Deploy* button and choose *Deploy with Options*
3. Click on the *Options* tab
4. Check *Apply Security Upgrades* and *Yes, reboot my servers if required*
5. Click *Run Now*

This will perform operating system security package upgrades and also set up <a href="https://help.ubuntu.com/community/AutomaticSecurityUpdates">unattended upgrades</a> for your application. Unattended upgrades will automatically check for and install the latest Ubuntu security packages on a daily basis.

Note that some security packages may require a server restart. We don't automatically restart your server, and it is at your discretion to do so. 

If the file `/var/run/reboot-required` exists, that means your server requires a restart. To see which packages contributed to the requirement for a restart, read `/var/run/reboot-required.pkgs`.
{% if page.collection == 'rails' %}
### Ruby

There are multiple options and considerations when upgrading your base version of Ruby. Please read our [detailed guide](/rails/how-to-guides/deployment/managing-and-upgrading-ruby-versions.html) on the subject.

A quick summary:

* Ruby version should be defined in your `manifest.yml` and *not* in a Gemfile (or `.ruby_version`)
* A safe way to roll out the upgraded version is to use our "scale up" feature to create a new server that uses the new version of Ruby

### Bundler

We automatically install the latest available version of Bundler whenever either:

- a new server is created
- the version of Ruby is upgraded on an existing server

If an existing server is throwing errors related to your Bundler version, the best option is usually to [upgrade Ruby](/rails/how-to-guides/deployment/managing-and-upgrading-ruby-versions.html) to a more recent version. Be sure to follow our best practice (linked above) when doing so to ensure the upgrade runs smoothly.

### Rails

Rails should be upgraded in the same way as Ruby. See above for details. 

### Passenger

The recommended way to upgrade your passenger to the latest one is to deploy to a new web server and drop the old one, so the scaled up one will automatically have the [latest version](/{{page.collection}}/resources/technical-specifications.html#component-versions) supported by Cloud 66.
{% endif %}

{% if include.product == 'maestro' %}
### Docker and Weave

It is best to keep your Docker and Weave versions up to date as they are released quite frequently with bug/security fixes.

1. Update your manifest file (Configuration Files -> Manifest.yml) and change the Docker and Weave version to the [latest ones](/maestro/resources/technical-specifications.html#component-versions).

2. Click on **Deploy** and choose **Deploy with options**
3. Go to the **More options** tab and tick the **Apply Docker upgrades** check box.

#### Warning
<div class="notice notice-danger"><p>Upgrading in-place involves downtime as the Docker engine and local files are all upgraded. To maintain zero down-time you should clone your application and use <a href="/maestro/tutorials/failover-groups.html">failover groups</a> to switch to the new instance.</p></div>
{% endif %}

## About manual upgrades
If you need to upgrade any part of your application the best course of action is always to build a new server. However, if that is not desirable or possible, you can always perform manual upgrades.

We detect the version of all the components we have configured or deployed on your servers on a regular basis and after each deployment. If you upgrade any part of your application manually, the upgrade will be detected by Cloud 66. This helps with the future automated upgrades.

## Troubleshooting package upgrades

Although there are an almost infinite number of issues that could occur with updating different packages, we have summarised some common issues:

### Deployment failed: Unable to install package(s)

The most common reason for this error is that the version of one or more components specified in your `manifest.yml` and/or `Docker` file conflicts with other components - particularly with the version of the underlying operating system (Ubuntu). 

If you are trying to upgrade an existing application - particularly one that had been running for 12 months or longer - be sure to check both your [Manifest file](https://help.cloud66.com/rails/quickstarts/getting-started-with-manifest.html) and (where appropriate) your Docker file. You can view and edit these files via your Dashboard or directly in your git repo. 

If you have explicitly specified a version for any component in either of these files, Cloud 66 will attempt to use that version on the assumption that you have specified it for a good reason (such as backward compatibility). 

### "Failed to Fetch ... 404 Not Found" errors

The most common cause of these kinds of errors is some kind of interruption in network connectivity - typically between your cloud provider and the package repository. Such interruptions are not uncommon, and typically resolve themselves quickly. Wait a few minutes and try again. If the problem persists:

1. Check you can reach the server yourself ([via SSH](https://help.cloud66.com/rails/how-to-guides/common-tools/ssh-to-server.html))
2. If you can access the machine, you should attempt to run the package upgrade manually via ssh (using the standard `apt-get install <package>` command)
3. If you're still getting 404s you should check that your cloud provider's firewall isn't blocking access to the package repo (and/or [Cloud 66's IP range](https://help.cloud66.com/rails/resources/security.html#customer-protection)). 

### "Unable to find expected entry" errors

If your application depends on older or legacy packages, these packages (or the repos that support them) can sometimes cease to exist, particularly when an older version of an operating system reaches "end of life" (EOL). There are sometimes manual workarounds for this kind of things, but in general we recommend upgrading to packages that are being actively maintained. 

### "...has no installation candidate" errors

This typically only occurs if you're using your own ("registered") servers and running an unsupported operating system and/or distribution. We only support the two most recent major releases of Ubuntu. You can check what we currently support here. The best plan here is to reinstall a supported version of Ubuntu.
