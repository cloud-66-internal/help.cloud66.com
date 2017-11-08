---
menuheaders: [ "About one-time database imports", "Using one-time database imports", "Note", "Troubleshoot" ]
layout: post
template: one-col
title: Database one-time import
categories: Databases
lead: ""
legacy: true

permalink: /:collection/:path
---



## About one-time database imports

One-time database imports allow you to easily transfer your database from one stack to another, using **MySQL**, **PostgreSQL**, **MongoDB** and **Redis** databases.

To use this feature, you will need two stacks with the same database type - one is the _source_ and the other is the _target_ for the data migration. This process will import the latest available **managed backup** from your _source_ stack, replacing the contents of your _target_ with the backup. We recommend that you backup your _target_ database before running this.


## Using one-time database imports

On your stack detail page, visit your database server group (eg. _MySQL server_) and click the name of your main database server. In the right sidebar, click _Database Import_, which will display a list of available _source_ stacks.

Select the stack you want to use as a _source_ and click _Import_, which will start the data import from your _source_ to the _target_.



### Note

You need _Control stack_ access rights to see the _One-time data import_ icon. Additionally, you will only see _source_ stacks that you have _Stack administrator_ rights to.


## Troubleshoot
   
   It can happen that the desired stack is not listed when using DATABASE IMPORT, there could be a few reason behind this:
   
   1. **Your user is not Administrator on the sources stack:**
   
        If you are not the account owner or in another word you are a team member, your role on the source stack may be different from Administrator, you can ask your organization owner to check this and make a decision based on that (either change your role on the source stack or the owner import the database).
   2. **The backup on the source stack is Binary:**
   
         Since the Binary backups take the backup from the file system importing it to another stack (i.e different server) is a tricky, so we've opted out for not allowing users to import database when Binary. 
   You can check this by clicking on the backup link, and then edit to see if it a binary backup or not. If it is a binary backup you can change it to text first, run the back up and then go the destination stack and see that the source stack should be listed. After you are done with the database import you can go to the source stack and revert it back to Binary.
