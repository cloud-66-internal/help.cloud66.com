<!-- usedin: [ _includes/_inlines/Tutorials/common/2016-04-13-newrelic-deploy-hooks-docker] - layout:code post: 2016-04-07-logs-for-containers_if-you-are-confused-why-you- -->

```
production:
  first_thing:
    - snippet: cloud66/newrelic
      target: any
      sudo: true
      execute: true
      apply_during: all
```
