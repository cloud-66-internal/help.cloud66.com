
```
production: # Environment
  last_thing: # Hook point
  - command: cd $STACK_BASE/releases/$(ls -1 -t $STACK_BASE/releases/ | head -n1) && npm install > /tmp/npminstall.log
  target: rails # Hook fields ↓
  run_on: all_servers
  apply_during: all
```