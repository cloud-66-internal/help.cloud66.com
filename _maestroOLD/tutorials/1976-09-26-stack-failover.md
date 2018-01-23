---
layout: post
template: one-col
title: How to deal with a failover group
categories: Tutorials
lead: ""
legacy: false

permalink: /:collection/:path
---


## Setup the failover group

As with any migration, you will need to deal with moving your code, data and traffic. 


### 1. Code

[Clone your existing stack](https://help.cloud66.works/{{ include.product }}/getting-started/stack-definition.html) to a different cloud vendor or data center, and set it into [maintenance mode]({% if include.product == "skycap" %}https://help.cloud66.works/maestro/stack-management/network-configuration.html{% else %}https://help.cloud66.works/{{ include.product }}/stack-management/network-configuration.html{% endif %}) to prevent it from serving content. We highly recommend that you build a stack with similar server specifications to your main stack to avoid issues during a switch. 


### 2. Data

Enable [database replication between your stacks]({% if include.product == "skycap" %}https://help.cloud66.works/maestro/databases/database-replication.html{% else %}https://help.cloud66.works/{{ include.product }}https://help.cloud66.works/{{ include.product }}/databases/database-replication.html{% endif %}) - this will setup a master/slave architecture between your stacks, whereby the slave is an exact replica of the master at all times. 


### 3. Traffic

Use [Failover Groups]({% if include.product == "skycap" %}https://help.cloud66.works/maestro/failover-groups/failover-groups.html{% else %}https://help.cloud66.works/{{ include.product }}/failover-groups/failover-groups.html{% endif %}) to make it easy for you to switch between stacks. By pointing your domain at the Failover address, you will be able to switch your traffic between stacks at the click of a button.


## How to use the failover stack

If and when your main stack fails, you will need to switch to the failover stack.

1.  Set your main stack into [maintenance mode]({% if include.product == "skycap" %}https://help.cloud66.works/maestro/stack-management/network-configuration.html{% else %}https://help.cloud66.works/{{ include.product }}/stack-management/network-configuration.html{% endif %}), to prevent new data being written to it.
2.  Turn off the [database replication]({% if include.product == "skycap" %}https://help.cloud66.works/maestro/databases/database-replication.html{% else %}https://help.cloud66.works/{{ include.product }}https://help.cloud66.works/{{ include.product }}/databases/database-replication.html{% endif %}).
3.  Make your [database slave a master](https://help.cloud66.works/{{ include.product }}/tutorials/1987-09-22-psql-failover.html) - this will allow data to be written to the database.
4.  Turn off [maintenance mode]({% if include.product == "skycap" %}https://help.cloud66.works/maestro/stack-management/network-configuration.html{% else %}https://help.cloud66.works/{{ include.product }}/stack-management/network-configuration.html{% endif %}) on your failover stack.
5.  Use your [Failover group](https://help.cloud66.works/{{ include.product }}/failover-groups/failover-groups) menu to switch your traffic to the failover stack. The TTL on the Failover address is 5 minutes, so you should see your users on the new stack momentarily.

