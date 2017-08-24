<!-- usedin: [ _includes/_inlines/Deployment/common/getting-started-with-manifest-files] - layout:code post: getting-started-with-manifest-files_what-is-cors? -->

```

production:
    docker:
        configuration:
            nginx:
                cors:
                    origin: '*'
                    methods: 'GET, OPTIONS'

```
