Polls your Skycap application and prints workflow events when they are triggered, effectively running the commands embedded in the workflow on the client machine.  

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx skycap listen --stack <application name> [--log-level <level>] [--interval <time>]
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | Name of the application |
| \--log-level &lt;level&gt; | no | info | The verbosity of logging. Acceptable values: debug, info |
| \--interval &lt;time&gt; | no | 10s | How often to query the queue - must be greater than 5s |
{% include references/toolbelt/boilerplate/example.html %}
$ cx skycap list --stack my-skycap-app --log-level "info" --interval "10s"
{% include references/toolbelt/boilerplate/footer.html %}