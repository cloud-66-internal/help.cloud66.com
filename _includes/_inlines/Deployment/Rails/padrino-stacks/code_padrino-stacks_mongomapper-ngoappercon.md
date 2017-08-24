<!-- usedin: [ _includes/_inlines/Deployment/Rails/padrino-stacks] - layout:code post: padrino-stacks_mongomapper -->

```
MongoMapper.connection = Mongo::Connection.from_uri(ENV['MONGODB_URL'])
```
