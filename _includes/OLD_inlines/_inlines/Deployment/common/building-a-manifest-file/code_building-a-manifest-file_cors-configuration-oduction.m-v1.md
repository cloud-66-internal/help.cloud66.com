

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
