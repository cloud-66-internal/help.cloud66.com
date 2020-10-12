## On the server

You can connect directly into your database server and invoke a database console from there. To do that, please refer to the [terminal connection to servers]({% if page.collection == "maestro" %}/maestro/how-to-guides/common-tools/ssh.html{%else%}/{{page.collection}}/how-to-guides/common-tools/ssh.html{%endif%}) documentation.


## With a client

You can also open a firewall port in your database server to allow a remote machine to connect the it. This is possible using the [Application security]({% if page.collection == "maestro" %}/maestro/how-to-guides/build-and-config/service-network-configuration.html{% else %}/{{page.collection}}/tutorials/service-network-configuration.html{% endif %}) page, and then you can use a database client from your local computer.

