---
layout: post
template: one-col
title: Nginx options and variables
categories: references
order: 3
lead: "A detailed guide to the options and variables available for managing Nginx for Cloud 66"
legacy: false
tags: ["customization", "nginx"]
permalink: /:collection/:path:output_ext
---

## About Nginx

Applications deployed with Cloud 66 use [Nginx](http://nginx.com) as their web server, and its configuration is dependent on the resources of your server(s).

### Boolean variables

To ensure correct boolean condition checks within your template, always explicitly compare the variable with `true` or `false` (even if you are checking for true).

**Good syntax:**

*   if passenger != true
*   if passenger != false
*   if passenger == true
*   if passenger == false	

**Bad syntax:**

*   Bad: if passenger
*   Bad: if !passenger


## Default Nginx configuration

The following table outlines the default configuration of Nginx.
<table id="fields" class="table table-bordered table-striped table-small fields"> 
   <thead valign="top"> 
    <tr> 
     <th width="12%">Category</th> 
     <th width="27%">Attribute</th> 
     <th width="61%">Default value</th> 
    </tr> 
   </thead> 
   <tbody> 
    <tr class="header"> 
     <td> <strong>General</strong></td> 
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
     <td> <strong>Events</strong> <span></span> </td> 
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
     <td> <strong>HTTP</strong> <span></span> </td> 
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
     <td> passenger_root </td> 
     <td> [passenger location] </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td> passenger_ruby </td> 
     <td> [app ruby shell] </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td> passenger_ruby </td> 
     <td> nginx </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td> passenger_pool_idle_time </td> 
     <td> 0 </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td> passenger_max_pool_size </td> 
     <td> 15 </td> 
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
     <td> <strong>Server</strong> <span></span> </td> 
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
     <td> rails_env </td> 
     <td> [app environment] </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td> client_max_body_size </td> 
     <td> 50m </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td> root </td> 
     <td> /var/deploy/[app name]/web_head/current/public </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td> passenger_enabled </td> 
     <td> on </td> 
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

The following variables are available for use in your Nginx [CustomConfig](/rails/tutorials/custom-config.html).

<table class="table table-bordered table-striped"> 
   <thead> 
    <tr> 
     <th width="48%">Variable Name</th> 
     <th width="12%">Type</th> 
     <th>Description</th> 
    </tr> 
   </thead> 
   <tbody>
    <tr> 
     <td>allow_ssl</td> 
     <td>boolean</td> 
     <td>Is an SSL Certificate configured on the application?</td> 
    </tr> 
    <tr> 
     <td>app_name</td> 
     <td>string</td> 
     <td>Application name (lowercase)</td> 
    </tr>     
    <tr> 
     <td>blacklist</td> 
     <td>hash</td> 
     <td>List of IPs you are blacklisting</td> 
    </tr> 
    <tr> 
     <td>cors_all_origins</td> 
     <td>boolean</td> 
     <td>CORS allow all origins</td> 
    </tr> 
    <tr> 
     <td>cors_credentials</td> 
     <td>boolean</td> 
     <td>CORS allow credentials</td> 
    </tr> 
    <tr> 
     <td>cors_enabled</td> 
     <td>boolean</td> 
     <td>Is CORS enabled on the application?</td> 
    </tr> 
    <tr> 
     <td>cors_headers</td> 
     <td>string</td> 
     <td>CORS allowed custom headers</td> 
    </tr> 
    <tr> 
     <td>cors_methods</td> 
     <td>string</td> 
     <td>CORS Methods</td> 
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
     <td>environment</td> 
     <td>string</td> 
     <td>Application environment name (lowercase)</td> 
    </tr> 
    <tr> 
     <td>has_ha_proxy_load_balancer</td> 
     <td>boolean</td> 
     <td>Are you using a HAProxy load balancer?</td> 
    </tr>     
    <tr> 
     <td>letsencrypt_primary_address</td> 
     <td>string</td> 
     <td>Sets the address of the host that "owns" the Let's Encrypt certificate. Can then be used with the <code>proxy_pass</code> directive to serve SSL requests via other hosts.</td> 
    </tr>     
    <tr> 
     <td>load_balancer_address</td> 
     <td>string</td> 
     <td>Address of your load balancer</td> 
    </tr> 
     <tr> 
     <td>load_balancer_address</td> 
     <td>string</td> 
     <td>Address of your load balancer</td> 
    </tr> 
    <tr> 
     <td>maintenance_mode_active</td> 
     <td>boolean</td> 
     <td>Is the application in maintenance mode?</td> 
    </tr>   
    <tr> 
     <td>passenger</td> 
     <td>boolean</td> 
     <td>Is nginx running Passenger or a custom web server?</td> 
    </tr> 
    <tr> 
     <td>passenger_enterprise</td> 
     <td>boolean</td> 
     <td>Are you using Passenger enterprise?</td> 
    </tr> 
    <tr> 
     <td>passenger_location</td> 
     <td>string</td> 
     <td>Passenger location (Passenger only)<a name="pool-max"></a></td> 
    </tr> 
    <tr> 
     <td><a href="/rails/how-to-guides/deployment/building-a-manifest-file.html#rails">passenger_pool_max</a></td> 
     <td>integer</td> 
     <td>The maximum number of processes that Passenger will spawn. This value is derived from <code>passenger_process_memory</code> which can be set via the <a href="/rails/how-to-guides/deployment/building-a-manifest-file.html#rails">manifest file</a>. See below for an explanation on <a href="#how-passenger-pool-max-is-calculated">how this is calculated</a>.</td> 
    </tr> 
    <tr> 
     <td>passenger_supports_cgi_param</td> 
     <td>boolean</td> 
     <td>Does the current Passenger version support CGI param?</td> 
    </tr> 
    <tr> 
     <td>perfect_forward_secrecy</td> 
     <td>boolean</td> 
     <td>Is perfect forward secrecy enabled on the application?</td> 
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
     <td>ruby_shell</td> 
     <td>string</td> 
     <td>/var/deploy/ruby_shell</td> 
    </tr> 
    <tr> 
     <td>server_address</td> 
     <td>string</td> 
     <td>Server address (IP or fqdn)</td> 
    </tr> 
    <tr> 
     <td>stack_supports_nginx_tcp_and_udp_reverse_proxy</td> 
     <td>boolean</td> 
     <td>Does your application support TCP and UDP reverse proxy?</td> 
    </tr> 
    <tr> 
     <td>supports_realip_module</td> 
     <td>boolean</td> 
     <td>Does your Nginx instance use the Real IP module?</td> 
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
     <td>use_ruby_shell</td> 
     <td>boolean</td> 
     <td>Used internally</td> 
    </tr>    
    <tr> 
     <td>user_name</td> 
     <td>string</td> 
     <td>User name running the application process</td> 
    </tr> 
    <tr> 
     <td>websocket_support</td> 
     <td>boolean</td> 
     <td>Does this version of Nginx support websocket?</td> 
    </tr>
    <tr> 
     <td>workers</td> 
     <td>integer</td> 
     <td>Number of CPU cores on the server</td> 
    </tr>  
   </tbody> 
  </table> 


### How passenger pool max is calculated

`passenger_pool_max` is a Cloud-66-specific variable that we use to dynamically set a value in Nginx for the native Passenger setting `passenger_max_pool_size`.

We calculate the value for `passenger_pool_max` as follows:

passenger_pool_max = ( server's memory - reserved_server_memory ) / [passenger_process_memory](/rails/how-to-guides/deployment/building-a-manifest-file.html#rails)

...and this is rounded down to the nearest integer. So if your server has 4GB of free RAM and each process uses 600MB the your `passenger_pool_max` will be 6. 

## Nginx worker configuration

Nginx now supports [autodetection of CPU cores](http://nginx.org/en/docs/ngx_core_module.html#worker_processes) (and other system resources) so there is no need to configure your worker processes differently depending on your cloud.