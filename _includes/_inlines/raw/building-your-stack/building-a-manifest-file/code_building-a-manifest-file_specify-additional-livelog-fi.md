---
layout: code
post: building-a-manifest-file_specify-additional-livelog-files.md
---


production:
    docker:
        configuration:
            custom_log_files: ["/tmp/mylog/*/*.log"]
