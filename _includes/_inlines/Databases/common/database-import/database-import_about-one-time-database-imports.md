<!-- usedin: [ _legacy_docker/Databases] - post: -->


## About one-time database imports

One-time database imports allow you to easily transfer your database from one stack to another, using **MySQL**, **PostgreSQL**, **MongoDB** and **Redis** databases.

To use this feature, you will need two stacks with the same database type - one is the _source_ and the other is the _target_ for the data migration. This process will import the latest available **managed backup** from your _source_ stack, replacing the contents of your _target_ with the backup. We recommend that you backup your _target_ database before running this.

