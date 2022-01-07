Copies a file from your local computer to the remote server. Uploads the files to the `/tmp` directory by default, unless a path is specified. 

This command open the firewall for SSH from your IP address temporarily (20 minutes), downloads the keys if you don't have them and starts a SSH session. If a role is specified the command will connect to the first server with that role.

This command is only supported on Linux and OS X (for Windows you can run this in a virtual machine if necessary)

{% include references/toolbelt/boilerplate/top-tabs.html %}
$ cx upload --stack <application name> --server <server name> | <server IP> | <server role> /path/to/source/file /path/to/target/directory
{% include references/toolbelt/boilerplate/args.html %}
| Argument | Required? | Default | Description |
|  ---  |  ---  |  ---  |  ---  |
| \--stack, -s &lt;application name&gt; | yes | — | The application name |
| \--server &lt;server name&gt; | &lt;server ip&gt; | &lt;server role&gt; | yes | — | Name or IP or role of the server to which the file will be uploaded |
| /path/to/source/file | yes | — | Local path to the file that will be uploaded |
| /path/to/target/directory | no | /tmp | Path on the server where the file will be saved |
{% include references/toolbelt/boilerplate/example.html %}
$ cx upload -s mystack --server lion /tmp/file.txt
$ cx upload -s mystack --server lion /mydir/files/file.txt /var/www/app
$ cx upload -s mystack --server 52.65.34.98 /user/archives/yes.zip
$ cx upload -s mystack --server web /path/to/source/file /path/to/target/directory
{% include references/toolbelt/boilerplate/footer.html %}