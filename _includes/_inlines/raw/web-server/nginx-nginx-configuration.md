## Nginx configuration

The following table outlines the default configuration of Nginx.



  

    

      

        Category  

      

      

        Attribute
      

      

        Default value
      

    

  

  

    

      

        **General** 
-

      

      


      


    

    

      


      

        user
      

      

        nginx
      

    

    

      


      

        worker_processes
      

      

        Dynamically set based on instance size
      

    

    

      


      

        error_log
      

      

        /var/deploy/[stack_name]/web_head/shared/log/nginx_error.log
      

    

  

  

    

      

        **Events** 
-

      

      


      


    

    

      


      

        worker_connections
      

      

        1024
      

    

  

  

    

      

        **HTTP** 
-

      

      


      


    

    

      


      

        gzip
      

      

        on
      

    

    

      


      

        gzip_min_length
      

      

        100
      

    

    

      


      

        gzip_proxied
      

      

        expired no-cache no-store private auth
      

    

    

      


      

        gzip_types
      

      

        text/plain application/xml text/css
        application/x-javascript text/javascript
      

    

    

      


      

        gzip_disable
      

      

        "MSIE [1-6]\."
      

    

    

      


      

        passenger_root
      

      

        [passenger location]
      

    

    

      


      

        passenger_ruby
      

      

        [stack ruby shell]
      

    

    

      


      

        passenger_ruby
      

      

        nginx
      

    

    

      


      

        passenger_pool_idle_time
      

      

        0
      

    

    

      


      

        passenger_max_pool_size
      

      

        15
      

    

    

      


      

        ssl_session_cache
      

      

        shared:SSL:10m
      

    

    

      


      

        ssl_session_timeout
      

      

        10m
      

    

    

      


      

        underscores_in_headers
      

      

        on
      

    

    

      


      

        default_type
      

      

        application/octet-stream
      

    

    

      


      

        client_max_body_size
      

      

        50m
      

    

    

      


      

        sendfile
      

      

        on
      

    

    

      


      

        server_tokens
      

      

        off
      

    

    

      


      

        keepalive_timeout
      

      

        65
      

    

  

  

    

      

        **Server** 
-

      

      


      


    

    

      


      

        listen
      

      

        80 default_server
      

    

    

      


      

        server_name
      

      

        _ or SSL server name
      

    

    

      


      

        rails_env
      

      

        [stack environment]
      

    

    

      


      

        client_max_body_size
      

      

        50m
      

    

    

      


      

        root
      

      

        /var/deploy/[stack name]/web_head/current/public
      

    

    

      


      

        passenger_enabled
      

      

        on
      

    

    

      


      

        ssl_certificate_key
      

      

        /etc/ssl/localcerts/[ssl cerificate file name].key
      

    

    

      


      

        ssl_certificate
      

      

        /etc/ssl/localcerts/[ssl cerificate file name].crt
      

    

  




