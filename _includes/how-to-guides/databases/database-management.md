## About deploying databases

We currently support the following databases, with no need for additional configuration after deployment.

{% if include.product != 'maestro' %}* MySQL (or Percona if [configured via Manifest](/{{page.collection}}/how-to-guides/deployment/building-a-manifest-file.html#mysql)){% endif %}{% if include.product == 'maestro' %}* MySQL (or Percona if [configured via Manifest](/maestro/how-to-guides/build-and-config/building-a-manifest-file.html#mysql)){% endif %}
* PostgreSQL
* MongoDB
* Redis
* Elasticsearch
* RabbitMQ
* SQLite (only in development environments)
* GlusterFS
* InfluxDB

{%if page.collection =='rails' %}For Rack-based stacks, Cloud 66 automatically detects whether your application relies on a database or not during your code analysis. This is based on a combination of your Gemfile and your `database.yml` or `mongoid.yml` files.
{%endif%}
{%if page.collection =='maestro' %}
When creating a Maestro application, you can add as many databases as you need in your [service configuration](/maestro/how-to-guides/build-and-config/docker-service-configuration.html#database-configurations) during the application build.
{%endif%} 

After you have analyzed your code, ensure that your desired database type is displayed in the _About your app_ section of the analysis results. 

{% if page.collection =='rails' %}
<div class="notice" markdown="1">Cloud 66 supports multiple databases for Rails (i.e. multiple databases with Active Record). Please read our [MultiDB for Rails guide](/rails/how-to-guides/databases/rails-multidb.html) to learn how to configure this feature.
</div>
{% endif %} 

### Database authentication

When we deploy a database we automatically generate the required users and passwords to allow authentication. You can find these values via your Dashboard in the [detail page of any database server](/{{page.collection}}/how-to-guides/databases/shells/connect-db-servers.html#finding-database-credentials). They will be available as environment variables and your application will be configured to use them.

**MySQL** and **PostgreSQL** databases managed by Cloud 66 automatically have the following users created: 

- a Database Application user
- a Database Admin user
- a Database Replication user (where replication is required)

The Application and Replication users always have **the same password**. The associated Linux users for these will differ depending on database type.

<div class="notice"><p markdown="1">If you switch to managing your passwords manually, be sure to update all of these users whenever you change passwords. Remember that the Application and Replication users must use the same password.</p></div>

{%if page.collection == 'rails' %}
If you'd prefer to manage your users and password manually (i.e. your config files), you can [prevent your configs from being modified](/rails/how-to-guides/databases/tamper-with-yaml.html).

<div class="notice notice-warning"><p markdown="1">⚠️ The info above **does not apply to external (self-managed) databases**. See the [dedicated section below](#external-databases) for more details.</p></div>


### Managing YAML configs

A Rails app must have either a `config/database.yml` file or `config/mongoid.yml` in order to work on Cloud 66. We will create these files automatically if they don't exist. We will update any existing files with new values (for example passwords) as required. You can [turn this feature off](/rails/how-to-guides/databases/tamper-with-yaml.html) if needed. (See [below](#environment-variables-during-deployment) for more on env vars)

If you want to specify a different DB config per environment, you can name the files `config/database.yml.environment-name` (e.g. `config/database.yml.dev`)

If you don't want to use the standard config setup, you can also add a `config/database.yml.cloud66` or `config/mongoid.yml.cloud66` file instead.

We will prioritise these configs as follows:

1. Files ending `.cloud66`
2. Files ending with a `.environment-name`
3. The standard YAML config file

<div class="notice notice-warning"><p markdown="1">⚠️ The info above **does not apply to external (self-managed) databases**. See the [dedicated section below](#external-databases) for more details.</p></div>

### External databases

If you are using an external database (i.e. one not managed by Cloud 66), then we **won’t** set any of the database variables (such as username and password) the way we would normally do. You will need to set these yourself - either in your YAML config file, or by manually adding environment variables (see below).

If your `database.yml` file has a `url` defined, we will assume that you are using an external (self-managed) database, and will follow that URL accordingly.

External databases **do not** natively support multiple database config files (e.g. per environment), or files with the `.cloud66` suffix. If you need to maintain separate config files for your external databases, you can achieve the same thing using a [deploy hook](/{{page.collection}}/tutorials/deploy-hooks.html). For example:

```yaml
after_checkout:
command: mv $STACK_PATH/config/database.yml.cloud66 $STACK_PATH/config/database.yml
target: rails
run_on: all_servers
execute: true
```

This hook simply overwrites the standard config file with the config file of your choice at the start of the deployment process. Please read our [full guide to deploy hooks](/{{page.collection}}/how-to-guides/deployment/using-deploy-hooks.html) to learn how to implement this hook.


### Environment variables during deployment

When you set up an application on Cloud 66, we detect its database type(s) (from your code) and generate a set of variables for things like `username` and `password` and `URL`. We only generate these "analyzed variables" **after** you have confirmed that we will be managing the database(s). 

You can see a list of these variables during application creation by clicking on the *Add Environment Variables* button (in the yellow **Review your Rails application** box) . You will see the list of analyzed variables for your database(s) at the top of the panel.

For databases that we manage, we will generate all of these variables, and replace any existing variables you have in your YAML config files unless you [turn the auto-replacement feature off](/rails/how-to-guides/databases/tamper-with-yaml.html). (You can also override the values of these variables manually, one by one, if you wish - see below)

If your application uses an externally hosted (self-managed) database, **we will not generate any of the analysed variables**. If your config files rely on environment variables, you will need to set these manually before you deploy, or we will not be able to connect to your database. 

### Setting variables manually (overriding)

To add your own values to the analyzed variables, click on the *Add Environment Variables* button and then click the *Override* link next to each of the variables you wish to update. Remember, for **external databases**, we will discard any variables which do not have values set manually.
{% endif %}
{%if page.collection =='maestro' %}
## Connecting your app to your DB in Maestro

Databases in Maestro run as separate components and aren't containerized. Even though they may be running on the same private network as your cluster servers, you will not be able to connect to them via localhost because of the nature of containers (which are, by definition, abstracted from operating the system).

Instead, we we automatically create a Kubernetes services for each DB that connects out from your cluster to the database server(s). To see these on your cluster, you can list the namespaces and then select your namespace and list the services associated with it with the following commands:

```bash
$ kubectl get namespaces
$ kubectl -n <your-namespace> get svc
```

This will show you all the services running, some of which will be your databases. 

### Service names for database groups

If your application has two or more [database groups](/maestro/how-to-guides/databases/attaching-multiple-databases.html), your Kubernetes database services will inherit those names. For example, if you have three MySQL database groups named `main`, `spare` and `archive` then the Kubernetes services will be named:

- mysql-main
- mysql-spare
- mysql-archive

If one of these groups is set as your "[primary](/maestro/how-to-guides/databases/attaching-multiple-databases.html#understanding-primary-database-groups)" then it will use the default service name (`mysql`) instead of its group-specific name.

### Connection strings in Maestro

A typical connection string might have:

- The protocol
- The username and password (where required)
- The name of the Kubernetes service, including database groups (e.g. `mongodb-spare`)
- The name of the DB server (e.g. `mongo_production_1`)

So to connect to a MongoDB server named `mongo_production_1` and running in your app namespace as `mongodb-spare` you would use something like:

```
$ mongodb://mongodb-spare/mongo_production_1
```

A similar setup for a Postgres server would look something like this:

```
$ postgresql://username:password@service_name/database
```

## Connecting your app to your DB in Maestro V1

To connect to a database in Version 1 of Maestro, you should use its ElasticDNS address. Please read our [full guide on ElasticDNS](/maestro/how-to-guides/build-and-config/service-network-configuration.html#elasticdns) for more details.
{% endif %}


## Database deployment types

### No database (external)

This option allows you to deploy your application without a database managed by Cloud 66, and is ideal for externally hosted databases. 

{%if page.collection=='rails' %}For Rails apps, if you have a `url` set in your `database.yml` then we will assume that you are using an external DB. You will need to [set your own env vars](#environment-variables-during-deployment) during deployment, to ensure we can connect to it.{% endif %}

You can also configure an external database via your [Manifest file](/{{page.collection}}/references/manifest-database-settings.html#specifying-external-databases-via-your-manifest) by specifying the `server` node as `external`. 

Please note that if there is no connectivity to your external database, or your external database host is not configured correctly, the deployment will fail.

### Local database
This option deploys your chosen database to the same server as your web server - this is intended primarily for development, as running your database locally in production is not advised. In this case, your application database configuration will be amended to target your local database server. If you scale up your web server, these settings will also be amend automatically to reflect your database configuration.

### Dedicated database
This option will automatically create a new server for your database and configure your application accordingly.

## Upgrading your database
Cloud 66 will not do in-place database upgrades, because this process may cause your application to stop working or may not be possible automatically. To upgrade your database through Cloud 66, we recommend that you create a new application (at which point Cloud 66 will deploy the newer database version).

Once the new application is created, you can migrate data from your old application to your new application.

{% if page.collection == 'rails' %}
## Control your Rails database migrations

Cloud 66 chooses a server to perform the migrations - all other servers will wait until the migrations are finished before continuing with deployment. You can see which server performs the migrations in the Application Overview, and change it using the `c66.migrations.run` [reserved tag](/rails/references/reserved-tags.html).

You can control your Rails database migrations by setting the `run.deploy.command` option through application settings via 
[Toolbelt](/rails/quickstarts/using-cloud66-toolbelt.html) which gives you the option of running migrations or not.

```shell
$ cx settings set -s my_stack run.deploy.command true
```

When you have disabled `run.deploy.command` in [Application settings](/{{page.collection}}/references/toolbelt/toolbelt-commands.html#settings-set), you still have the option to run migrations on a one-off deployment by clicking _Deploy_ -> _Deploy with options_ and selecting _Run database migrations_.

## The Strong Migration gem

Sometimes operations can cause database migrations to lock the entire database for minutes at a time - even if the structural change is simple, or made to a relatively small table. If you'd like to understand the mechanisms behind this, we recommend reading this excellent [blog post](https://medium.com/doctolib/stop-worrying-about-postgresql-locks-in-your-rails-migrations-3426027e9cc9). 

To mitigate the potential for this to happen, we recommend including the [Strong Migration](https://github.com/ankane/strong_migrations) gem in your application. This will catch any potentially unsafe migrations and suggest how to avoid or reduce the risk.
{%endif%}

## Customize your database configuration

You can customize the database configuration on your servers using [CustomConfig](/{{page.collection}}/tutorials/custom-config.html). CustomConfig is available for MySQL, PostgreSQL, Redis and MongoDB.

Editing and committing your database CustomConfig will perform the following steps on every database server in your application, one by one, sequentially:

- Check your template for Liquid syntax errors
- Determine the correct server configuration and prepare general variables
- Prepare custom variables for your database type (e.g. server_state)
- Compile the database configuration based on the information from the server and database type
- Upload the configuration to the server
- Restart your database

<div class="notice notice-warning">
<p>🚨 A bad database configuration might stop your database from working. Take extra care to make sure the configuration is correct.</p>
</div>

### Database customization variables
There are a number of variables available for use in your database CustomConfig. Some are general for all database types, while others are database specific.

**Global variables**

The following variables are available to any database CustomConfig.

<table class='table table-bordered table-striped'>
  <colgroup>
    <col width="20%"/>
    <col width="20%"/>
    <col width="60%"/>
  </colgroup>
	<thead>
		<tr>
			<th>Variable Name</th>
      <th>Type</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>server</td>
			<td>Hash</td>
            <td>Hash containing information about your server</td>
		</tr>
		<tr>
			<td>cloud</td>
			<td>string</td>
      		<td>Application cloud</td>
		</tr>
		<tr>
			<td>memory</td>
			<td>integer</td>
            <td>Server memory size (bytes)</td>
		</tr>
		<tr>
			<td>core</td>
			<td>integer</td>
            <td>Server core count</td>
		</tr>
  </tbody>
</table>


**MySQL variables**

The following variables are only available in the MySQL CustomConfig.

<table class='table table-bordered table-striped'>
  <colgroup>
    <col width="20%"/>
    <col width="20%"/>
    <col width="60%"/>
  </colgroup>
	<thead>
		<tr>
			<th>Variable Name</th>
      <th>Type</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>server_state</td>
			<td>string</td>
            <td>Value can be <i>stand_alone</i>, <i>mysql_master</i> or <i>mysql_slave</i> based on your server status</td>
		</tr>
		<tr>
			<td>server_id</td>
			<td>integer</td>
            <td>An ID used by MySQL replication to identify your server&#42;</td>
		</tr>
		<tr>
			<td>db_name</td>
			<td>string</td>
            <td>Database name</td>
		</tr>
  </tbody>
</table>

&#42;It is 0 for standalone servers, 1 for master servers and a number greater than 1 for slave servers

**PostgreSQL variables**

The following variables are only available in the PostgreSQL CustomConfig.

<table class='table table-bordered table-striped'>
  <colgroup>
    <col width="20%"/>
    <col width="20%"/>
    <col width="60%"/>
  </colgroup>
	<thead>
		<tr>
			<th>Variable Name</th>
      <th>Type</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>server_state</td>
			<td>string</td>
            <td>Value can be <i>stand_alone</i>, <i>pg_master</i> or <i>pg_slave</i> based on your server status</td>
		</tr>
  </tbody>
</table>

**Redis variables**

The following variables are only available in the Redis CustomConfig.

<table class='table table-bordered table-striped'>
  <colgroup>
    <col width="20%"/>
    <col width="20%"/>
    <col width="60%"/>
  </colgroup>
	<thead>
		<tr>
			<th>Variable Name</th>
      <th>Type</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>server_state</td>
			<td>string</td>
            <td>Value can be <i>stand_alone</i>, <i>redis_master</i> or <i>redis_slave</i> based on your server status</td>
		</tr>
		<tr>
			<td>master_address</td>
			<td>string</td>
            <td>IP address of replication master (empty string if server is stand alone or master)</td>
		</tr>
		<tr>
			<td>master_port</td>
			<td>integer</td>
            <td>Will be 6379 when server is <i>redis_slave</i> , otherwise it is 0</td>
		</tr>
  </tbody>
</table>

## Migrating to an external database

If you need to migrate a database managed by Cloud 66 to an external provider, you should bear in mind the following:

- Updating your [Manifest file](/{{page.collection}}/references/manifest-database-settings.html) will not be sufficient to reconfigure your application - you will need to connect your application manually to your new database servers, including authentication credentials, ideally via your app’s [environment variables](/{{page.collection}}/tutorials/env-vars.html).
- Your existing database servers will need to be manually removed from your application after you have migrated. They will not be automatically removed or deleted.

The exact migration process will differ widely depending on both the database used, and the host to which you are migrating your data, but all of them share the following steps:

1. Switch off your application ([maintenance mode](/{{page.collection}}/how-to-guides/common-tools/using-maintenance-mode.html) is useful here)
2. Migrate your data to the new host 
3. Set up authentication credentials and connection details
4. Add a [firewall rule](/{{page.collection}}/tutorials/firewall-rule.html) to allow your app to reach the new data host (and vice versa)
5. Turn your application back on 
6. Delete your defunct Cloud 66 database servers
