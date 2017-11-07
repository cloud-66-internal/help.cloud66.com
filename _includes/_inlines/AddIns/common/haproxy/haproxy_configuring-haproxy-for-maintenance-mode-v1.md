<!-- usedin: [ _legacy_docker/AddIns/haproxy-v1.md, _maestro/AddIns/haproxy-v1.md, _node/addins/haproxy-v1.md, _rails/AddIns/haproxy-v1.md] -->


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