<!-- usedin: [ _legacy_docker/stack-management/logging.md, _maestro/stack-management/logging.md, _node/stack-management/logging.md, _rails/stack-management/logging.md] -->


### Web logs

Web logs are stored in `$STACK_PATH/log`:

*   Web logger: 

{%include _inlines/StackManagement/common/logging/code_logging_web-logs-log.md %}




*   Nginx error log: 

{%include _inlines/StackManagement/common/logging/code_logging_web-logs-log-2.md %}




If you are using a [custom web server](/web-server/custom-web-servers), such as [Unicorn](/web-server/unicorn-rack-server), you can find your web server bluepill logs in `/tmp/web_server_bluepill.log`.

