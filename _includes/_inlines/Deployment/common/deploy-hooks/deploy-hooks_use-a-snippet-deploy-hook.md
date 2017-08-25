<!--  usedin: [ _legacy_docker/deployment/deploy-hooks.md, _maestro/Deployment/deploy-hooks.md, _node/deployment/deploy-hooks.md, _rails/deployment/deploy-hooks.md, _skycap/deployment/deploy-hooks.md] -->


## Use a snippet deploy hook

Below is a bare-bone example of using a snippet with the required fields - it will execute the [Cloud 66 Node snippet](https://raw.githubusercontent.com/cloud66/snippets/master/cloud66/node) as the first thing on all production servers.



{%include _inlines/Deployment/common/deploy-hooks/code_deploy-hooks_use-a-snippet-deploy-hook-oduction.md  product = include.product %}




You can also run several snippets at the same hook point like follows:



{%include _inlines/Deployment/common/deploy-hooks/code_deploy-hooks_use-a-snippet-deploy-hook-oduction-2.md  product = include.product %}




See the available hook points and fields for more ways to customize this.

