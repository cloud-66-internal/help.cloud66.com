<!-- usedin: [ _rails/Tutorials/1974-09-26-migrate-from-heroku.md] -->


### Web server and Procfile

By default, Cloud 66 will deploy your stack with Phusion Passenger, but you can also choose a [custom web server](http://help.cloud66.com/web-server/custom-web-servers) like Unicorn. You may have a `web` entry in your Procfile to do this on Heroku. Cloud 66 ignores this entry to avoid compatability issues.

To run a custom web server, we require a `custom_web` entry. It is important to set this before analyzing your stack, to avoid building the stack with Passenger.

You can also use the [Procfile](http://help.cloud66.com/deployment/running-background-processes) to define other background jobs.

