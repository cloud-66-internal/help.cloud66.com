<!-- usedin: [ _legacy_docker/Tutorials] - post: -->


There are a number of factors that can lead your application to stop serving content. Follow this guide to eliminate the most common issues.

Start by checking if you can [SSH to your server](http://help.cloud66.com/managing-your-stack/ssh-to-your-server), remembering to open the firewall beforehand as described.

If you're able to SSH to the server, follow the steps below. If not, we recommend that you use your cloud vendor dashboard to try to connect to the server.

1.  Is your application redirecting to HTTPS by default, and you don't have an SSL certificate installed? 

	You can check by visiting the IP address of your server in your browser, or using the following command to see if there is a redirect in place:

		$ curl -I http://www.site.com

	The output of this command provides you with lots of useful information, for example response codes, redirects and more. Additionally, an immediate bounce of this command indicates that there is no server listening, whereas a more lengthy response could indicate a firewall issue.

2.  Try restarting Nginx by issuing `sudo service nginx restart` on the server.

	This should determine whether or not Nginx is having issues starting or serving content. For more detailed error logs, you can check:

		$ STACK_PATH/log/nginx_error.log

	It may be worth checking your Nginx CustomConfig history to see if any recent configuration changes are causing issues.

3.  You may be experiencing an issue with your web server - so first check your _Stack information_ page to see which one you're running.

	**Passenger web server**

		$ STACK_PATH/log/<environment>.log

	**Custom web server (eg. Unicorn)**

	SSH to the server and check your logs in
	
		$ STACK_PATH/log/<environment>.log
		$ STACK_PATH/log/unicorn.stderr.log
		$ STACK_PATH/log/unicorn.stdout.log



4.  If everything is working until this point, you may have an application issue. To find out, go to your application path by issuing `cd STACK_PATH` and then start the Rails console: `rails c`. Any error output will help you troubleshoot your issue.
