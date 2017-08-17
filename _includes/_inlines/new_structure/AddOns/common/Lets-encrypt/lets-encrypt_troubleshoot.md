<!-- post: -->

## Troubleshoot

If during Lets Encrypt installation you get an error including something like this:



{%include _inlines/Lets-encrypt/code_lets-encrypt_troubleshoot-otefileto.md %}



You need to go through the following steps:

1.  If your infrastructure is behind [Cloudflare](https://www.cloudflare.com) and your are using a global HTTPS redirect you need a [pagerule] (https://support.cloudflare.com/hc/en-us/articles/200168306-Is-there-a-tutorial-for-Page-Rules-) to get things working. Make sure you add a [pagerule] (https://support.cloudflare.com/hc/en-us/articles/200168306-Is-there-a-tutorial-for-Page-Rules-) because Let's Encrypt needs a non-secure HTTP endpoint (/.well-known/acme_challenge/*) to invoke and reissue certificates.
2.  Nginx Config
