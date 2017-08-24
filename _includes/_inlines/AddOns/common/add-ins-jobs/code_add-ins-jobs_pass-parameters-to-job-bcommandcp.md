<!-- usedin: [ _includes/_inlines/AddOns/common/add-ins-jobs] - layout:code post: add-ins-jobs_pass-parameters-to-job -->

```

job command: cp $1 ${2:-/tmp}
passing arguments in dashboard: "log*.txt" tmp/logs
passing arguments in toolbelt: --arg "log*.txt" -- arg tmp/logs

```
