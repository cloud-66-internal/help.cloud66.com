<!-- usedin: [ _legacy_docker/Tutorials/2012-01-09-nginx-redirect.md, _maestro/Tutorials/2012-01-09-nginx-redirect.md, _node/tutorials/2012-01-09-nginx-redirect.md, _rails/Tutorials/2012-01-09-nginx-redirect.md] -->


## Redirect between domains with HTTP and HTTPS

If you have two separate domains (eg. A and B) for your app and need to redirect traffic from domain A to B, follow these instructions.

Create DNS records for domain A, pointing it at domain B. We will then create Nginx rules, so that visitors to domain A will be redirected to domain B. The method differs slightly between HTTP and HTTPS traffic, due to certificate complexities.

