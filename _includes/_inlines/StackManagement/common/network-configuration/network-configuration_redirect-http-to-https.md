<!-- usedin: [ _legacy_docker/stack-management] - post: -->


### Redirect HTTP to HTTPS

You can easily [add your SSL certificates](/stack-add-ins/ssl-certificate) to your stacks and serve your traffic securely with HTTPS. To ensure that all your visitors use HTTPS instead of HTTP, you need to redirect anyone using HTTP to HTTPS.

This works by reconfiguring your Nginx configuration, so any visitor that arrives at port 80 and HTTP will receive a permanent HTTP redirect (301) to the same address on HTTPS.

You can find it in *Stack page* --> *Network settings* --> *Redirects* tab 

