

### Deployment hooks

You can use [deploy hooks](http://help.cloud66.com/deployment/deploy-hooks) to execute your rake task at any point of your deployment.

Simply add a bash script to your stack that contains the rake task: for example, create the file `/.cloud66/scripts/rake_task.sh` as below:



{%include _inlines/Tutorials/Rails/1993-09-26-running-rake-tasks/code_1993-09-26-running-rake-tasks_deployment-hooks-binbash.md %}




Then, add a deploy_hook to execute the above script on each deploy: create the file `.cloud66/deploy_hooks.yml` as below:



{%include _inlines/Tutorials/Rails/1993-09-26-running-rake-tasks/code_1993-09-26-running-rake-tasks_deployment-hooks-oductio.md %}




