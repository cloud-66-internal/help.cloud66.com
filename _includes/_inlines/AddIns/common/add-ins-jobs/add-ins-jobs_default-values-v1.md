<!--  usedin: [ _legacy_docker/AddIns/add-ins-jobs-v1.md, _maestro/AddIns/add-ins-jobs-v1.md, _node/addins/add-ins-jobs-v1.md, _rails/AddIns/add-ins-jobs-v1.md] -->


### Default values

You can handle default value for the parameter with following notation: `${n:-YOUR_DEFAULT_VALUE}`. This is useful when you have ha job that scheduled and also you need to run it on demand sometimes.

Example below cp file `$1` to `tmp` directory by default



{%include _inlines/AddIns/common/add-ins-jobs/code_add-ins-jobs_default-values-tmp-v1.md  product = include.product %}




