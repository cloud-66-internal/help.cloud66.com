---
menuheaders: [ "Custom commands", "Connect to your database", "Note", "Examples of connecting to your database:", "Active Record", "DataMapper", "MongoMapper", "Mongoid", "Example applications" ]
layout: post
template: one-col
title: Sinatra Stacks
categories: Deployment
lead: ""
legacy: false

permalink: /:collection/:path
---



## Custom commands

Given that Sinatra applications can have different database frameworks, we allow you to specify custom commands which are run at specific points during deployment:

*  **Custom build command** - This command will run every time until the first build is successful. Example:

      
      bundle exec rake db:seed
*  **Custom deploy command** - This command will run on every deployment (including initial build). Example:

      
      bundle exec rake db:migrate
These commands can be set via [Toolbelt](https://help.cloud66.works/{{ include.product }}/toolbelt/settings.html),

```
$ cx settings set -s my_stack custom.build.command "rake db:seed"
$ cx settings set -s my_stack custom.deploy.command "rake db:migrate"
```

But also in your [manifest file](https://help.cloud66.works/{{ include.product }}/deployment/getting-started-with-manifest-files.html).

```
development:
    sinatra:
        configuration:
            custom_build_command: rake db:seed
            custom_deploy_command: rake db:migrate
```




## Connect to your database

If a database is detected, they will automatically be provisioned as required (including the database itself), and environment variables will be created. You will need to update your code with the environment variables you wish to use, for example `MYSQL_URL`.

Should you wish to change the database username/password after build, you will have to do this manually, which will involve recreating backup jobs to reflect the new values.



### Note

You can use [Yamllint.com](http://yamllint.com/) to check your YAML syntax before committing.



## Examples of connecting to your database:


## Active Record

### DataMapper

```
DataMapper::setup(:default, "ENV['POSTGRESQL_URL']")
```




### MongoMapper

```
MongoMapper.connection = Mongo::Connection.from_uri(ENV['MONGODB_URL'])
```




### Mongoid

```
development:
  sessions:
    default:
      database: mongoid
      hosts: ["
:27017"]
```




## Example applications

* [Sinatra and MongoDB](https://app.cloud66.com/stacks/new?eduid=sinatra_mongodb)
* [Sinatra and MySQL ActiveRecord](https://app.cloud66.com/stacks/new?eduid=sinatra_mysql_ar)
* [Sinatra and PSQL DataMapper](https://app.cloud66.com/stacks/new?eduid=sinatra_psql_dm)
* [Sinatra and MySQL DataMapper](https://app.cloud66.com/stacks/new?eduid=sinatra_mysql_dm)
* [Sinatra and Redis](https://app.cloud66.com/stacks/new?eduid=sinatra_redis)

