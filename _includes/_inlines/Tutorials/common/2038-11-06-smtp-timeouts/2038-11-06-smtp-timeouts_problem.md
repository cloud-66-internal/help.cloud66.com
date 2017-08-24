<!-- usedin: [ _legacy_docker/Tutorials] - post: -->


## Problem
Sending emails with a service like [Mandrill](http://mandrill.com) or through a normal SMTP server from your Amazon AWS EC2 instances can result in intermittent timeouts.

This is because of a [traffic throttling policy](http://docs.aws.amazon.com/ses/latest/DeveloperGuide/smtp-connect.html) on the AWS side to prevent spamming from their servers.

