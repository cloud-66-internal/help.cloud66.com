

### Parameters


|		Parameter 		   	|   Description    |
|---------------------------| ----------------:|
|stack 					   	| Name of your stack |
|e (optional)	 	 			   	| Your stack environment |
|y (optional)		  				   	| Automatically answer yes to any prompts |
|git-ref (optional, non-Docker)	  	   	| Redeploy the specific git reference (branch, tag or hash). Non-Docker stacks only. |
|service (optional, repeatable - docker)   	| Will deploy the specified services from your stack only. Each service can have an optional colon-separated reference. For image based services the reference is taken as an image tag, for git based services the reference is taken as a git reference. Docker stacks only |
|listen (optional)	 | 	Will follow the deployment and log progress output |
