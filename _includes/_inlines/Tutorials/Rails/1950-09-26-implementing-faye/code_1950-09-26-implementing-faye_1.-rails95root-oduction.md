
```
production:
    before_rails:
      - source: /.cloud66/files/add_thin_and_faye.sh
        destination: ~/add_thin_and_faye.sh
        target: rails
        execute: true
        sudo: true
        apply_during: build_only
        run_on: all_servers
```
