<!-- usedin: [ _includes/_inlines/Deployment/common/building-a-manifest-file/building-a-manifest-file_haproxy.md] -->

```

production:
    load_balancer:
        servers:
         - server:
           unique_name: bananana
           size: 1gb
           region: ams2
           vendor: digitalocean
           key_name: Default
        configuration:
            httpchk: HEAD / HTTP/1.1\r\nHost:haproxy  #default value
            balance: roundrobin #default value
            errorfile_400: /etc/haproxy/errors/400.http
            errorfile_403: /etc/haproxy/errors/403.http
            errorfile_408: /etc/haproxy/errors/408.http
            errorfile_500: /etc/haproxy/errors/500.http
            errorfile_502: /etc/haproxy/errors/502.http
            errorfile_503: /etc/haproxy/errors/503.http
            errorfile_504: /etc/haproxy/errors/504.https

```
