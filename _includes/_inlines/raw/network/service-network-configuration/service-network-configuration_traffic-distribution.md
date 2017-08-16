---
post: 
---

## Traffic distribution

The external traffic to your server(s) is distributed by a Nginx reverse proxy for each upstream on HTTP and HTTPS. You can define which ports each service listens on (if any) using the `ports` directive below. If you have multiple containers running for your service(s), round-robin will be used to distribute traffic between them (providing load balancing). Should you have multiple services listening on the same external port, the `traffic_matches` directive is used to direct traffic to a specific service based on the host name.

