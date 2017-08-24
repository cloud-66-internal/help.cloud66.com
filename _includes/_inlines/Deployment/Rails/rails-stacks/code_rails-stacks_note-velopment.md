<!-- usedin: [ _includes/_inlines/Deployment/Rails/rails-stacks] - layout:code post: rails-stacks_note -->

```
development:
    adapter: mysql2
    username: <%= ENV['MYSQL_USERNAME'] %>
    password: <%= ENV['MYSQL_PASSWORD'] %>
    database: <%= ENV['MYSQL_DATABASE'] %>
    host: <%= ENV['MYSQL_ADDRESS'] %>
```
