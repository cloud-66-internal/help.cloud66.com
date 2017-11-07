<!-- usedin: [ _legacy_docker/AddIns/Lets-encrypt-v1.md, _maestro/AddIns/Lets-encrypt-v1.md, _node/addins/lets-encrypt-v1.md, _rails/AddIns/Lets-encrypt-v1.md] -->

## How it is installed

A Let's Encrypt Python script called _acme_tiny.py_  puts a file with random name under `/etc/cloud66/webroot/` on one of your web servers. Then tries to connect to your server and download that file via HTTP. It needs 
<span style="background-color: #FFFF00">a non-secure HTTP endpoint</span> (/.well-known/acme_challenge/*) to invoke and reissue certificates.




