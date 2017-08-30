<!-- usedin: [ _legacy_docker/deployment/building-a-manifest-file-v1.md, _maestro/Deployment/building-a-manifest-file-v1.md, _node/deployment/building-a-manifest-file-v1.md, _rails/deployment/building-a-manifest-file-v1.md, _skycap/deployment/building-a-manifest-file-v1.md] -->


## Which environment?

The first level of your manifest file is the **environment** - this allows you to use the same `manifest.yml` for multiple stacks with different environments. Some examples are:

- production
- staging
- development

You can also use your own custom environment names in your manifest file.

