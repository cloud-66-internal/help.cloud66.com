---
layout: code
post: 2012-01-09-nginx-redirect_http.md
---


server {
    server_name             _;
    listen                  80;
    rewrite ^ https://domainb.com$request_uri? permanent;
}
