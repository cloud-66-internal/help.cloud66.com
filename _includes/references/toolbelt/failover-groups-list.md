Lists the Failover Groups for a Cloud 66 account. Info includes the Failover Group ID, address, attached applications and current active application.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx failover-groups list [--output <view>]
{% include references/toolbelt/boilerplate/args.html %}
| Arguments | Required? | Default | Description |
| --- | --- | --- | --- |
| --output, -o \<view\> | no | standard | Tailor the output view (standard or wide) |
{% include references/toolbelt/boilerplate/example.html %}
$ cx failover-groups list -o wide
{% include references/toolbelt/boilerplate/footer.html %}