## Overview

Application Updates allow you to manage changes to your application's components and supporting tools. This includes two categories:

1. Updates to the infrastructural components of your application
2. Updates to your Cloud 66 Dashboard or other related Cloud 66 tools

These can be the kinds of updates that *could* break your application if they are not tested first, or if they are done when your server resource utilisation is high (e.g. the busiest time of day or week). 

Some Application Updates have a **due date** and will be applied automatically when that deadline is past (during the maintenance window you have specified). Alternatively they can be manually applied at the time of your choosing.

Application Updates that have already been applied or are not applicable to your application are not shown.

## Using Application Updates

To see your Application Updates:

1. Log into your Cloud 66 Dashboard
2. Click on the app you wish to update (or check)
3. Click on *Settings & Information* in the right-hand column
4. Click on the *Application Updates* tab

This page lists all the updates that either:

- Still need to be rolled out
- Have been successfully rolled out

If an Application Update has a **due date** we will list it here. Once that date is reached we will roll out the update automatically during your next maintenance window.

### Setting a maintenance window

The default window for automatically rolling out overdue updates is Saturdays at `02:00 UTC`.  To set your preferred time window:

- Click the *Set maintenance window* link at the top right of the main Application Updates panel
- Choose the day and time (in `UTC`) you prefer. Bear in mind that times are for the UTC timezone and in 24-hour / military format.

## List of Application Updates

If you need more detail on an update, we have listed all the major updates below, with links out to further information. If you don't see one or more of these options for your application, it is likely that it has already been applied. 

<table class='table table-bordered table-striped'>
<thead>
  <tr>
    <th width="15%">Application Update</th>
    <th>Description</th>
    <th width="25%">Possible downtime?</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Update NGINX {% if include.product == 'rails' %}and Passenger{% endif %}</td>
    <td>This will install the <a href="/{{page.collection}}/resources/technical-specifications.html#2-components-built-from-source">latest supported version of NGINX</a> {% if include.product == 'rails' %}and Passenger{% endif %}.</td>
    <td>Yes if you don't have a load balancer with multiple web servers. Otherwise, no.</td>
  </tr>
  <tr>
    <td>Enable Application Private Network</td>
    <td>An <a href="/{{page.collection}}/how-to-guides/security/using-application-private-networks.html">Application Private Network</a> (APN) is an private, encrypted network running in parallel with your standard network - essentially a VPN for your application. Enabling this update will install an APN across all of your servers. (All new applications have APN installed by default.)</td>
    <td>No</td>
  </tr>{% if include.product == 'rails' %}
  <tr>
    <td>Server Process Manager - systemd</td>
    <td>The default process manager for Rails application is now systemd. If your application still uses our legacy process manager (Bluepill), this update will be available. Enabling this will migrate all your servers to the systemd when you next deploy your application. Please read our <a href="/rails/how-to-guides/deployment/systemd.html">full guide to systemd</a> if you need more info.</td>
    <td>Yes, depending on your <a href="/rails/how-to-guides/deployment/parallel-deployment.html">deployment strategy</a> (rolling deployment will have zero downtime)</td>
  </tr>{% endif %}
  <tr>
    <td>Multiple Firewall Groups (AWS only)</td>
    <td>Once enabled, we will manage multiple firewall groups for each application hosted on AWS. These Security Groups are mapped to server roles, so web servers will have web rules, and DB servers will have DB rules. For more info, please read <a href="/{{page.collection}}/how-to-guides/clouds/cloud-aws.html#option-b-identity-access-management-iam">our guide to setting up access policies</a>.</td>
    <td>No</td>
  </tr>
</tbody>
</table>