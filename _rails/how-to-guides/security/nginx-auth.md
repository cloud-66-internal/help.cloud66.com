---
layout: post
template: one-col
title: Enabling basic authentication via Nginx
categories: how-to-guides/security
order: 5
lead: "How to enable Nginx's basic HTTP authentication"
legacy: false
change: true
permalink: /:collection/:path:output_ext
tags: ["nginx"]
---

You can use Cloud 66 [CustomConfig](/{{page.collection}}/tutorials/custom-config.html) to protect your application or parts of it with a username and password based on HTTP basic authentication. Follow the instructions below to accomplish this:

1. We'll use [htpasswd](http://httpd.apache.org/docs/2.2/programs/htpasswd.html) to create your password file - it encrypts it the password with MD5. Install it as follows:

```bash
sudo apt-get install apache2-utils -y
```

2. Once that is installed, we're ready to create a password file. We recommend that you create this file within your repository, which will be deployed to your servers. This command will prompt you to input a password:

```bash
sudo htpasswd -c <directory>.htpasswd <user_name>
```

3. Now we can customize our Nginx configuration. To do this add the following code within the server section(s) of your Nginx configuration: 

```bash
    auth_basic "Restricted";
    	auth_basic_user_file {{ deploy_to }}/current/.htpasswd;
```

Where you put it will depend on which Rack server you are running, and whether or not you are using HTTPS traffic: 

### For Passenger servers

If you're using Passenger (Cloud 66's default server) then you need to find all the blocks that start with `location @passenger` and add the code to those blocks.

### Other Rack servers

If you're using another flavour of Rack server (like Puma), find the block that begins `location /` and contains the `proxy_set_header` directive. 

Once you have the code in the correct block, it will read your password file from your repository directory on the server. Once you save the configuration, it will apply immediately on your server.

For more details please read our [Nginx CustomConfig documentation](/{{page.collection}}/references/nginx.html).
