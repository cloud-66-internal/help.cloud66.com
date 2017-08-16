---
layout: code
post: building-a-manifest-file_linode-nodebalancer.md
---


production:
    load_balancer:
        configuration:
            httpchk: /
            balance: leastconn
