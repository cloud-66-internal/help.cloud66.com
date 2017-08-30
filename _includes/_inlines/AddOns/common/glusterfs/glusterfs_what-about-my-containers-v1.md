<!-- usedin: [ _legacy_docker/AddOns/glusterfs-v1.md, _maestro/AddOns/glusterfs-v1.md, _node/addons/glusterfs-v1.md, _rails/AddOns/glusterfs-v1.md] -->


## What about my containers?
So far we saw how you can create a share disk volume on every server. But what about accessing this share storage from each container? By default, all your containers are started with an automatic mount volume of the same name at `/mnt/data-store`. This means your code can read and write to `/mnt/data-store` from inside a container without any further changes.

You don't need to manually mount your GlusterFS volumes inside your containers.

