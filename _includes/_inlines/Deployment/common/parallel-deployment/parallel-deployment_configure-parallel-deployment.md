<!--  usedin: [ _legacy_docker/deployment/parallel-deployment.md, _maestro/Deployment/parallel-deployment.md, _node/deployment/parallel-deployment.md, _rails/deployment/parallel-deployment.md, _skycap/deployment/parallel-deployment.md] -->


## Configure parallel deployment

To activate parallel deployments, access your [Stack settings](/toolbelt/toolbelt-settings-command) via [Toolbelt](/toolbelt/toolbelt-introduction) and set `deploy.parallel` to `true`. 



{%include _inlines/Deployment/common/parallel-deployment/code_parallel-deployment_configure-parallel-deployment-cxse.md  product = include.product %}




Once set, any future deployments will be done in parallel. Should you wish to do a one-off deployment in serial, you can do so by clicking _Deploy_ -> _Deploy with options_ and selecting _Deploy in serial_. Similarly, if you have your stack set to deploy in serial, you can perform a one-off deploying in parallel through this menu.

Parallel deployments are activated by default for [Rack-based stacks with a custom web server](/web-server/custom-web-servers) (eg. Unicorn as it supports zero downtime restarts), but not for stacks based on Passenger.
