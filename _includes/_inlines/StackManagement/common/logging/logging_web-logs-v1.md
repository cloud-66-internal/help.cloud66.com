<!--  usedin: [ _legacy_docker/stack-management/logging-v1.md, _maestro/stack-management/logging-v1.md, _node/stack-management/logging-v1.md, _rails/stack-management/logging-v1.md] -->


### Web logs

Web logs are stored in `$STACK_PATH/log`:

*   Web logger: 

{%include _inlines/StackManagement/common/logging/code_logging_web-logs-log-v1.md  product = include.product %}




*   Nginx error log: 

{%include _inlines/StackManagement/common/logging/code_logging_web-logs-log-2-v1.md  product = include.product %}



{% if include.product == "rails" %}
If you are using a [custom web server](https://help.cloud66.works/{{ include.product }}/deployment/custom-web-servers.html), such as [Unicorn](https://help.cloud66.works/{{ include.product }}/deployment/rack-webservers/unicorn-rack-server.html), you can find your web server bluepill logs in `/tmp/web_server_bluepill.log`.
{% endif %}
