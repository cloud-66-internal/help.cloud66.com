
## Step 1: Checkout your CustomConfig

Checkout your [CustomConfig](/{{include.product}}/references/connect-cloud66-to-git-repo.html) git and add the file *deploy_hooks.yml* 


## Step 2: Add the weavescope snippet

Add the following deploy hook to your *deploy_hooks.yml* file.

```
production: # Environment or your choice
  last_thing: # Importent to run the weavescope hook as the last thing during server deployment
    - snippet: cloud66/weave_scope # our weavescope snippet
      target: docker 
      sudo: true 
      execute: true
      run_on: all_servers #make sure weave scope is running on all servers and communicate to each other
```




## Step 3: Commit and redeploy your stack

Commit the changes to the CustomConfig git reposity and redeploy your stack. 
**NOTE:** If your set WEAVE_SCOPE_TOKEN environment variable, weave scope will connect to Weave Cloud. If not. Read step 4.


## Step 4: Open port 4040 to access Weave Scope

Weavescope will run on port 4040 which is not exposed to the outside world by default, which is a good thing. Make sure port 4040 is only accesible by your own IP-address. In order to access the UI of Weave Scope you have to enable port 4040 on your [stack firewall](/{{include.product}}/references/server-ip-addresses.html).

**WARNING!** 
Don't expose 4040 to the whole world to see. With weavescope you can control all your running containers and execute commands inside running containers. Take good care of those powers!

