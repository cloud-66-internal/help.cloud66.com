---
layout: code
---

production:
    load_balancer:
        configuration:
            httpchk: /
            balance: CLIENT_IP_PROTO
