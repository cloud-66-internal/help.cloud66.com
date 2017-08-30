<!-- usedin: [ _legacy_docker/Tutorials/2004-09-26-ssl-certificate-v1.md, _maestro/Tutorials/2004-09-26-ssl-certificate-v1.md, _node/tutorials/2004-09-26-ssl-certificate-v1.md, _rails/Tutorials/2004-09-26-ssl-certificate-v1.md] -->


## Intermediate certificates

Some SSL certificate authorities (CA), like RapidSSL, issue certificates that are not fully compatible with all devices (specifically Android devices). This is because they are not the ultimate CAs and usually act as a reseller for other authorities (like VeriSign).

Cloud 66 supports these CAs fully by allowing you to add the intermediate certificate separately into the [SSL certificate add-in](http://help.cloud66.com/stack-add-ins/ssl-certificate) form.

