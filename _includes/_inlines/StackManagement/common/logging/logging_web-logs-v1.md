<!--  usedin: [ _legacy_docker/stack-management/logging-v1.md, _maestro/stack-management/logging-v1.md, _node/stack-management/logging-v1.md, _rails/stack-management/logging-v1.md] -->


### Web logs

Web logs are stored in `$STACK_PATH/log`:

*   Web logger: 

{%include _inlines/StackManagement/common/logging/code_logging_web-logs-log-v1.md  product = include.product %}




*   Nginx error log: 

{%include _inlines/StackManagement/common/logging/code_logging_web-logs-log-2-v1.md  product = include.product %}




If you are using a [custom web server](/web-server/custom-web-servers), such as [Unicorn](/web-server/unicorn-rack-server), you can find your web server bluepill logs in `/tmp/web_server_bluepill.log`.

