<!-- usedin: [ _includes/_inlines/Deployment/Rails/padrino-stacks] - layout:code post: padrino-stacks_mysql-yml -->

```
production:
  adapter: mysql2
  username: <%= ENV['MYSQL_USERNAME'] %>
  password: <%= ENV['MYSQL_PASSWORD'] %>
  host: <%= ENV['MYSQL_ADDRESS'] %>
  database: <%= ENV['MYSQL_DATABASE'] %> 

```
