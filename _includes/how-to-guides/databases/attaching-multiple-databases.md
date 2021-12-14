## Overview
{% if include.product != 'rails' %}
Multi Database Support allows you to attach multiple **database groups** to an application. A database group is a collection of one or more databases of the *same* type (e.g. MySQL). Different groups can have different database types, allowing a single app to use multiple types of databases (e.g. Postgres *and* Redis), or they can have the same type (e.g. two *separate* groups of MySQL servers).
{% endif %}
{% if include.product == 'rails' %}
Database Groups allow you to attach multiple databases to a single application. A database group is a collection of one or more databases of the *same* type (e.g. MySQL). Different groups can have different database types, allowing a single app to use multiple types of databases (e.g. Postgres *and* Redis), or they can have the same type (e.g. two *separate* groups of MySQL servers).

If you are using the **native** Rails multiDB feature (i.e. multiple databases with Active Record) then please read our [Rails MultiDB guide](/rails/how-to-guides/databases/rails-multidb.html). (The feature actually uses Database Groups, but does so via another method).
{% endif %}
## Understanding database groups

Database groups are discrete groups ("clusters") of database servers of the same type. If your application already has a database, you already have your first "group". 

Database groups allow you to have two or more completely separate sources of data for your application - either of the same type (e.g. two MySQL groups) or of different types (e.g. one MySQL group and one PostgreSQL group). 

Adding a database to an existing group ([scaling up](/{{page.collection}}/how-to-guides/databases/database-management.html)) does not require you to use database groups. Groups are only needed if your data sources need to be distinct. 

## Adding a database group to an app

To add a database group to an application, you need to first deploy your application using Cloud 66 (here's [a guide to get you started](/{{page.collection}}/quickstarts/getting-started.html)).

To add a new database group to an existing application using the Dashboard:

1. Open your [Dashboard](https://app.cloud66.com/dashboard)
2. Click on your application
3. Click the **+** button at the top right of the **Add-Ins** panel
4. Choose the type of database group you'd like to add and click **Install Now**
5. Choose the server type and size
6. Give your new database group a name 

We will now build your new database server and alert you when it is ready.

## Specifying database groups via manifest

If you need more control over the configuration of your database groups (for example which version of a database engine to use) you can specify the database groups for an application using your Manifest file. 

For example you could set up three groups of MySQL databases as follows:

```yaml
mysql:
 groups:
  default:
   configuration:
	 engine: percona
     version: "8.0"
  upgrade:
   configuration:
	 engine: percona
     version: "8.1"
  legacy:
   configuration:
	 operating_system: ubuntu1804
     version: "5.6"
```

If you are using your Manifest file to build an application from scratch, it will build all your database groups according to these specifications (only when you have the "servers" parts of your groups fully defined). 

If you are adding a new database group (or server) to an **existing application** it will use *either* the specifications in your Manifest file *or*, if no specification exists, the most recent version supported by Cloud 66. So, if you need to add a new group with a specific version, you should first add the group to your Manifest and then use the same name when you add the group via your Dashboard (see above).

#### Note
<div class="notice notice-warning"><p>Simply adding or removing configurations from your Manifest will not add or remove the associated database servers or groups from your application. Please read our <a href="/{{page.collection}}/quickstarts/getting-started-with-manifest.html">full guide</a> to understand how best to use the Manifest file.</p></div>

## Accessing database groups from an app

Applications can access different database groups using environment variables. For each kind of database (i.e. each database engine), one group will be set as the "default group" (see below for more details). This default group will use the default env vars for that database type (e.g. `MYSQL_ADDRESS`), while the rest of the groups will use specific env vars derived from their group name - for example `MYSQL_VENUS_ADDRESS`.

To find the environment variables for a database group: 

1. Open your application via the Dashboard
2. Click on on *Configuration* in the right-hand panel 
3. Scroll through the list of env vars until you find the variables for the chosen database group 
4. Use these env vars in your application's database connection configuration

This allows your application to use two or more database groups simultaneously. We recommend extra caution if your application has two or more groups that use the same database type, as it is easy to become confused. 

### Understanding default database groups

When you have multiple database groups of the same type (e.g. multiple MySQL groups), one of those groups will be set as your default group (normally it is the first group created).

This means that the root level environment variables that we create for that database type will redirect to the environment variables of the **default group**. The rest of the groups will use specific env vars derived from their group name (e.g. `MYSQL_VENUS_ADDRESS`).

For example if the group named "Default" set as your **default MySQL group** then the env vars are mapped as follows:

`MYSQL_ADDRESS` &rarr; `MYSQL_DEFAULT_ADDRESS`

`MYSQL_PASSWORD` &rarr; `MYSQL_DEFAULT_PASSWORD`

At any point you can set another group to be your default group, which will change the root level environment variables for that database type to point at new values. For example if you set the group "upgrade" as your default:

`MYSQL_ADDRESS` &rarr; `MYSQL_UPGRADE_ADDRESS`

`MYSQL_PASSWORD` &rarr; `MYSQL_UPGRADE_PASSWORD`

You can set your default group in your Dashboard by clicking through on the *Server* tab from the Application overview and clicking the button. **We will not apply any changes in env vars to your application immediately.** They will only be applied when you next redeploy your stack (we recommend you do this immediately or as soon as possible).

{% if include.product == 'maestro' %}
This pattern also applies to the **service networking addresses** of your Maestro components. For more details please read our [full guide on the subject](/maestro/how-to-guides/databases/database-management.html#service-names-for-database-groups).
{% endif %}

#### Note
<div class="notice"><p>You can choose to use the <strong>group-specific environment variables</strong> in your app configuration, rather than using the root level environment variables. So if, for example, your current default group is named "Upgrade" you can still use <code>MYSQL_UPGRADE_ADDRESS</code> rather than <code>MYSQL_ADDRESS</code>.</p></div>

## Moving data between database groups

You can import data to a new database group from any existing database group of the same type in any application you control. To do this:

1. Set up **managed backups** on the source database (from which you plan to import the data) and ensure the first backup has been completed
2. Add a new database group to an application and wait for the master server to be set up
3. Click on your new server and click the *Import Database* button in the right-hand column
4. Choose the source database and click *Import*

If you can't see the source database in the import list, ensure that you've set up managed backups 

### Replicating data between database groups

You can set up replication between database groups of the **same type and compatible version**. You replicate between groups in the same application, or between applications. 

Replication has the following rules:

- A replication master in one group cannot be a slave of another group
- A group with a single server can be slaved to a replication master from another group

Essentially, as soon as a group has internal replication (between its own master and slaves) it can no longer be slaved to another group.

To set up replication *between* database groups:

1.  Open your application via the Dashboard
2. Click on the *Servers* tab
3. Click on the server of the **destination** database group (needs to be a single server)
4. Click the *Database Replication* button in the right-hand column
5. Choose the **source** database to replicate from and click *Ok*

Replication will now be set up. It may take some time for data to sync between your databases. For large databases we recommend importing a (recent) backup from the **source** before enabling replication. 

For more details on replication please read our [full How-To Guide](/{{page.collection}}/how-to-guides/databases/database-replication.html).