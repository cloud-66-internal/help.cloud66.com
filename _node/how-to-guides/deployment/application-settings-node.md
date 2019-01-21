---
layout: post
template: one-col
title: Specific settings for your Node.js application
categories: how-to-guides/deployment
lead: ""
legacy: false
tags: ["customization"]
permalink: /:collection/:path
---


##  Change your Node.js version 

To change your Node.js version you need to update your `package.json` `engines` settings. [Read more about how you can specify the version of node so your application works.](https://docs.npmjs.com/files/package.json#engines)


##  Change your datasource(s) 

During the analyse phase we analyze your runtime depencies defined in the `package.json`. Inclusion of the following packages will result in relevant datasource to be provisioned on your stack.

*    the package `mysql` will trigger the provisioning of Mysql
*    the package `mongoose` or `mongodb` will trigger the provisioning of MongoDB
*    the package `pg` will trigger the provisioning of Postgresql
*    the package `redis` or `ioredis` will trigger the provisioning of Redis

If you need other datasources later on, you can always add new datasource using the Add-in feature.


##  Expose your host port

If your application binds to a port, we need to expose it to the internet and make sure we can load balance traffic to your application. We provide you with an environment variable called `PORT` to tell which port your need to bind your application to. Make sure your use the following line:

```

var port = process.env.PORT || 8080;
app.listen(port);

```




##  Connect to your datasource(s)

Your application need to know which URL to use to connect to your database. We provide a couple of environment variables your can use to connect to your datasources.


### MongoDB

```

mongoose.connect(process.env.MONGODB_URL);

```


### Mysql

```

var connection = mysql.createConnection({
  host     : process.env.MYSQL_URL,
  user     : process.env.MYSQL_USERNAME,
  password : process.env.MYSQL_PASSWORD,
  database : process.env.MYSQL_DATABASE
});
connection.connect();

```

### Postgresql

```

var config = {
  user: process.env.POSTGRESDB_USERNAME,
  database: process.env.POSTGRESDB_DATABASE,
  password: process.env.POSTGRESDB_PASSWORD,
  host: process.env.POSTGRESDB_URL,
  max: 10,
  idleTimeoutMillis: 30000,
};
var pool = new pg.Pool(config);

```

### Redis

```

redis.createClient(6379, process.env.REDIS_URL)

```




##  Fire up some workers 

You can use Procfiles to ensure that your background jobs run and are monitored. Doing so is as easy as defining them in the root of your application, in a file called `Procfile`.

A typical Procfile may look something like this:

```

web: node server.js
work: node some_work.js

```

The commands above would run node `server.js` and node `some_work.js` and monitor them. Cloud 66 will attempt to bring processes that go down or crash up again. Processes are also instructed to start when your server is booted. An overall view of your processes is available in your stack detail page.


##  Final notes on managing storage

None of the files created on the filesystem after the stack is deployed are persistent. If you need persistency for files, for example some uploaded data, [please use the GlusterFS add-in](/{{page.collection}}/how-to-guides/databases/gluster-scaling.html).

