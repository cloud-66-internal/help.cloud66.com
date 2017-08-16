<!-- post: building-a-manifest-file_haproxy -->


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
            errorfile&#95;400: /etc/haproxy/errors/400.http
            errorfile&#95;403: /etc/haproxy/errors/403.http
            errorfile&#95;408: /etc/haproxy/errors/408.http
            errorfile&#95;500: /etc/haproxy/errors/500.http
            errorfile&#95;502: /etc/haproxy/errors/502.http
            errorfile&#95;503: /etc/haproxy/errors/503.http
            errorfile&#95;504: /etc/haproxy/errors/504.https
