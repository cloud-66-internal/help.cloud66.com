<!-- usedin: [ _legacy_docker/stack-management/network-configuration-v1.md, _maestro/stack-management/network-configuration-v1.md, _node/stack-management/network-configuration-v1.md, _rails/stack-management/network-configuration-v1.md] -->


### Redirect HTTP to HTTPS

You can easily [add your SSL certificates](https://help.cloud66.works/{{ include.product }}/addins/ssl/) to your stacks and serve your traffic securely with HTTPS. To ensure that all your visitors use HTTPS instead of HTTP, you need to redirect anyone using HTTP to HTTPS.

This works by reconfiguring your Nginx configuration, so any visitor that arrives at port 80 and HTTP will receive a permanent HTTP redirect (301) to the same address on HTTPS.

You can find it in *Stack page* --> *Network settings* --> *Redirects* tab 

