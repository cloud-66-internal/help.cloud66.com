---
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/common/2016-04-13-newrelic-deploy-hooks-docker/code-2016-04-13-newrelic-deploy-hooks.md" ]
 usedin: [ _legacy_docker/Tutorials/2016-04-13-newrelic-deploy-hooks-docker.md, _maestro/Tutorials/2016-04-13-newrelic-deploy-hooks-docker.md] -->


This will walk you through how to install NewRelic on your Docker stack using deploy hooks.

Create a new docker stack, provide the git information or the docker image and any databases your application might need and go the next step. Now your custom git repository is created, on the side bar on the right you should see:


>**Deploy Hooks**

>   Use custom git repository to add your deploy_hooks.yml: git@git1.cloud66.com:your_git_name_and_id.git

Since Docker stacks do not have a git repository we create one for you to use for your deploy hooks amongst another things.

1.
The first thing to do is to clone this repository on your machine:

2.
Then create a new file in that folder called `deploy_hooks.yml` and add the following:

{%include _inlines/Tutorials/common/2016-04-13-newrelic-deploy-hooks-docker/code-2016-04-13-newrelic-deploy-hooks.md %}

If `apply_during` is set to `all` this will run on every deployment - set this value to `build_only` to only run during stack build.

This deploy hook will run the following code snippet to automate the installation of NewRelic, and requires the `NEWRELIC_KEY` environment variable to be set on a stack. This snippet is open source and can be found [here](https://github.com/cloud66/snippets/blob/master/cloud66/newrelic).

3.
Then add this file to the git repository with:

`git add deploy_hooks.yml`

4.
Check that is has been added:

`git status`

5.
And then commit to the repository and push:

`git commit -m 'Deploy hook - initial commit'`

`git push origin master`

6.
Back on Cloud 66 stack creation page click on _Add environment variables_ button on the right and add a new one called `NEWRELIC_KEY` with your key from NewRelic.


When you now deploy your stack the snippet will be the first thing (after after_checkout) that will run on the server and will install everything that is needed.
