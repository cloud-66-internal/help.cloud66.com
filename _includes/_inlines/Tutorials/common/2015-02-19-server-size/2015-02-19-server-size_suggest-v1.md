<!-- usedin: [ _legacy_docker/Tutorials/2015-02-19-server-size-v1.md, _maestro/Tutorials/2015-02-19-server-size-v1.md, _node/tutorials/2015-02-19-server-size-v1.md, _rails/Tutorials/2015-02-19-server-size-v1.md] -->


#### We suggest using a server with at least 1GB of memory and 4 core

In particular, Elasticsearch on a standalone under-powered server will not start up. This is because we configure Elasticsearch to lock its memory and prevent swapping on standalone servers as per the [official recommendation](https://www.elastic.co/guide/en/elasticsearch/guide/current/heap-sizing.html), and there is simply not enough memory for it to run it successfully.

Depending on whether or not you have deployed your application elsewhere, it may be hard to gauge the amount of resources that you need. On a PaaS like Heroku for example, you can choose between 1X (512 MB), 2X (1 GB) and PX (6 GB) server sizes. This makes it easy to calculate your server requirements, and we recommend that you use similar server resources when deploying your stack with Cloud 66. We also recommend that you have a seperate server for your database in production environments.

If you have yet to deploy your application in a production environment, you can deploy to a reasonably sized server and use [load testing](/articles/optimizing-for-server-load) to determine your exact needs.
