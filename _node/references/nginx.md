---
layout: post
template: one-col
title: Nginx options and variables
categories: references
lead: "Nginx within the application"
legacy: false
tags: ["customization", "nginx","node"]
order: 90
permalink: /:collection/:path:output_ext
---

## About Nginx

Applications deployed with Cloud 66 use [Nginx](http://nginx.com) as their web server, and its configuration is dependant on the resources of your server(s).

If you need help customizing your Nginx configuration, please read our [how-to guide](/node/how-to-guides/deployment/customizing-nginx.html) on the subject.


## Default Nginx configuration

The following table outlines the default configuration of Nginx.

<table id="fields" class="table table-bordered table-striped table-small fields"> 
   <thead valign="top"> 
    <tr> 
     <th width="12%">Category</th> 
     <th width="26%">Attribute</th> 
     <th width="62%">Default value</th> 
    </tr> 
   </thead> 
   <tbody> 
    
    <tr class="header"> 
     <td><strong>General</strong> </td> 
     <td></td> 
     <td></td> 
    </tr>
    
    <tr> 
     <td></td> 
     <td>user</td> 
     <td>nginx</td> 
    </tr> 
    
    <tr> 
     <td></td> 
     <td>worker_processes</td> 
     <td>Dynamically set based on instance size</td> 
    </tr>
    
    <tr> 
     <td></td> 
     <td>error_log</td> 
     <td>/var/deploy/[stack_name]/web_head/shared/log/nginx_error.log</td> 
    </tr>
    
   </tbody> 
   <tbody> 

    <tr class="header"> 
     <td><strong>Events</strong> </td> 
     <td></td> 
     <td></td> 
    </tr> 

    <tr> 
     <td></td> 
     <td>worker_connections</td> 
     <td>1024</td> 
    </tr> 

   </tbody> 

   <tbody> 

    <tr class="header"> 
     <td><strong>HTTP</strong></td> 
     <td></td> 
     <td></td> 
    </tr> 

    <tr> 
     <td></td> 
     <td>gzip</td> 
     <td>on</td> 
    </tr> 

    <tr> 
     <td></td> 
     <td>gzip_min_length</td> 
     <td>100</td> 
    </tr> 

    <tr> 
     <td></td> 
     <td>gzip_proxied</td> 
     <td>expired no-cache no-store private auth</td> 
    </tr> 

    <tr> 
     <td></td> 
     <td>gzip_types</td> 
     <td>text/plain application/xml text/css application/x-javascript text/javascript</td> 
    </tr> 

    <tr> 
     <td></td> 
     <td>gzip_disable</td> 
     <td>"MSIE [1-6]\."</td> 
    </tr> 
 
    <tr> 
     <td></td> 
     <td>ssl_session_cache</td> 
     <td>shared:SSL:10m</td> 
    </tr> 
 
    <tr> 
     <td></td> 
     <td>ssl_session_timeout</td> 
     <td>10m</td> 
    </tr> 
 
    <tr> 
     <td></td> 
     <td>underscores_in_headers</td> 
     <td>on</td> 
    </tr> 

    <tr> 
     <td></td> 
     <td>default_type</td> 
     <td>application/octet-stream</td> 
    </tr> 

    <tr> 
     <td></td> 
     <td>client_max_body_size</td> 
     <td>50m</td> 
    </tr> 

    <tr> 
     <td></td> 
     <td>sendfile</td> 
     <td>on</td> 
    </tr> 
    <tr> 
     <td></td> 
     <td>server_tokens</td> 
     <td>off</td> 
    </tr> 
    <tr> 
     <td></td> 
     <td>keepalive_timeout</td> 
     <td>65</td> 
    </tr> 
   </tbody> 
   <tbody> 
    <tr class="header"> 
     <td><strong>Server</strong> </td> 
     <td></td> 
     <td></td> 
    </tr> 
    <tr> 
     <td></td> 
     <td>listen</td> 
     <td>80 default_server</td> 
    </tr> 
    <tr> 
     <td></td> 
     <td>server_name</td> 
     <td>_ or SSL server name</td> 
    </tr> 
    <tr>
     <td></td> 
     <td>client_max_body_size</td> 
     <td>50m</td> 
    </tr> 
    <tr> 
     <td></td> 
     <td>root</td> 
     <td>/var/deploy/[application name]/web_head/current/public</td> 
    </tr> 
    <tr> 
     <td></td> 
     <td>ssl_certificate_key</td> 
     <td>/etc/ssl/localcerts/[ssl cerificate file name].key</td> 
    </tr> 
    <tr> 
     <td></td> 
     <td>ssl_certificate</td> 
     <td>/etc/ssl/localcerts/[ssl cerificate file name].crt</td> 
    </tr>
   </tbody> 
</table> 

## Nginx worker configuration

The following table specifies the number of workers configured for your Nginx based on the server resources (CPU cores) on each cloud.

  <table id="fields" class="table table-bordered table-striped table-small fields"> 
     <thead valign="top"> 
      <tr> 
       <th width="20%"> Cloud provider </th> 
       <th width="50%"> Instance type </th> 
       <th width="30%"> Number of Workers </th> 
      </tr> 
     </thead> 
     <tbody> 
      <tr class="header"> 
       <td><strong>AWS</strong> </td> 
       <td></td> 
       <td></td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>t1.micro</td> 
       <td>1</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>m1.small</td> 
       <td>1</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>m1.medium</td> 
       <td>2</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>m1.large</td> 
       <td>2</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>m1.xlarge</td> 
       <td>4</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>m3.medium</td> 
       <td>1</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>m3.large</td> 
       <td>2</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>m3.xlarge</td> 
       <td>4</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>m3.2xlarge</td> 
       <td>8</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>m2.xlarge</td> 
       <td>2</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>m2.2xlarge</td> 
       <td>4</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>m2.4xlarge</td> 
       <td>8</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>c1.medium</td> 
       <td>2</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>c1.xlarge</td> 
       <td>8</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>c3.large</td> 
       <td>2</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>c3.xlarge</td> 
       <td>4</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>c3.2xlarge</td> 
       <td>8</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>c3.4xlarge</td> 
       <td>16</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>c3.8xlarge</td> 
       <td>32</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>cc2.8xlarge</td> 
       <td>88</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>i2.xlarge</td> 
       <td>4</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>i2.2xlarge</td> 
       <td>8</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>i2.4xlarge</td> 
       <td>16</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>i2.8xlarge</td> 
       <td>32</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>cr1.8xlarge</td> 
       <td>88</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>hi1.4xlarge</td> 
       <td>35</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>hs1.8xlarge</td> 
       <td>35</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>cg1.4xlarge</td> 
       <td>33</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>g2.2xlarge</td> 
       <td>8</td> 
      </tr> 
     </tbody> 
     <tbody> 
      <tr class="header"> 
       <td><strong>DigitalOcean</strong> </td> 
       <td></td> 
       <td></td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>512MB - 1 CPU</td> 
       <td>1</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>1GB - 1 CPU</td> 
       <td>1</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>2GB - 2 CPU</td> 
       <td>2</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>4GB - 2 CPU</td> 
       <td>2</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>8GB - 4 CPU</td> 
       <td>4</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>16GB - 8 CPU</td> 
       <td>8</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>32GB - 12 CPU</td> 
       <td>12</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>48GB - 16 CPU</td> 
       <td>16</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>64GB - 20 CPU</td> 
       <td>20</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>96GB - 24 CPU</td> 
       <td>24</td> 
      </tr> 
     </tbody> 
     <tbody> 
      <tr class="header"> 
       <td><strong>GCE</strong> </td> 
       <td></td> 
       <td></td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>n1-standard-1</td> 
       <td>1</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>n1-standard-2</td> 
       <td>2</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>n1-standard-4</td> 
       <td>4</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>n1-standard-8</td> 
       <td>8</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>n1-standard-16</td> 
       <td>16</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>n1-highmem-2</td> 
       <td>2</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>n1-highmem-4</td> 
       <td>4</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>n1-highmem-8</td> 
       <td>8</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>n1-highmem-16</td> 
       <td>16</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>n1-highcpu-2</td> 
       <td>2</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>n1-highcpu-4</td> 
       <td>4</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>n1-highcpu-8</td> 
       <td>8</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>n1-highcpu-16</td> 
       <td>16</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>f1-micro</td> 
       <td>1</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>g1-small</td> 
       <td>1</td> 
      </tr> 
     </tbody> 
     <tbody> 
      <tr class="header"> 
       <td><strong>Linode</strong> </td> 
       <td></td> 
       <td></td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>Linode 1GB</td> 
       <td>1</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>Linode 2GB</td> 
       <td>2</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>Linode 4GB</td> 
       <td>4</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>Linode 8GB</td> 
       <td>6</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>Linode 16GB</td> 
       <td>8</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>Linode 32GB</td> 
       <td>12</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>Linode 48GB</td> 
       <td>16</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>Linode 64GB</td> 
       <td>20</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>Linode 96GB</td> 
       <td>20</td> 
      </tr> 
     </tbody> 
     <tbody> 
      <tr class="header"> 
       <td><strong>Microsoft Azure</strong> </td> 
       <td></td> 
       <td></td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>ExtraSmall</td> 
       <td>1</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>Small</td> 
       <td>1</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>Medium</td> 
       <td>2</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>Large</td> 
       <td>4</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>ExtraLarge</td> 
       <td>8</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>A5</td> 
       <td>2</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>A6</td> 
       <td>4</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>A7</td> 
       <td>8</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>A8</td> 
       <td>8</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>A9</td> 
       <td>16</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>STANDARD_D1</td> 
       <td>1</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>STANDARD_D2</td> 
       <td>2</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>STANDARD_D3</td> 
       <td>4</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>STANDARD_D4</td> 
       <td>8</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>STANDARD_D11</td> 
       <td>2</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>STANDARD_D12</td> 
       <td>4</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>STANDARD_D13</td> 
       <td>8</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>STANDARD_D14</td> 
       <td>16</td> 
      </tr> 
     </tbody> 
     <tbody> 
      <tr class="header"> 
       <td><strong>Rackspace</strong> </td> 
       <td></td> 
       <td></td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>512MB Standard Instance</td> 
       <td>1</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>1GB Standard Instance</td> 
       <td>1</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>2GB Standard Instance</td> 
       <td>2</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>4GB Standard Instance</td> 
       <td>2</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>8GB Standard Instance</td> 
       <td>4</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>15GB Standard Instance</td> 
       <td>6</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>30GB Standard Instance</td> 
       <td>8</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>3.75 GB Compute v1</td> 
       <td>2</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>7.5 GB Compute v1</td> 
       <td>4</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>15 GB Compute v1</td> 
       <td>8</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>30 GB Compute v1</td> 
       <td>16</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>60 GB Compute v1</td> 
       <td>32</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>1 GB General Purpose v1</td> 
       <td>1</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>2 GB General Purpose v1</td> 
       <td>2</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>4 GB General Purpose v1</td> 
       <td>4</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>8 GB General Purpose v1</td> 
       <td>8</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>15 GB I/O v1</td> 
       <td>4</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>30 GB I/O v1</td> 
       <td>8</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>60 GB I/O v1</td> 
       <td>16</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>90 GB I/O v1</td> 
       <td>24</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>120 GB I/O v1</td> 
       <td>32</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>15 GB Memory v1</td> 
       <td>2</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>30 GB Memory v1</td> 
       <td>4</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>60 GB Memory v1</td> 
       <td>8</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>120 GB Memory v1</td> 
       <td>16</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>240 GB Memory v1</td> 
       <td>32</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>1 GB Performance</td> 
       <td>2</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>2 GB Performance</td> 
       <td>2</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>4 GB Performance</td> 
       <td>4</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>8 GB Performance</td> 
       <td>8</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>15 GB Performance</td> 
       <td>4</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>30 GB Performance</td> 
       <td>8</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>60 GB Performance</td> 
       <td>16</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>90 GB Performance</td> 
       <td>24</td> 
      </tr> 
      <tr> 
       <td></td> 
       <td>120 GB Performance</td> 
       <td>32</td> 
      </tr> 
     </tbody> 
    </table> 

### Nginx CustomConfig variables

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
