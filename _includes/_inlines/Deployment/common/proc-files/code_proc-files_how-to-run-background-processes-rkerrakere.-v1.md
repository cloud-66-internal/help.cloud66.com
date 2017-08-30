<!-- usedin: [ _includes/_inlines/Deployment/common/proc-files/proc-files_how-to-run-background-processes-v1.md] -->

```

worker: rake resque:work QUEUE=*
scheduler: rake resque:scheduler

```
