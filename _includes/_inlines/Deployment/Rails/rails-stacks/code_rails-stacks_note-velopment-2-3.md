<!-- usedin: [ _includes/_inlines/Deployment/Rails/rails-stacks/rails-stacks_mongoid.md] -->

```
development:
  sessions:
    default:
      database: <%= ENV['MONGODB_DATABASE'] %>
      hosts: ["<%= ENV['MONGODB_ADDRESS']%>:27017"]
```
