---
menuheaders: [ "Web server issues", "Passphrase protected keys", "Certificate and key encoding", "Matching certificates and keys" ]
layout: post
template: one-col
title: SSL certificate issues
categories: Tutorials
lead: ""
legacy: false

permalink: /:collection/:path
---









### Web server issues

If you've added your SSL certificate through the Cloud 66 UI and your web server has stopped serving content, it's likely that there's some error with your SSL certificate. In this case, it's best to [SSH to your server](https://help.cloud66.works/{{ include.product }}/stack-management/ssh-to-server.html) and run `sudo service nginx restart`, which should highlight the error.






### Passphrase protected keys

You cannot use passphrase protected SSL certificate keys with Nginx. Using passphrase protected certificate keys will cause Nginx to prompt for the manual entry of passphrase at restart which will break the automatic deployment flow (and restart of Nginx after a server restart).

The symptoms of this is that your deployment gets stuck in the _Restarting Nginx_ step.

You can simply use a non-passphrase-protected version of your SSL certificate key when [adding an SSL key to your stack](https://help.cloud66.works/{{ include.product }}/tutorials/2004-09-26-ssl-certificate.html). Use the following command to do it (on your development computer):





```
$ openssl rsa -in private_key_with_pass_phrase -out private_key_without_pass_phrase
```





You will be prompted for your passphrase and the output will be generated after that.






### Certificate and key encoding

Certificates and key files need to have only a _new line_ character at the end (instead of both _new line_ and _carriage return_ characters). To see if that's the case, you can open them in a text editor like TextMate and show the invisible characters.  

![TextMate Show Invisible Characters](http://assets.cloud66.com/help/images/show_invisible_characters_textmate.png)

This is an example of a wrong line ending:

![Wrong Line Ending for SSL certificate](http://assets.cloud66.com/help/images/wrong_encoding_of_ssl_certificate.png)






### Matching certificates and keys

This problem usually manifests itself as the following error when starting nginx:





```
$ openssl rsa -noout -modulus -in FILE.key
$ openssl req -noout -modulus -in FILE.csr
$ openssl x509 -noout -modulus -in FILE.cer
```





To make sure your key and certificate match correctly, use the OpenSSL commandline tool like this:





```
$ openssl rsa -noout -modulus -in FILE.key
$ openssl req -noout -modulus -in FILE.csr
$ openssl x509 -noout -modulus -in FILE.cer
```





If everything matches (same modulus), the files are compatible. If not, one of the file is not linked to the others.

