Add a gateway server to a Cloud 66 account.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx gateways add --name <gateway name> --address <gateway address> --username <gateway username> --private-ip <private ip of gateway>
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--name &lt;gateway name&gt; | yes | — | The name of the gateway |
| \--address &lt;gateway address&gt; | yes | — | The IP address of the gateway |
| \--username &lt;gateway username&gt; | yes | — | The username for accessing the gateway |
| \--private-ip &lt;private ip of gateway&gt; | yes | — | The private IP address to use to access the network behind the gateway |
{% include references/toolbelt/boilerplate/example.html %}
$ cx gateways add --name aws_bastion --address 192.168.100.100  --username ec2-user  --private-ip 192.168.1.1
$ cx --org My_Awesome_org gateways add --name aws_bastion --address 1.1.1.1  --username ec2-user  --private-ip 2.2.2.2
{% include references/toolbelt/boilerplate/footer.html %}