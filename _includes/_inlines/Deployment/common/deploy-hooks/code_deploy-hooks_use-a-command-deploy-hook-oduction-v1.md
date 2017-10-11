<!-- usedin: [ _includes/_inlines/Deployment/common/deploy-hooks/deploy-hooks_use-a-command-deploy-hook-v1.md] -->

```
production: # Environment
    first_thing: # Hook point
      - command: apt-get install curl -y # Hook type
        target: any # Hook fields
        execute: true
      - command: apt-get install ncdu -y # Hook type
        target: any # Hook fields
        execute: true  
```
