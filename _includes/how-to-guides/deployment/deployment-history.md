## Overview

The **Build & Deployment Timeline** is a useful tool for tracking the version history of any application.

This timeline includes information about: 

* Who deployed
* When they deployed
* What code revision was deployed 
* How the deployment was triggered (web, [API](https://developers.cloud66.com) or [redeployment hook](/{{page.collection}}/how-to-guides/deployment/redeployment-hook.html)). 

{% if include.product == 'rails' %}
In addition to this, you can also revert back to previous commits if need be. Reverting to a previous commit will only affect your code - you might still need to restore a [database backup](/{{page.collection}}/how-to-guides/add-ins/database-backups.html). If you wish, you can [switch off your database migrations](/{{page.collection}}/how-to-guides/databases/database-customization.html), roll back your database and then roll back your code.
{% endif %}

## Accessing the timeline

The timeline is available for any application that has been deployed at least once.

1. Open the Application Overview from your [Dashboard](https://app.cloud66.com/dashboard)
2. Click on *Deployments*  in the **Application** panel on the right of the screen.
3. Scroll through the history (it's in descending date order)

The **left-hand side** of the timeline lists every time you took a *Snapshot* of your code (i.e. built it from source), the **right-hand side** list each time you *Published* your application (i.e. deployed the code to servers)

You can also use this interface to see any activity (such as builds) currently in progress for the application.

## Deployment Status

A "Live" status indicates that the code in that commit is live on your servers.

A <font color="green">green</font> deployment indicates that it has been successful, whereas a <font color="red">red</font> one indicates failure.

{% if include.product == 'rails' %}
A reverted deployment is one that is no longer on your servers (the application was rolled back to an earlier deployment).
{% endif %}
