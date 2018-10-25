## On the server

You can connect directly into your database server and invoke a database console from there. To do that, please refer to the [terminal connection to servers](/{{page.collection}}/how-to-guides/deployment/shells/ssh.html) documentation.


## With a client

You can also open a firewall port in your database server to allow a remote machine to connect the it. This is possible using the [Stack security]({% if page.collection == "skycap" %}/maestro/how-to-guides/deployment/service-network-configuration.html{% else %}/{{page.collection}}/tutorials/service-network-configuration.html{% endif %}) page, and then you can use a database client from your local computer.

