<!-- usedin: [ _includes/_inlines/Deployment/Rails/padrino-stacks/padrino-stacks_mysql-yml-v1.md] -->

```
production:
  adapter: mysql2
  username: <%= ENV['MYSQL_USERNAME'] %>
  password: <%= ENV['MYSQL_PASSWORD'] %>
  host: <%= ENV['MYSQL_ADDRESS'] %>
  database: <%= ENV['MYSQL_DATABASE'] %> 

```
