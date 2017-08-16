---
layout: code
post: 1998-12-08-seeding-db_deploy-hook.md
---


production:
  after&#95;symlink: # Or use after_rails depending on your application
    - source: /.cloud66/dbseed.sh
      destination: /tmp/dbseed.sh
      target: rails
      execute: true
      run&#95;on: single&#95;server
      apply&#95;during: build&#95;only      
