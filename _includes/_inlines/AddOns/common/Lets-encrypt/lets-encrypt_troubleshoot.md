<!-- usedin: [ _legacy_docker/AddOns/Lets-encrypt.md, _maestro/AddOns/Lets-encrypt.md, _node/addons/lets-encrypt.md, _rails/AddOns/Lets-encrypt.md] -->

## Troubleshoot

If during Lets Encrypt installation you get an error including something like this:



{%include _inlines/AddOns/common/Lets-encrypt/code_lets-encrypt_troubleshoot-otefileto.md %}




You need to go through the following steps:
1.  **Delete the SSL ceritficate** first and then carry on to the next step.
2.  If your infrastructure is behind [Cloudflare](https://www.cloudflare.com) and your are using a global HTTPS redirect you need a [pagerule](https://support.cloudflare.com/hc/en-us/articles/200168306-Is-there-a-tutorial-for-Page-Rules-) to get things working. Make sure you add a [pagerule](https://support.cloudflare.com/hc/en-us/articles/200168306-Is-there-a-tutorial-for-Page-Rules-) because Let's Encrypt needs a non-secure HTTP endpoint (/.well-known/acme_challenge/*) to invoke and reissue certificates.
3.  Nginx Config
    
    There could be some parts missing in your Nginx config, probably due to customization or config file not being up to date. The following parts take care of redirections -like HTTP to HTTPS redirection or adding/removing www to the link- so that the file could be accessible via HTTP endpoint. 
<span style="background-color: #FFFF00"><b> First delete the SSL certificate and then apply the changes.</b></span>
    
{%include _inlines/AddOns/common/Lets-encrypt/code_lets-encrypt_troubleshoot-ote2nginx.md %}
    