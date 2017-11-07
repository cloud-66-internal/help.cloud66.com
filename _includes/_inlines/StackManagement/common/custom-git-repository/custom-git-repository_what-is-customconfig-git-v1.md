<!-- usedin: [ _legacy_docker/stack-management/custom-git-repository-v1.md, _maestro/stack-management/custom-git-repository-v1.md, _node/stack-management/custom-git-repository-v1.md, _rails/stack-management/custom-git-repository-v1.md, _skycap/stack-management/custom-git-repository-v1.md] -->


## What is CustomConfig git?

CustomConfig git is a private git repository available on every stack in your Cloud 66 account. This git repository is hosted by Cloud 66 and allows you to modify [CustomConfig](https://help.cloud66.works/{{ include.product }}/stack-management/custom-config.html) files for your stack using familiar git commands.

If you are familiar with [CustomConfig](https://help.cloud66.works/{{ include.product }}/stack-management/custom-config.html) you know how it can be a powerful tool to customise configuration for [nginx](https://help.cloud66.works/{{ include.product }}/deployment/nginx.html) or [HAProxy](https://help.cloud66.works/{{ include.product }}/addins/haproxy.html). The easiest way to modify CustomConfig files is through the UI. However if you would like to edit CustomConfig files in your favourite editor or enjoy git merge and flow control features you can use CustomConfig git.

