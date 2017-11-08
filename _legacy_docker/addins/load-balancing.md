---
menuheaders: [ "What is load balancing?", "Add a load balancer", "Balance the load per service" ]
layout: post
template: one-col
title: Load Balancing
categories: addins
lead: ""
legacy: true

permalink: /:collection/:path
---









## What is load balancing?

A load balancer is used to distribute traffic across your web servers, and offers benefits such as maximizing throughoutput, minimizing response times and avoiding overload on any single server. Ultimately, load balancing increases the reliability of your stack.

Depending on which cloud provider you use, this load balancer will be set up differently:

- **Amazon AWS**: [Elastic Load Balancing](http://aws.amazon.com/elasticloadbalancing/)
- **DigitalOcean**: [HAProxy](http://haproxy.1wt.eu/)
- **Google Compute Engine**: [Forwarding rules, target pools & health checks](https://developers.google.com/compute/docs/load-balancing/)
- **Linode**: [NodeBalancer](https://www.linode.com/nodebalancers/)
- **Microsoft Azure**: [TrafficManager](http://msdn.microsoft.com/en-us/library/azure/hh744833.aspx)
- **Rackspace**: [Rackspace Load Balancing](http://www.rackspace.com/cloud/load-balancing/)
- **CloudA**: [Load Balancing as a service](https://www.clouda.ca/technology/vpc-virtual-private-cloud/)

The time required to set up your load balancer will depend on which cloud provider you use. Once your load balancer is set up, it will be ready to distribute the load between your web servers. **All your existing web servers** will automatically be added to the load balancer.






## Add a load balancer
## Note

This feature is only available if you have deployed using a cloud vendor, and for non-development stacks.

To add a load balancer to your stack, start by visiting your stack detail page. Next, navigate to the add-ins page by clicking Install add-ins in the right sidebar. On the next page, clicking Load balancer will display a brief summary of what will happen next. Click Install load balancer to add a load balancer.








## Balance the load per service
## Note

This feature is only available for Docker stacks that are non-development.




For docker stacks you can use a load balancer to balance your services and they don't have to be present on each server! Essentially Nginx will direct the requests to the service on its own machine first, if the service doesn't exist there, then it will send it through Weave network to a server that has the service.

