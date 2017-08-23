<!-- post: -->


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
