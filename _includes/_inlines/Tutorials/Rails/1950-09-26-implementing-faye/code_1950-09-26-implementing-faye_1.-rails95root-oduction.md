<!-- usedin: [ _includes/_inlines/Tutorials/Rails/1950-09-26-implementing-faye/1950-09-26-implementing-faye_1.-rails95root.md] -->

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
