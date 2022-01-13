A shortcut to run the server registration script on a group of servers.

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx register-server [--org <organization>] [--server <IP address>] [--file <filename.txt>] [--user <username>] [--key <private SSH key>] [--force-local-ip <bool>] [--tags <tagA,tagB>]
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--server &lt;IP address&gt; | either/or | — | The public IP address of the server to register |
| \--file &lt;filename.txt&gt; | either/or | — | A text file containing a list of IP addresses for servers (one per line) |
| \--org &lt;organization&gt; | yes | — | The name of the Cloud 66 organization to which the server(s) must be added |
| \--user &lt;username&gt; | yes | — | The username to use when connecting to server(s) |
| \--key &lt;private SSH key&gt; | yes | — | The private SSH key to use to connect to the server(s) |
| \--force-local-ip &lt;bool&gt; | no | false | Use the local ip address of the registered server |
| \--tags &lt;tagA,tagB&gt; | no | — | Comma separated list of tags to add to the server(s) |
{% include references/toolbelt/boilerplate/example.html %}
$ cx register-server --org team --user root --server 149.56.134.22 --key ~/.ssh/private_key
$ cx register-server --org team --user ubuntu --file servers.txt --key ~/.ssh/private_key
$ cx register-server --org team --user ubuntu --file servers.txt --key ~/.ssh/private_key --force-local-ip true
$ cx register-server --org team --user ubuntu --file servers.txt --key ~/.ssh/private_key --tags "dc 1,az2"
{% include references/toolbelt/boilerplate/footer.html %}