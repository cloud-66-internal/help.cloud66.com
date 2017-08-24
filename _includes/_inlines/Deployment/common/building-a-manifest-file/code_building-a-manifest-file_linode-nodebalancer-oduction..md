<!-- usedin: [ _includes/_inlines/Deployment/common/building-a-manifest-file] - layout:code post: building-a-manifest-file_linode-nodebalancer -->

```

production:
    load_balancer:
        configuration:
            httpchk: /
            balance: leastconn

```
