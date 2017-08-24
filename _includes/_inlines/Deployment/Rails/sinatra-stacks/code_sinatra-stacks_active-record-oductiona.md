<!-- usedin: [ _includes/_inlines/Deployment/Rails/sinatra-stacks] - layout:code post: sinatra-stacks_active-record -->

```
production:
  adapter: mysql2
  username: <%= ENV['MYSQL_USERNAME'] %>
  password: <%= ENV['MYSQL_PASSWORD'] %>
  host: <%= ENV['MYSQL_ADDRESS'] %>
  database: <%= ENV['MYSQL_DATABASE'] %>
```
