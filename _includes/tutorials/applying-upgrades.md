
## Cloud66 Update Packages Policy

Cloud 66 aims to make it easier to build immutable infrastructure. Building servers and stacks from scratch is much better than modifying existing server configurations and tinkering with settings until things start to work.

Of course everyone knows that, the reasons they don't do it is that it's difficult, time consuming and can be unpredictable. That's why we want to make building stacks from scratch as easy and as quick as possible. So in all cases of upgrade, our first recommendation is to build a new application and redirect your traffic to the new application using our [Elastic Address]({% if page.collection == 'maestro' %}/maestro/tutorials/failover-groups.html{%else%}/{{page.collection}}/tutorials/failover-groups.html{% endif %}).

We are always working to make it easier to build a new application, move your data and switch your traffic around but it might not always be what you want to do or as easy as you would like it to be. So here is what we suggest as alternatives and exceptions.

Based on that our workflow is such that when a new server is created we automatically update all the packages to the latest. After the server is created we only auto-install packages that are marked as <code>security updates</code>. So Cloud66 doesn't typically update other packages because it doesn't want to risk breaking or damaging your already running app (which doesn't apply when the server is newly created).

In order to deal with the upgrades you have a few options:

<ol class="article-list">

<li>Leave the package updates, safest bet or if you're concerned about your app stability.</li>
<li>Update the packages yourself through <code>sudo apt-get -y upgrade</code> or <code>dist-upgrade</code> package (if there is a new feature you're after or just want to be running the latest)</li>
<li>Update the packages indirectly through scaling up a new server, and then dropping the old one (the new server will always get the latest packages installed on it)</li>
</ol>

#### Tip
<div class="notice">
<p>Some package updates (and security ones) require server-reboot. So again by scaling up we restart your new servers automatically to ensure everything is neat and clean! Alternatively you can reboot your servers manually or via the toolbelt should you wish!</p>
</div>

## Upgrade package types

### Security updates

In the event of a security vulnerability on any of the components we deploy on the servers, we aim to be as quick as possible to roll out the recommended patches for Ubuntu, Ruby and Rails.

### Ubuntu
<p>From the _Deploy_ menu, choose _Deploy with Options_. By selecting _Apply security upgrades_, Cloud 66 will perform operating system security package upgrades and set up <a href="https://help.ubuntu.com/community/AutomaticSecurityUpdates">unattended upgrades</a> for your application. Unattended upgrades will automatically check for and install the latest Ubuntu security packages on a daily basis.</p>

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

The recommended way to upgrade your passenger to the latest one is:

* Scale up a new web server and drop the old one, so the scaled up one will automatically have the [latest version](/{{page.collection}}/resources/technical-specifications.html#component-versions) supported by Cloud 66.
{% if page.collection == 'legacy_docker' or page.collection == 'skycap' or page.collection == 'maestro' %}
### Docker and Weave

#### Tip!
<div class="notice">
    <p>It is best to keep your Docker and Weave versions up to date as they are released quite frequently with bug/security fixes </p>
</div>
1. Update your manifest file (Configuration Files -> Manifest.yml) and change the Docker and Weave version to the [latest ones](/{{page.collection}}/resources/technical-specifications.html#component-versions).

<p>2. Click on <b>DEPLOY</b> and choose <b>Deploy with options</b></p>
<p>3. Go to the <b>More options</b> tab and tick the <b>Apply Docker upgrades</b> check box.</p>

#### Warning!
<div class="notice notice-danger">
    <p>Upgrading in-place involves downtime as the docker engine and local files are all upgraded. To have zero down-time you'd have to clone your application and use <a href="{% if page.collection == 'maestro' %}/maestro/tutorials/failover-groups.html{%else%}/{{page.collection}}/tutorials/failover-groups.html{% endif %}">Failover groups </a> to switch to the new one.</p>
</div>


{%endif%}

## About manual upgrades
If you need to upgrade any part of your application the best course of action is always to build a new one. However, if that is not desired or possible, you can always perform manual upgrades.

We detect the version of all the components we have configured or deployed on your servers on a regular basis and after each deployment. If you upgrade any part of your application manually, the upgrade will be detected by Cloud 66. This helps with the future automated upgrades.
