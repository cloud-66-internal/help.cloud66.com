<!--  usedin: [ _legacy_docker/deployment/env-vars.md, _maestro/Deployment/env-vars.md, _node/deployment/env-vars.md, _rails/deployment/env-vars.md, _skycap/deployment/env-vars.md] -->


## Assign environment variables for deployment

When you create a new stack, you are given the option to assign your own environment variables after code analysis. Once your code has been analyzed, click _Add environment variables before deployment_ in the _About your app_ field. This will allow you to view the environment variables that Cloud 66 sets for you, and set your own.

You can set your own by either manually entering them, or uploading a file that contain the variables. This file should use the following format:



{%include _inlines/Deployment/common/env-vars/code_env-vars_assign-environment-variables-for-deployment-v.md %}




If your application relies on specific environment variables to complete the deployment process, it is worth adding them before deploying. 

