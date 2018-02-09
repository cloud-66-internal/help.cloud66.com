## On the server

You can connect directly into your database server and invoke a database console from there. To do that, please refer to the [terminal connection to servers](http://help.cloud66.com/managing-your-stack/ssh-to-your-server) documentation.


## With a client

You can also open a firewall port in your database server to allow a remote machine to connect the it. This is possible using the [Stack security]({% if include.product == "skycap" %}/maestro/stack-management/network-configuration.html{% else %}/{{ include.product }}/stack-management/network-configuration.html{% endif %}) page, and then you can use a database client from your local computer.

