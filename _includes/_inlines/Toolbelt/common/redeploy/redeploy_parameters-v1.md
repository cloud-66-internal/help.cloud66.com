<!-- usedin: [ _legacy_docker/Toolbelt/redeploy-v1.md, _maestro/Toolbelt/redeploy-v1.md, _node/toolbelt/redeploy-v1.md, _rails/Toolbelt/redeploy-v1.md] -->


### Parameters


|		Parameter 		   |   Description    |
|--------------------------| ----------------:|
|stack 					   |		Name of your stack|
|e  (optional)   | 	Your stack environment|
|y (optional)	   |Automatically answer yes to any prompts|
|git-ref (optional, non-Docker)  |  Redeploy the specific git reference (branch, tag or hash). Non-Docker stacks only. |
|service (optional, repeatable, Docker only)	   |	Will deploy the specified services from your stack only. Each service can have an optional colon-separated reference which is image tag or git reference for image based services, or for git based services. |
|listen (optional)	   |	Will follow the deployment and log progress output  |
