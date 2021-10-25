---
layout: post
template: one-col
title: Scaling your application servers
categories: how-to-guides/scaling
order: 1
lead: "An overview on scaling your application servers"
legacy: false
tags: ["customization"]
permalink: /:collection/:path:output_ext
---

## About scaling servers

You can scale your servers in two ways: horizontal and vertical. Horizontal scaling involves adding more servers, whereas vertical scaling involves altering the resources of a specific server, for example increasing the server size.

### Horizontal scaling

Horizontal scaling works differently for each server type and is only available if you have deployed using your cloud provider.

## Kubernetes cluster servers

From your Application Overview, click on the `Servers` tab to take you to your server groups page. To add a Kubernetes server, click the `+` sign in the top right corner of the server group, select your desired server size and quantity, and click Add. Your new server(s) will automatically be added to the cluster after they have completed provisioning and deployment, ready to serve traffic.

If you are using AWS, you will also have the option to scale your servers to different [Availability Zones](http://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html) within your region using the `more option` tab in the over-lay form.

You can also scale down your servers. From your Application Overview, click on the `Servers` tab to take you to your server groups page, and click the `X` icon next to the server you would like to scale down. This server will automatically be removed from your load balancer, and shutdown, but you will need to delete it from your cloud provider. 

<div class="notice">
  <h3>Note:</h3><p>Your primary Kubernetes server cannot be scaled down, because this would leave you without a server.</p>
</div>

## Scaling services

To scale up a service in a Maestro app via the Dashboard:

1. Log into your [Cloud 66 Dashboard](https://app.cloud66.com/)
2. In the Services panel, click on the edit icon in the same row as the service you want to scale
3. A panel will slide in from the left. Update the *Desired Count* field to the number you require
4. Click Save Service (this will close the panel)
5. Click the update icon (to the left of the **Instances** column) and then click *Apply* in the panel to immediately update that service

If you need to scale multiple services simultaneously:

1. Follow steps 1 to 4 above for each of the services 
2. Click the green *Apply* button in the yellow bar above the **Services** panel to apply all your service changes to your cluster

![How to scale services in the dashboard](/assets/maestro/scale-services.gif)

### Scaling services with Toolbelt (cx)

<div class="Tabs Tabs--enclosed">
<nav>
<ul class="TabMini js_tabs">
<li class="TabMini-item active">
<a href="#cx-command" class="TabMini-link">
Toolbelt (cx) command
</a>
</li>
<li class="TabMini-item">
<a href="#cx-examples" class="TabMini-link">
Examples
</a>
</li>
</ul>
</nav>

<section id="cx-command" class="Tabs-content js_tab_content">
<p>You can scale your service entirely via your command line Toolbelt. The operative command is:</p>
<pre class="language-shell">
cx services scale &lt;service_name&gt; &lt;count&gt;
</pre>

<p>
Starts <code>&lt;count&gt;</code> containers of the given service across the stack.
If <code>&lt;count&gt;</code> is an absolute value like <code>2</code>, then there will be a total of &lt;count&gt; containers across the stack.
</p>
<p>
If <code>&lt;count&gt;</code> is a relative value like <code>[+2]</code> or <code>[-3]</code>, then the current total count of containers across the stack will be changed by <code>&lt;count&gt;</code>.
</p>

</section>

<section id="cx-examples" class="Tabs-content js_tab_content is-hidden">

<p>The following command sets <code>my_web_service</code> to use 5 containers:</p>
<pre class="language-shell u-whiteSpaceNoWrap">
cx service scale -s my_app my_web_service 5
</pre>

<p>The following command adds 2 more <code>image_processor</code> containers to your cluster:</p>
<pre class="language-shell u-whiteSpaceNoWrap">
cx service scale -s my_app image_processor [+2]
</pre> 

<p>The following command removes one <code>my_web_service</code> container from your cluster:</p>
<pre class="language-shell u-whiteSpaceNoWrap">
cx service scale -s my_app my_web_service [-1]
</pre>
</section>
</div>

<div class="notice">
     <h3>Note:</h3><p>
    The container/pod distribution is handled by Kuberntes controller and as a result it is <strong>not guaranteed</strong> that your container/pod is <strong>distributed evenly</strong> i.e you may sometimes find one server with <strong>multiple</strong> of the same containers/pods and one with <strong>zero</strong> container/pod of the same service.</p>
</div>    

## Database servers

You can scale your database servers through database replication, or Elasticsearch through [sharding](/{{page.collection}}/how-to-guides/scaling/elasticsearch-scaling.html). See our [database management section](/{{page.collection}}/how-to-guides/databases/database-customization.html) for more information.
