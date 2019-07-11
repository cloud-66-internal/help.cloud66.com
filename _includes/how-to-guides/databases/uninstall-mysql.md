### Special offer!
<div class="notice notice-warning"><p>Spending most of your time managing your servers? Let us help! We can free up your team to code instead of wrestling with DevOps tasks. Try our Rails, Node or Container services - <a href="https://app.cloud66.com/users/sign_up?utm_source=help&utm_medium=text_link&utm_campaign=mysql-hp" target="_blank">free for 14 days</a> and get $10 credit with the code: <kbd>Cloud66-MySQL</kbd>
</p></div>

When using Cloud 66 to [deploy to your own servers]({% if page.collection != "maestro" %}/{{page.collection}}/how-to-guides/deployment/registered-servers.html{%else%}/maestro/how-to-guides/deployment/registered-servers.html{%endif%}), you might experience trouble with an existing MySQL installation on your server.

Along with our general operating system requirements for the deployment to your server to work, we also recommend that you uninstall all MySQL related files from your server before deploying.

Use apt to uninstall and remove all MySQL packages:

	$ sudo apt-get remove --purge mysql-server mysql-client mysql-common -y
	$ sudo apt-get autoremove -y
	$ sudo apt-get autoclean

Remove the MySQL folder:

	$ rm -rf /etc/mysql

Delete all MySQL files on your server:

```
$ sudo find / -iname 'mysql*' -exec rm -rf {} \;
```
Your system should no longer contain default MySQL related files.

<div class="notice notice-danger"><p>Build, deploy and scale any app to any cloud or server. <a href="https://app.cloud66.com/users/sign_up?utm_source=help&utm_medium=text_link&utm_campaign=mysql-hp" target="_blank">Get started with $10 free credits</a> with promocode: <kbd>Cloud66-MySQL</kbd>
</p></div>