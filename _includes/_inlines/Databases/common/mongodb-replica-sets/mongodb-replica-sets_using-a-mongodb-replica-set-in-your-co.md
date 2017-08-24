<!-- usedin: [ _legacy_docker/Databases/mongodb-replica-sets.md, _maestro/Databases/mongodb-replica-sets.md, _node/Databases/mongodb-replica-sets.md, _rails/databases/mongodb-replica-sets.md] -->


## Using a MongoDB replica set in your code

All MongoDB drivers support replica sets, which means that you can pass the list of MongoDB servers in your replica set to them and they will adapt. However, switching from a single MongoDB to a replica set is something you need to test and be sure about. You shouldn't make such a change to your stack infrastructure with the click of a button!

This is why we won't touch your configuration files after you scale your MongoDB up. This allows you to configure the client the way you see fit and go live with your replicated database backend when you are ready.


**Note** 

We stop modifying your MongoDB client configuration files (like mongoid.yml in Rails) after replication is enabled.