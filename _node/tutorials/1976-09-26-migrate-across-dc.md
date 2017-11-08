---
layout: post
template: one-col
title: Migrate your stacks across data centers
categories: Tutorials
lead: ""
legacy: false

permalink: /:collection/:path
---


{% assign product = "common" %}





Do you want to move your stack from one cloud vendor or region to another? Follow the steps below for a seamless transition between stacks.

1.  Reduce the TTL of your DNS to 5 minutes, and leave it for 24 hours so that it has time to propagate the network.
2.  [Clone your source stack](https://help.cloud66.works/{{ include.product }}/getting-started/stack-definition.html) and deploy it to the new datacenter. This will save any environment variables you had configured on the source stack.
3.  Use our [database replication between stacks]({% if include.product == "skycap" %}https://help.cloud66.works/maestro/databases/database-replication.html{% else %}https://help.cloud66.works/{{ include.product }}https://help.cloud66.works/{{ include.product }}/databases/database-replication.html{% endif %}) feature to setup your target stack as a database slave, which means that any changes to your source stack database will be replicated across to the target stack until you switch it off.
4.  Use our [one-time database import](https://help.cloud66.works/{{ include.product }}/databases/database-import) feature to migrate your data across.


When you're happy with this new stack, simply switch your DNS over to it. As the TTL is 5 minutes (set earlier), it should take effect quickly.


If you followed step 3a above, switch the target database from being a slave to a master (as outlined in the [database replication between stacks](https://help.cloud66.works/{{ include.product }}/tutorials/1987-09-22-psql-failover.html) documentation).





