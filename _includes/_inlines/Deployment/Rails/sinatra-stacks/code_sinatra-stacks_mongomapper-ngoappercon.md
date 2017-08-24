<!-- usedin: [ _includes/_inlines/Deployment/Rails/sinatra-stacks] - layout:code post: sinatra-stacks_mongomapper -->

```

MongoMapper.connection = Mongo::Connection.from_uri(ENV['MONGODB_URL'])

```
