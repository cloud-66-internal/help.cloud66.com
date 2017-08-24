<!-- usedin: [ _includes/_inlines/GettingStarted/common/advanced-deploy/advanced-deploy_what-is-a-manifest-file.md] -->

```

production:
    docker:
        configuration:
          version: 1.12.6
        servers:
            server:
                unique_name: dockernodea                
                region: us-east-1
                size: m3.medium
                vendor: aws
                key_name: Default

```
