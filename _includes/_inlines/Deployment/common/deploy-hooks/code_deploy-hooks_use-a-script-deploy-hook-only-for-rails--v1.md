<!-- usedin: [ _includes/_inlines/Deployment/common/deploy-hooks/deploy-hooks_use-a-script-deploy-hook-only-for-rails-v1.md] -->

```
production: # Environment
    after_rails: # Hook point
      - source: /.cloud66/script.sh # Hook type
        destination: /tmp/script.sh
        target: rails # Hook fields ↓
        execute: true
        apply_during: build_only
```
