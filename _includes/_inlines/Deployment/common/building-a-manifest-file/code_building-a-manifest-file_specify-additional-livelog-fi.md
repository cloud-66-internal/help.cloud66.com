<!-- usedin: [ _includes/_inlines/Deployment/common/building-a-manifest-file] - layout:code post: building-a-manifest-file_specify-additional-livelog-files -->

```

production:
    docker:
        configuration:
            custom_log_files: ["/tmp/mylog/*/*.log"]

```
