## Contents

*		[Amazon Elastic Load Balancer](#aws)
*		[Rackspace](#rackspace)

SSL termination using your load balancer allows the load balancer to handle incoming SSL connections, decrypt them and pass on unencrypted requests to your app servers.

![SSL termination](http://cdn.cloud66.com/images/help/ssl_termination.png)

It's important to note that _you do not need SSL termination to enable SSL on your stack_ - you can simply [add your SSL certificate to your app servers](http://help.cloud66.com/stack-add-ins/ssl-certificate) as an add-on.

