<!--  usedin: [ _legacy_docker/deployment/building-a-manifest-file.md, _maestro/Deployment/building-a-manifest-file.md, _node/deployment/building-a-manifest-file.md, _rails/deployment/building-a-manifest-file.md, _skycap/deployment/building-a-manifest-file.md] -->


## Processes

[Background processes](/deployment/running-background-processes) can be deployed and managed by Cloud 66. Any process in a `Procfile` will be picked up, deployed and monitored by the system.

If you would like more flexibility over the signals used to control the processes, you can use the `procfile_metadata` section. Here is an example:



{%include _inlines/Deployment/common/building-a-manifest-file/code_building-a-manifest-file_processes-oductionp.md  product = include.product %}




In this example, a process called `worker` is stopped using a `TTIN` signal first. After waiting for 120 seconds, if the process is still running, a `TERM` signal will be sent. If it is still running after 5 seconds, it will be killed.

As for `web` or `custom_web` processes, you can specify a `restart_signal` which will be sent to the process serving web. This is useful for web servers that can do "phased" or zero-downtime restarts.

All processes restart during each redeployment of the stack. If you want to avoid this, you can set `restart_on_deploy` to `false`.

Default values for each process type are:

- Web/Custom Web Processes:
  - Stop Signal `web_server_stop_signals`: `QUIT`
  - Restart Signal `restart_signal`: `USR2`
- Non-Web Processes:
  - Stop Signal `stop_sequence`: `QUIT,30,TERM,11,KILL`
  - Restart `restart_on_deploy`: `true`

