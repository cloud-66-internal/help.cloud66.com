<!-- usedin: [ _legacy_docker/deployment/configure-dns-v1.md, _maestro/Deployment/configure-dns-v1.md, _node/deployment/configure-dns-v1.md, _rails/deployment/configure-dns-v1.md, _skycap/deployment/configure-dns-v1.md] -->


### 2. Use an A record

This involves using an A record to point your root domain at your load balancer and then redirecting traffic to www in Nginx.

1.  Create a CNAME record for www pointing at the Cloud 66 hostname on your load balancer.
2.  Create an A record for your root domain (eg. example.com) pointing at your load balancer IP address.
3.  ​Use [network redirects](/managing-your-stack/stack-network-settings) to permanently redirect all traffic from example.com to www.example.com.

