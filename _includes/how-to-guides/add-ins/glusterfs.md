

[GlusterFS](http://www.gluster.org/) is a scalable network file-system, and it's easy to add to your stack as an add-in.

## Why would I need GlusterFS?
Almost all applications have some sort of data storage needs. As your application grows and runs on multiple servers, you will need to be able to share this data storage between your servers. For example, a web application that allows its users to upload images, will need to store those images on a share storage accessible by all servers. 

{% if page.collection == 'legacy_docker' or page.collection == 'maestro' %}
This need is more important when using containers like Docker. This is because even for smaller applications that are powered by a single server, you might have multiple containers. Each one of those containers will require access to a shared storage space.
{% endif %}

GlusterFS is one of the options you have to for a Network Attached Storage (NAS) or shared file-system. Other options include NFS (Linux Network File System) and Ceph as well as many other tools and open source projects.

GlusterFS gives you a shared storage space that is accessible from each server or container on your stack and is resilient to faults with powerful access control features.

## How do I add GlusterFS to my stack?
Adding GlusterFS to your stack is easy. Once you have your stack built, simply click on the Add-Ins button (+ icon) and select GlusterFS. Here you will be asked about the "replica count" which in short is the number of servers that will keep a copy of your data. You can start with 1 which means we will create and setup GlusterFS on 1 server for you. If you choose 2, we will fire up 2 servers and configure GlusterFS to keep 2 copies of your data, one copy on each server for more resiliency. You get the idea!

## How can I use GlusterFS in my application?
Now that you have a share storage service provided by GlusterFS in your stack, you can use it in your application like a normal disk volume. By default, Cloud 66 will create and mount a shared volume on `/mnt/data-store` on every application server of your stack. 

To see how your shared file system works, you can SSH to one of you web servers and run the following commands:

<pre class="prettyprint">
$ cd /mnt/data-store
$ touch hello.txt
</pre>

Now SSH to another web server on your stack and you should be able to see `hello.txt` under `/mnt/data-store`.

{% if page.collection == 'legacy_docker' or page.collection == 'maestro' %}
## What about my containers?
So far we saw how you can create a share disk volume on every server. But what about accessing this share storage from each container? You can [mount](/{{page.collection}}/how-to-guides/deployment/service-storage.html) the `/mnt/data-store` directory into any directory inside your container. This means your code can read and write to `/mnt/data-store` from inside a container without any further changes.

{% endif %}
## Fine grained access control for your data
By default Cloud 66 builds a GlusterFS cluster for your stack, creates a default mount point on it and mounts that onto every application server. This is great to start with and for many workloads.

But what if you need to make sure some services have read/write access to your data and some only readonly access?

This is achieved using the [manifest](/{{page.collection}}/how-to-guides/deployment/building-a-manifest-file.html) file. Using manifest file, you can control the GlusterFS volumes you have as well as grant read/write or readonly access to containers of a specific service. 

Using the manifest file also allows you to choose the servers you would like to have the volumes mounted (like application servers or your database servers).
 
## Accessing your GlusterFS servers
GlusterFS servers are added to a new group called _GlusterFS Cluster_ under your stack. These servers are accessible via the usual GlusterFS tooling (available from [GlusterFS website](http://www.gluster.org/)).

Every server in your stack will have the following 3 environment variables available by default:

- `GLUSTERFS_ADDRESS_INT` The internal IP address of the master volume server in your GlusterFS cluster.
- `GLUSTERFS_ADDRESS_EXT` The external IP address of the master volume server in your GlusterFS cluster.
- `GLUSTERFS_ADDRESS` This environment variable is by default linked to `GLUSTERFS_ADDRESS_INT`. You can change this in your environment variable dashboard.
