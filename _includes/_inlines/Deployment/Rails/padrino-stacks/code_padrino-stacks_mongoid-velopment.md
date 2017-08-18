<!-- layout:code post: padrino-stacks_mongoid -->

```
development:
  sessions:
    default:
      database: mongoid
      hosts: ["<%= ENV['MONGODB_ADDRESS']%>:27017"]
```
