---
menuheaders: [ "Custom commands", "Connect to your database", "Examples of connecting to your database", "Note", "Active Record", "MySQL YML", "DataMapper", "MongoMapper", "Mongoid", "Example application" ]
layout: post
template: one-col
title: Padrino Stacks
categories: Deployment
lead: ""
legacy: false

permalink: /:collection/:path
---


## Custom commands

Given that Padrino applications can have different database frameworks, we allow you to specify custom commands which are run at specific points during deployment:

*    **Custom build command** &mdash; This command will run every time until the first build is successful. Example:

      
      bundle exec rake db:seed
*    **Custom deploy command** &mdash; This command will run on every deployment (including initial build). Example:

      
      bundle exec rake db:migrate
These commands can be set via [Toolbelt](https://help.cloud66.works/{{ include.product }}/toolbelt/settings.html),

```
$ cx settings set -s my_stack custom.build.command "rake db:seed"

$ cx settings set -s my_stack custom.deploy.command "rake db:migrate"
```

But also in your [manifest file](https://help.cloud66.works/{{ include.product }}/deployment/getting-started-with-manifest-files.html).

```
development:
    padrino:
        configuration:
            custom_build_command: rake db:seed
            custom_deploy_command: rake db:migrate
```




## Connect to your database

If a database is detected, it will automatically be provisioned as required (including the database itself), and environment variables will be created. You will need to update your code with the environment variables you wish to use, for example `MYSQL_URL`.

Should you wish to change the database username/password after build, you will have to do this manually, which will involve recreating backup jobs to reflect the new values.


### Examples of connecting to your database



### Note

You can use [Yamllint.com](http://yamllint.com/) to check your YAML syntax before committing.



## Active Record


### MySQL YML

```
production:
  adapter: mysql2
  username: <%= ENV['MYSQL_USERNAME'] %>
  password: <%= ENV['MYSQL_PASSWORD'] %>
  host: <%= ENV['MYSQL_ADDRESS'] %>
  database: <%= ENV['MYSQL_DATABASE'] %> 

```

**PostgreSQL YML**

```
production:
  adapter: postgresql
  username: <%= ENV['POSTGRESQL_USERNAME'] %>
  password: <%= ENV['POSTGRESQL_PASSWORD'] %>
  host: <%= ENV['POSTGRESQL_ADDRESS'] %>
  database: <%= ENV['POSTGRESQL_DATABASE'] %>
```

**Declarative**

```
ActiveRecord::Base.configurations[:development] = {
  :adapter   => 'mysql2',
  :encoding  => 'utf8',
  :reconnect => true,
  :database  => ENV['MYSQL_DATABASE'],
  :pool      => 5,
  :username  => ENV['MYSQL_USERNAME'],
  :password  => ENV['MYSQL_PASSWORD'],
  :host      => ENV['MYSQL_ADDRESS'],
}
```




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
      hosts: ["<%= ENV['MONGODB_ADDRESS']%>:27017"]
```




## Example application

* [Padrino with MySQL](https://app.cloud66.com/stacks/new?eduid=padrino_mysql)

