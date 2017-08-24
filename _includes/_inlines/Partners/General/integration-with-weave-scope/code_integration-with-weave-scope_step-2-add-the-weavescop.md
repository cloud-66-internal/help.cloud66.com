<!-- usedin: [ _includes/_inlines/Partners/General/integration-with-weave-scope/integration-with-weave-scope_step-2-add-the-weavescope-sni.md] -->

```
production: # Environment or your choice
  last_thing: # Importent to run the weavescope hook as the last thing during server deployment
    - snippet: cloud66/weave_scope # our weavescope snippet
      target: docker 
      sudo: true 
      execute: true
      run_on: all_servers #make sure weave scope is running on all servers and communicate to each other
```
