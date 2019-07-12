<div class="Callout">
	<p class="Callout-text">Need some help managing your MySQL Servers?</p>
	<a class="Callout-button" href=" https://app.cloud66.com/users/sign_up?utm_source=-&utm_medium=-&utm_campaign=MySQL-top" target="_blank">Try Cloud 66 Free</a>
</div>


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

<div class="Callout" style="margin-top: 50px;">
	<p class="Callout-text">Easy MySQL database Deployments with Cloud 66.</p>
	<a class="Callout-button" href="https://app.cloud66.com/users/sign_up?utm_source=-&utm_medium=-&utm_campaign=MySQL-bottom" target="_blank">Try It Free</a>
</div>
