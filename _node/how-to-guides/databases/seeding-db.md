---
layout: post
template: one-col
title: Seeding your database
categories: how-to-guides/databases
lead: "How to add seed data to your database"
tags: ["customization"]
legacy: false
permalink: /:collection/:path:output_ext
---


## Seed script

The first step is to add a bash script to your repository that contains the script for seeding your database.

This could be a *custom script*, a *custom rake command*, or the default Rails `rake db:seed command` depending on your requirements/implementation. 
In our example, we will use the default Rails [rake db:seed command](https://edgeguides.rubyonrails.org/migrations.html#migrations-and-seed-data). 

Create the file `/.cloud66/dbseed.sh` as below:

```shell
#!/bin/bash
cd $STACK_PATH
bundle exec rake db:seed
```




## Deploy hook

Add a deploy hook to execute the above script during the first deploy (on the first server only). 

Create the file `.cloud66/deploy_hooks.yml` as below (replacing *production* with your target environment).

```yaml
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

    
The deploy hook example above will only execute during the _build_ for a new application. If you want to seed an existing application you could either

*   Execute the seed command manually, or
*   Change the _apply_during_ specification of the deploy hook (could be used for DB data resets during subsequent testing deploys for instance)

