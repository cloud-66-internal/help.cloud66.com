---
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/StackManagement/common/network-configuration/code_network-configuration_configure-network-traffic-.html" ]
 usedin: [ _legacy_docker/stack-management/network-configuration.md, _maestro/stack-management/network-configuration.md, _node/stack-management/network-configuration.md, _rails/stack-management/network-configuration.md] -->


## Configure network traffic

By default, all traffic is allowed to visit your web servers on ports 80, 443, 8080 and 8443. The _Traffic_ tab allows you to control this, and has two sections: _allowed_ traffic sources and _denied_ traffic sources.

For each of these fields, you can enter a single IP address, a comma-separated list, or range. For example:



{%include _inlines/StackManagement/common/network-configuration/code_network-configuration_configure-network-traffic-.md %}




