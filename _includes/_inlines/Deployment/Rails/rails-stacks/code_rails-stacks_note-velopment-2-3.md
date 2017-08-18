<!-- layout:code post: rails-stacks_note -->

```
development:
  sessions:
    default:
      database: <%= ENV['MONGODB_DATABASE'] %>
      hosts: ["<%= ENV['MONGODB_ADDRESS']%>:27017"]
```
