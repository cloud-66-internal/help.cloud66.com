<!-- usedin: [ _includes/_inlines/Deployment/Rails/sinatra-stacks/sinatra-stacks_mysql-v1.md] -->

```
production:
  adapter: mysql2
  username: <%= ENV['MYSQL_USERNAME'] %>
  password: <%= ENV['MYSQL_PASSWORD'] %>
  host: <%= ENV['MYSQL_ADDRESS'] %>
  database: <%= ENV['MYSQL_DATABASE'] %>
```
