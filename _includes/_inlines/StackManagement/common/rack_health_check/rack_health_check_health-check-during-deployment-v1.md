<!-- usedin: [ _rails/stack-management/rack_health_check-v1.md] -->


## Health Check During Deployment

For customers who are using custom web servers (not Passenger) to serve their code (such as Puma, Unicorn, Thin etc); Because each of these web servers involves a separate process (that in turn can be spawning child processes) our default deployment strategy is to provide the routing in Nginx to the upstream process. However, that could mean that although your deployment is successful, your app is not actually serving anything! 

Now there is a stack-level option to perform additional health check on your separate custom web processes during deployment. If we detect that your application is not "healthy" we will fail the deployment. Although this adds a bit of time during the deploy process, it comes with the additional cover that you know for a fact that your application is serving something! We use two metrics to ensure your application is healthy, firstly that Bluepill is indeed reporting that your application is healthy. Secondly that your application process ids change in some way on redeployment.

To enable this option, click on "Settings & Information" and check the "Web Health" checkbox.
This does not apply to Docker or Passenger based stacks as they have other health check mechanisms available already.

