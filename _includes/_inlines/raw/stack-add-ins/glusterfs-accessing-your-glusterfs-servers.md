## Accessing your GlusterFS servers
GlusterFS servers are added to a new group called _GlusterFS Cluster_ under your stack. These servers are accessible via the usual GlusterFS tooling (available from [GlusterFS website](http://www.gluster.org/)).

Every server in your stack will have the following 3 environment variables available by default:

- `GLUSTERFS_ADDRESS_INT` The internal IP address of the master volume server in your GlusterFS cluster.
- `GLUSTERFS_ADDRESS_EXT` The external IP address of the master volume server in your GlusterFS cluster.
- `GLUSTERFS_ADDRESS` This environment variable is by default linked to `GLUSTERFS_ADDRESS_INT`. You can change this in your environment variable dashboard.
