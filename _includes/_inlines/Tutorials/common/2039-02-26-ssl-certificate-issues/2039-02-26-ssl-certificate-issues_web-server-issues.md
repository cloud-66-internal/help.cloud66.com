<!-- usedin: [ _legacy_docker/Tutorials/2017-02-26-ssl-certificate-issues.md, _maestro/Tutorials/2017-02-26-ssl-certificate-issues.md, _node/tutorials/2017-02-26-ssl-certificate-issues.md, _rails/Tutorials/2017-02-26-ssl-certificate-issues.md] -->


### Web server issues

If you've added your SSL certificate through the Cloud 66 UI and your web server has stopped serving content, it's likely that there's some error with your SSL certificate. In this case, it's best to [SSH to your server](http://help.cloud66.com/managing-your-stack/ssh-to-your-server) and run `sudo service nginx restart`, which should highlight the error.

