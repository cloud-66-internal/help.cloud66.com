<!-- usedin: [ _includes/_inlines/Tutorials/common/2012-01-09-nginx-redirect/2012-01-09-nginx-redirect_http-v1.md] -->

```
server {
    server_name             _;
    listen                  80;
    rewrite ^ https://domainb.com$request_uri? permanent;
}
```
