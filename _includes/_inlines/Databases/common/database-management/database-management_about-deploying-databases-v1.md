<!-- usedin: [ _legacy_docker/Databases/database-management-v1.md, _maestro/Databases/database-management-v1.md, _node/Databases/database-management-v1.md, _rails/databases/database-management-v1.md] -->


## About deploying databases

We currently support the following databases, with no need for additional configuration after deployment.

* MySQL (or Percona if [configured via Manifest](http://help.cloud66.com/building-your-stack/building-your-manifest-file#mysql))
* PostgreSQL
* MongoDB
* Redis
* Elasticsearch
* RabbitMQ
* SQLite (only in development environments)
* GlusterFS
* InfluxDB

When creating a Docker stack, you can [add as many databases as you need in your service configuration during the stack build](/building-your-stack/docker-service-configuration#database-configs). For Rack-based stacks, Cloud 66 automatically detects whether your application relies on a database or not during your code analysis. This is based on a combination of your Gemfile and your database.yml or mongoid.yml files.

After you have analyzed your code, ensure that your desired database type is displayed in the _About your app_ section of the analysis results. If you haven't specified a username and password for your database, Cloud 66 will automatically generate these credentials for you. They will be available as environment variables and your application will be configured to use them.

