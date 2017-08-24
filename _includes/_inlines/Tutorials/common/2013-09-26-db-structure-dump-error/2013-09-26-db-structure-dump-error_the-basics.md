---
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/common/2013-09-26-db-structure-dump-error/code_2013-09-26-db-structure-dump-error_the-basics-rakedbst.html" ]
 usedin: [ _rails/Tutorials/2013-09-26-db-structure-dump-error.md] -->


## The basics
When *rake db:migrate*, or *rake db:structure:load* is executed as part of your deployment, your structure.sql/migrations are executed against your database.
(note: your structure.sql may contain migrations to execute)

If migrations are executed then rails will try and execute the below in an attempt to ensure that the structure.sql is kept up to date.

{%include _inlines/Tutorials/common/2013-09-26-db-structure-dump-error/code_2013-09-26-db-structure-dump-error_the-basics-rakedbst.md %}


However, as your deployment on Cloud 66 is an endpoint (ie. you are not commiting changes from your Cloud 66 server back to your repository), this is a completely unnecessary step. The structure.sql file that is generated on your webserver will never be commited back to your repository.

The error can occur when structure dump is executed but your web-server may not have the dump tools locally required to execute the dump task. This occurs mainly when your database server is located externally (or on another physical server)

