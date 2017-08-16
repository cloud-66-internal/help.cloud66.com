<!-- layout:code post: getting-started-with-manifest-files_what-is-cors? -->


production:
    docker:
        configuration:
            nginx:
                cors:
                    origin: '*'
                    methods: 'GET, OPTIONS'
