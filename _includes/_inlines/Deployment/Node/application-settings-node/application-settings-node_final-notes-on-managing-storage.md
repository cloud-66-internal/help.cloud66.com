<!-- usedin: [ _node/deployment] - post: -->


##  Final notes on managing storage

None of the files created on the filesystem after the stack is deployed are persistent. If you need persistency for files, for example some uploaded data, [please use the GlusterFS add-in](../../node/addons/glusterfs.html) or [change your service.yml](../../node/stackmanagement/service-storage.html) to use the storage of your host.
