<!--  usedin: [ _rails/Tutorials/1950-09-26-implementing-faye-v1.md] -->


### 1. RAILS_ROOT/.cloud66/deploy_hooks.yml

[Deploy hooks](http://help.cloud66.com/deployment/deploy-hooks) allow you to take action at various points during a build and/or deployment on Cloud 66. This one will run the bash script that we will create in the next step before Rails is installed on your server.



{%include _inlines/Tutorials/Rails/1950-09-26-implementing-faye/code_1950-09-26-implementing-faye_1.-rails95root-oduction-v1.md  product = include.product %}




If you are adding Faye to an **existing stack**, you should temporarily change the deploy hook `apply_during: build_only` to `apply_during: all`. Failing to do this would not apply the changes to your existing stack - but once you have got it running for the first time you can change it back as you don't need to run the script on every deploy.

