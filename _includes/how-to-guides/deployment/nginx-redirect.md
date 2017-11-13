## Redirect from HTTP to HTTPS

If you only want to serve HTTPS traffic through your application, you may also want to redirect HTTP users to HTTPS.

Simply add this code to the _server_ section of your Nginx configuration using [CustomConfig](http://help.cloud66.com/managing-your-stack/customconfig), for example on line 81. This will work even if you're not using Cloud 66.

```
return 301 https://$host$request_uri;
```




## Redirect between domains with HTTP and HTTPS

If you have two separate domains (eg. A and B) for your app and need to redirect traffic from domain A to B, follow these instructions.

Create DNS records for domain A, pointing it at domain B. We will then create Nginx rules, so that visitors to domain A will be redirected to domain B. The method differs slightly between HTTP and HTTPS traffic, due to certificate complexities.


### HTTP
We simply want to add a permanent redirect for visitors to domain A towards domain B (you can add this around line 65):

```
server {
    server_name             _;
    listen                  80;
    rewrite ^ https://domainb.com$request_uri? permanent;
}
```




### HTTPS
The above method will not work for HTTPS traffic, because visitors from domain A will be expecting SSL certificates for that domain, not those of domain B.

As such, users from domain A must first be met with the SSL certificate for that domain, and then be redirected to domain B (and met with those certificates).

```
{% raw %}{% if allow_ssl == true %}
server {
    server_name          *.domaina.com;
    listen               443;
    ssl                  on;
    ssl_certificate_key /etc/ssl/localcerts/domaina.key;
    ssl_certificate /etc/ssl/localcerts/domaina.crt;
    rewrite ^ https://domainb.com$request_uri? permanent;
}{% endraw %}
```

This will create a permanent redirect from domain A to B over SSL. Just remember to add your key and certificate files to the location specified on your server!

