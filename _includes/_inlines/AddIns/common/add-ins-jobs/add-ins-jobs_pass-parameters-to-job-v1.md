<!--  usedin: [ _legacy_docker/AddIns/add-ins-jobs-v1.md, _maestro/AddIns/add-ins-jobs-v1.md, _node/addins/add-ins-jobs-v1.md, _rails/AddIns/add-ins-jobs-v1.md] -->


### Pass parameters to job

Since job is using positional parameters pass you arguments in order, eg: if you pass `arg1` `arg2`, `$1` would contain `arg1` and `$2` would contain `arg2`

You can also quote your argument if there is a space in the value.



{%include _inlines/AddIns/common/add-ins-jobs/code_add-ins-jobs_pass-parameters-to-job-bcommandcp-v1.md  product = include.product %}



