<!-- post: -->


### Default values

You can handle default value for the parameter with following notation: `${n:-YOUR_DEFAULT_VALUE}`. This is useful when you have ha job that scheduled and also you need to run it on demand sometimes.

Example below cp file `$1` to `tmp` directory by default



{%include _inlines/AddOns/common/add-ins-jobs/code_add-ins-jobs_default-values-tmp.md %}




