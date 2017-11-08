


## Separate domains with different certificates



{%include _inlines/Tutorials/common/2004-09-26-ssl-certificate/code_2004-09-26-ssl-certificate_separate-domains-with-diffe-v1.md  product = include.product %}




You may need to serve different parts of your application on separate domains, each with its own SSL certificate. You can use [Nginx CustomConfig](http://help.cloud66.works/{{ include.product }}/deployment/nginx) to set this up - you will basically have two server blocks listening on different domains, and serving different certificates (located on the server):

