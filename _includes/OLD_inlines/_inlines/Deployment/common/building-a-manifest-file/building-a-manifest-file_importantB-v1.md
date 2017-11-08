

<div class="notice notice-important">
Important!

Only a single cloud vendor and region is supported for servers in a stack.
</div>

```
production:
    rails:
      servers:
        server:
            unique_name: app
            vendor: aws
            key_name: Default
            region: us-east-1
            size: m3.medium
            root_disk_size: 100
            root_disk_type: ssd
            subnet_id: subnet-40000000
            availability_zone: us-east-1c
```
