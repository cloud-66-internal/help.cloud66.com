
## Step 1: Check out your CustomConfig

Check out your [CustomConfig](/{{page.collection}}/tutorials/custom-config-git.html) git and add the file *deploy_hooks.yml* 


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


## Step 3: Commit and redeploy your application

Commit the changes to the CustomConfig git reposity and redeploy your application. 

#### Note
<div class="notice"><p>
If your set WEAVE_SCOPE_TOKEN environment variable, weave scope will connect to Weave Cloud. If not, proceed to Step 4.
</p></div>



## Step 4: Open port 4040

Weavescope will run on port 4040 which is not exposed to the outside world by default. Make sure port 4040 is only accessible by your own IP address. In order to access the UI of Weave Scope you have to enable port 4040 on your [stack firewall](/{{page.collection}}/references/server-ip-addresses.html).

#### Warning
<div class="notice notice-danger"><p>
Don't expose 4040 to the public internet. Weavescopecan control all your running containers and execute commands inside running containers which is a huge security risk.
</p></div>
