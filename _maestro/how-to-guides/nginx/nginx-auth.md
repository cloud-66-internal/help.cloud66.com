---
layout: post
template: one-col
title: Enabling basic authentication via Nginx
categories: how-to-guides/nginx
lead: "How to enable Nginx's basic HTTP authentication"
legacy: false
change: true
permalink: /:collection/:path
tags: ["nginx"]
---
{% assign product = "maestro" %}

You can use Cloud 66 [CustomConfig](/{{page.collection}}/tutorials/custom-config.html) to protect your application or parts of it with a username and password based on HTTP basic authentication.
Follow the instructions below to accomplish this.

1.  We'll use [htpasswd](http://httpd.apache.org/docs/2.2/programs/htpasswd.html) to create your password file - it encrypts it the password with MD5 encryption. Install it: 

		sudo apt-get install apache2-utils -y
2.  Once that is installed, we're ready to create your password file. We recommend that you create this file within your repository, which will be deployed to your servers. This command will prompt you to input a password.

		sudo htpasswd -c <directory>.htpasswd <user_name>
3.  Now we can go ahead and customize the Nginx configuration, which you can see more about in our [Nginx CustomConfig documentation]({% if page.collection == "skycap" %}/maestro/references/nginx.html{%else%}/{{page.collection}}/references/nginx.html{%endif%}).

You will want to add the following code within the server section of your configuration. Where you put it will depend on which Rack server you are running, and whether or not you are using HTTPS traffic.

		auth_basic "Restricted";
		auth_basic_user_file {{ deploy_to }}/current/.htpasswd;
		
This will read your password file from your repository directory on the server. Once you save that configuration, it will apply immediately on your server.

