<!-- usedin: [ _includes/_inlines/Deployment/Rails/padrino-stacks/padrino-stacks_custom-commands.md] -->

```
$ cx settings set -s my_stack custom.build.command "rake db:seed"

$ cx settings set -s my_stack custom.deploy.command "rake db:migrate"
```
