<!-- layout:code post: deploy-hooks_use-a-snippet-deploy-hook -->


production: # Environment
    first_thing: # Hook point
      - snippet: cloud66/node # Hook type
        target: any # Hook fields
        execute: true
