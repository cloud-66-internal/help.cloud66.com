---
menuheaders: [ "Connect to your database", "Examples of connecting to your database", "Note", "Example application" ]
layout: post
template: one-col
title: Getting started with Rails Stacks
categories: Deployment
lead: ""
legacy: false

permalink: /:collection/:path
---









## Connect to your database

If a database is detected, it will automatically be provisioned as required (including the database itself), and environment variables will be created. You will need to update your code with the environment variables you wish to use, for example `MYSQL_URL`.

Should you wish to change the database username/password after build, you will have to do this manually, which will involve recreating backup jobs to reflect the new values.






### Examples of connecting to your database

The notation in the examples below allow you to seamlessly switch between your local development environment and your Cloud 66 environment without
changing your database settings. The logic will determine if the Cloud 66 environment variable exists, and depending on the result, generate a value
or use your own value. Alternatively, you can simply hard-code values as you wish.









## Note

You can use [Yamllint.com](http://yamllint.com/) to check your YAML syntax before committing.






## Example application

* [Rails with MySQL](https://app.cloud66.com/stacks/new?eduid=rails_mysql)

