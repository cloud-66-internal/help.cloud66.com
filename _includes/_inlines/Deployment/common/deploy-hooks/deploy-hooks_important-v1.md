<!--  usedin: [ _legacy_docker/deployment/deploy-hooks-v1.md, _maestro/Deployment/deploy-hooks-v1.md, _node/deployment/deploy-hooks-v1.md, _rails/deployment/deploy-hooks-v1.md, _skycap/deployment/deploy-hooks-v1.md] -->


### Important

When automating the installation of packages, remember to use the _-y_ flag to answer yes to all prompts.




The example below can be used to run custom rake tasks during server build. If you need to run it more than once, consider using the [rake task add-in](https://help.cloud66.works/rails/addins/jobs/rake-task.html).



{%include _inlines/Deployment/common/deploy-hooks/code_deploy-hooks_important-oduction-v1.md  product = include.product %}




This will run our rake task on one Rails server and only during the initial build. We run this as a last_thing hook because if we ran it earlier the application wouldn't exist on the server and be usable.

