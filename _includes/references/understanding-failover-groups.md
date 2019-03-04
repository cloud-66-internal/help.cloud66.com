
## Why use Failover Groups?

There are two major use cases for Failover Groups:

1. **Application resilience**  
 By building and nominating a secondary backup on a different cloud provider or data center you can use a failover group to switch your visitors from the _Primary_ to the _Backup_ application with ease.
2. **Cloning applications**  
If you need to clone or rebuild your application, you can use a failover group to switch your traffic to the new application without interruptions to your service.

## How Failover Groups work

A Failover Group follows the web head of your application. In other words, it points to either your load balancer or your web server (if you don't have a load balancer).

A Failover Group will automatically update to point at a newly added load balancer. Similarly, it will be automatically updated when you rename your application or web servers.

## Testing Failover Groups

A great way to test Failover Groups is to use the `dig` command in your terminal, for example `dig 414-262-781.cloud66.net`. This allows you to see exactly where the Cloud 66 DNS is pointing.