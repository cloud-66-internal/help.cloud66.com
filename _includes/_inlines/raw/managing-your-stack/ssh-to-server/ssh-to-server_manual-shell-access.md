<!-- post: -->


## Manual shell access

You can always have terminal access to your servers from your own server - just follow the steps below if you're on a Linux-based operating system.

1.  Port 22 (SSH) is closed to outside traffic by default - so you need to [add a firewall rule to your stack](/managing-your-stack/stack-network-settings) to access it.
2.  Once the port is open, you can find your username and SSH key by visiting the server page for the specific server you would like to login to. The SSH key download link is located in the right sidebar of your server page.
3.  Change the access rights to the downloaded key to 0600:
4.  You can now connect to your server with the following command:

