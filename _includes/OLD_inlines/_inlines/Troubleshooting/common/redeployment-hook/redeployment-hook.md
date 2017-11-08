
1. If you get this error: ***{"ok":false,"error":"hook not found"}***
  It means that you are not using POST method, you need to call your [stack's redeployment hook](http://cloud66-help.helpscoutdocs.com/article/11-redeployment-hooks#manual) like below: 

		curl -X POST [your redeployment hook URL]

2. If you get this error: ***{"ok":false,"message":"stack requires authorization to deploy and can therefore not use redeployment hooks"}***
  This means that in order to deploy the stack the deployment request **must be authorized**, however, since the redeployment hook doesn't have any information as to who triggered it, the deployment won't be queued. At the moment there is no solution for this other than removing the authorization from the stack.
