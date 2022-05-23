---
layout: post
title: Configuring your Rails application for High-Availability
categories: guides
order: 1
legacy: false
tags: ["rails"]
lead: Configuring your Rails application for High-Availability
permalink: /:collection/:path:output_ext
---

<p class="lead">
As your application matures and gains more users, its availability or “up time” becomes more and more vital because downtime affects paying customers, but also more challenging because more users means more strain on your infrastructure.
</p>

This guide explains the principles for configuring your Rails app to be highly available, with examples of how to achieve this in practice.

<div class="notice"><p markdown="1">
💡 We built Cloud 66 to make configuring and managing your infrastructure as easy and reliable as possible. We have all the tools you need to make your Rails application robust enough to handle significant disruptions to your infrastructure.
</p></div>

## What is high availability?

What do we mean by “highly available”? And how is this different from scaling? While these two goals share some concepts and strategies, high availability is focussed on ensuring that your application and infrastructure are able to withstand the **complete failure** of one or more components without becoming unavailable to customers. It’s about making sure that some instance of your application is up and running at all times. and that your users can access it.

Two key concepts in high availability are **redundancy** and **failover**.

### Redundancy

In its simplest form redundancy means having **at least two of every component** in your infrastructure so that a single failure will not bring down your application. Each layer of your **application stack** (see below) must have some form of redundancy in order to be highly available.

However simply having a “spare” is not enough - both your application code and your infrastructure must be configured to cope with the failure of a components. For example if your application relies on a single server with a custom configuration (known as a “snowflake”) you have a **single point of failure**.

It’s also highly recommended that all your components of a single type are the same size with the same capacity i.e. **symmetrical**. If your components are significantly asymmetrical then the loss of a single (larger) node may bring down your application.

### Failover

Having spare infrastructural components is great, but unless your application can automatically switch over to those spares, it is not truly highly available. Failover is about having systems that make switching over to spare infrastructural components either entirely automatic or extremely quick (single click).

The ideal application stack is **self-monitoring** and will automatically cut over if any failures are detected. Some components (like cloud-native load balancers) do this automatically, while other components (like databases) require additional tools and configuration to achieve it.

## Assessing your application stack

A typical Rails application will have most (or all) of these components:

1. Application servers (which usually also act as web servers)
2. Database servers
3. Background process servers

Some stacks may also include **storage servers** (or abstracted services like CDNs or object storage) or specialized services like **event queues** (e.g. RabbitMQ) or **site search backends** (e.g. Elasticsearch).

To be truly highly available, each layer of this stack needs to have both **redundancy** and **failover** in place. We’ll examine each layer now.

## Configuring high-availability application servers

Application servers are, in many respects, the easiest components to configure for redundancy because they are generally stateless. As long as your application’s code is deployed consistently across all your servers, they should all act as perfect replicas of one another, and it should not matter which server a particular visitor happens to hit.

The key to making this possible is a **load balancer** - a server (or service) dedicated to distributing traffic to each of your application servers as evenly as possible. You will need to add a load balancer to your application before you can add any more application servers.

### Adding a load balancer to your application

Most cloud providers now provide dedicated, single-purpose load balancers that can be added to an application stack in a few clicks, rather than being manually configured using a blank server.

The overhead of a self-managed load balancer generally far outweighs the advantages of a cloud-native load balancer. Cloud load balancers come with features like automated health checks, availability guarantees and non-HTTP traffic handling.

To add a load balancer to your application:

1. Log into your cloud dashboard
2. Click through to the load balancer section (often under “networking”)
3. Add a load balancer and choose which application server(s) should be added to it
4. Configure other features like forwarding rules, health checks and SSL

These steps may differ slightly depending on your cloud provider, but the basic principles are fairly universal. For increased certainty you should consider configuring the IP tables or network firewalls on your application servers to only accept traffic flowing via your load balancer. This prevents user requests hitting your servers directly, and allows you to manage traffic flows more tightly.

For true high availability you should consider adding a spare load balancer. Many cloud providers now support hot swappable spares, or [automated failovers](https://docs.digitalocean.com/products/networking/floating-ips/).

<div class="Featured" markdown="1">

### Adding a load balancer with Cloud 66

We can manage the provisioning of load balancers for your application (just like we do for other servers). To add a load balancer to your application:

1. Open the **Application Overview** from the **[Dashboard](https://app.cloud66.com/dashboard)**.
2. Click *Explore Add-ins* or the green **+** in the **Add-ins** panel
3. Click on *Install Now* under **Load Balancer**
4. A pop-up window will appear, explaining the process for your cloud provider. Click *Add Load Balancer* to continue.

You can now watch the logs, as usual to see the progress of the process. We will add your new load balancer and configure it for health checks, SSL and more. For more help on the process, and configuring load balancers, see [our documentation](https://help.cloud66.com/rails/tutorials/load-balancing.html).

</div>

### Adding application servers

Once you have a load balancer set up you can add more application servers. However, before you do so, you should consider the peak load levels on your current application server.

If your application is routinely **consuming more than 75%** of your resources (RAM or CPU) then you should you should be cautious about simply adding another server of the same size. As your active users increase, your load balanced servers will tend to mask the effects of this additional load. If one server then fails, and your required load is now greater than one server can handle, your application will no longer be highly available. You can mitigate this danger in one of three ways:

1. You can have 3 or more servers in your cluster (thus splitting the load into three or more chunks)
2. You can increase the capacity of your first application server (by adding new larger server and then deleting the original) before scaling out your cluster of application servers
3. You can optimise and refactor your code to be less resource intensive

Regardless of the solution you choose, you will need to regularly monitor the average and peak loads on your application servers. A load balanced cluster can easily become a single point of failure unless it is frequently reviewed.

We strongly recommend that you make all of your application servers **the same size**. If they are of unequal size, the chances of a single point of failure increase significantly.

Once you have decided on the most practical solution for your application, you can add a second (or third etc) application server. To do this manually, you will need to do the following:

1. Spin up a new server
2. Install any necessary packages
3. Deploy your application code to it
4. Test whether the code has been properly deployed
5. Add the new server to your load balancer
6. Monitor the new setup to ensure its working as planned

You’ll need to repeat this for each server, or automate the process using scripts. Alternatively you can use Cloud 66 - we handle all of the above for you.

### Adding application servers using Cloud 66

We’ve made adding servers as quick and easy as possible. You can add a server in under 10 mins with a couple of clicks. To add another application server:

1. Open the **Application Overview** from the **[Dashboard](https://app.cloud66.com/dashboard)**.
2. Click on the *Rails Servers* server group link (in the **Application Servers** panel)
3. Click on the *Add Web Server* button (top right)
4. Choose a server size and the number of servers you want to add
5. Click the *Add Server* button

We will automatically provision and configure your new server. You can watch the logs in your Dashboard to monitor progress. We can also alert you via your preferred when the new server goes live.

We will also configure health checks for your load balancer, which will automatically remove any non-responsive nodes from your load balancer (a simple but effective form of **failover**).

## Configuring high-availability database servers

Databases are, by definition, dynamic stores of data. In order for your data layer to be truly redundant, each database must be a replica of every other database. We achieve this using a system called **replication** which constantly synchronises data between servers. Together these servers are known as a **database cluster**.

### Configuring your code to use a database cluster

Your Rails application will need to be configured to be “aware” of the database cluster - it will not automatically scale along with your servers. Luckily Active Record makes this configuration fairly straightforward. The [official Rails guide](https://guides.rubyonrails.org/active_record_multiple_databases.html) to running multiple databases should be enough to get you up and running with minimal additional configuration of your application.

<aside>
💡 Cloud 66 configures database clusters so that all your servers have the same usernames and passwords - this greatly simplifies your database configuration.

</aside>

### Database cluster design

The most common infrastructural pattern for database clusters is to have a single **master** (aka main or source) server that handles write operations, and one or more read-only **slaves** (aka replicas).

This does create a single point of failure in the master node, but this can be substantially mitigated in other ways (see below). It is technically possible to have multiple master nodes for some database types, but the costs and potential disruptions of this pattern generally outweigh the benefits of distributed risk. The main drawback of multiple masters is that they will frequently run into unresolvable conflicts between write queries and replication, which means constant vigilance and frequent resyncing (and disruption to customers).

As with application servers, you need to consider how much capacity your current database is using. If your load increases significantly over time, a database cluster can mask a single point of failure. You will need to monitor the load on both your main node and your replicas to ensure that they have enough capacity to cope with failures.

### Setting up replication manually

If you are managing your database servers manually, you will need to configure them to replicate with each other. We have listed links to instructions for the most common database types below. Bear in mind that replication can differ quite markedly for older versions of a database engine, so pay attention to which version your application is using.

- [MySQL 8.0](https://dev.mysql.com/doc/refman/8.0/en/replication-configuration.html)
- [PostgreSQL 14](https://www.postgresql.org/docs/current/runtime-config-replication.html)
- [Redis 6+](https://redis.io/docs/manual/replication/#configuration)
- [MongoDB 4.4+](https://www.mongodb.com/docs/manual/replication/)

Alternatively you can use Cloud 66 - we handle all of the above for you, as well as other useful time saving features like automatic database backups and single-click resyncing of slaves.

### Setting up a database cluster with Cloud 66

You can set up a database cluster on Cloud 66 with a few clicks. The only requirements are that you have an existing database, and that you have **managed backups** set up (because we use this to achieve and maintain replication). Cloud 66 handles the configuration of the database server(s) and replication on your behalf.

To set up a cluster:

1. Open the **Application Overview** from the **[Dashboard](https://app.cloud66.com/dashboard)**.
2. Click *Explore Add-ins* or the green **+** in the **Add-ins** panel
3. Scroll down to **Database Backup** and click on *Install Now* (if not already active)
4. Configure your backup options and click **Create Backup**
5. Wait for the initial backup to complete (this may take some time depending on the size of your database)
6. Click on the name of your database server group (e.g. MySQL Servers) from the overview page
7. Click the green *Add Database Server* button, choose a size and then click *Add Server*
8. Your new database server will now be provisioned and synchronised with the master

Once it has been synchronised, you will be able to use your new database by adding it your application code (see above).

### Mitigating against the loss of a Master

Since the typical database cluster has a single master, you need ways to cope with the loss of this server. The three most common approaches are:

- Promote a replica to Master
- Maintain a spare master that can be swapped out
- Maintain an entire backup cluster

We will focus on the first solution, because it is generally the most practical approach. The methodology for promoting a replica to master differs between database engines. Please read the official documentation for your database for more info (see above for links).

If you’re using Cloud 66 you can quickly promote a replica to master from your Dashboard:

1. Open the **Application Overview** from the **[Dashboard](https://app.cloud66.com/dashboard)**.
2. Click on the database **server group link (in the **Application Servers** panel)
3. Click on the name of the server you wish to promote
4. Click the cog and then “promote to Master”

You can also trigger this process via the [Cloud 66 Toolbelt](https://help.cloud66.com/rails/references/toolbelt/toolbelt-commands.html#databases-promote-slave) and via our [API](https://developers.cloud66.com/#run-stack-action). This allows you to automate the process to achieve faster **failover**.

## Configuring high-availability process servers

By their nature process servers (like [Sidekiq](https://sidekiq.org/)) run asynchronous (background) jobs. This means that temporarily losing a process server is less likely to bring down your application and affect your availability.

However it is still important to have ways to quickly mitigate the loss of a process server. There are three main ways to handle this:

- You can maintain a cluster of process servers
- You can set up a spare process server to allow for “hot swapping”
- You can set up an image or template of your process server to allow a new version to be provisioned as quickly as possible.

Regardless of how you mitigate downtimes, your application code should be written so that the loss of a process server does not result in downtime. For example you could fall back to using the default Rails job processor on your application servers, or you could set your code to periodically retry failed processes automatically until they are completed.

## Failover solutions for high availability

Depending on the nature of your application and your infrastructure budget, there are three approaches to failover:

1. Component-level failover
2. Cluster or server group failover
3. Application-level failover

These approaches are not mutually exclusive and you can implement them in combination

We have already discussed some examples of **component-level failover** above. This includes things like maintaining spare components that can be quickly swapped out when needed, as well as simple automated solutions like load balancer health checks and promoting replica databases to master if the master’s heartbeat is lost.

**Cluster-level failover** means maintaining a spare of an entire cluster or group of servers. This is useful for applications that depend heavily on a particular layer of the stack - such as the database. Switching out an entire database cluster can be much faster than waiting for a slave to be promoted, and ensures there will be no performance issues (since you’re not forced to rely on an impaired cluster). This is an expensive option though, as it assumes you will be running twice as many database servers as required at any time.

The most drastic approach to failover is at the **application level**. This involves maintaining an entire copy of your application as a hot-swappable spare. This is the most expensive option but also the most robust - you can simply switch over to your spare instance and then debug the issue with your main instance without juggling. The most efficient way to achieve this kind of failover is using a smart DNS endpoint - a feature offered by Cloud 66. This allows you to quickly repoint your traffic from one application to another at a DNS level - with no additional configuration required.

It’s possible to fully automate this failover process using the [Cloud 66 Toolbelt](https://help.cloud66.com/rails/references/toolbelt/toolbelt-commands.html#failover-groups-update) or [Cloud 66 API](https://developers.cloud66.com/#update-failover-group). An external monitoring service like SolarWinds could be configured to automatically switch to the Spare in your Failover Group if a threshold for downtime is breached.

## Using Failover Groups with Cloud 66

A failover group is a managed, quick-response DNS address that automatically follows your application’s web endpoints.

You can connect it to up to two instances of an application at any time - a *primary* and *backup* instance. Should you need to switch traffic between your instances, you can flip a switch and your traffic will begin flowing to the *backup* instance within 5 minutes.

To add a Failover Group to your account:

1. Click the *Failover Groups* link in the right-hand panel of the main *Dashboard* page.
2. Click the *Add a failover group* button
3. Select your application as the Primary Application
4. Select your spare application as your Backup Application

Notice that the group has its own unique domain, separate from your application servers. This is the power of Failover Groups at work - the public CNAME for your application can stay static while the underlying servers change within a matter of minutes. For more help please read our [Failover Group docs](https://help.cloud66.com/rails/tutorials/failover-groups.html).

This allows you to maintain a copy of your application in an entirely different region or even with another cloud provider. This allows you to insulate your application from downtime even if an entire region goes down. In order for this to work properly you will need to ensure that your Backup databases remain synchronised with your Primary. Cloud 66 supports [replication between applications](https://help.cloud66.com/rails/how-to-guides/databases/database-replication.html#between-applications).

## Deployment strategies for high availability

Deploying new code is inherently risky. Even with thorough testing, your production environment may behave unexpectedly both during and after deployment. Mitigating this risk is important in any high availability strategy. There are several ways to lower this risk:

- You can use a zero-downtime rolling deployment strategy
- You can use a phased code roll-out (canary)

### Using rolling deployments

A rolling deployment strategy ensures that there is an application server available at all times even while you’re deploying new code, while also allowing you to deploy to multiple server (in parallel). To achieve this, you will need at least two application servers - preferably four - as well as a load balancer. Then:

1. Split your servers into two groups based on factors like server size, typical load and role.
2. Remove the first group from the load balancer and deploy to all of the servers in that group (in parallel)
3. Test the first group (remember to hit the servers directly rather than the load balancer)
4. If the first group had deployed successfully, take the second group off the load balancer, deploy to it in parallel, then add it back

If you’re running an application that supports [hot rollover](https://help.cloud66.com/rails/how-to-guides/deployment/shells/zero-downtime-deploy.html) - like Unicorn - you can achieve a zero-downtime deployment using the approach above.

### Set up rolling deployments with Cloud 66

Cloud 66 automates the entire rolling deployment process. To enable rolling deployments:

1. Open the **Application Overview** from the **[Dashboard](https://app.cloud66.com/dashboard)**.
2. Click on the *Deploy* button and choose *Deploy with Options...*
3. Choose *Rolling Deployment*
4. Click Deploy

Note that in order to use rolling deployments, your application needs:

- A load balancer
- At least four servers (not including the load balancer)…
- …two of which **must be web servers**

### Using a canary rollout

A canary roll-out involves deploying your updated code to a single server (or a very small group) and directing a small number of users to that server while monitoring its performance. To achieve this, you will need a mechanism for dynamically routing traffic. For example Nginx has features that allow you to route users to a specific server based on an arbitrary condition.

For example, you could set up canary rollout as follows:

- Remove one of your application servers from your load balancer (or provision a new server) - this will be your “canary”
- Deploy the new version of your code to this server
- Configure an Nginx server to route 90% of traffic to one node, and 10% to another
- Put this Nginx server in front of your load balancer, with 90% of the traffic flowing to the load balancer, and 10% to the canary server.
- Monitor the canary until you are satisfied that the new version is stable
- Deploy your code to the rest of your servers
- Remove the Nginx server so that traffic flows directly to your load balancer again
- Add the canary back to your load balancer (or delete it if not needed)

Running this procedure manually takes a considerable amount of work and preparation, so it is only worth the time for high impact changes. Alternatively, Cloud 66 can this entire process for you.

### Setting up a canary rollout with Cloud 66

Using Cloud 66 to manage canary rollouts has a number of advantages:

- Routing is handled automatically - no need to change any of your servers manually, or add or remove any components
- Both versions of your code are deployed to all your servers and run alongside each other, allowing you to switch between versions without redeploying. This allows you to gradually expand the number of canaries until your new code is completely rolled out.
- The random cohort of visitors that is assigned to the Canary release will be directed to that release persistently (i.e. they will not bounce between Canary and non-Canary versions of the code).
- Setting up a canary rollout takes a few clicks, with no manual work

To set up a canary rollout with Cloud 66:

1. Open the **Application Overview** from the **[Dashboard](https://app.cloud66.com/dashboard)**.
2. Click on the *Deploy* button and choose *Deploy with Options...*
3. Select *Canary Rollout*
4. Click *Deploy*

You can now adjust the percentage of web traffic being routed to each of the the different versions of your code using the buttons at the top of your Application Overview in your Cloud 66 Dashboard

At any point you can either *Finalize* a rollout (which removes the older version and directs all traffic to the new version) or *Discard* it (essentially a roll back)

## Maintaining high availability over time

Maintaining high availability is always going to be an ongoing task, particularly as your application is growing and gaining users and new features. To ensure your application remains as robust as possible, you should implement both automated alerts and regular manual checks.

Some of the more important of these are:

- Checking that the overall load on your clustered servers has not grown to the point that a single failure will bring down the rest of the cluster
- Checking the health of any hot spares running alongside your live servers - if they are out of sync they are worse than useless (because they will probably break your application when used)
- Periodical “fire drills” where you manually switch over to any spare infrastructural components to test their fidelity against your live application
- Auditing components to ensure that “snowflake” servers are not developing (i.e. servers with unique and complicated configurations that make them difficult or impractical to duplicate)