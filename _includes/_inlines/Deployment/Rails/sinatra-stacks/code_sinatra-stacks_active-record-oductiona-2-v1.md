<!-- usedin: [ _includes/_inlines/Deployment/Rails/sinatra-stacks/sinatra-stacks_postgres-v1.md] -->

```
production:
  adapter: postgresql
  username: <%= ENV['POSTGRESQL_USERNAME'] %>
  password: <%= ENV['POSTGRESQL_PASSWORD'] %>
  host: <%= ENV['POSTGRESQL_ADDRESS'] %>
  database: <%= ENV['POSTGRESQL_DATABASE'] %>
```
