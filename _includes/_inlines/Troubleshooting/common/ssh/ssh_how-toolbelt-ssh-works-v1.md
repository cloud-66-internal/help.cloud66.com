<!-- usedin: [ _legacy_docker/stack-management/ssh-v1.md, _maestro/stack-management/ssh-v1.md, _node/stack-management/ssh-v1.md, _rails/stack-management/ssh-v1.md] -->


## How Toolbelt SSH works

Toolbelt detects your IP and after cloud 66 openning up the firewall to the detected IP, it runs a ssh command to your server. Based on this there are different scenarios that can lead to not being able to ssh to your servers.
