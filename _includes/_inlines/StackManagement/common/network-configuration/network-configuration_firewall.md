<!-- usedin: [ _legacy_docker/stack-management/network-configuration.md, _maestro/stack-management/network-configuration.md, _node/stack-management/network-configuration.md, _rails/stack-management/network-configuration.md] -->


## Firewall

The _Firewall_ tab allows you to configure and apply firewall rules per server for your stack. You can open your firewall temporarily in cases when you need temporary access to your servers by clicking the icon at the top right of the page. This will automatically fill with your current IP address, and allow you to choose the duration of the opening and the server port you wish to access. Doing this avoids the dangers of leaving firewall ports open permanently unnecessarily.

By default, Cloud 66 gateway servers (eg. 54.84.166.97) are the only servers allowed SSH (port 22) access to stack servers. The default firewall rules include database and web ports appropriate for the stack deployed but also includes ports 8080 and 8443 as alternative HTTP ports for WebSocket-based applications like [Faye](http://community.cloud66.com/articles/faye-on-cloud-66). Editing and removing the default firewall rules is disabled to secure accessibility to the servers at all times.

