<!-- usedin: [ _legacy_docker/deployment/redeployment-hook.md, _maestro/Deployment/redeployment-hook.md, _node/deployment/redeployment-hook.md, _rails/deployment/redeployment-hook.md, _skycap/deployment/redeployment-hook.md] -->


### GitHub Setup

On your stack detail page, click _Stack information_ in the right sidebar and copy the URL provided in the _Redeployment hook_ field. Next, visit your GitHub repository, click _Settings_ in the right sidebar, and then _Webhooks & Services_ in the left sidebar.

In the _Webhooks_ window, click _Add webhook_ and paste the redeployment hook URL into the _Payload URL_ field. When you confirm by clicking _Add webhook_, GitHub will automatically test your hook with a _Ping_ and you should get a green HTTP200 reponse.

