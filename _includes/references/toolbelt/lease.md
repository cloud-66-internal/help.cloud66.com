This will open the firewall of the given server for a limited time. 'Time to open' is in minutes. By default the firewall closes after 20 minutes. The maximum time to open is 240 minutes.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx lease --stack <application name> --port <port to open> [--from <from IP>] --tto <lease time>
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | Full or partial name of the application |
| \--from, -f &lt;from IP&gt; | no | automatically uses your current IP | IP address for the source of traffic. Uses your current IP if not provided. |
| \--port, -p &lt;port to open&gt; | yes | 22 | The port to open on the server |
| \--tto, -t &lt;lease time&gt; | yes | 20 | The number of minutes the lease will last (the maximum is 240) |
{% include references/toolbelt/boilerplate/example.html %}
$ cx lease -s mystack
$ cx lease -s mystack -t 120 -p 3306
$ cx lease -s mystack -p 3306 -f 52.65.34.98
{% include references/toolbelt/boilerplate/footer.html %}