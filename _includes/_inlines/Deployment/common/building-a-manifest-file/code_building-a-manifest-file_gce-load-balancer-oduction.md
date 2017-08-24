<!-- usedin: [ _includes/_inlines/Deployment/common/building-a-manifest-file/building-a-manifest-file_gce-load-balancer.md] -->

```

production:
    load_balancer:
        configuration:
            httpchk: /
            balance: CLIENT_IP_PROTO

```
