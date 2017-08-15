## Why would I need GlusterFS?
Almost all applications have some sort of data storage needs. As your application grows and runs on multiple servers, you will need to be able to share this data storage between your servers. For example, a web application that allows its users to upload images, will need to store those images on a share storage accessible by all servers. 

This need is more important when using containers like Docker. This is because even for smaller applications that are powered by a single server, you might have multiple containers. Each one of those containers will require access to a shared storage space.

GlusterFS is one of the options you have to for a Network Attached Storage (NAS) or shared file-system. Other options include NFS (Linux Network File System) and Ceph as well as many other tools and open source projects.

GlusterFS gives you a shared storage space that is accessible from each server or container on your stack and is resilient to faults with powerful access control features.

