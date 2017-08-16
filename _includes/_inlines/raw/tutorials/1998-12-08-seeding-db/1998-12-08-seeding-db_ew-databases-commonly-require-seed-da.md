---
post: 
---

#ew databases commonly require seed data in order to be functional for an application.
When you deploy a new stack with Cloud 66 (and choose to have a new database provisioned), we will provision that database for you. However, the database will not have any data in it.

To address this, you can make use of a [deploy hook](http://help.cloud66.com/deployment/deploy-hooks) to execute your required scripts and seed your database during deployment. This guide will show you how to create a deploy hook and custom script to seed your database.

