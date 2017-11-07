<!-- usedin: [ _includes/_inlines/Deployment/common/getting-started-with-manifest-files/getting-started-with-manifest-files_what-is-cors-v1.md] -->

```

production:
    docker:
        configuration:
            nginx:
                cors:
                    origin: '*'
                    methods: 'GET, OPTIONS'

```
