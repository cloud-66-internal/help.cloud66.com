
## Why use Failover Groups?

There are two major use cases for Failover Groups:

1. **Application resilience**  
 By building and nominating a secondary backup on a different cloud provider or data center you can use a failover group to switch your visitors from the _Primary_ to the _Backup_ application with ease.
2. **Cloning applications**  
If you need to clone or rebuild your application, you can use a failover group to switch your traffic to the new application without interruptions to your service.

## How Failover Groups work

A Failover Group follows the web head of your application. In other words, it points to either your load balancer or your web server (if you don't have a load balancer).

A Failover Group will automatically update to point at a newly added load balancer. Similarly, it will be automatically updated when you rename your application or web servers.

## Using Failover Groups with SSL certificates

One of the challenges of switching to a backup instance of an application is SSL certificates: 

- If your certificate is not kept updated on the backup, then switching traffic over will result in errors and prevent your customers from reaching your app.
- If you're using Let's Encrypt, your SSL certificate on your backup stack can't be created or renewed because it doesn't actually receive traffic via your public (external) domain.

To solve these issues, Cloud 66 automatically handles the transfer of your SSL certificate(s) when you switch between your primary and backup applications (or visa versa). However for this to work correctly **ONE** of the following conditions must be met:

1. Your backup application must have **no certificate** installed 
2. The certificate on your backup application must declare the same **server names** as the SSL certificate on your primary application

This applies to both custom certificates (i.e. from a third party supplier) and to Let's Encrypt certificates.

#### Note
<div class="notice"><p>
Since your backup application is, by definition, not receiving traffic while your primary application is active, we will not automatically renew your Let's Encrypt SSL certificates on the application which is acting as a backup. It will be transferred and resume automatic renewal when you switch using your Failover Group.
</p></div>

## Testing Failover Groups

A great way to test Failover Groups is to use the `dig` command in your terminal, for example `dig 414-262-781.cloud66.net`. This allows you to see exactly where the Cloud 66 DNS is pointing.