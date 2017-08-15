## Seed script

Simply add a bash script to your repository that contains the script for seeding your database.

This could be a *custom script*, a *custom rake command*, or the default Rails `rake db:seed command` depending on your requirements/implementation. 
In our example, we will use the default Rails [rake db:seed command](http://edgeguides.rubyonrails.org/migrations.html#migrations-and-seed-data). 

Create the file `/.cloud66/dbseed.sh` as below:



{%include _inlines/path_to_code %}



