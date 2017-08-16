---
layout: code
post: 2012-01-09-nginx-redirect_https.md
---


&#123;% if allow_ssl == true %&#125;
server {
    server_name          *.domaina.com;
    listen               443;
    ssl                  on;
    ssl_certificate_key /etc/ssl/localcerts/domaina.key;
    ssl_certificate /etc/ssl/localcerts/domaina.crt;
    rewrite ^ https://domainb.com$request_uri? permanent;
}
