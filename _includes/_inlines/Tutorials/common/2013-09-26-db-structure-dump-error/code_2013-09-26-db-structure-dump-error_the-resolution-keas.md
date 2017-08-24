<!-- usedin: [ _includes/_inlines/Tutorials/common/2013-09-26-db-structure-dump-error] - layout:code post: 2013-09-26-db-structure-dump-error_the-resolution -->

```
Rake::Task["db:structure:dump"].clear if ENV['STACK_PATH']
```
