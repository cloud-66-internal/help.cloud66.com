<!-- usedin: [ _legacy_docker/deployment/deploy-hooks.md, _maestro/Deployment/deploy-hooks.md, _node/deployment/deploy-hooks.md, _rails/deployment/deploy-hooks.md, _skycap/deployment/deploy-hooks.md] -->


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
