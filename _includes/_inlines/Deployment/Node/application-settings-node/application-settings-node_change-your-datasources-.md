<!-- usedin: [ _node/deployment] - post: -->


##  Change your datasource(s) 

During the analyse phase we analyze your runtime depencies defined in the `package.json`. Inclusion of the following packages will result in relevant datasource to be provisioned on your stack.

*    the package `mysql` will trigger the provisioning of Mysql
*    the package `mongoose` or `mongodb` will trigger the provisioning of MongoDB
*    the package `pg` will trigger the provisioning of Postgresql
*    the package `redis` or `ioredis` will trigger the provisioning of Redis

If you need other datasources later on, you can always add new datasource using the [Add-in feature](../../node/addons/add-in-implementation.html).

