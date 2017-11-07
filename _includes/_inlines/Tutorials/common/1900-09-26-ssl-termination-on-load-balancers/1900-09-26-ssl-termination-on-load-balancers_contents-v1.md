<!-- usedin: [ _legacy_docker/Tutorials/1900-09-26-ssl-termination-on-load-balancers-v1.md, _maestro/Tutorials/1900-09-26-ssl-termination-on-load-balancers-v1.md, _node/tutorials/1900-09-26-ssl-termination-on-load-balancers-v1.md, _rails/Tutorials/1900-09-26-ssl-termination-on-load-balancers-v1.md] -->


* * *

SSL termination using your load balancer allows the load balancer to handle incoming SSL connections, decrypt them and pass on unencrypted requests to your app servers.


It's important to note that _you do not need SSL termination to enable SSL on your stack_ - you can simply [add your SSL certificate to your app servers](http://help.cloud66.comhttps://help.cloud66.works/{{ include.product }}/addins/ssl/) as an add-on.

