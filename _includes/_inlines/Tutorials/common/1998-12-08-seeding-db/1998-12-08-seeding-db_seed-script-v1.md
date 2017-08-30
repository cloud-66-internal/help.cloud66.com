<!--  usedin: [ _legacy_docker/Tutorials/1998-12-08-seeding-db-v1.md, _maestro/Tutorials/1998-12-08-seeding-db-v1.md, _node/tutorials/1998-12-08-seeding-db-v1.md, _rails/Tutorials/1998-12-08-seeding-db-v1.md] -->


## Seed script

Simply add a bash script to your repository that contains the script for seeding your database.

This could be a *custom script*, a *custom rake command*, or the default Rails `rake db:seed command` depending on your requirements/implementation. 
In our example, we will use the default Rails [rake db:seed command](http://edgeguides.rubyonrails.org/migrations.html#migrations-and-seed-data). 

Create the file `/.cloud66/dbseed.sh` as below:



{%include _inlines/Tutorials/common/1998-12-08-seeding-db/code_1998-12-08-seeding-db_seed-script-binbash-v1.md  product = include.product %}




