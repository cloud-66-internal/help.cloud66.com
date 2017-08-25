<!--  usedin: [ _legacy_docker/deployment/building-a-manifest-file.md, _maestro/Deployment/building-a-manifest-file.md, _node/deployment/building-a-manifest-file.md, _rails/deployment/building-a-manifest-file.md, _skycap/deployment/building-a-manifest-file.md] -->


### Docker

- **version**: Specify the version of Docker you want to install.
- **weave_version** (_Optional_): Specify the version of Weave you want to install.
- **vpc_id** (_Optional, AWS EC2 only_): ID of the AWS VPC in which you would like to create your servers.   


 <span style="background-color: #FFFF00"> Note that you must provide [**subnet_id**](#servers) for all servers in your stack.</span>
- **vn_name** (_Optional, AZURE only_): Name of the Virtual Network in which you would like to create your servers.
- **root_disk_size** (_Optional, AWS EC2 and GCE only_): Default size of root disk (in GB) for servers in stack. Default value is 20.
- **root_disk_type** (_Optional, AWS EC2 and GCE only_): Disk type, accepted values being _ssd_ and _magnetic_. Default value is _ssd_.
- **image_keep_count** (_Optional, defaults to 5_): Set the number of old images to save on your servers (besides the running image).
- **nameservers** (_Optional, defaults [ 8.8.8.8, 8.8.4.4 ]): Set DNS servers for your stack.  


  <span style="background-color: #FFFF00">Note that if you specify empty array i.e **[ ]**, it won't add any nameserver to your servers</span>




{%include _inlines/Deployment/common/building-a-manifest-file/code_building-a-manifest-file_docker-oduction.md %}






{%include _inlines/Deployment/common/building-a-manifest-file/code_building-a-manifest-file_docker-oduction-2.md %}




* * *

