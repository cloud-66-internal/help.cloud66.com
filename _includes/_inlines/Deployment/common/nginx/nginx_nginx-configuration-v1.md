<!-- usedin: [ _legacy_docker/deployment/nginx-v1.md, _maestro/Deployment/nginx-v1.md, _node/deployment/nginx-v1.md, _rails/deployment/nginx-v1.md, _skycap/deployment/nginx-v1.md] -->


## Nginx configuration

The following table outlines the default configuration of Nginx.


<table id="fields" class="table table-bordered table-striped table-small fields"> 
   <thead valign="top"> 
    <tr> 
     <th> Category<br> </th> 
     <th> Attribute </th> 
     <th> Default value </th> 
    </tr> 
   </thead> 
   <tbody> 
    <tr class="header"> 
     <td width="15%"> <strong>General</strong> <span>-</span> </td> 
     <td width="20%"></td> 
     <td width="70%"></td> 
    </tr> 
    <tr> 
     <td></td> 
     <td width="20%"> user </td> 
     <td width="70%"> nginx </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td> worker_processes </td> 
     <td> Dynamically set based on instance size </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td> error_log </td> 
     <td> /var/deploy/[stack_name]/web_head/shared/log/nginx_error.log </td> 
    </tr> 
   </tbody> 
   <tbody> 
    <tr class="header"> 
     <td width="15%"> <strong>Events</strong> <span>-</span> </td> 
     <td></td> 
     <td></td> 
    </tr> 
    <tr> 
     <td></td> 
     <td width="20%"> worker_connections </td> 
     <td> 1024 </td> 
    </tr> 
   </tbody> 
   <tbody> 
    <tr class="header"> 
     <td width="15%"> <strong>HTTP</strong> <span>-</span> </td> 
     <td></td> 
     <td></td> 
    </tr> 
    <tr> 
     <td></td> 
     <td width="20%"> gzip </td> 
     <td> on </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td width="20%"> gzip_min_length </td> 
     <td> 100 </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td width="20%"> gzip_proxied </td> 
     <td> expired no-cache no-store private auth </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td width="20%"> gzip_types </td> 
     <td> text/plain application/xml text/css application/x-javascript text/javascript </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td width="20%"> gzip_disable </td> 
     <td> "MSIE [1-6]\." </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td width="20%"> passenger_root </td> 
     <td> [passenger location] </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td width="20%"> passenger_ruby </td> 
     <td> [stack ruby shell] </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td width="20%"> passenger_ruby </td> 
     <td> nginx </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td width="20%"> passenger_pool_idle_time </td> 
     <td> 0 </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td width="20%"> passenger_max_pool_size </td> 
     <td> 15 </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td width="20%"> ssl_session_cache </td> 
     <td> shared:SSL:10m </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td width="20%"> ssl_session_timeout </td> 
     <td> 10m </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td width="20%"> underscores_in_headers </td> 
     <td> on </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td width="20%"> default_type </td> 
     <td> application/octet-stream </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td width="20%"> client_max_body_size </td> 
     <td> 50m </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td width="20%"> sendfile </td> 
     <td> on </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td width="20%"> server_tokens </td> 
     <td> off </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td width="20%"> keepalive_timeout </td> 
     <td> 65 </td> 
    </tr> 
   </tbody> 
   <tbody> 
    <tr class="header"> 
     <td width="15%"> <strong>Server</strong> <span>-</span> </td> 
     <td></td> 
     <td></td> 
    </tr> 
    <tr> 
     <td></td> 
     <td width="20%"> listen </td> 
     <td> 80 default_server </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td width="20%"> server_name </td> 
     <td> _ or SSL server name </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td width="20%"> rails_env </td> 
     <td> [stack environment] </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td width="20%"> client_max_body_size </td> 
     <td> 50m </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td width="20%"> root </td> 
     <td> /var/deploy/[stack name]/web_head/current/public </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td width="20%"> passenger_enabled </td> 
     <td> on </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td width="20%"> ssl_certificate_key </td> 
     <td> /etc/ssl/localcerts/[ssl cerificate file name].key </td> 
    </tr> 
    <tr> 
     <td></td> 
     <td width="20%"> ssl_certificate </td> 
     <td> /etc/ssl/localcerts/[ssl cerificate file name].crt </td> 
    </tr> 
   </tbody> 
  </table> 
