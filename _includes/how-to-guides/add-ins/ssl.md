

SSL is an acronym for Secure Sockets Layer, an encryption technology that was created by Netscape. SSL creates an encrypted connection between your web server and your visitors' web browser allowing for private information to be transmitted without the problems of eavesdropping, data tampering, or message forgery.

Cloud 66 provides two types of SSL, one is the standard one and the other is the [Let's Encrypt](https://letsencrypt.org) one.

## Standard SSL Certificate

You can easily add a SSL certificate to your application from the add-in page. Apart from the certificate key and SSL certificate, you can also provide an intermediate certificate and allowed server names (with wildcards accepted).

Once you've provided your SSL certificate and key, we'll install them on all your web servers.

Cloud 66 supports _SSL Termination_ on _HAProxy (1.5.x or higher)_ and _Amazon Elastic Load Balancer_. Simply check the option on SSL certificate add on page. This will config your existing load balancer or will apply whenever you create new load balancer.   

Refer to our [documentation](/{{page.collection}}/how-to-guides/security/ssl-certificate.html)

## Let's Encrypt SSL Certificate

Adding this SSL certificate is even easier, you only need to add the DNS name for this. 

#### Warning
<div class="notice notice-danger"><p>The DNS name <b>won't accept wild cards</b> , also having "<b>_</b>" (underscore) in your <b>DNS name won't work</b>.</p>
</div>

### Using Let's Encrypt with Cloudflare

If your infrastructure is behind Cloudflare you need to add a [Page Rule](/{{page.collection}}/how-to-guides/security/lets-encrypt.html#configuring-lets-encrypt-with-cloudflare) to get things working because Let's Encrypt needs a non-secure HTTP endpoint (/.well-known/acme_challenge/\*) to invoke and reissue certificates. *Automatic HTTPS Rewrites*, *SSL* and *Browser Integrity Check* must all be turned off. 

If you need more help please read our full [Let's Encrypt guide](/{{page.collection}}/how-to-guides/security/lets-encrypt.html#configuring-lets-encrypt-with-cloudflare). 


