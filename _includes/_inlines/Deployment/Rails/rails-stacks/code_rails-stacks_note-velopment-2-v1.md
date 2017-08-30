<!-- usedin: [ _includes/_inlines/Deployment/Rails/rails-stacks/rails-stacks_postgres-v1.md] -->

```
development:
    adapter: postgresql
    username: <%= ENV['POSTGRESQL_USERNAME'] %>
    password: <%= ENV['POSTGRESQL_PASSWORD'] %>
    database: <%= ENV['POSTGRESQL_DATABASE'] %>
    host: <%= ENV['POSTGRESQL_ADDRESS'] %>
```
