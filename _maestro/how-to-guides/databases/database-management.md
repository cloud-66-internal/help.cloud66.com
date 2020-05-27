---
layout: post
template: one-col
title:  "Managing databases with Maestro"
categories: how-to-guides/databases
order: 1
lead: "Deploying and managing your database with Maestro"
tags: ['database']
legacy: false
permalink: /:collection/:path:output_ext
---

## Deploying databases

We currently support the following databases, with no need for additional configuration after deployment.

* MySQL (or Percona if [configured via Manifest](/{{page.collection}}/how-to-guides/deployment/building-a-manifest-file.html#mysql))
* PostgreSQL
* MongoDB
* Redis
* Elasticsearch
* RabbitMQ
* SQLite (only in development environments)
* GlusterFS
* InfluxDB

When creating a Maestro application, you can add as many databases as you need in your [service configuration](/maestro/how-to-guides/deployment/docker-service-configuration.html#database-configurations) during the application build. 

After you have analyzed your code, ensure that your desired database type is displayed in the _About your app_ section of the analysis results. If you haven't specified a username and password for your database, Cloud 66 will automatically generate these credentials for you. They will be available as environment variables and your application will be configured to use them.

## Connecting your app to your DB in Maestro

Databases in Maestro run as separate components and aren't containerized. Even though they may be running on the same private network as your cluster servers, you will not be able to connect to them via localhost because of the nature of containers (which are, by definition, abstracted from operating the system).

Instead, we we automatically create a Kubernetes services for each DB that connects out from your cluster to the database server(s). To see these on your cluster, you can list the namespaces and then select your namespace and list the services associated with it with the following commands:

```bash
$ kubectl get namespaces
$ kubectl -n <your-namespace> get svc
```

This will show you all the services running, some of which will be your databases. 

So a typical connection string might have: 

- The protocol
- The username and password (where required)
- The name of the Kubernetes service (e.g. "mongodb")
- The name of the DB server (e.g. "mongo_production_1")

So to connect to a MongoDB server named "mongo_production_1" and running in your app namespace as "mongodb" you would use something like:

```bash
$ mongodb://mongodb/mongo_production_1
```

A similar setup for a Postgres server would look something like this:

```bash
$ postgresql://username:password@service_name/database
```

## Deployment types

### No database (external)
This option allows you to deploy your application without a database managed by Cloud 66, and is ideal if it is hosted externally.

Please note that if there is no connectivity to your database, or your database host is not configured correctly, the deployment will fail.

### Local database
This option deploys your chosen database to the same server as your web server - this is intended primarily for development, as running your database locally in production is not advised. In this case, your application database configuration will be amended to target your local database server. If you scale up your web server, these settings will also be amend automatically to reflect your database configuration.

### Dedicated database
This option will automatically create a new server for your database and configure your application accordingly.

## Upgrading your database

Maestro will not do in-place database upgrades, because this process may cause your application to stop working or may not be possible automatically. To upgrade your database through Maestro, we recommend that you create a new application, at which point Maestro will deploy the newer database version.

Once the new application is created, you can migrate data from your old application to your new application.

## Customizing your database

For a full list of customization options and an explanation of the process, refer to our [Customizing database configuration](/maestro/how-to-guides/databases/database-customization.html) guide.
