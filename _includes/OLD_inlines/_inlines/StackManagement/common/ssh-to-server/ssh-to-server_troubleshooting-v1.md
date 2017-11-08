


## Troubleshooting

1.  Update your toolbelt version

	Toolbelt updates are normally applied automatically in the background, but in some cases these may not work. If so, you may need to [update the toolbelt manually](https://help.cloud66.works/{{ include.product }}/toolbelt/introduction.html). 

2.  Toolbelt SSH asking for password
	
	If your toolbelt SSH connection is asking for a password, there may be an issue with the local SSH key cache on your computer. To remove this cache, run the following commands:

		mkdir ~/.ssh/old_cx
		mv ~/.ssh/cx_* ~/.ssh/old_cx

	This moves the cached SSH keys to a temporary folder, so that they are downloaded again.

3.  Toolbelt exits command
	
	If the toolbelt SSH connection exits while running, it helps to check the output log from the command. To see this, simply prepend `CXDEBUG=1` to your command. For example, you can run:

		CXDEBUG=1 cx ssh -s "My Awesome App" web

	This will show at which point the command fails, and if you run this manually, you should see more error details. 


4.  Toolbelt exit status 255

	You may see this output from the bottom of the previous command:
	
		Running Command /usr/bin/ssh with ([<username>@<ip_address> -i /Users/<username>/.ssh/cx_<id&tt;_pkey -o UserKnownHostsFile=/dev/null -o CheckHostIP=no -o StrictHostKeyChecking=no -o LogLevel=QUIET -o IdentitiesOnly=yes -A -p 22])
		2015/04/23 17:41:12 error: exit status 255

	In this case, there has likely been an issue running the SSH command, though no logs are output from it (given the LogLevel=QUIET directive). We'll want to run that command directly (and switch the LogLevel to VERBOSE):

		ssh <username>@<ip_address> -i /Users/<username>/.ssh/cx_<id>_pkey -o UserKnownHostsFile=/dev/null -o CheckHostIP=no -o StrictHostKeyChecking=no -o LogLevel=VERBOSE -o IdentitiesOnly=yes -A -p 22

	The output from that command should help you understand what the root cause of the issue is. 

5.  SSH timeout

	SSH connection time-outs typically happen when the firewall connection isn't open. The toolbelt opens the firewall to your current IP address automatically, but your external IP address may change between this request and the actual connection. To verify this, try the manual connection method and see if you can connect.