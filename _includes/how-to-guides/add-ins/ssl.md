

SSL is an acronym for Secure Sockets Layer, an encryption technology that was created by Netscape. SSL creates an encrypted connection between your web server and your visitors' web browser allowing for private information to be transmitted without the problems of eavesdropping, data tampering, or message forgery.

Cloud 66 provides two types of SSL, one is the standard one and the other is the [Let's Encrypt](https://letsencrypt.org) one.

<h2>Standard SSL Certificate</h2>
You can easily add a SSL certificate to your stack from the add-in page. Apart from the certificate key and SSL certificate, you can also provide an intermediate certificate and allowed server names (with wildcards accepted).

Once you've provided your SSL certificate and key, we'll install them on all your web servers.

Cloud 66 supports _SSL Termination_ on _HAProxy (1.5.x or higher)_ and _Amazon Elastic Load Balancer_. Simply check the option on SSL certificate add on page. This will config your existing load balancer or will apply whenever you create new load balancer.   

Refer to our [documentation](/{{page.collection}}/how-to-guides/security/ssl-certificate.html)

<h2>Let's Encrypt SSL Certificate</h2>

Adding this SSL certificate is even easier, you only need to add the DNS name for this. 

<div class="notice notice-danger">
	<h3>Note</h3>
	<p>The DNS name <b>won't accept wild cards</b> , also having "<b>_</b>" (underscore) in your <b>DNS name won't work</b>.</p>
</div>

If your infrastructure is behind [Cloudflare](https://www.cloudflare.com) and your are using a global HTTPS redirect you need a [pagerule](https://support.cloudflare.com/hc/en-us/articles/200168306-Is-there-a-tutorial-for-Page-Rules-) to get things working. Make sure you add a [pagerule](https://support.cloudflare.com/hc/en-us/articles/200168306-Is-there-a-tutorial-for-Page-Rules-) because Let's Encrypt need a non-secure HTTP endpoint (/.well-known/acme_challenge/\*) to invoke and reissue certificates. 

If your domain application is running on *www.example.io* for example you need a page rule for the following URL: *www.example.io/.well-known/acme-challenge/\**, browser integrity check off, SSL off, cache expiration: 4 hours.

If you still have issue installing Lets Encrypt please have a look at [this page](/{{page.collection}}/how-to-guides/security/lets-encrypt.html)
