<!-- post: -->


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
    <col width="20%"> 
    <col width="20%"> 
    <col width="60%"> 
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
     <td>passenger</td> 
     <td>boolean</td> 
     <td>Is nginx running Passenger or a custom web server?</td> 
    </tr> 
    <tr> 
     <td>passenger_supports_cgi_param</td> 
     <td>boolean</td> 
     <td>Does the current Passenger version support CGI param?</td> 
    </tr> 
    <tr> 
     <td>passenger_enterprise</td> 
     <td>boolean</td> 
     <td>Are you using Passenger enterprise?</td> 
    </tr> 
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
     <td>passenger_pool_max</td> 
     <td>integer</td> 
     <td>Size of the passenger pool (Passenger Only)</td> 
    </tr> 
    <tr> 
     <td>use_ruby_shell</td> 
     <td>boolean</td> 
     <td>Used internally</td> 
    </tr> 
    <tr> 
     <td>ruby_shell</td> 
     <td>string</td> 
     <td>/var/deploy/ruby_shell</td> 
    </tr> 
    <tr> 
     <td>app_name</td> 
     <td>string</td> 
     <td>Stack name (lowercase)</td> 
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
     <td>passenger_location</td> 
     <td>string</td> 
     <td>Passenger location (Passenger only)</td> 
    </tr> 
    <tr> 
     <td>allow_ssl</td> 
     <td>boolean</td> 
     <td>Is an SSL Certificate configured on the stack?</td> 
    </tr> 
    <tr> 
     <td>perfect_forward_secrecy</td> 
     <td>boolean</td> 
     <td>Is perfect forward secrecy enabled on the stack?</td> 
    </tr> 
    <tr> 
     <td>cors_enabled</td> 
     <td>boolean</td> 
     <td>Is CORS enabled on the stack?</td> 
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