---
layout: post
template: one-col
title:  "Managing a Padrino application"
categories: how-to-guides/deployment
order: 25
lead: How to deploy and manage Padrino apps with Cloud 66
tags: ['operations']
legacy: false
permalink: /:collection/:path
---

Cloud 66 supports stacks based on the [Padrino framework](http://www.padrinorb.com/), a light-weight web framework built upon [Sinatra](/rails/how-to-guides/deployment/sinatra-stacks.html).

## Custom commands
Given that Padrino applications can have different database frameworks, we allow you to specify custom commands which are run at specific points during deployment:

<ul class="list">
  <li>
    <p>
    <strong>Custom build command</strong> &mdash; This command will run every time until the first build is successful. Example:
    </p>
    <p>
      <kbd>bundle exec rake db:seed</kbd>
    </p>
  </li>
  <li>
    <p>
      <strong>Custom deploy command</strong> &mdash; This command will run on every deployment (including initial build). Example:
    </p>
    <p>
      <kbd>bundle exec rake db:migrate</kbd>
    </p>
  </li>
</ul>

These commands can be set via [Toolbelt](/rails/references/toolbelt.html#settings-variables),

<pre class="prettyprint">
$ cx settings set -s my_stack custom.build.command "rake db:seed"

$ cx settings set -s my_stack custom.deploy.command "rake db:migrate"
</pre>

But also in your [manifest file](/rails/quickstarts/getting-started-with-manifest.html).

<pre class="prettyprint">
development:
    padrino:
        configuration:
            custom_build_command: rake db:seed
            custom_deploy_command: rake db:migrate
</pre>

## Connect to your database
If a database is detected, it will automatically be provisioned as required (including the database itself), and environment variables will be created. You will need to update your code with the environment variables you wish to use, for example `MYSQL_URL`.

Should you wish to change the database username/password after build, you will have to do this manually, which will involve recreating backup jobs to reflect the new values.

### Examples of connecting to your database

## Active Record

### MySQL YML

<pre class="prettyprint">
production:
  adapter: mysql2
  username: <%= ENV['MYSQL_USERNAME'] %>
  password: <%= ENV['MYSQL_PASSWORD'] %>
  host: <%= ENV['MYSQL_ADDRESS'] %>
  database: <%= ENV['MYSQL_DATABASE'] %>
</pre>

**PostgreSQL YML**

<pre class="prettyprint">
production:
  adapter: postgresql
  username: <%= ENV['POSTGRESQL_USERNAME'] %>
  password: <%= ENV['POSTGRESQL_PASSWORD'] %>
  host: <%= ENV['POSTGRESQL_ADDRESS'] %>
  database: <%= ENV['POSTGRESQL_DATABASE'] %>
</pre>

**Declarative**

<pre class="prettyprint">
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
</pre>

### DataMapper
<pre class="prettyprint">
DataMapper::setup(:default, "ENV['POSTGRESQL_URL']")
</pre>

### MongoMapper
<pre class="prettyprint">
MongoMapper.connection = Mongo::Connection.from_uri(ENV['MONGODB_URL'])
</pre>

### Mongoid
<pre class="prettyprint">
development:
  sessions:
    default:
      database: mongoid
      hosts: ["<%= ENV['MONGODB_ADDRESS']%>:27017"]
</pre>

## Example application
* <a href="https://app.cloud66.com/stacks/new?eduid=padrino_mysql" target="_blank">Padrino with MySQL</a>

#### Note
<div class="notice">
  <p>You can use <a href="http://yamllint.com/" target="_blank">Yamllint.com</a> to check your YAML syntax before committing.</p>
</div>