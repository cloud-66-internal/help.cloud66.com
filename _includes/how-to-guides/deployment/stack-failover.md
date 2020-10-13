## Setup the failover group

As with any migration, you will need to deal with moving your code, data and traffic. 


### 1. Code

[Clone your existing application](/{{page.collection}}/the-basics/stack-definition.html) to a different cloud vendor or data center, and set it into [maintenance mode]({% if page.collection == "maestro" %}/maestro/how-to-guides/build-and-config/service-network-configuration.html{% else %}/{{page.collection}}/tutorials/service-network-configuration.html{% endif %}) to prevent it from serving content. We highly recommend that you build an application with similar server specifications to your main application to avoid issues during a switch. 


### 2. Data

Enable [database replication between your stacks](/rails/how-to-guides/databases/database-replication.html) - this will setup a master/slave architecture between your stacks, whereby the slave is an exact replica of the master at all times. 


### 3. Traffic

Use [Failover Groups](/{{page.collection}}/tutorials/failover-groups.html) to make it easy for you to switch between applications. By pointing your domain at the Failover address, you will be able to switch your traffic between stacks at the click of a button. We will automatically transfer your SSL certificates if you follow the guidelines in our [reference guide](/{{page.collection}}/references/understanding-failover-groups.html#using-failover-groups-with-ssl-certificates).


## How to use the failover application

If and when your main application fails, you will need to switch to the failover application.

1.  Set your main application into [maintenance mode]({% if page.collection == "maestro" %}/maestro/how-to-guides/build-and-config/service-network-configuration.html{% else %}/{{page.collection}}/tutorials/service-network-configuration.html{% endif %}), to prevent new data being written to it.
2.  Turn off the [database replication](/rails/how-to-guides/databases/database-replication.html).
3.  Make your [database slave a master]({% if page.collection == "maestro" %}/maestro/references/toolbelt.html{%else%}/{{page.collection}}/references/toolbelt.html{%endif%}#slave-promotion-to-standalone-master) - this will allow data to be written to the database.
4.  Turn off [maintenance mode]({% if page.collection == "maestro" %}/maestro/how-to-guides/build-and-config/service-network-configuration.html{% else %}/{{page.collection}}/tutorials/service-network-configuration.html{% endif %}) on your failover application.
5.  Use your [Failover group]({% if page.collection == "maestro" %}/maestro/tutorials/failover-groups.html{% else %}/{{page.collection}}/tutorials/failover-groups.html{% endif %}) menu to switch your traffic to the failover application. The TTL on the Failover address is 5 minutes, so you should see your users on the new application momentarily. We will automatically transfer your SLL certificates if you follow the guidelines in our [reference guide](/{{page.collection}}/references/understanding-failover-groups.html#using-failover-groups-with-ssl-certificates).

