---
layout: post
template: one-col
title: Customizing database configuration
categories: how-to-guides/databases
order: 10
lead: "How to customize database configurations for Maestro applications"
legacy: false
tags: ["PostgreSQL", "MySQL", "Redis", "MongoDB"]
permalink: /:collection/:path
---

## How to customize database configs

You can customize the database configuration on your servers using [CustomConfig](/maestro/tutorials/custom-config.html). CustomConfig is available for MySQL, PostgreSQL, Redis and MongoDB.

Editing and committing your database CustomConfig will perform the following steps on every database server in your application, one by one, sequentially:

- Check your template for Liquid syntax errors
- Determine the correct server configuration and prepare general variables
- Prepare custom variables for your database type (eg. server_state)
- Compile the database configuration based on the information from the server and database type
- Upload the configuration to the server
- Restart your database

#### Caution
<div class="notice notice-warning">
    <p>A bad database configuration might stop your database from working. Take extra care to make sure the configuration is correct.</p>
</div>

### Database customization variables

There are a number of variables available for use in your database CustomConfig. Some are general for all database types, while others are database specific.

#### Global variables

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
      		<td>Stack cloud</td>
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


#### MySQL variables

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

&#42; Will be 0 for standalone servers, 1 for master servers and a number greater than 1 for slave servers

#### PostgreSQL variables

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

#### Redis variables

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


## More info

For more information on managing your databases, refer to our [detailed guide](/maestro/how-to-guides/databases/database-management.html).
