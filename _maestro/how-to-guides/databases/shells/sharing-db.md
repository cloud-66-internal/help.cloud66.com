---
layout: post
template: one-col
title: Sharing databases between applications
categories: how-to-guides/databases
order: 40
lead: "How to share a database between multiple applications in Maestro"
legacy: false
tags: ["customization"]
permalink: /:collection/:path
---

## Overview

It is possible for two Maestro applications to share a single database server. However it requires some manual configuration to do properly.

## Configuring for a shared database

Firstly, you need to [open your firewall](/maestro/how-to-guides/deployment/service-network-configuration.html) on the first application to allow your second applications web servers to access the database.

You will then reference the database credentials from your first application in the configuration file of your second application. 

#### Note
<div class="notice"><p>You need admin access to both of the applications in order for this to work correctly.</p></div>

You can reference the environment variables for these credentials on your first application using this format: 

```
{% raw %}{{ STACK[APP_UID].ENV_VAR }}{% endraw %}
```

Your application UID is available via the Dashboard on the **Settings & Information** page under the *Information* tab.

For example, your environment variables would be set like this:

```
{% raw %}MYSQL_ADDRESS={{ STACK[xyz].MYSQL_ADDRESS_INT }}{% endraw %}
{% raw %}MYSQL_DATABASE={{ STACK[xyz].MYSQL_DATABASE }}{% endraw %}
```

### Database credentials

Database credentials such as username and password are not available for cross-application referencing for security reasons. Instead, copy and paste them across as environment variables. Your database configuration file would look something like this:

```
host: \<%= ENV['MYSQL_ADDRESS'] %\>
username: \<%= ENV['MYSQL_USERNAME'] %\>
password: \<%= ENV['MYSQL_PASSWORD'] %\>
database: \<%= ENV['MYSQL_DATABASE'] %\>
```

