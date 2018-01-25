---
layout: post
template: one-col
title: Nginx allow and deny by IP
categories: Tutorials
lead: ""
legacy: true

permalink: /:collection/:path
---
{% assign product = "common" %}

In addition to protecting your application (or parts of it) using [HTTP basic authentication](https://help.cloud66.works/{{ include.product }}/tutorials/2012-01-03-nginx-auth.html), you can use Cloud 66 [CustomConfig](https://help.cloud66.works/{{ include.product }}/stack-management/custom-config.html) to block (or allow) access to your application based on IP addresses.

Follow the instructions below to accomplish this.

1.  Create a file in the root of your repository called blockips.conf. This file will contain the IPs you wish to allow/deny.
2.  To deny a single IP address, you can use the following syntax:

		deny 1.2.3.4;
	You can also deny an entire subnet as follows:

		deny 91.212.45.0/24;
	Should you wish to only allow access to your IP address, do this:

		allow 1.2.3.4/24; deny all; 
	There are lots of resources about this syntax on the Internet in case you need more guidance.

3.  Now we can go ahead and customize the Nginx configuration, which you can see more about in our [Nginx CustomConfig documentation](http://help.cloud66.works/{{ include.product }}/deployment/nginx).
	
	You will want to add the following code within the http section of your configuration, for example on line 22.

		{% raw %}include {{ deploy_to }}/current/blockips.conf;{% endraw %}
	
	This will read the file from your repository directory on the server. Once you save that configuration, it will apply immediately on your server.
