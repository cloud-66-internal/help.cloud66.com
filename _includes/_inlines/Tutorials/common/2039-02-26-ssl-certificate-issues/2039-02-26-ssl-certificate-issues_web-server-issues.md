

### Web server issues

If you've added your SSL certificate through the Cloud 66 UI and your web server has stopped serving content, it's likely that there's some error with your SSL certificate. In this case, it's best to [SSH to your server](http://help.cloud66.com/managing-your-stack/ssh-to-your-server) and run `sudo service nginx restart`, which should highlight the error.

