<!-- usedin: [ _includes/_inlines/Tutorials/common/1900-09-26-ssl-termination-on-load-balancers/1900-09-26-ssl-termination-on-load-balancers_important-v1.md] -->

```
$ elb-create-lb-listeners ELBConfigureSSL --listener "protocol=HTTPS,lb-port=443,instance-port=80,instance-protocol=HTTP, cert-id=&<certificate name>"
```
