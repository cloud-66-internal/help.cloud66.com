<!-- layout:code post: building-a-manifest-file_gce-load-balancer -->

```

production:
    load_balancer:
        configuration:
            httpchk: /
            balance: CLIENT_IP_PROTO

```
