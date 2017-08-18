<!-- layout:code post: 1950-09-26-implementing-faye_1.-rails&95;root -->

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
