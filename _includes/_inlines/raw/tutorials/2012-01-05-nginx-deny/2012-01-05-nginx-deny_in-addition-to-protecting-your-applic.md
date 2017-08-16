---
post: 
---

#In addition to protecting your application (or parts of it) using [HTTP basic authentication](/articles/nginx-basic-authorization), you can use Cloud 66 [CustomConfig](http://help.cloud66.com/managing-your-stack/customconfig) to block (or allow) access to your application based on IP addresses.
Follow the instructions below to accomplish this.

1.  Create a file in the root of your repository called blockips.conf. This file will contain the IPs you wish to allow/deny.
2.  To deny a single IP address, you can use the following syntax:
3.  Now we can go ahead and customize the Nginx configuration, which you can see more about in our [Nginx CustomConfig documentation](http://help.cloud66.com/web-server/nginx).
