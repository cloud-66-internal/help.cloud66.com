<!-- usedin: [ _legacy_docker/deployment/getting-started-with-manifest-files.md, _maestro/Deployment/getting-started-with-manifest-files.md, _node/deployment/getting-started-with-manifest-files.md, _rails/deployment/getting-started-with-manifest-files.md, _skycap/deployment/getting-started-with-manifest-files.md] -->


### First level: Environment

The first level of `manifest.yml` is the environment of your stack. This allows you to use the same `manifest.yml` for multiple stacks with different environments. Some examples are:

- production
- staging
- development

You can also use your own custom environment names in your manifest file.

