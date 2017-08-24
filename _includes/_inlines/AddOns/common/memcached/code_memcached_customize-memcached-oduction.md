<!-- usedin: [ _includes/_inlines/AddOns/common/memcached] - layout:code post: memcached_customize-memcached -->

```

production:
    memcached:
        shared_group: db
        configuration:
            memory: 1024
            port: 11215
            listen_ip: 127.0.0.1

```
