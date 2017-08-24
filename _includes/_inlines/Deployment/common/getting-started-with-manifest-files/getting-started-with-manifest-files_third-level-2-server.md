---
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/getting-started-with-manifest-files/code_getting-started-with-manifest-files_third-level-2-s.html" ]
 usedin: [ _legacy_docker/deployment/getting-started-with-manifest-files.md, _maestro/Deployment/getting-started-with-manifest-files.md, _node/deployment/getting-started-with-manifest-files.md, _rails/deployment/getting-started-with-manifest-files.md, _skycap/deployment/getting-started-with-manifest-files.md] -->


### Third Level (2): Servers

As well as stack level configurations, manifest files can have settings per server as well. The **servers** section is where those settings are specified. Here is an example to specify the cloud vendor, region, server size and server name for one of your Docker servers. NOTE: `key_name` is optional and is used to select the named vendor cloud key in the case where there are multiple accounts available for the same cloud provider.



{%include _inlines/Deployment/common/getting-started-with-manifest-files/code_getting-started-with-manifest-files_third-level-2-s.md %}



