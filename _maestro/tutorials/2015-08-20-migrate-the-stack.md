---
menuheaders: [ "1. Set a failover group ", "2. Add a CNAME record in your DNS provider dashboard ", "Note:", "3. Database backup", "4. Clone primary stack", "5. Add your database to backup stack", "6. Set up a replication between two stacks", "7. Add the second stack to the failover group", "Note:", "8. Put the primary site in to maintenance mode:", "9. Change the second database master", "10. Switch to the new stack", "11. [OPTIONAL]Switch your DNS record to the new stack" ]
layout: post
template: one-col
title: How to migrate your stack
categories: Tutorials
lead: ""
legacy: false

permalink: /:collection/:path
---








### 1. Set a failover group 

- On your dashboard click on "Failover Groups"
- Add a new failover group
- Choose stack `A` as primary stack
- Click on "add group" 






### 2. Add a CNAME record in your DNS provider dashboard 

To point at the address provided in the failover group and wait for 24 hours to propagate. While you are waiting for the DNS to get propagated you can follow the steps till step 8.









### Note:

If TTL of your DNS is 300 seconds you don't need to wait just continue till the end.






### 3. Database backup

On stack `A`set backup for your databases (through add-ins)






### 4. Clone primary stack

Visit the stack page of stack `A`, click "Clone" from the right sidebar. This will allow you to choose a new stack name and environment. Cloning your stack will preserve any environment variables from the existing stack, and also allows you to define where to deploy to along with other settings.






### 5. Add your database to backup stack

Add database or all the databases you need on to the stack `B`






### 6. Set up a replication between two stacks

On stack `B` go on stack page/database server (Redis, MySQL or etc.) and choose the server. On the right side bar click on "configure replication" choose stack A (you have to be Administrator on stack A otherwise it won't be listed). This makes stack B databases slave for stack `A`.






### 7. Add the second stack to the failover group

to add stack B as a backup to failover group, edit the related failover group and add stack B as a backup stack









### Note:

Make sure DNS record for the failover group is populated









### 8. Put the primary site in to maintenance mode:

- Go to the Stack page of `A`
- Click on Configure Network / Redirects
- Check _"Put stack in Maintenance Mode"_ box
- Apply






### 9. Change the second database master

Do the step 6 but this time in the drop-down menu choose "No data source" (this makes `B`'s db, master)






### 10. Switch to the new stack

Go to the failover group and switch to `B`.




We recommend you keep the DNS on the failover group to make this procedure easy in the future.









### 11. [OPTIONAL]Switch your DNS record to the new stack

You can now point your DNS to stack `B`.

