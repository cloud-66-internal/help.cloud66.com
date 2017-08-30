<!--  usedin: [ _legacy_docker/Tutorials/1900-01-21-docker-troubleshooting-v1.md, _maestro/Tutorials/1900-01-21-docker-troubleshooting-v1.md] -->


## Troubleshooting a container that has started

If your container has started, but isn't outputting the expected results, you can follow these steps to troubleshoot.

1. Use [LiveLogs](http://help.cloud66.com/managing-your-stack/live-logs) to check the log output from your containers.

2. Use the [toolbelt to exec into the given container](http://help.cloud66.com/toolbelt/toolbelt-container-management#container-exec) to troubleshoot:

{%include _inlines/Tutorials/common/1900-01-21-docker-troubleshooting/code_1900-01-21-docker-troubleshooting_troubleshooting-a-co-v1.md  product = include.product %}

This command executes your command within the context of a running container. Once you're inside the container, you'll be able to verify why the server isn't running as expected.
