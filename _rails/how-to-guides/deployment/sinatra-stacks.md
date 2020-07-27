---
layout: post
template: one-col
title:  "Managing a Sinatra application"
categories: how-to-guides/deployment
order: 18
lead: How to deploy and manage Sinatra apps with Cloud 66
tags: ['operations']
legacy: false
permalink: /:collection/:path:output_ext
---

Cloud 66 supports applications based on the [Sinatra framework](http://www.sinatrarb.com/), a light-weight web framework written in Ruby.

## Custom commands
Given that Sinatran applications can have different database frameworks, we allow you to specify custom commands which are run at specific points during deployment:

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


These commands can be set via [Toolbelt](/rails/references/toolbelt.html#settings-variables),

```shell
$ cx settings set -s my_app custom.build.command "rake db:seed"

$ cx settings set -s my_app custom.deploy.command "rake db:migrate"
```

But also in your [manifest file](/rails/quickstarts/getting-started-with-manifest.html).

```yaml
development:
    sinatra:
        configuration:
            custom_build_command: rake db:seed
            custom_deploy_command: rake db:migrate
```

## Connect to your database
If a database is detected, they will automatically be provisioned as required (including the database itself), and environment variables will be created. You will need to update your code with the environment variables you wish to use, for example `MYSQL_URL`.

Should you wish to change the database username/password after build, you will have to do this manually, which will involve recreating backup jobs to reflect the new values.

#### Note
<div class="notice">
  <p>You can use <a href="http://yamllint.com/" target="_blank">Yamllint.com</a> to check your YAML syntax before committing.</p>
</div>

### Examples of connecting to your database:
### Active Record

**MySQL YML**

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
