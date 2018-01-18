---
layout: post
template: one-col
title: Seeding your database
categories: Tutorials
lead: ""
legacy: false

permalink: /:collection/:path
---


## Seed script

Simply add a bash script to your repository that contains the script for seeding your database.

This could be a *custom script*, a *custom rake command*, or the default Rails `rake db:seed command` depending on your requirements/implementation. 
In our example, we will use the default Rails [rake db:seed command](http://edgeguides.rubyonrails.org/migrations.html#migrations-and-seed-data). 

Create the file `/.cloud66/dbseed.sh` as below:

```
#!/bin/bash
cd $STACK_PATH
bundle exec rake db:seed
```




## Deploy hook

Add a deploy hook to execute the above script during the first deploy (on the first server only). 

Create the file `.cloud66/deploy_hooks.yml` as below (replacing *production* with your target environment).

```
production:
  after_symlink: # Or use after_rails depending on your application
    - source: /.cloud66/dbseed.sh
      destination: /tmp/dbseed.sh
      target: rails
      execute: true
      run_on: single_server
      apply_during: build_only      
```





## Note

    
The deploy hook example above will only execute during the _build_ for a new stack. If you want to seed an existing stack you could either

*   Execute the seed command manually, or
*   Change the _apply_during_ specification of the deploy hook (could be used for DB data resets during subsequent testing deploys for instance)

