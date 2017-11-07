<!-- usedin: [ _legacy_docker/Toolbelt/run-v1.md, _maestro/Toolbelt/run-v1.md, _node/toolbelt/run-v1.md, _rails/Toolbelt/run-v1.md] -->


## Run command

This command will execute a command directly on the remote server. It does this by first opening the firewall for SSH from your IP address temporarily (20 minutes), downloads your SSH key if you don't have it, starts a SSH session, executes the command specified and returns its output.

