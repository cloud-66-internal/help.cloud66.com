<!-- usedin: [ _includes/_inlines/Deployment/common/building-a-manifest-file] - layout:code post: building-a-manifest-file_docker -->

```

production:
    docker:
        configuration:
            version: 1.12.0
            weave_version: 1.0.3
            vn_name: your_vn_name
            root_disk_size: 100
            root_disk_type: ssd
            image_keep_count: 15

```
