<!--  usedin: [ _legacy_docker/deployment/parallel-deployment-v1.md, _maestro/Deployment/parallel-deployment-v1.md, _node/deployment/parallel-deployment-v1.md, _rails/deployment/parallel-deployment-v1.md, _skycap/deployment/parallel-deployment-v1.md] -->


## Configure parallel deployment

To activate parallel deployments, access your [Stack settings](https://help.cloud66.works/{{ include.product }}/toolbelt/settings.html) via [Toolbelt](https://help.cloud66.works/{{ include.product }}/toolbelt/introduction.html) and set `deploy.parallel` to `true`. 

{%include _inlines/Deployment/common/parallel-deployment/code_parallel-deployment_configure-parallel-deployment-cxse-v1.md  product = include.product %}

Once set, any future deployments will be done in parallel. Should you wish to do a one-off deployment in serial, you can do so by clicking _Deploy_ -> _Deploy with options_ and selecting _Deploy in serial_. Similarly, if you have your stack set to deploy in serial, you can perform a one-off deploying in parallel through this menu.

Parallel deployments are activated by default for [Rack-based stacks with a custom web server](https://help.cloud66.works/rails/deployment/custom-web-servers.html) (eg. Unicorn as it supports zero downtime restarts), but not for stacks based on Passenger.
