## Overview 

This guide is for applications that require manual set up of SSL certificates on Nginx. In general we recommend that applications use our integrated [SSL Add-In](/{{page.collection}}/how-to-guides/add-ins/ssl.html) and only use this manual method if the add-in doesn't support their specific use-case.

## Generate a certificate

First, generate a key and certificate signing request:

1.  Generate a private _key_ through your command line, without specifying a passphrase
2.  Create a certificate signing request and enter your information as requested
3.  Provide this CSR file to your certificate authority, who will, in turn, provide you with a certificate (CRT) file.
4.  Use the original .key file together with this .crt file on Cloud 66.

If you're not sure how to do any of the steps above, follow the first three steps of our [blog post](https://blog.cloud66.com/registering-ssl-certificate-with-amazon-elastic-load/).

## Important
<div class="notice notice-warning"><p>You cannot use passphrase protected certificate keys with Nginx. Learn how to <a href="/maestro/how-to-guides/security/remove-passphrase.html">remove the passphrases from certificate keys</a>.</p></div>

## Intermediate certificates

Some SSL certificate authorities (CA), like RapidSSL, issue certificates that are not fully compatible with all devices (specifically Android devices). This is because they are not the ultimate CAs and usually act as a reseller for other authorities (like VeriSign).

Cloud 66 supports these CAs fully by allowing you to add the intermediate certificate separately into the [SSL certificate add-in](/{{page.collection}}/how-to-guides/security/ssl-certificate.html) form.


## Multi-domain certificates

When installing multi-domain certificates, certificate authorities such as Comodo typically send you four files:

1.  Root CA Certificate - _AddTrustExternalCARoot.crt_
2.  Intermediate CA Certificate - _COMODORSAAddTrustCA.crt_
3.  Intermediate CA Certificate - _COMODORSAExtendedValidationSecureServerCA.crt_
4.  Your COMODO EV Multi-Domain SSL Certificate - _14637732.crt_

To use these, you have to concatenate all files except for the last one (the certificate):

```shell
$ cat COMODORSAExtendedValidationSecureServerCA.crt COMODORSAAddTrustCA.crt AddTrustExternalCARoot.crt > bundle_file
```
If this doesn't work make sure that your certificates don't need passwords.

## Separate domains with different certificates

You may need to serve different parts of your application on separate domains, each with its own SSL certificate. You can use [Nginx CustomConfig](/maestro/how-to-guides/nginx/customizing-nginx.html) to set this up - you will basically have two server blocks listening on different domains, and serving different certificates (located on the server):

```shell
{% raw %}{% if allow_ssl == true %}

# main domain
server {
listen 443;
ssl on;
ssl_certificate_key /etc/ssl/localcerts/certificate_name_1.key;
ssl_certificate /etc/ssl/localcerts/certificate_name_1.crt;
server_name server_name_1.com;
client_max_body_size 50m;
...
}
# secondary domain
server {
listen 443;
ssl on;
ssl_certificate_key /etc/ssl/localcerts/certificate_name_2.key;
ssl_certificate /etc/ssl/localcerts/certificate_name_2.crt;
server_name server_name_2.com;
client_max_body_size 50m;
...
}{% endraw %}
```

