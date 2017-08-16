---
layout: code
post: deploy-hooks_important.md
---


production: # Environment
    last_thing: # Hook point
      - command: cd $STACK_PATH &amp;&amp; bundle exec rake dev:setup # Hook type
        target: rails # Hook fields ↓
        run_on: single_server
        apply_during: build_only
