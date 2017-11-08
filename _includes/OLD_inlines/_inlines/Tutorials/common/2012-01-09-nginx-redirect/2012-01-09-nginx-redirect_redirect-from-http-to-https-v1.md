


## Redirect from HTTP to HTTPS

If you only want to serve HTTPS traffic through your application, you may also want to redirect HTTP users to HTTPS.

Simply add this code to the _server_ section of your Nginx configuration using [CustomConfig](http://help.cloud66.com/managing-your-stack/customconfig), for example on line 81. This will work even if you're not using Cloud 66.



{%include _inlines/Tutorials/common/2012-01-09-nginx-redirect/code_2012-01-09-nginx-redirect_redirect-from-http-to-https--v1.md  product = include.product %}




