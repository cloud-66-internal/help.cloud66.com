<!-- usedin: [ _legacy_docker/deployment/configure-dns-v1.md, _maestro/Deployment/configure-dns-v1.md, _node/deployment/configure-dns-v1.md, _rails/deployment/configure-dns-v1.md, _skycap/deployment/configure-dns-v1.md] -->


### 1. Use a modern DNS provider

Some DNS hosts provide a CNAME-like functionality at the zone apex (root domain) using a custom record type.

For example:

- [ALIAS at DNSimple](http://support.dnsimple.com/articles/alias-record)
- [ANAME at DNS Made Easy](http://help.dnsmadeeasy.com/managed-dns/records/aname-records/)
- [ANAME at easyDNS](https://fusion.easydns.com/Knowledgebase/Article/View/190/0/aname-records)
- [ALIAS at AWS](http://docs.aws.amazon.com/Route53/latest/DeveloperGuide/CreatingAliasRRSets.html)

The setup is similar for each provider - simply point the ALIAS or ANAME for your root domain to the Cloud 66 hostname.

