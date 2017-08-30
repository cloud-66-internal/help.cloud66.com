<!--  usedin: [ _legacy_docker/deployment/registered-servers-v1.md, _maestro/Deployment/registered-servers-v1.md, _node/deployment/registered-servers-v1.md, _rails/deployment/registered-servers-v1.md, _skycap/deployment/registered-servers-v1.md] -->


### Cloud 66 Toolbelt

You can run the command below to register your servers using the [toolbelt](http://help.cloud66.com/toolbelt/toolbelt-introduction):



{%include _inlines/Deployment/common/registered-servers/code_registered-servers_cloud-66-toolbelt-cxregisters-v1.md  product = include.product %}




To register a single server, use the `server` flag with the IP address, and to bulk register, provide a text file with the `file` flag with one IP address per line.

To add tags to the registered servers, use the `tags` option:



{%include _inlines/Deployment/common/registered-servers/code_registered-servers_cloud-66-toolbelt-cxregisters-2-v1.md  product = include.product %}




