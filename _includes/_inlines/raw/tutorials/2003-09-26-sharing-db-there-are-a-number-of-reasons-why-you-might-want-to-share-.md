#There are a number of reasons why you might want to share a database between your stacks. For example, you can test UI changes with your users while still using production data.

It is _not_ a good idea to share your database between stacks in certain scenarios (eg. for a reporting tool) - instead we recommend that you use [database replication](http://help.cloud66.com/database-management/database-replication) to use a master/slave setup.

Your first stack will be deployed as normal, with a database managed by Cloud 66. Your second stack will be deployed with an [external database](http://help.cloud66.com/database-management/database-management) (as it will use the first stacks database).




