---
menuheaders: [ "The basics" ]
layout: post
template: one-col
title: Errors due to different group configs in database.yml
categories: how-to-guides
lead: ""
legacy: false

permalink: /:collection/:path
---








## The basics

Errors can occur during deployments due to there being different adapters defined in the "development" and the "test" groups in your database.yml file.
Your error will differ depending on the adapters you've chosen.

For example, if your database.yml file's "development" group contains:

	adapter: postgresql


And it also contains a "test" group with:





```
adapter: mysql2
```





This will result in the following slightly obtuse error during your code deployment:





```
uninitialized constant Mysql2
```





