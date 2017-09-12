<!--  usedin: [ _legacy_docker/deployment/building-a-manifest-file-v1.md, _maestro/Deployment/building-a-manifest-file-v1.md, _node/deployment/building-a-manifest-file-v1.md, _rails/deployment/building-a-manifest-file-v1.md, _skycap/deployment/building-a-manifest-file-v1.md] -->


## Which server?

Every application defined in the manifest file must be bound to a server. However, if you'd like configurations to apply to all servers in an application type, you don't need to specify a server type. Servers can be deployed specifically to host that application, be shared between multiple applications (eg. Rails and MySQL on the same server) or be an external server (eg. using an external database).

Here is an example of a server definition:



{%include _inlines/Deployment/common/building-a-manifest-file/code_building-a-manifest-file_which-server-oduction-v1.md  product = include.product %}




These are the parameters that the _server_ section can take:

- **unique_name** (_Required if you are specifying a server type_): A unique name for this server.
- **root_disk_size** (_Optional, AWS EC2 and GCE only_): Default size of root disk (in GB) for servers in stack. Default value is 20.
- **root_disk_type** (_Optional, AWS EC2 and GCE only_): Disk type, accepted values being _ssd_ and _magnetic_. Default value is _ssd_.
- **subnet_id** (_Optional, AWS EC2 only_): ID of the AWS subnet in which you would like to create your servers.
- **vendor** (_Optional, BYOC only_): Cloud vendor to fire the server up on. Valid values: aws, azure, digitalocean, googlecloud, linode, rackspace, and clouda
- **key_name** (_Optional, BYOC only_): Key name of the cloud vendor to fire the server up on. This is used when the account has multiple keys for a given cloud vendor. The default value is `Default` when omitted.
- **region** (_Optional, BYOC only_): [Data center region](http://developers.cloud66.com/#cloud-vendor-instance-regions) to create the server in.
- **size** (_Optional, BYOC only_): [Size of the server instance](http://developers.cloud66.com/#cloud-vendor-instance-names) created.
- **availability_zone** (_Optional, AWS EC2 only_): Availability zone of the server instance in AWS EC2 region.




