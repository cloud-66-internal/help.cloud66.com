### For Rails/Rack Stacks

All Rails/Rack Stacks are based on a Git repository and branch. Pushing code to the same branch as your stack Git branch will invoke your stack redeployment. If you push code to another branch, nothing will happen - this allows you to push code to your development branch without an automatic redeploy on your production stack for example. If it is available in the payload, the Git Ref of the latest commit will be used for the stack redeployment.




