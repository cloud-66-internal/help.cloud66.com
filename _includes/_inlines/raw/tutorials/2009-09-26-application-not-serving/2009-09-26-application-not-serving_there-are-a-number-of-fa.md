---
post: 
---

#There are a number of factors that can lead your application to stop serving content. Follow this guide to eliminate the most common issues.

Start by checking if you can [SSH to your server](http://help.cloud66.com/managing-your-stack/ssh-to-your-server), remembering to open the firewall beforehand as described.

If you're able to SSH to the server, follow the steps below. If not, we recommend that you use your cloud vendor dashboard to try to connect to the server.

1.  Is your application redirecting to HTTPS by default, and you don't have an SSL certificate installed?
2.  Try restarting Nginx by issuing `sudo service nginx restart` on the server.
3.  You may be experiencing an issue with your web server - so first check your _Stack information_ page to see which one you're running.
4.  If everything is working until this point, you may have an application issue. To find out, go to your application path by issuing `cd $STACK_PATH` and then start the Rails console: `rails c`. Any error output will help you troubleshoot your issue.
