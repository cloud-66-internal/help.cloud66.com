<!-- usedin: [ _legacy_docker/AddIns/glusterfs-v1.md, _maestro/AddIns/glusterfs-v1.md, _node/addins/glusterfs-v1.md, _rails/AddIns/glusterfs-v1.md] -->


## How do I add GlusterFS to my stack?
Adding GlusterFS to your stack is easy. Once you have your stack built, simply click on the Add-Ins button (+ icon) and select GlusterFS. Here you will be asked about the "replica count" which in short is the number of servers that will keep a copy of your data. You can start with 1 which means we will create and setup GlusterFS on 1 server for you. If you choose 2, we will fire up 2 servers and configure GlusterFS to keep 2 copies of your data, one copy on each server for more resiliency. You get the idea!

