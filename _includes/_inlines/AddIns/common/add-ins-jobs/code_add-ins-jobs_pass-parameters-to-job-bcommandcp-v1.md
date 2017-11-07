<!-- usedin: [ _includes/_inlines/AddIns/common/add-ins-jobs/add-ins-jobs_pass-parameters-to-job-v1.md] -->

```
job command: cp $1 ${2:-/tmp}
passing arguments in dashboard: "log*.txt" tmp/logs
passing arguments in toolbelt: --arg "log*.txt" -- arg tmp/logs
```
