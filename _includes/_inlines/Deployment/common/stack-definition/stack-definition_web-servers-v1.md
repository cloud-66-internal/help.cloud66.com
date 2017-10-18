<!-- usedin: [ _legacy_docker/getting-started/stack-definition-v1.md, _maestro/getting-started/stack-definition-v1.md, _node/getting-started/stack-definition-v1.md, _rails/getting-started/stack-definition-v1.md] -->


### Web servers

By default, your applications are served with Nginx, and you are also free to [customize this selection](https://help.cloud66.works/rails/deployment/custom-web-servers.html) for Rack-based stacks. You can [scale your web server]({% if include.product == "skycap" %}https://help.cloud66.works/maestro/stack-management/scaling.html{% else %}https://help.cloud66.works/{{ include.product }}/stack-management/scaling.html{% endif %}) with the click of a button.

