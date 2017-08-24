<!-- usedin: [ _includes/_inlines/Deployment/Rails/padrino-stacks/padrino-stacks_mysql-yml.md] -->

```
production:
  adapter: postgresql
  username: <%= ENV['POSTGRESQL_USERNAME'] %>
  password: <%= ENV['POSTGRESQL_PASSWORD'] %>
  host: <%= ENV['POSTGRESQL_ADDRESS'] %>
  database: <%= ENV['POSTGRESQL_DATABASE'] %>
```
