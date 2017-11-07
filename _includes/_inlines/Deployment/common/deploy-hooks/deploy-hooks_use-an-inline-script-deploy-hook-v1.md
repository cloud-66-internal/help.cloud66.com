<!-- usedin: [ _legacy_docker/deployment/deploy-hooks-v1.md, _maestro/Deployment/deploy-hooks-v1.md, _node/deployment/deploy-hooks-v1.md, _rails/deployment/deploy-hooks-v1.md, _skycap/deployment/deploy-hooks-v1.md] -->


## Use an inline script deploy hook
   
The hook below will create an arbitrary log file in /tmp

```
first_thing: # Hook point
 - inline: |
     #!/usr/bin/env bash
     echo "script called!" >> /tmp/inline_script.log
   target: any
   execute: true
   apply_during: all
   owner: root:root
```
