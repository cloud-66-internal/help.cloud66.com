<!-- usedin: [ _node/deployment/application-settings-node-v1.md] -->


##  Final notes on managing storage

None of the files created on the filesystem after the stack is deployed are persistent. If you need persistency for files, for example some uploaded data, [please use the GlusterFS add-in](https://help.cloud66.works/{{ include.product }}/addins/glusterfs.html) or [change your service.yml](https://help.cloud66.works/legacy_docker/stack-management/service-storage.html) to use the storage of your host.
