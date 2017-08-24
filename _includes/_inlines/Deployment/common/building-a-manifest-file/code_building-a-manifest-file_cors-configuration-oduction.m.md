<!-- usedin: [ _includes/_inlines/Deployment/common/building-a-manifest-file] - layout:code post: building-a-manifest-file_cors-configuration -->

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
