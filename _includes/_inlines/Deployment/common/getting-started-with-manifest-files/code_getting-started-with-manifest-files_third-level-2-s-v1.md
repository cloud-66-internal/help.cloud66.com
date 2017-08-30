<!-- usedin: [ _includes/_inlines/Deployment/common/getting-started-with-manifest-files/getting-started-with-manifest-files_third-level-2-server-v1.md] -->

```

production:
    docker:
        servers:
            server:
                unique_name: app                
                region: us-east-1
                size: m3.medium
                vendor: aws
                key_name: Default

```
