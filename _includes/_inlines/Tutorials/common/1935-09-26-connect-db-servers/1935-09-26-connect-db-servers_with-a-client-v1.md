<!-- usedin: [ _legacy_docker/Tutorials/1935-09-26-connect-db-servers-v1.md, _maestro/Tutorials/1935-09-26-connect-db-servers-v1.md, _node/tutorials/1935-09-26-connect-db-servers-v1.md, _rails/Tutorials/1935-09-26-connect-db-servers-v1.md] -->


## With a client

You can also open a firewall port in your database server to allow a remote machine to connect the it. This is possible using the [Stack security]({% if include.product == "skycap" %}https://help.cloud66.works/maestro/stack-management/network-configuration.html{% else %}https://help.cloud66.works/{{ include.product }}/stack-management/network-configuration.html{% endif %}) page, and then you can use a database client from your local computer.
