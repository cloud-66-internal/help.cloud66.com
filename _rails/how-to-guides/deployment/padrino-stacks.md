---
layout: post
template: one-col
title:  "Managing a Padrino application"
categories: how-to-guides/deployment
order: 25
lead: How to deploy and manage Padrino apps with Cloud 66
tags: ['operations']
legacy: false
permalink: /:collection/:path:output_ext
---

Cloud 66 supports applications based on the [Padrino framework](http://www.padrinorb.com/), a light-weight web framework built upon [Sinatra](/rails/how-to-guides/deployment/sinatra-stacks.html).

## Custom commands
Given that Padrino applications can have different database frameworks, we allow you to specify custom commands which are run at specific points during deployment:

<ul class="list">
  <li>
    <p>
    <strong>Custom build command</strong> &mdash; This command will run every time until the first build is successful. Example:
    </p>
    <p>
      <code>bundle exec rake db:seed</code>
    </p>
  </li>
  <li>
    <p>
      <strong>Custom deploy command</strong> &mdash; This command will run on every deployment (including initial build). Example:
    </p>
    <p>
      <code>bundle exec rake db:migrate</code>
    </p>
  </li>
</ul>

These commands can be set via [Toolbelt](/{{page.collection}}/references/toolbelt/toolbelt-commands.html#settings-set),

```shell
$ cx settings set -s my_app custom.build.command "rake db:seed"

$ cx settings set -s my_app custom.deploy.command "rake db:migrate"
```

But also in your [manifest file](/rails/quickstarts/getting-started-with-manifest.html).

```yaml
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

## Active Record

### MySQL YML

```yaml
production:
  adapter: mysql2
  username: <%= ENV['MYSQL_USERNAME'] %>
  password: <%= ENV['MYSQL_PASSWORD'] %>
  host: <%= ENV['MYSQL_ADDRESS'] %>
  database: <%= ENV['MYSQL_DATABASE'] %>
```

**PostgreSQL YML**

```yaml
production:
  adapter: postgresql
  username: <%= ENV['POSTGRESQL_USERNAME'] %>
  password: <%= ENV['POSTGRESQL_PASSWORD'] %>
  host: <%= ENV['POSTGRESQL_ADDRESS'] %>
  database: <%= ENV['POSTGRESQL_DATABASE'] %>
```

**Declarative**

```shell
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
```shell
DataMapper::setup(:default, "ENV['POSTGRESQL_URL']")
```

### MongoMapper
```shell
MongoMapper.connection = Mongo::Connection.from_uri(ENV['MONGODB_URL'])
```

### Mongoid
```yaml
development:
  sessions:
    default:
      database: mongoid
      hosts: ["<%= ENV['MONGODB_ADDRESS']%>:27017"]
```


#### Note
<div class="notice">
  <p>You can use <a href="http://yamllint.com/" target="_blank">Yamllint.com</a> to check your YAML syntax before committing.</p>
</div>