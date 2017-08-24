<!-- usedin: [ _includes/_inlines/Tutorials/common/2012-01-09-nginx-redirect] - layout:code post: 2012-01-09-nginx-redirect_redirect-from-http-to-https -->

```
return 301 https://$host$request_uri;
```
