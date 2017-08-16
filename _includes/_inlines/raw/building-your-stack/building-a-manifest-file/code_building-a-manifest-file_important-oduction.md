<!-- layout:code post: building-a-manifest-file_important -->


production:
    rails:
        configuration:
            ruby&#95;version: 2.2.0
            asset&#95;pipeline&#95;precompile: true
            do&#95;initial&#95;db&#95;schema&#95;load: false
            reserved&#95;server&#95;memory: 0 #default value
            passenger&#95;process&#95;memory: 200 #default value
            locked&#95;passenger&#95;version: 4.0.59
            activeprotect:
                whitelist: 123.123.123.123,234.234.234.234
            vpc_id: vpc-64872001
            root_disk_size: 100
            root_disk_type: ssd
            nameservers: ['8.8.8.8', '8.8.4.4']
