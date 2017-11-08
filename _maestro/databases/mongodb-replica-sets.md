---
menuheaders: [ "About scaling your MongoDB servers", "Configure a MongoDB replica set", "Using a MongoDB replica set in your code", "Environment variables", "Configure Mongoid", "Note" ]
layout: post
template: one-col
title: MongoDB replica sets
categories: Databases
lead: ""
legacy: false
permalink: /:collection/:path
---



## About scaling your MongoDB servers

When it comes to MongoDB replication, **you really need to know how MongoDB replica sets work and how to use them** before trying to scale up your MongoDB backend. This is to ensure continuity of service without interruptions.

There is a lot of excellent material about [MongoDB replica sets](http://docs.mongodb.org/manual/replication/) on the Internet, so we're not going to repeat this information. For the purpose of this document, we will focus on how Cloud 66 scales your MongoDB servers and how you can use them in your code.


## Configure a MongoDB replica set

When you select to scale up your MongoDB backend with Cloud 66, we perform the following steps:

- Backup your database
- Create two more servers in your cloud (MongoDB replica sets require an odd number of servers)
- Deploy and configure MongoDB on the new servers
- Restore the backup on the new servers
- Configure all MongoDB instances in the stack to act as a single replica set
- Generate appropriate environment variables with the addresses of the replica set servers

It is important for backups to keep their referential integrity, otherwise different parts of the database might be backed up at different times, affecting database performance.

**Note**

The process of database replication will disrupt your database serving your application for the duration of scaling up and scaling down.

This interruption is during the backup and configuration steps of the scaling and not during the long process of firing up and building the servers



## Using a MongoDB replica set in your code

All MongoDB drivers support replica sets, which means that you can pass the list of MongoDB servers in your replica set to them and they will adapt. However, switching from a single MongoDB to a replica set is something you need to test and be sure about. You shouldn't make such a change to your stack infrastructure with the click of a button!

This is why we won't touch your configuration files after you scale your MongoDB up. This allows you to configure the client the way you see fit and go live with your replicated database backend when you are ready.
**Note** 

We stop modifying your MongoDB client configuration files (like mongoid.yml in Rails) after replication is enabled.


## Environment variables

Without replica sets, you can connect to your MongoDB using environment variables that are available on all of your servers:

* MONGODB\_ADDRESS
* MONGODB\_ADDRESS\_INT
* MONGODB\_ADDRESS\_EXT
* MONGODB\_URL
* MONGODB\_URL\_INT
* MONGODB\_URL\_EXT

`MONGODB_ADDRESS` contains the IP address of your MongoDB. In [Mongoid](http://mongoid.org/en/mongoid/index.html) for example it can be used in your mongoid.yml with `host` (mongoid 
 3).

`MONGODB_ADDRESS_INT` and `MONGODB_ADDRESS_EXT` contain the internal and external network addresses for the same server. You usually want to connect to the internal address to avoid paying for traffic between your web servers and database servers. `MONGODB_ADDRESS` is configured with the internal address `{{MONGODB_ADDRESS_INT}}`, but you can [change that](/deployment/environment-variables) if you need.

`MONGODO_URL_INT` contains a MongoDB client friendly URL to the server with its internal address. It usually looks like this:

```
mongodb://192.168.12.34:27017/my_database
```

`MONGODO_URL_EXT` contains a MongoDB client friendly URL to the server with its external address. It usually looks like this:

```
mongodb://50.45.87.46:27017/my_database
```

`MONGODB_URL` is pointing to {% raw %} `{{MONGODB_URL_INT}}` {% endraw %}by default.

Once replication is enabled, this environment variable is populated:

* MONGODB\_ADDRESSES

`MONGODB_ADDRESSES` contains a comma separated list of all server names of the replica set. This usually looks like something like this:

```
lion.mystack.c66.me,tiger.mystack.c66.me
```

Once you have replica set enabled by scaling your MongoDB backend up, you will need to modify your client configuration accordingly. Your deployment might not work and your stack might stop functioning if you don't do that.

**Note**

Deployments might fail after replica sets are enabled if you don't change your client configuration to use the replica set.



## Configure Mongoid

As the most popular Ruby client for MongoDB, here is an example of how to change your `mongoid.yml` file to use a replica set.

Before having a replica set, you had the following setup:

```
development:
	sessions:
		default:
			database: my_mongo_stack
			hosts: <%= ENV['MONGODB_ADDRESS'] %>
			options:
				consistency: :strong
```

After replica sets are enabled you can use something like this:

```
development:
	sessions:
		default:
			database: my_mongo_stack
			hosts: <%= "[#{ENV['MONGODB_ADDRESSES'].split(',').map {|addr| "\"#{addr}:27017\""}.join(',')}]" %>
			options:
				consistency: :strong
```

The reason for the ugly looking line is that `mongoid` requires the list of server addresses in the replica set to be in an array with port numbers. Since your replica set will be configured to work on the normal MongoDB port of 27017 by default, this line will split the comma separated list into an array in Ruby. The end result will look like something like this:

```
["lion.mystack.c66.me:27017","tiger.mystack.c66.me:27017"]
```





### Note

You cannot use complex Ruby code (like `if`) in your YML files. That's why the new hosts value is generated with string replacements and simple Ruby commands.


