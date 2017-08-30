<!-- usedin: [ _general/Introduction/pci-compliance-v1.md] -->


### What firewalls are installed on servers deployed by Cloud 66?
Cloud 66 deploys [iptable](http://en.wikipedia.org/wiki/Iptables) based firewall protection on all servers it provisions. Those firewalls are configured to allow public internet traffic only if needed (ports 80, 443, 8080 and 8443 are open for web servers). Other ports, including SSH ports are closed by default to the public traffic and private traffic within the hosted data center network traffic.

