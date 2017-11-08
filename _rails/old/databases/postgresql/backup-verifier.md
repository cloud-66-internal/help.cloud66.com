---
menuheaders: [ "What is a backup verifier?", "Set up a backup verifier", "View backup verification status", "Pricing" ]
layout: post
template: one-col
title: PostgreSQL Backup Verification
categories: Databases
lead: ""
legacy: false
permalink: /:collection/:path
---

{% assign dbtype = "postgres" %}




### Note:

Backup verifier is only supported for Rails stacks.









## What is a backup verifier?

A backup verifier is a great way to ensure that your backups actually contain the data you expect. You simply provide a query that you expect to return a specific result, and we verify that your backup actually returns this value. This feature supports both MySQL and PostgreSQL databases, and requires the use of managed backups. Backup verification runs once every 6 hours for each stack, and you will be notified in the case of a failured verification.






## Set up a backup verifier

Create a file in the `.cloud66` folder in the root of your repository. To verify your backups across all environments, name the file `backup_verifier_mysql.sql` for MySQL, and `backup_verifier_pg.sql` for PostgreSQL backups. You can also specify which environment to run backup verifiers for by appending the environment to the filename. For example, `backup_verifier_mysql_production.sql` or `backup_verifier_pg_staging.sql`.









<div class="notice">

Important!

By including this script in your repository, you are opting in to the use of verified backups and will be charged accordingly. Please see our pricing below for more information.
</div>

To verify your backup, the script must contain a SQL query that returns a data set containing a single column called __result__ with a value of true or false. Should you need to change your verification script at some point, simply commit the change to Git and redeploy your code. Please find below an example of such queries and an example of the output for each respective database.



<div class="notice">
Important! 

Your backup will be assumed to be <b>verified</b> if the value returned from the query is <b>true</b>.
</div>






## View backup verification status

To see your backup verification status, visit your stack detail page, and click the link to your managed backup page. A successfully verified backup will display a green tick, and a failure during verification will result in a red cross - clicking on the red cross will show the error message.






## Pricing

 <table class="table table-bordered table-striped table-small"> 
   <thead> 
    <tr> 
     <th align="center"></th> 
     <th align="center">Stack/month</th> 
     <th align="center">GB/month</th> 
    </tr> 
   </thead> 
   <tbody> 
    <tr> 
     <td>Verified backup</td> 
     <td>$30</td> 
     <td>—</td> 
    </tr> 
   </tbody> 
  </table> 

