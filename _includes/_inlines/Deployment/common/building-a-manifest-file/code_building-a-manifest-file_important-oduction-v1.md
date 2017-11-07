<!-- layout:code post: building-a-manifest-file_important -->

```
production:
    rails:
        configuration:
            ruby_version: 2.2.0
            asset_pipeline_precompile: true
            do_initial_db_schema_load: false
            reserved_server_memory: 0 #default value
            passenger_process_memory: 200 #default value
            locked_passenger_version: 4.0.59
            activeprotect:
                whitelist: 123.123.123.123,234.234.234.234
            vpc_id: vpc-64872001
            root_disk_size: 100
            root_disk_type: ssd
            nameservers: ['8.8.8.8', '8.8.4.4']
```
