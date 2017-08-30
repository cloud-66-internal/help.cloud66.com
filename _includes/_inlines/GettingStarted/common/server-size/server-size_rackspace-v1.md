<!-- usedin: [ _legacy_docker/getting-started/server-size-v1.md, _maestro/getting-started/server-size-v1.md, _node/getting-started/server-size-v1.md, _rails/getting-started/server-size-v1.md, _skycap/getting-started/server-size-v1.md] -->


### Rackspace
- 512MB Standard Instance
- 512MB Standard Instance (HVM)

**We suggest using a server with at least 1GB of memory and 4 cores**

In particular, Elasticsearch on a standalone under-powered server will not start up. This is because we configure Elasticsearch to lock its memory and prevent swapping on standalone servers as per the [official recommendation](https://www.elastic.co/guide/en/elasticsearch/guide/current/heap-sizing.html), and there is simply not enough memory for it to run it successfully.

Depending on whether or not you have deployed your application elsewhere, it may be hard to gauge the amount of resources that you need. On a PaaS like Heroku for example, you can choose between 1X (512 MB), 2X (1 GB) and PX (6 GB) server sizes. This makes it easy to calculate your server requirements, and we recommend that you use similar server resources when deploying your stack with Cloud 66. We also recommend that you have a seperate server for your database in production environments.

If you have yet to deploy your application in a production environment, you can deploy to a reasonably sized server and use [load testing](/articles/optimizing-for-server-load) to determine your exact needs.
