<!--  usedin: [ _legacy_docker/deployment/getting-started-with-manifest-files.md, _maestro/Deployment/getting-started-with-manifest-files.md, _node/deployment/getting-started-with-manifest-files.md, _rails/deployment/getting-started-with-manifest-files.md, _skycap/deployment/getting-started-with-manifest-files.md] -->


### Third Level (1): Configurations

The third level of the manifest file determines the specific settings for the application type we want to change. As seen in **example 2**, changing CORS settings goes under the **docker** application type and the **configuration** node. 

For example, this is how to set the version of ElasticSearch to `0.90.7`:



{%include _inlines/Deployment/common/getting-started-with-manifest-files/code_getting-started-with-manifest-files_third-level-1-c.md %}




