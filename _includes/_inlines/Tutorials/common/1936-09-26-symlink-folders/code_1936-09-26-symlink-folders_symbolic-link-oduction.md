<!-- usedin: [ _includes/_inlines/Tutorials/common/1936-09-26-symlink-folders] - layout:code post: 1936-09-26-symlink-folders_symbolic-link -->

```
production:
    after_symlink:
      - source: /.cloud66/my_script.sh
        destination: /tmp/my_script.sh
        target: rails
        execute: true
        sudo: true
        apply_during: all
        run_on: all_servers
```
