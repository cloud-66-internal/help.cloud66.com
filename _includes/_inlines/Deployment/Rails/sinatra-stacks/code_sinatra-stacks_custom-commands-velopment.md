<!-- layout:code post: sinatra-stacks_custom-commands -->

```
development:
    sinatra:
        configuration:
            custom_build_command: rake db:seed
            custom_deploy_command: rake db:migrate
```
