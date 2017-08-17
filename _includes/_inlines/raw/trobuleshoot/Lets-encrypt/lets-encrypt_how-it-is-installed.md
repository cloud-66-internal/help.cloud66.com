<!-- post: -->

## How it is installed

A Let's Encrypt Python script called _acme_tiny.py_  puts a file with random name under `/etc/cloud66/webroot/` on one of your web servers. Then tries to connect to your server and download that file via HTTP. It needs 
a non-secure HTTP endpoint
 (/.well-known/acme_challenge/*) to invoke and reissue certificates.




