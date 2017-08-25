<!--  usedin: [ _legacy_docker/AddOns/add-ins-jobs.md, _maestro/AddOns/add-ins-jobs.md, _node/addons/add-ins-jobs.md, _rails/AddOns/add-ins-jobs.md] -->


### Default values

You can handle default value for the parameter with following notation: `${n:-YOUR_DEFAULT_VALUE}`. This is useful when you have ha job that scheduled and also you need to run it on demand sometimes.

Example below cp file `$1` to `tmp` directory by default



{%include _inlines/AddOns/common/add-ins-jobs/code_add-ins-jobs_default-values-tmp.md  product = include.product %}




