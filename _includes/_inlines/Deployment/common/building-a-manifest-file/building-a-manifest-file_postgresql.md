<!--  usedin: [ _legacy_docker/deployment/building-a-manifest-file.md, _maestro/Deployment/building-a-manifest-file.md, _node/deployment/building-a-manifest-file.md, _rails/deployment/building-a-manifest-file.md, _skycap/deployment/building-a-manifest-file.md] -->


### PostgreSQL

- **version**: Specify the version of PostgreSQL you want to install (can only be set during stack build).
- **postgis**: Specify whether to include PostGIS (can be added after initial stack build).
- **root_disk_size** (_Optional, AWS EC2 and GCE only_): Default size of root disk (in GB) for servers in stack. Default value is 20.
- **root_disk_type** (_Optional, AWS EC2 and GCE only_): Disk type, accepted values being _ssd_ and _magnetic_. Default value is _ssd_.



{%include _inlines/Deployment/common/building-a-manifest-file/code_building-a-manifest-file_postgresql-oduction.md  product = include.product %}




* * *

