<!-- usedin: [ _legacy_docker/stack-management] - post: -->


### WWW or non-WWW in your URL

Some sites serve traffic on `www.domain.com`, while others use the bare `domain.com`. By default, your servers will serve traffic for any DNS record pointing to their address. This setting allows your to redirect visits to `www.domain.com` to `domain.com`, and vice-versa. This works by changing your Nginx configuration to permanently redirect (HTTP 301) visitors to the desired address.

You can find it in *Stack page* --> *Network settings* --> *Redirects* tab
