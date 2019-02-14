Do you want to move your application from one cloud vendor or region to another? Follow the steps below for a seamless transition between stacks.

1.  Reduce the TTL of your DNS to 5 minutes, and leave it for 24 hours so that it has time to propagate the network.
2.  [Clone your source application](/{{page.collection}}/the-basics/stack-definition.html) and deploy it to the new datacenter. This will save any environment variables you had configured on the source application.
3.  Use our [database replication between applications](/rails/how-to-guides/databases/database-replication.html) feature to setup your target application as a database slave, which means that any changes to your source application database will be replicated across to the target application until you switch it off.
4.  Use our [one-time database import](/{{page.collection}}/how-to-guides/deployment/shells/migrate-the-stack.html) feature to migrate your data across.
When you're happy with this new application, simply switch your DNS over to it. As the TTL is 5 minutes (set earlier), it should take effect quickly.
If you followed step 3a above, switch the target database from being a slave to a master (as outlined in the [database replication between applications]({% if page.collection != "maestro" %}/{{page.collection}}/how-to-guides/databases/shells/pg-replication-version.html{%else%}/{{page.collection}}/how-to-guides/databases/shells/pg-replication-version.html{%endif%}) documentation).

