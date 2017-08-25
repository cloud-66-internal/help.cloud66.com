<!--  usedin: [ _legacy_docker/Databases/mongodb-replica-sets.md, _maestro/Databases/mongodb-replica-sets.md, _node/Databases/mongodb-replica-sets.md, _rails/databases/mongodb-replica-sets.md] -->


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



{%include _inlines/Databases/common/mongodb-replica-sets/code_mongodb-replica-sets_environment-variables-godb.md %}




`MONGODO_URL_EXT` contains a MongoDB client friendly URL to the server with its external address. It usually looks like this:



{%include _inlines/Databases/common/mongodb-replica-sets/code_mongodb-replica-sets_environment-variables-godb-2.md %}




`MONGODB_URL` is pointing to {% raw %} `{{MONGODB_URL_INT}}` {% endraw %}by default.

Once replication is enabled, this environment variable is populated:

* MONGODB\_ADDRESSES

`MONGODB_ADDRESSES` contains a comma separated list of all server names of the replica set. This usually looks like something like this:



{%include _inlines/Databases/common/mongodb-replica-sets/code_mongodb-replica-sets_environment-variables-nmystackc.m.md %}




Once you have replica set enabled by scaling your MongoDB backend up, you will need to modify your client configuration accordingly. Your deployment might not work and your stack might stop functioning if you don't do that.

**Note**

Deployments might fail after replica sets are enabled if you don't change your client configuration to use the replica set.




