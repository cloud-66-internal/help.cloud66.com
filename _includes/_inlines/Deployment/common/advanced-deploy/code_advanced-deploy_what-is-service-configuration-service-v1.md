<!-- usedin: [ _includes/_inlines/GettingStarted/common/advanced-deploy/advanced-deploy_what-is-service-configuration-v1.md] -->

```
---
services:
  web:
    git_url: http://github.com/cloud66-samples/rails-4.1-mysql.git
    git_branch: master
    command: bundle exec rails server -b 0.0.0.0 -e _env:RAILS_ENV
    build_command: /bin/sh -c "RAILS_ENV=_env:RAILS_ENV bundle exec rake db:schema:load"
    deploy_command: /bin/sh -c "RAILS_ENV=_env:RAILS_ENV bundle exec rake db:migrate"
    ports:
    - container: 3000
      http: 80
      https: 443
    env_vars:
      RAILS_ENV: production
      RACK_ENV: production  
databases:
- mysql
```
