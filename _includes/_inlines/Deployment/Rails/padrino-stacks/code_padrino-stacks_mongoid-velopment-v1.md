<!-- usedin: [ _includes/_inlines/Deployment/Rails/padrino-stacks/padrino-stacks_mongoid-v1.md] -->

```
development:
  sessions:
    default:
      database: mongoid
      hosts: ["<%= ENV['MONGODB_ADDRESS']%>:27017"]
```
