---
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/building-a-manifest-file/code_building-a-manifest-file_mongodb-oduction.html" ]
 usedin: [ _legacy_docker/deployment/building-a-manifest-file.md, _maestro/Deployment/building-a-manifest-file.md, _node/deployment/building-a-manifest-file.md, _rails/deployment/building-a-manifest-file.md, _skycap/deployment/building-a-manifest-file.md] -->


### MongoDB

- **version**: Specify the version of MongoDB you want to install (can only be set during stack build).
- **root_disk_size** (_Optional, AWS EC2 and GCE only_): Default size of root disk (in GB) for servers in stack. Default value is 20.
- **root_disk_type** (_Optional, AWS EC2 and GCE only_): Disk type, accepted values being _ssd_ and _magnetic_. Default value is _ssd_.



{%include _inlines/Deployment/common/building-a-manifest-file/code_building-a-manifest-file_mongodb-oduction.md %}




* * *

