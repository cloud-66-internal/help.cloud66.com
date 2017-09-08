<!-- usedin: [ _legacy_docker/Databases/database-replication-v1.md, _maestro/Databases/database-replication-v1.md, _node/Databases/database-replication-v1.md, _rails/databases/database-replication-v1.md] -->


### MongoDB

MongoDB database replication is configured with a [replica set](http://docs.mongodb.org/manual/replication/). This requires an odd number of servers, so if you have one MongoDB server, it will fire up an additional two to run your replica set on a total of three servers. The next scale up will create another two servers and run your cluster on five servers. This also applies to scaling down - deleting one server from a five-server cluster will result in two servers being removed from it to get the total down to three servers.

See our documentation on [MongoDB replica sets](https://help.cloud66.com/{{ include.product }}/database/mongodb/mongodb-replica-sets.html) for best practices.

