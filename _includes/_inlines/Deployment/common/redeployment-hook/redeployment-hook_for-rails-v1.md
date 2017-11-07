<!-- usedin: [ _legacy_docker/deployment/redeployment-hook-v1.md, _maestro/Deployment/redeployment-hook-v1.md, _node/deployment/redeployment-hook-v1.md, _rails/deployment/redeployment-hook-v1.md, _skycap/deployment/redeployment-hook-v1.md] -->


### For Rails/Rack Stacks

All Rails/Rack Stacks are based on a Git repository and branch. Pushing code to the same branch as your stack Git branch will invoke your stack redeployment. If you push code to another branch, nothing will happen - this allows you to push code to your development branch without an automatic redeploy on your production stack for example. If it is available in the payload, the Git Ref of the latest commit will be used for the stack redeployment.




### Note

In the case where the payload of the commit hook does not contain any branch information (Github and Bitbucket payload formats are supported) then the stack will redeploy without attempting to match branch