<!-- usedin: [ _legacy_docker/AddOns/haproxy.md, _maestro/AddOns/haproxy.md, _node/addons/haproxy.md, _rails/AddOns/haproxy.md] -->


## Configuring HAProxy for maintenance mode

For **Docker stacks** you can set your HAproxy to show a maintenance page when it cannot connect to the container.

*   Create custom maintenance page
*   Upload to haproxy server using the toolbelt
        ```
        cx upload -s stack_name --server haproxy_server_name maintenance.html
        ```
*    Move the file haproxy directory
    ```
    sudo mv /tmp/maintenance.html /etc/haproxy/maintenance.html
    ```    
*    Configure haproxy to show the maintenance file by adding the below line to the end of the default section
    ```
    errorfile 503 /etc/haproxy/maintenance.html
    ```