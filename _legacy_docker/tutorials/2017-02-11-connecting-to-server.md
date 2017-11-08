---
layout: post
template: one-col
title: Troubleshooting issues connecting to your server
categories: Tutorials
lead: ""
legacy: true

permalink: /:collection/:path
---


{% assign product = "common" %}





There are a number of steps you can take to troubleshoot connectivity issues with your server.

1.  Is your server responding to HTTP requests?
	To verify this, please visit the server on its IP address and/or primary DNS name (the c66.me address). These addresses are available on the server details page through your stack. If the request times out, this could mean that your web server is down or unable to respond to requests.
2.  What is the web server returning?
	If your web server is responding to web requests, we will now want to determine what it is responding with by running `curl -I <host_name>` in your terminal, for example:

	```
	$ curl -I cloud66.com
	HTTP/1.1 301 Moved Permanently
	Server: nginx
	Date: Wed, 04 Mar 2015 20:42:08 GMT
	Content-Type: text/html
	Content-Length: 178
	Connection: close
	Location: http://www.cloud66.com/
	X-Powered-By: cloud66
	Set-Cookie: LSW_WEB="LSW_WEB1"; path=/
	```
	The main lines to take note of are the HTTP response and the location - the HTTP response tells us what the web server is returning. These are the most typical HTTP codes:

	 - 200: Successful HTTP request
	 - 301: The page you are visiting is permanently redirecting to another address
	 - 302: The page you are visiting is temporarily redirecting to another address
	 - 400: The server cannot process the given request
	 - 404: The requested resource could not be found
	 - 500: Internal server error
	 - 502: The server is acting as a proxy and received an invalid response from the upstream server
	 - 503: The server is currently unavailable, due to overload or being down for maintenance

	The response in the example above is a 301, which means that the request is being redirected to a different location. In that case, visiting `cloud66.com` is permanently redirecting to `www.cloud66.com`. If we then run `curl -I www.cloud66.com`, we see that it returns a 200 HTTP code, which is our goal.

	By checking the HTTP response of your server, you can determine if there is a broken redirect, or if there is any other issue with the web server itself. If you aren't getting a response from the web server on this command, it may be down. Following the subsequent steps will help determine this.


3.  Is the server running on Cloud 66?
	If the previous two steps have been unfruitful, there may be a more systemic issue with your server. Cloud 66 proactively monitors the status of your servers, and in the case that Cloud 66 cannot connect to your server for 20 minutes, we will display a red icon on your stack page to indicate this. If we cannot connect to the server, you will not be able to deploy the stack.


4.  Can you SSH to the server yourself?

	You can try to SSH to the server yourself by using either the [Cloud 66 toolbelt or manually](http://help.cloud66.com/managing-your-stack/ssh-to-your-server). If you are unable to SSH to the server in question, follow the [troubleshooting steps](http://help.cloud66.com/managing-your-stack/ssh-to-your-server) before moving onto the next step.

	If you can SSH to the server, then the likely issue is with your web server. Run `sudo service nginx restart` on the server to restart the web server, and see if it returns an error message.

5. Can you reboot the server through your cloud provider dashboard?

	If you login to your cloud provider account, you should be able to do a hard-reboot of the server in question. This helps in the case that its memory consumption prevents the server from receiving or responding to any incoming connections.

6. Can you connect to the server from your cloud provider dashboard?

	Some cloud providers allow you to connect to a server manually from their dashboard. For example, on the DigitalOcean server page, you can click Access and then Console Access to open a connection to your droplet.

7. Is the server running in your cloud provider dashboard?
	
	If you login to your cloud provider account, you should be able to verify if the server in question is running or not. For example, AWS will have a green, yellow and red icon for the server to indicate its status. You can either identify the server by its IP address or server name. If your cloud provider is showing an issue with the server, it is likely best to contact them directly to determine the cause.



