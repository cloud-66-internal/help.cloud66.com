<!--  usedin: [ _legacy_docker/getting-started/advanced-deploy-v1.md, _node/getting-started/advanced-deploy-v1.md, _rails/getting-started/advanced-deploy-v1.md, _skycap/getting-started/advanced-deploy-v1.md] -->


## What is a manifest file?

A manifest file allows you to be more explicit about your stack composition and control settings that are not usually available through the user interface or Cloud 66 toolbelt. The file describes the setup of the components that run your stack.

[Read more about manifest file here.](https://help.cloud66.works/{{ include.product }}/deployment/getting-started-with-manifest-files.html)

This is a sample [manifest.yml](https://help.cloud66.works/{{ include.product }}/deployment/getting-started-with-manifest-files.html) to tell Cloud 66 to provision one server for a Docker stack to run your services.

{%include _inlines/Deployment/common/advanced-deploy/code_advanced-deploy_what-is-a-manifest-file-oduction-v1.md  product = include.product %}

