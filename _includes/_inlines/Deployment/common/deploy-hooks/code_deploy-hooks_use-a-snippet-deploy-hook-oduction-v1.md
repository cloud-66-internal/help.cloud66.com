<!-- usedin: [ _includes/_inlines/Deployment/common/deploy-hooks/deploy-hooks_use-a-snippet-deploy-hook-v1.md] -->

```
production: # Environment
    first_thing: # Hook point
      - snippet: cloud66/node # Hook type
        target: any # Hook fields
        execute: true
```
