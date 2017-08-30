<!-- usedin: [ _includes/_inlines/Deployment/common/building-a-manifest-file/building-a-manifest-file_cors-configuration-v1.md] -->

```

production:
    rails:
        configuration:
            nginx:
                cors:
                    origin: '*'
                    methods: 'GET, OPTIONS'
                    headers: 'Custom-Header, Another-Header'
                    credentials: true

```
