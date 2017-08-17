<!-- post: -->


## How to use the failover stack

If and when your main stack fails, you will need to switch to the failover stack.

1.  Set your main stack into [maintenance mode](http://help.cloud66.com/managing-your-stack/stack-network-settings#maintenance), to prevent new data being written to it.
2.  Turn off the [database replication](http://help.cloud66.com/database-management/database-replication#disable).
3.  Make your [database slave a master](http://community.cloud66.com/articles/postgresql-failover-procedure) - this will allow data to be written to the database.
4.  Turn off [maintenance mode](http://help.cloud66.com/managing-your-stack/stack-network-settings#maintenance) on your failover stack.
5.  Use your [Failover group](http://help.cloud66.com/network/failover-groups) menu to switch your traffic to the failover stack. The TTL on the Failover address is 5 minutes, so you should see your users on the new stack momentarily.
