<!-- layout:code post: building-a-manifest-file_docker -->

```

production:
    docker:
        configuration:
            version: 1.7.0
            weave_version: 1.0.3
            vpc_id: vpc-64872001
            root_disk_size: 100
            root_disk_type: ssd
            image_keep_count: 5
            nameservers: ['8.8.8.8', '8.8.4.4']

```
