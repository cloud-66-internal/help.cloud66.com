---
layout: code
post: getting-started-with-manifest-files_what-is-cors?.md
---


production:
    docker:
        configuration:
            nginx:
                cors:
                    origin: '*'
                    methods: 'GET, OPTIONS'
