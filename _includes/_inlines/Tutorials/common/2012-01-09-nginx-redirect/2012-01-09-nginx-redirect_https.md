<!-- usedin: [ _legacy_docker/Tutorials/2012-01-09-nginx-redirect.md, _maestro/Tutorials/2012-01-09-nginx-redirect.md, _node/tutorials/2012-01-09-nginx-redirect.md, _rails/Tutorials/2012-01-09-nginx-redirect.md] -->


### HTTPS
The above method will not work for HTTPS traffic, because visitors from domain A will be expecting SSL certificates for that domain, not those of domain B.

As such, users from domain A must first be met with the SSL certificate for that domain, and then be redirected to domain B (and met with those certificates).



{%include _inlines/Tutorials/common/2012-01-09-nginx-redirect/code_2012-01-09-nginx-redirect_https-ifallo.md %}




This will create a permanent redirect from domain A to B over SSL. Just remember to add your key and certificate files to the location specified on your server!
