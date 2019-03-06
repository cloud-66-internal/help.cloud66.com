---
layout: post
template: one-col
title: Manually managing database configuration
categories: how-to-guides/databases
order: 15
lead: "How to stop Cloud 66 from automatically updating configurations for managed databases"
legacy: false
tags: ["Database"]
permalink: /:collection/:path
---

If your Rails/Rack application uses a MySQL, PostgreSQL or MongoDB instance that is managed by Cloud 66, then we will (by default) automatically amend your configuration files to ensure that they have the correct username and password (where appropriate) and server address (should your server address change due to instance resizing or fixed IP allocation). We will automatically track these changes and insert the correct details on the next deployment.

However if you would prefer to manage these configurations manually you can add this line to your manifest.yml file: `

```
tamper_with_yml: false
```
This will prevent our system from making any automated changes to the configuration files.

#### Warning

<div class="notice notice-warning"><p>Adding this setting means that you need to ensure that the contents of your database configuration(s) are correct as Cloud 66 will no longer be able to update the file(s).</p></div>

## Examples

The location of this setting depends on the database type. For example:

### MySQL

```
  mysql:
    configuration:
      tamper_with_yml: false
```

### Postgres
```
  postgresql:
    configuration:
      tamper_with_yml: false
```

### MongoDB

```
  mongodb:
    configuration:
      tamper_with_yml: false

```
