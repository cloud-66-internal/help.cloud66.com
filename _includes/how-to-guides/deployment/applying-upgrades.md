
## Cloud66 Update Packages Policy

Cloud 66 aims to make it easier to build **immutable** infrastructure. Building servers and stacks from scratch is much better than modifying existing server configurations and tinkering with settings until things start to work.

So in all cases of upgrade, our first recommendation is to build a new application and redirect your traffic to the new application using our [Elastic Address](/{{page.collection}}/tutorials/failover-groups.html).

Following that principle, whenever a new server is created we automatically update all the packages to the latest. After the server is created we only auto-install packages that are marked as `security updates`. So Cloud66 doesn't typically update other packages because we don't want to risk breaking or damaging your live application (a condition that doesn't apply when a server is newly created).

You have a few options for dealing with upgrades to packages:

* Don't apply the package updates. This is the safest bet if you're concerned about your app's stability, but can create issues in the longer term.
* Update the packages yourself through `sudo apt-get -y upgrade` or `dist-upgrade` package (if there is a new feature you're after or just want to be running the latest)
* Update the packages indirectly through scaling up a new server, and then dropping the old one (the new server will always get the latest packages installed on it)

#### Tip
<div class="notice">
<p>Some package and security updates require a server reboot. When you scale up we restart your new servers automatically to ensure everything is neat and clean. Alternatively you can reboot your servers manually or via the toolbelt if you prefer</p>
</div>

## Upgrade package types

### Security updates

In the event of a security vulnerability on any of the components we deploy on the servers, we aim to be as quick as possible to roll out the recommended patches for Ubuntu, Ruby and Rails.

### Ubuntu
From the _Deploy_ menu, choose _Deploy with Options_. By selecting _Apply security upgrades_, Cloud 66 will perform operating system security package upgrades and set up [unattended upgrades](https://help.ubuntu.com/community/AutomaticSecurityUpdates) for your application. Unattended upgrades will automatically check for and install the latest Ubuntu security packages on a daily basis.

Note that some security packages may require a server restart. We don't automatically restart your server, and it is at your discretion to do so. If the file `/var/run/reboot-required` exists, your server does in fact require a restart. To see which packages contributed to the requirement for a restart, please see `/var/run/reboot-required.pkgs`.
{% if page.collection == 'rails' %}
### Ruby

There are multiple options and considerations when upgrading your base version of Ruby. Please read our [detailed guide](/rails/how-to-guides/deployment/managing-and-upgrading-ruby-versions.html) on the subject.

A quick summary:

* Ruby version should be defined in your `manifest.yml` and *not* in a Gemfile (or `.ruby_version`)
* A safe way to roll out the upgraded version is to use our "scale up" feature to create a new server that uses the new version of Ruby

### Rails

Rails should be upgraded in the same way as Ruby. See above for details. 

{% endif %}
### Passenger

The recommended way to upgrade your passenger to the latest one is to deploy to a new web server and drop the old one, so the scaled up one will automatically have the [latest version](/{{page.collection}}/resources/technical-specifications.html#component-versions) supported by Cloud 66.

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
