


### GlusterFS

- **version**: Specify the version of GlusterFS you want to install.
- **root_disk_size** (_Optional, AWS EC2 and GCE only_): Default size of root disk (in GB) for servers in stack. Default value is 20.
- **root_disk_type** (_Optional, AWS EC2 and GCE only_): Disk type, accepted values being _ssd_ and _magnetic_. Default value is `ssd`.
- **replica_count** : Number of nodes in _GlusterFS cluster_ which a data will be replicated on it(i.e replica count 2 means your data exist on two nodes). Default value is 1.
- **mount_targets** : List of _Servers_ and _Server Groups_ you need GlusterFS mounted on them. You can specify the name of the _server_ or _server group_ (i.e rails,docker,mysql,...). You can also use `app` and `db` keywords, `app` is your main app server group (i.e docker, rails, ...)  and `db` is your db server groups (i.e mysql,redis,postgresql,... ). Default value is `app`.
- **volumes**: List of volumes you want in your GlusterFS Cluster.  By default we are creating a volume called `cloud66-vol`  and mounted to `/mnt/data-store`.

Available settings for a volume are:

- **name**: Specify the name of volume.
- **mount**: Specify the mount point of the volume on clients.
- **access_control** (_Optional, Docker stacks only_): Specify the list of docker services which should have a _read only_ or _read/write_ attached volume, mounted to this glusterfs volume. Options are `read` and `write` (which includes read as well)

After you change the volume list, you need to redeploy your stack for new configuration be applied to your stack.




