##  Final notes on managing storage

None of the files created on the filesystem after the stack is deployed are persistent. If you need persistency for files, for example some uploaded data, [please use the GlusterFS add-in](/stack-add-ins/glusterfs) or [change your service.yml](/managing-your-stack/service-storage) to use the storage of your host.
