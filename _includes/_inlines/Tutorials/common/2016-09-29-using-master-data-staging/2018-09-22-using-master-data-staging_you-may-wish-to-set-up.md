

You may wish to set up a staging stack that can use data from your production stack, to provide realistic data in your staging environment. There are several ways you can do this:

1.  [Share your production database with the staging stack](http://community.cloud66.com/articles/sharing-a-database-between-stacks), which would allow read/write access to the database from your staging enviroment. In this scenario, we **strongly urge** you to look closely at how you will avoid writing incorrect data to the production database.
2.  [Setup a master/slave database on the production stack](http://help.cloud66.com/database-management/database-replication) and connect to the slave from the staging stack. This would only allow read access, so may not be suitable.
3.  Use the [database import feature](http://help.cloud66.com/database-management/database-one-time-import) to copy your production database to the staging database. This is perhaps the best alternative, as you're not working directly with your production database.
