---
layout: post
template: one-col
title: Standard SSL certificate
categories: addins
lead: ""
legacy: true
recommendedName: [ "Let's Encrypt" ]
recommendedLinks: [ "Lets-encrypt.html"]
permalink: /:collection/:path
---


## Standard SSL Certificate

You can easily add a SSL certificate to your stack from the add-in page. Apart from the certificate key and SSL certificate, you can also provide an intermediate certificate and allowed server names (with wildcards accepted).

Once you've provided your SSL certificate and key, we'll install them on all your web servers.

Cloud 66 supports _SSL Termination_ on _HAProxy (1.5.x or higher)_ and _Amazon Elastic Load Balancer_. Simply check the option on SSL certificate add on page. This will config your existing load balancer or will apply whenever you create new load balancer.   

Refer to our [documentation](http://community.cloud66.com/articles/ssl-certificate) and [troubleshooting](http://community.cloud66.com/articles/ssl-certificate-issues) pages for more information.

