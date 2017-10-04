<!-- usedin: [ _legacy_docker/AddIns/ssl-v1.md, _maestro/AddIns/ssl-v1.md, _node/addins/ssl-v1.md, _rails/AddIns/ssl-v1.md] -->


### Note

The DNS name **won't accept wild cards** , also having "**_**" (underscore) in your **DNS name won't work**.


If your infrastructure is behind [Cloudflare](https://www.cloudflare.com) and your are using a global HTTPS redirect you need a [pagerule](https://support.cloudflare.com/hc/en-us/articles/200168306-Is-there-a-tutorial-for-Page-Rules-) to get things working. Make sure you add a [pagerule](https://support.cloudflare.com/hc/en-us/articles/200168306-Is-there-a-tutorial-for-Page-Rules-) because Let's Encrypt need a non-secure HTTP endpoint (/.well-known/acme_challenge/\*) to invoke and reissue certificates. 

If your domain application is running on *www.example.io* for example you need a page rule for the following URL: *www.example.io/.well-known/acme-challenge/\**, browser integrity check off, SSL off, cache expiration: 4 hours.
