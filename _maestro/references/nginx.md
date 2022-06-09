---
layout: post
template: one-col
title: Nginx options and variables
categories: references
lead: "A detailed guide to the options and variables available for managing the Nginx reverse-proxy in Maestro"
legacy: false
tags: ["customization", "nginx","maestro"]
order: 90
permalink: /:collection/:path:output_ext
---

## About Nginx

Applications deployed with Maestro use [Nginx](https://nginx.com) as their web server, and its configuration is dependant on the resources of your server(s). Nginx is a high performance, open source web server used by some of the biggest web services in the world.

## Default Cloud 66 Nginx error page

When there is a problem with your upstream server (ie. a container), requests will be passed to the default Cloud 66 error page. From there, you can visit the problematic server page in Cloud 66 dashboard to troubleshoot. 

You can customise this page by following [this guide](/maestro/how-to-guides/nginx/customizing-nginx.html).

## Default Nginx configuration

The following table outlines the default configuration of Nginx.

<table id="fields" class="table table-bordered table-striped table-small fields"> 
   <colgroup> 
    <col width="15%"> 
    <col width="25%"> 
    <col width="60%"> 
   </colgroup> 
   <thead valign="top"> 
    <tr> 
     <th> Category<br> </th> 
     <th> Attribute </th> 
     <th> Default value </th> 
    </tr> 
   </thead> 
   <tbody> 
    <tr class="header"> 
     <td> <strong>General</strong> </td> 
     <td></td> 
     <td></td> 
    </tr> 
    <tr> 
     <td></td> 
     <td> user </td> 
     <td> nginx </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td> worker_processes </td> 
     <td> Dynamically set based on instance size </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td> error_log </td> 
     <td> /var/deploy/[app_name]/web_head/shared/log/nginx_error.log </td> 
    </tr> 
   </tbody> 
   <tbody> 
    <tr class="header"> 
     <td> <strong>Events</strong> </td> 
     <td></td> 
     <td></td> 
    </tr> 
    <tr> 
     <td></td> 
     <td> worker_connections </td> 
     <td> 1024 </td> 
    </tr> 
   </tbody> 
   <tbody> 
    <tr class="header"> 
     <td> <strong>HTTP</strong> </td> 
     <td></td> 
     <td></td> 
    </tr> 
    <tr> 
     <td></td> 
     <td> gzip </td> 
     <td> on </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td> gzip_min_length </td> 
     <td> 100 </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td> gzip_proxied </td> 
     <td> expired no-cache no-store private auth </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td> gzip_types </td> 
     <td> text/plain application/xml text/css application/x-javascript text/javascript </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td> gzip_disable </td> 
     <td> "MSIE [1-6]\." </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td> ssl_session_cache </td> 
     <td> shared:SSL:10m </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td> ssl_session_timeout </td> 
     <td> 10m </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td> underscores_in_headers </td> 
     <td> on </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td> default_type </td> 
     <td> application/octet-stream </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td> client_max_body_size </td> 
     <td> 50m </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td> sendfile </td> 
     <td> on </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td> server_tokens </td> 
     <td> off </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td> keepalive_timeout </td> 
     <td> 65 </td> 
    </tr> 
   </tbody> 
   <tbody> 
    <tr class="header"> 
     <td> <strong>Server</strong> </td> 
     <td></td> 
     <td></td> 
    </tr> 
    <tr> 
     <td></td> 
     <td> listen </td> 
     <td> 80 default_server </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td> server_name </td> 
     <td> _ or SSL server name </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td> client_max_body_size </td> 
     <td> 50m </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td> root </td> 
     <td> /var/deploy/[application name]/web_head/current/public </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td> ssl_certificate_key </td> 
     <td> /etc/ssl/localcerts/[ssl cerificate file name].key </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td> ssl_certificate </td> 
     <td> /etc/ssl/localcerts/[ssl cerificate file name].crt </td> 
    </tr> 
   </tbody> 
  </table> 

## Nginx CustomConfig variables

The following variables are available for use in your Nginx CustomConfig.

<table class="table table-bordered table-striped"> 
   <thead> 
    <tr> 
     <th width="50%">Variable Name</th> 
     <th width="15%">Type</th> 
     <th width="35%">Description</th> 
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
     <td>Is an SSL Certificate configured for the application?</td> 
    </tr> 
    <tr> 
     <td>perfect_forward_secrecy</td> 
     <td>boolean</td> 
     <td>Is perfect forward secrecy enabled for the application?</td> 
    </tr> 
    <tr> 
     <td>cors_enabled</td> 
     <td>boolean</td> 
     <td>Is CORS enabled for the application?</td> 
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

*   if cors_enabled != true
*   if cors_enabled != false
*   if cors_enabled == true
*   if cors_enabled == false	

Bad syntax:

*   Bad: if cors_enabled
*   Bad: if !cors_enabled

<table class="table table-bordered table-striped"> 
   <thead> 
    <tr> 
     <th width="32%">Variable Name</th> 
     <th width="15%">Type</th> 
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
     <td>Stack environment name (lowercase)</td> 
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
     <td>Stack path on the server</td> 
    </tr> 
    <tr> 
     <td>envars</td> 
     <td>hash</td> 
     <td>Hash of all environment variables on the stack</td> 
    </tr> 
    <tr> 
     <td>envars</td> 
     <td>hash</td> 
     <td>Hash of all environment variables on the stack</td> 
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


## Nginx worker configuration

Nginx now supports [autodetection of CPU cores](https://nginx.org/en/docs/ngx_core_module.html#worker_processes) (and other system resources) so there is no need to configure your worker processes differently depending on your cloud.
