---
layout: post
template: one-col
title: Using production data in staging environments
categories: how-to-guides/databases
order: 20
lead: "How to configure your staging environment to use production data"
legacy: false
tags: ["high-availability","customization"]
permalink: /:collection/:path
---

There are three approaches to sharing data between environments:

1.  [Share your production database with the staging application](/maestro/how-to-guides/databases/shells/sharing-db.html), which would allow read/write access to the database from your staging enviroment. In this scenario, we **strongly urge** you to plan for how you will avoid writing test or junk data to your production database.

2.  [Setup a master/slave database on the production environment](/maestro/how-to-guides/databases/database-replication.html) and connect to the slave from the staging environment.

3.  Use the [database import feature](/maestro/how-to-guides/databases/shells/sharing-db.html) to copy your production database to the staging database. This is the safest alternative, as you're not working directly with your production database.
