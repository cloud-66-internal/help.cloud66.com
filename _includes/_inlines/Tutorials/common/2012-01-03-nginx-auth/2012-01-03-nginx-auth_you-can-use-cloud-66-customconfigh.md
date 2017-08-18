<!-- post: -->


#You can use Cloud 66 [CustomConfig](http://help.cloud66.com/managing-your-stack/customconfig) to protect your application or parts of it with a username and password based on HTTP basic authentication.
Follow the instructions below to accomplish this.

1.  We'll use [htpasswd](http://httpd.apache.org/docs/2.2/programs/htpasswd.html) to create your password file - it encrypts it the password with MD5 encryption. Install it: `sudo apt-get install apache2-utils -y`
2.  Once that is installed, we're ready to create your password file. We recommend that you create this file within your repository, which will be deployed to your servers. This command will prompt you to input a password.
3.  Now we can go ahead and customize the Nginx configuration, which you can see more about in our [Nginx CustomConfig documentation](http://help.cloud66.com/web-server/nginx).
