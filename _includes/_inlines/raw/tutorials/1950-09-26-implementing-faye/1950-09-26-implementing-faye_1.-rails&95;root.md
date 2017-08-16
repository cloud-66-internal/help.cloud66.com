<!-- post: -->


#### 1. RAILS&#95;ROOT/.cloud66/deploy&#95;hooks.yml

[Deploy hooks](http://help.cloud66.com/deployment/deploy-hooks) allow you to take action at various points during a build and/or deployment on Cloud 66. This one will run the bash script that we will create in the next step before Rails is installed on your server.



{%include _inlines/1950-09-26-implementing-faye/code_1950-09-26-implementing-faye_1.-rails&95;root-oduction.md %}



If you are adding Faye to an **existing stack**, you should temporarily change the deploy hook `apply&#95;during: build&#95;only` to `apply&#95;during: all`. Failing to do this would not apply the changes to your existing stack - but once you have got it running for the first time you can change it back as you don't need to run the script on every deploy.

