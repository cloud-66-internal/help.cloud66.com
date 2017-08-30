<!-- usedin: [ _includes/_inlines/Deployment/Rails/sinatra-stacks/sinatra-stacks_custom-commands-v1.md] -->

```
development:
    sinatra:
        configuration:
            custom_build_command: rake db:seed
            custom_deploy_command: rake db:migrate
```
