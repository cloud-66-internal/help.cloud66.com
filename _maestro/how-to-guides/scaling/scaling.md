---
layout: post
template: one-col
title: Scaling your application servers
categories: how-to-guides/scaling
order: 1
lead: "An overview on scaling your application servers"
legacy: false
tags: ["customization"]
permalink: /:collection/:path
---

## About scaling servers

You can scale your servers in two ways: horizontal and vertical. Horizontal scaling involves adding more servers, whereas vertical scaling involves altering the resources of a specific server, for example increasing the server size.

### Horizontal scaling

Horizontal scaling works differently for each server type, and is only available if you have deployed using your cloud provider.

## Kubernetes cluster's servers

From your application overview page, click on the `Servers` tab to take you to your server groups page. To add a kubernetes server, click the `+` sign in the top right corner of the server group, select your desired server size and quantity, and click Add. Your new server(s) will automatically be added to the cluster after they have completed provisioning and deployment, ready to serve traffic.


If you are using AWS, you will also have the option to scale your servers to different [Availability Zones](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html) within your region using the `more option` tab in the over-lay form.

You can also scale down your servers. From your application overview page, click on the `Servers` tab to take you to your server groups page, and click the `X` icon next to the server you would like to scale down. This server will automatically be removed from your load balancer, and shutdown, but you will need to delete it from your cloud provider. 

<div class="notice">
  <h3>Note:</h3><p>Your primary Kubernetes server cannot be scaled down, because this would leave you without a server.</p>
</div>

## Scaling services

You can scale your services horizontally across your Kubernetes cluster by clicking the `+` and `-` buttons infront of each service to increase or decrease the number of running containers/pods.

<div class="notice">
 	<h3>Note:</h3><p>
	The container/pod distribution is handled by Kuberntes controller and as a result it is <strong>not gauranteed</strong> that your container/pod is  <strong>distributed evenly</strong> .i.e you may sometimes find one server with <strong>multiple</strong> of the same containers/pods and one with <strong>zero</strong> container/pod of the same service.</p>
</div>	

## Database servers

You can scale your database servers through database replication, or Elasticsearch through [sharding](/{{page.collection}}/how-to-guides/scaling/elasticsearch-scaling.html). See our [database management section](/{{page.collection}}/how-to-guides/databases/database-customization.html) for more information.
