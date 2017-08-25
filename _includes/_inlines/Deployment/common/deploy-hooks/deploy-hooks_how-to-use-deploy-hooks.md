<!--  usedin: [ _legacy_docker/deployment/deploy-hooks.md, _maestro/Deployment/deploy-hooks.md, _node/deployment/deploy-hooks.md, _rails/deployment/deploy-hooks.md, _skycap/deployment/deploy-hooks.md] -->


# How to use deploy hooks

To make use of deploy hooks, your stack should have a file called _deploy_hooks.yml_.

For **Rails/Rack** stacks this file should be present within a folder named _.cloud66_, which is in turn located in the root of your source code.



{%include _inlines/Deployment/common/deploy-hooks/code_deploy-hooks_how-to-use-deploy-hooks-clouddeplo.md  product = include.product %}




For **Docker stacks** this file should be pushed into [CustomConfig git](http://help.cloud66.com/managing-your-stack/customconfig-git) Repository of the stack. This repository will be created after the stack is analysed, so you can push your deploy hooks before deployment started.

This file should be YAML formatted, and you can use a service like [YAMLlint](http://yamllint.com/) to validate it.

Creating a deploy hook from scratch consists of a number of steps:  

1.  Choose your environment - eg. example _production_, _development_, _staging_ and so on.
2.  Choose your hook point - eg. _first_thing_, _after_rails_ and so on.
3.  Choose your deploy hook type - eg. _snippet_, _command_ or _script_.
4.  Select any additional hook fields you require

Automating deploy hooks can sometimes be tricky. To avoid issues, it's good practice to run each of your commands manually to see that they complete successfully. If a specific command doesn't show any output, you can use the `echo $?` command after issuing your command to see its exit code. If it returns a _zero_, your command was successful, whereas a _one_ means it has failed.

