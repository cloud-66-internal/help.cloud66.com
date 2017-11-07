<!-- usedin: [ _legacy_docker/Toolbelt/tunnel-v1.md, _maestro/Toolbelt/tunnel-v1.md, _node/toolbelt/tunnel-v1.md, _rails/Toolbelt/tunnel-v1.md] -->


## Tunnel command

This command opens an SSH tunnel from your local machine to a remote server on the given ports. It does this by first opening the firewall for SSH from your IP address temporarily (20 minutes), downloads your SSH key if you don't have it and opens an SSH tunnel.

