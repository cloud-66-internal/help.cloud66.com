<!-- usedin: [ _legacy_docker/stack-management/ssh-to-server-v1.md, _maestro/stack-management/ssh-to-server-v1.md, _node/stack-management/ssh-to-server-v1.md, _rails/stack-management/ssh-to-server-v1.md] -->


## Manual shell access

You can always have terminal access to your servers from your own server - just follow the steps below if you're on a Linux-based operating system.

1.  Port 22 (SSH) is closed to outside traffic by default - so you need to [add a firewall rule to your stack](https://help.cloud66.works/{{ include.product }}/stack-management/network-configuration.html) to access it.
2.  Once the port is open, you can find your username and SSH key by visiting the server page for the specific server you would like to login to. The SSH key download link is located in the right sidebar of your server page.
3.  Change the access rights to the downloaded key to 0600:
	
		$ chmod 0600 /Users/xxx/Downloads/key.pem

4.  You can now connect to your server with the following command:

		$ ssh user_name@ip_address -i /Users/xxx/Downloads/key.pem
