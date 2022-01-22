Runs a Linux `tail` command on the specified server and given log file. You must specify the log file name including the extension. If you don’t specify a path, or specify a relative path, then we will assume `<stack-directory>/current/log` (i.e. the subdirectory und `$STACK_PATH`) as the current directory. You can specify a different (absolute) log path as needed.

This command is only supported on Linux and OS X.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx tail --stack <application name> <server name> | <server ip> | <server role> /optional/log/path/<log filename>
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | The application name |
| &lt;server name&gt; | either/or | — | Name of the server to query |
| &lt;server ip&gt; | either/or | — | IP of the server to query |
| &lt;server role&gt; | either/or | — | Role of the server to query |
| /optional/log/path/&lt;log filename&gt;  | no | — | The log file to query (must include extension) |
{% include references/toolbelt/boilerplate/example.html %}
$ cx tail -s mystack production.log
$ cx tail -s mystack 52.65.34.98 nginx_error.log
$ cx tail -s mystack web /custom/logs/my.log
{% include references/toolbelt/boilerplate/footer.html %}