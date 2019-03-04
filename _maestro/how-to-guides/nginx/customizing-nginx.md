---
layout: post
template: one-col
title: Customizing your Nginx configuration
categories: how-to-guides/nginx
order: 1
lead: "How to customize the configuration of the Maestro Nginx proxy"
legacy: false
tags: ["customization"]

permalink: /:collection/:path
---

## Overview

Applications deployed with Maestro use [Nginx](http://nginx.com) as their web and reverse proxy server. You can customize the default configuration of Nginx to suit your needs.


## Customize the Nginx error page

There are two ways for you to create a custom Nginx 50X error page:

1. Using a static page on your own server
    - Make your custom error page (for example `50x.html`) available in your container (for example in `/usr/app`), and simply mount this folder to the host (for example with `/var/containers:/usr/app`). The path used in the next step would then be `/var/containers/50x.html`
    - Customize your Nginx configuration and replace the 50X.html location block with following:
    
        ``
    location = /50x.html
    {
        root /var/containers/;
    }
    ``
2. Using external static page
    - Upload your file to a server which is accessible from your server
    - Customize your Nginx configuration and replace the _50X.html_ location block with the following:
    
        ``
    location = /50x.html
    {
        proxy_pass {url-of-your-custom-page};
    }
    ``


## Customize your Nginx configuration

1. Open the Application Overview from your [Dashboard](https://app.cloud66.com/dashboard)
2. Click on *Configuration files*  in the **Application** panel on the right of the screen.
3. Click on the *NGINX* tab at the top of the main panel 
4. Follow the [CustomConfig instructions](/maestro/tutorials/custom-config.html) to customize the configuration.

Editing and committing your Nginx CustomConfig will perform the following steps on **every web server in your application**, one by one, sequentially:

*   Check your template for Liquid syntax errors
*   Count the number of cores on the server
*   Compile the Nginx configuration based on the information from the server
*   Upload the configuration to the server
*   Reload Nginx

Reloading Nginx does not interrupt the serving of traffic. This process will be stopped if an error is encountered. For example, if you have 3 web servers in your application, if the first server fails to be updated, the process will be halted for the other 2 servers to avoid complete service disruption.

### Warning
<div class="notice notice-warning"><p>A bad configuration may stop your Nginx from functioning, so take extra care when making changes.</p></div>

### Nginx CustomConfig variables

The following variables are available for use in your **Maestro** Nginx CustomConfig.

<table class="table table-bordered table-striped"> 
   <colgroup> 
    <col width="50%"> 
    <col width="15%"> 
    <col width="35%"> 
   </colgroup> 
   <thead> 
    <tr> 
     <th>Variable Name</th> 
     <th>Type</th> 
     <th>Description</th> 
    </tr> 
   </thead> 
   <tbody> 
    <tr> 
     <td>user_name</td> 
     <td>string</td> 
     <td>User name running the application process</td> 
    </tr> 
    <tr> 
     <td>environment</td> 
     <td>string</td> 
     <td>Application environment name (lowercase)</td> 
    </tr> 
    <tr> 
     <td>server_address</td> 
     <td>string</td> 
     <td>Server address (IP or fqdn)</td> 
    </tr> 
    <tr> 
     <td>workers</td> 
     <td>integer</td> 
     <td>Number of CPU cores on the server</td> 
    </tr> 
    <tr> 
     <td>app_name</td> 
     <td>string</td> 
     <td>Application name (lowercase)</td> 
    </tr> 
    <tr> 
     <td>envars</td> 
     <td>hash</td> 
     <td>Hash of all environment variables on the application</td> 
    </tr> 
    <tr> 
     <td>allow_ssl</td> 
     <td>boolean</td> 
     <td>Is an SSL Certificate configured on the application?</td> 
    </tr> 
    <tr> 
     <td>perfect_forward_secrecy</td> 
     <td>boolean</td> 
     <td>Is perfect forward secrecy enabled on the application?</td> 
    </tr> 
    <tr> 
     <td>cors_enabled</td> 
     <td>boolean</td> 
     <td>Is CORS enabled on the application?</td> 
    </tr> 
    <tr> 
     <td>cors_origin</td> 
     <td>string</td> 
     <td>CORS Origins string</td> 
    </tr> 
    <tr> 
     <td>cors_origins</td> 
     <td>array</td> 
     <td>List of CORS origins</td> 
    </tr> 
    <tr> 
     <td>cors_all_origins</td> 
     <td>boolean</td> 
     <td>CORS allow all origins</td> 
    </tr> 
    <tr> 
     <td>cors_methods</td> 
     <td>string</td> 
     <td>CORS Methods</td> 
    </tr> 
    <tr> 
     <td>cors_headers</td> 
     <td>string</td> 
     <td>CORS allowed custom headers</td> 
    </tr> 
    <tr> 
     <td>cors_credentials</td> 
     <td>boolean</td> 
     <td>CORS allow credentials</td> 
    </tr> 
    <tr> 
     <td>has_ha_proxy_load_balancer</td> 
     <td>boolean</td> 
     <td>Are you using a HAProxy load balancer?</td> 
    </tr> 
    <tr> 
     <td>load_balancer_address</td> 
     <td>string</td> 
     <td>Address of your load balancer</td> 
    </tr> 
    <tr> 
     <td>red_http_to_https</td> 
     <td>boolean</td> 
     <td>Are you redirecting HTTP to HTTPS?</td> 
    </tr> 
    <tr> 
     <td>red_www</td> 
     <td>boolean</td> 
     <td>Are you redirecting traffic to www?</td> 
    </tr> 
    <tr> 
     <td>blacklist</td> 
     <td>hash</td> 
     <td>List of IPs you are blacklisting</td> 
    </tr> 
    <tr> 
     <td>supports_realip_module</td> 
     <td>boolean</td> 
     <td>Does your Nginx instance use the Real IP module?</td> 
    </tr> 
    <tr> 
     <td>stack_supports_nginx_tcp_and_udp_reverse_proxy</td> 
     <td>boolean</td> 
     <td>Does your application support TCP and UDP reverse proxy?</td> 
    </tr> 
    <tr> 
     <td>supports_tcp_proxy</td> 
     <td>boolean</td> 
     <td>Does your NGINX version support TCP reverse proxy and load balancing?</td> 
    </tr> 
    <tr> 
     <td>supports_udp_proxy</td> 
     <td>boolean</td> 
     <td>Does your NGINX version support UDP reverse proxy and load balancing?</td> 
    </tr> 
    <tr> 
     <td>has_load_balancer</td> 
     <td>boolean</td> 
     <td>Are you using a load balancer?</td> 
    </tr> 
    <tr> 
     <td>service_containers</td> 
     <td>array</td> 
     <td>Contains all services (with <i>service_name</i> and <i>upstreams</i> information)</td> 
    </tr> 
    <tr> 
     <td>service_name</td> 
     <td>string</td> 
     <td>Part of the <i>service_containers</i> hiearchy, containing the name of a specific service</td> 
    </tr> 
    <tr> 
     <td>upstreams</td> 
     <td>array</td> 
     <td>Part of the <i>service_containers</i> hiearchy, containing an upstream name, private IPs, traffic matches and port</td> 
    </tr> 
   </tbody> 
  </table> 

  



### Boolean variables

To ensure correct boolean condition checks within your template, always explicitly compare the variable with `true` or `false` (even if you are checking for true).

Good syntax:

*   if passenger != true
*   if passenger != false
*   if passenger == true
*   if passenger == false    

Bad syntax:

*   Bad: if passenger
*   Bad: if !passenger

<table class="table table-bordered table-striped"> 
   <colgroup> 
    <col width="40%"> 
    <col width="20%"> 
    <col width="40%"> 
   </colgroup> 
   <thead> 
    <tr> 
     <th>Variable Name</th> 
     <th>Type</th> 
     <th>Description</th> 
    </tr> 
   </thead> 
   <tbody> 
    <tr> 
     <td>user_name</td> 
     <td>string</td> 
     <td>User name running the application process</td> 
    </tr> 
    <tr> 
     <td>environment</td> 
     <td>string</td> 
     <td>Application environment name (lowercase)</td> 
    </tr> 
    <tr> 
     <td>server_address</td> 
     <td>string</td> 
     <td>Server address (IP or fqdn)</td> 
    </tr> 
    <tr> 
     <td>workers</td> 
     <td>integer</td> 
     <td>Number of CPU cores on the server</td> 
    </tr> 
    <tr> 
     <td>app_name</td> 
     <td>string</td> 
     <td>Application name (lowercase)</td> 
    </tr> 
    <tr> 
     <td>deploy_to</td> 
     <td>string</td> 
     <td>Application path on the server</td> 
    </tr> 
    <tr> 
     <td>envars</td> 
     <td>hash</td> 
     <td>Hash of all environment variables on the application</td> 
    </tr> 
    <tr> 
     <td>envars</td> 
     <td>hash</td> 
     <td>Hash of all environment variables on the application</td> 
    </tr> 
     <tr> 
     <td>allow_ssl</td> 
     <td>boolean</td> 
     <td>Is an SSL Certificate configured on the application?</td> 
    </tr> 
    <tr> 
     <td>perfect_forward_secrecy</td> 
     <td>boolean</td> 
     <td>Is perfect forward secrecy enabled on the application?</td> 
    </tr> 
    <tr> 
     <td>cors_enabled</td> 
     <td>boolean</td> 
     <td>Is CORS enabled on the application?</td> 
    </tr> 
    <tr> 
     <td>cors_origin</td> 
     <td>string</td> 
     <td>CORS Origins string</td> 
    </tr> 
    <tr> 
     <td>cors_origins</td> 
     <td>array</td> 
     <td>List of CORS origins</td> 
    </tr> 
    <tr> 
     <td>cors_all_origins</td> 
     <td>boolean</td> 
     <td>CORS allow all origins</td> 
    </tr> 
    <tr> 
     <td>cors_methods</td> 
     <td>string</td> 
     <td>CORS Methods</td> 
    </tr> 
    <tr> 
     <td>cors_headers</td> 
     <td>string</td> 
     <td>CORS allowed custom headers</td> 
    </tr> 
    <tr> 
     <td>cors_credentials</td> 
     <td>boolean</td> 
     <td>CORS allow credentials</td> 
    </tr> 
    <tr> 
     <td>has_ha_proxy_load_balancer</td> 
     <td>boolean</td> 
     <td>Are you using a HAProxy load balancer?</td> 
    </tr> 
    <tr> 
     <td>load_balancer_address</td> 
     <td>string</td> 
     <td>Address of your load balancer</td> 
    </tr> 
    <tr> 
     <td>red_http_to_https</td> 
     <td>boolean</td> 
     <td>Are you redirecting HTTP to HTTPS?</td> 
    </tr> 
    <tr> 
     <td>red_www</td> 
     <td>boolean</td> 
     <td>Are you redirecting traffic to www?</td> 
    </tr> 
    <tr> 
     <td>blacklist</td> 
     <td>hash</td> 
     <td>List of IPs you are blacklisting</td> 
    </tr> 
    <tr> 
     <td>supports_realip_module</td> 
     <td>boolean</td> 
     <td>Does your Nginx instance use the Real IP module?</td> 
    </tr> 
    <tr> 
     <td>has_load_balancer</td> 
     <td>boolean</td> 
     <td>Are you using a load balancer?</td> 
    </tr>  
   </tbody>
  </table>
