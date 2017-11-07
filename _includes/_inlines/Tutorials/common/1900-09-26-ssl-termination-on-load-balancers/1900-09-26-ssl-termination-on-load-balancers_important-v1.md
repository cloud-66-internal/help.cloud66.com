<!--  usedin: [ _legacy_docker/Tutorials/1900-09-26-ssl-termination-on-load-balancers-v1.md, _maestro/Tutorials/1900-09-26-ssl-termination-on-load-balancers-v1.md, _node/tutorials/1900-09-26-ssl-termination-on-load-balancers-v1.md, _rails/Tutorials/1900-09-26-ssl-termination-on-load-balancers-v1.md] -->


## Important

Ensure that the certificate is valid: current date must be between the certificate’s start and end date. Certificate keys also should not be password protected




Through the [AWS ELB command line interface](http://aws.amazon.com/developertools/2536):

*   Run the command below to add a new SSL certificate:



{%include _inlines/Tutorials/common/1900-09-26-ssl-termination-on-load-balancers/code_1900-09-26-ssl-termination-on-load-balancers_important-1-v1.md  product = include.product %}




*You should retrieve any available SSL certificate using this command:



{%include _inlines/Tutorials/common/1900-09-26-ssl-termination-on-load-balancers/code_1900-09-26-ssl-termination-on-load-balancers_important-2-v1.md  product = include.product %}




*Run the command below to attach the SSL certificate to the load balancer:



{%include _inlines/Tutorials/common/1900-09-26-ssl-termination-on-load-balancers/code_1900-09-26-ssl-termination-on-load-balancers_important-3-v1.md  product = include.product %}




*To delete a certificate, run the following command:



{%include _inlines/Tutorials/common/1900-09-26-ssl-termination-on-load-balancers/code_1900-09-26-ssl-termination-on-load-balancers_important-4-v1.md  product = include.product %}




Refer to the [AWS documentation for more information](http://docs.aws.amazon.com/IAM/latest/UserGuide/InstallCert.html).

