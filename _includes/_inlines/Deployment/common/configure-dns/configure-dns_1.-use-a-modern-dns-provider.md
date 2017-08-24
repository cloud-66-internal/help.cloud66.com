<!-- usedin: [ _legacy_docker/deployment] - post: -->


### 1. Use a modern DNS provider

Some DNS hosts provide a CNAME-like functionality at the zone apex (root domain) using a custom record type.

For example:

- [ALIAS at DNSimple](http://support.dnsimple.com/articles/alias-record)
- [ANAME at DNS Made Easy](http://www.dnsmadeeasy.com/technology/aname-records/)
- [ANAME at easyDNS](http://docs.easydns.com/aname-records/)
- [ALIAS at AWS](http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/CreatingAliasRRSets.html)

The setup is similar for each provider - simply point the ALIAS or ANAME for your root domain to the Cloud 66 hostname.

