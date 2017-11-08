---
menuheaders: [ "Control your Rails database migrations" ]
layout: post
template: one-col
title: Control your Redis Migrations with Rails
categories: Databases
lead: "Control your Redis Migrations on Cloud 66 Rails stacks"
legacy: false
recommendedName: [ "Redis with Rails", "Backup Verifiers", "Backup", "Replication"  ]
recommendedLinks: [ "index.html", "backup-verifier.html", "backup.html", " replication.html" ]
permalink: /:collection/:path
---



## Control your Rails database migrations

Cloud 66 chooses a server to perform the migrations - all other servers will wait until the migrations are finished before continuing with deployment. You can see which server performs the migrations in the Stack Information page, and change it using the `c66.migrations.run` [reserved tag](https://help.cloud66.works/rails/deployment/reserved-tags.html).

You can control your Rails database migrations by setting `run.deploy.command` option through [Stack settings](https://help.cloud66.works/rails/toolbelt/settings.html) via [Toolbelt](https://help.cloud66.works/rails/toolbelt/introduction.html) which gives you the option of running migrations or not.


```
$ cx settings set -s my_stack run.deploy.command true
```


When you have disabled `run.deploy.command` in [Stack settings](https://help.cloud66.works/rails/toolbelt/settings.html) , you still have the option to run migrations on a one-off deployment by clicking _Deploy_ -> _Deploy with options_ and selecting _Run database migrations_.



