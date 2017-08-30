<!-- usedin: [ _legacy_docker/Tutorials/2015-09-02-multi-cert-haproxy-v1.md, _maestro/Tutorials/2015-09-02-multi-cert_haproxy-v1.md, _node/tutorials/2015-09-02-multi-cert-haproxy-v1.md, _rails/Tutorials/2015-09-02-multi-cert_haproxy-v1.md] -->


### 5. Change the settings in your HAproxy config

In th UI Find the following line in your HAproxy config page:

`bind 0.0.0.0:{{port[0]}} ssl crt` 

and chenge it to:

`bind 0.0.0.0:{{port[0]}} ssl crt websitename1.pem crt websitename2.pem`




