---
post: 
---

### Nginx CustomConfig variables

The following variables are available for use in your **Docker stack** Nginx CustomConfig.



  

    

    

    

  

  

    

      
Variable Name

      
Type

      
Description

    

  

  

    

      
user_name

      
string

      
User name running the application process

    

    

      
environment

      
string

      
Stack environment name (lowercase)

    

    

      
server_address

      
string

      
Server address (IP or fqdn)

    

    

      
workers

      
integer

      
Number of CPU cores on the server

    

    

      
app_name

      
string

      
Stack name (lowercase)

    

    

      
envars

      
hash

      
Hash of all environment variables on the stack

    

    

      
allow_ssl

      
boolean

      
Is an SSL Certificate configured on the stack?

    

    

      
perfect_forward_secrecy

      
boolean

      
Is perfect forward secrecy enabled on the stack?

    

    

      
cors_enabled

      
boolean

      
Is CORS enabled on the stack?

    

    

      
cors_origin

      
string

      
CORS Origins string

    

    

      
cors_origins

      
array

      
List of CORS origins

    

    

      
cors_all_origins

      
boolean

      
CORS allow all origins

    

    

      
cors_methods

      
string

      
CORS Methods

    

    

      
cors_headers

      
string

      
CORS allowed custom headers

    

    

      
cors_credentials

      
boolean

      
CORS allow credentials

    

    

      
has_ha_proxy_load_balancer

      
boolean

      
Are you using a HAProxy load balancer?

    
 
    

      
load_balancer_address

      
string

      
Address of your load balancer

    
 
    

      
red_http_to_https

      
boolean

      
Are you redirecting HTTP to HTTPS?

    
  
    

      
red_www

      
boolean

      
Are you redirecting traffic to www?

    
  
    

      
blacklist

      
hash

      
List of IPs you are blacklisting

    
  
    

      
supports_realip_module

      
boolean

      
Does your Nginx instance use the Real IP module?

    
  
    

      
stack_supports_nginx_tcp_and_udp_reverse_proxy

      
boolean

      
Does your stack support TCP and UDP reverse proxy?

    

    

      
supports_tcp_proxy

      
boolean

      
Does your NGINX version support TCP reverse proxy and load balancing?

    

    

      
supports_udp_proxy

      
boolean

      
Does your NGINX version support UDP reverse proxy and load balancing?

    

    

      
has_load_balancer

      
boolean

      
Are you using a load balancer?

    
      
    

      
service_containers

      
array

      
Contains all services (with _service_name_ and _upstreams_ information)

    
     
    

      
service_name

      
string

      
Part of the _service_containers_ hiearchy, containing the name of a specific service

    
            
    

      
upstreams

      
array

      
Part of the _service_containers_ hiearchy, containing an upstream name, private IPs, traffic matches and port

    
                     
  




The following variables are available for use in your **Ruby stack** Nginx CustomConfig.



  

    

    

    

  

  

    

      
Variable Name

      
Type

      
Description

    

  

  

    

      
passenger

      
boolean

      
Is nginx running Passenger or a custom web server?

    

    

      
passenger_supports_cgi_param

      
boolean

      
Does the current Passenger version support CGI param?

    
   
    

      
passenger_enterprise

      
boolean

      
Are you using Passenger enterprise?

    
      
    

      
user_name

      
string

      
User name running the application process

    

    

      
environment

      
string

      
Stack environment name (lowercase)

    

    

      
server_address

      
string

      
Server address (IP or fqdn)

    

    

      
workers

      
integer

      
Number of CPU cores on the server

    

    

      
passenger_pool_max

      
integer

      
Size of the passenger pool (Passenger Only)

    

    

      
use_ruby_shell

      
boolean

      
Used internally

    

    

      
ruby_shell

      
string

      
/var/deploy/ruby_shell

    

    

      
app_name

      
string

      
Stack name (lowercase)

    

    

      
deploy_to

      
string

      
Stack path on the server

    

    

      
envars

      
hash

      
Hash of all environment variables on the stack

    

    

      
envars

      
hash

      
Hash of all environment variables on the stack

    

    

      
passenger_location

      
string

      
Passenger location (Passenger only)

    

    

      
allow_ssl

      
boolean

      
Is an SSL Certificate configured on the stack?

    

    

      
perfect_forward_secrecy

      
boolean

      
Is perfect forward secrecy enabled on the stack?

    

    

      
cors_enabled

      
boolean

      
Is CORS enabled on the stack?

    

    

      
cors_origin

      
string

      
CORS Origins string

    

    

      
cors_origins

      
array

      
List of CORS origins

    

    

      
cors_all_origins

      
boolean

      
CORS allow all origins

    

    

      
cors_methods

      
string

      
CORS Methods

    

    

      
cors_headers

      
string

      
CORS allowed custom headers

    

    

      
cors_credentials

      
boolean

      
CORS allow credentials

    

    

      
has_ha_proxy_load_balancer

      
boolean

      
Are you using a HAProxy load balancer?

    
 
    

      
load_balancer_address

      
string

      
Address of your load balancer

    
 
    

      
red_http_to_https

      
boolean

      
Are you redirecting HTTP to HTTPS?

    
  
    

      
red_www

      
boolean

      
Are you redirecting traffic to www?

    
  
    

      
blacklist

      
hash

      
List of IPs you are blacklisting

    
  
    

      
supports_realip_module

      
boolean

      
Does your Nginx instance use the Real IP module?

    
  
    

      
has_load_balancer

      
boolean

      
Are you using a load balancer?

    
 



