<!-- usedin: [ _includes/_inlines/Deployment/Node/application-settings-node] - layout:code post: application-settings-node_redis -->

```

redis.createClient(6379, process.env.REDIS_URL)

```
