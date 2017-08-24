

## Fine grained access control for your data
By default Cloud 66 builds a GlusterFS cluster for your stack, creates a default mount point on it and mounts that onto every application server and container of your stack. This is great to start with and for many workloads.

But what if you need to make sure some services have read/write access to your data and some only readonly access?

This is achieved using the [manifest](/building-your-stack/building-your-manifest-file) file. Using manifest file, you can control the GlusterFS volumes you have as well as grant read/write or readonly access to containers of a specific service. 

Using the manifest file also allows you to choose the servers you would like to have the volumes mounted (like application servers or your database servers).

