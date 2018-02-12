## Setup the failover group

As with any migration, you will need to deal with moving your code, data and traffic. 


### 1. Code

[Clone your existing stack](/{{page.collection}}/concepts/stack-definition.html) to a different cloud vendor or data center, and set it into [maintenance mode]({% if page.collection == "skycap" %}/maestro/tutorials/service-network-configuration.html{% else %}/{{page.collection}}/tutorials/service-network-configuration.html{% endif %}) to prevent it from serving content. We highly recommend that you build a stack with similar server specifications to your main stack to avoid issues during a switch. 


### 2. Data

Enable [database replication between your stacks](/rails/tutorials/database-replication.html) - this will setup a master/slave architecture between your stacks, whereby the slave is an exact replica of the master at all times. 


### 3. Traffic

Use [Failover Groups]({% if page.collection == "skycap" %}/maestro/tutorials/failover-groups.html{% else %}/{{page.collection}}/tutorials/failover-groups.html{% endif %}) to make it easy for you to switch between stacks. By pointing your domain at the Failover address, you will be able to switch your traffic between stacks at the click of a button.


## How to use the failover stack

If and when your main stack fails, you will need to switch to the failover stack.

1.  Set your main stack into [maintenance mode]({% if page.collection == "skycap" %}/maestro/tutorials/service-network-configuration.html{% else %}/{{page.collection}}/tutorials/service-network-configuration.html{% endif %}), to prevent new data being written to it.
2.  Turn off the [database replication](/rails/tutorials/database-replication.html).
3.  Make your [database slave a master](/{{page.collection}}/references/shells/toolbelt.html#slave-promotion-to-standalone-master) - this will allow data to be written to the database.
4.  Turn off [maintenance mode]({% if page.collection == "skycap" %}/maestro/tutorials/service-network-configuration.html{% else %}/{{page.collection}}/tutorials/service-network-configuration.html{% endif %}) on your failover stack.
5.  Use your [Failover group](/{{page.collection}}/tutorials/failover-groups.html) menu to switch your traffic to the failover stack. The TTL on the Failover address is 5 minutes, so you should see your users on the new stack momentarily.

