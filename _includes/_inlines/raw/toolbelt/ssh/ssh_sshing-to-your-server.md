<!-- post: -->


## SSHing to your server

Allows direct SSH shell into your servers by opening the firewall temporarily for the source IP address, downloading the SSH key and starting a SSH session with one command. 

Your server SSH key is downloaded to `~/.ssh` and re-used in subsequent SSH connections via the toolbelt. You need to have shell to server rights over the stack to use this command.

If your server deployed behind a bastion server, you need to provide the private key needed to connecting to bastion server to be able to connect to your server.

