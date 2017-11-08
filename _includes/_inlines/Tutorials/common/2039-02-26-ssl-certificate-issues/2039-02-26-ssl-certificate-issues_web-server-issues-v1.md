


### Web server issues

If you've added your SSL certificate through the Cloud 66 UI and your web server has stopped serving content, it's likely that there's some error with your SSL certificate. In this case, it's best to [SSH to your server](https://help.cloud66.works/{{ include.product }}/stack-management/ssh-to-server.html) and run `sudo service nginx restart`, which should highlight the error.

