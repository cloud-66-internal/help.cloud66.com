<!-- usedin: [ _legacy_docker/stack-management] - post: -->


### Web servers

To scale up your web servers, start by adding a load balancer to your stack, which will distribute traffic to your servers. Next, from your stack detail page, click the link to your web server group (eg. Docker server). To add a web server, click _Scale up_ in the top right corner, select your desired server size and quantity, and click _Scale up_. Your new server(s) will automatically be added to the load balancer after they have completed provisioning and deployment, ready to serve traffic.

If you are using AWS, you will also have the option to scale your servers to different [Availability Zones](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html) within your region.

You can also scale down your web servers. From your stack detail page, click the link to your web server group (eg. Docker server), and click the _X_ icon next to the server you would like to scale down. This server will automatically be removed from your load balancer, but you will need to delete it from your cloud provider. Note that your primary web server cannot be scaled down, because this would leave you without a web server.

