### 1. Set a failover group 

- On your dashboard click on "Failover Groups"
- Add a new failover group
- Choose application `A` as primary application
- Click on "add group" 


### 2. Add a CNAME record in your DNS provider dashboard 

To point at the address provided in the failover group and wait for 24 hours to propagate. While you are waiting for the DNS to get propagated you can follow the steps till step 8.



### Note:

If TTL of your DNS is 300 seconds you don't need to wait just continue till the end.


### 3. Database backup

On application `A`set backup for your databases (through add-ins)


### 4. Clone primary application

Visit the overview page for application `A`, click "Clone" from the right sidebar. This will allow you to choose a new application name and environment. Cloning your application will preserve any environment variables from the existing application, and also allows you to define where to deploy to along with other settings.


### 5. Add your database to backup application

Add database or all the databases you need on to the application `B`


### 6. Set up a replication between two applications

On application `B` go to Application Overview &rarr; database server (Redis, MySQL or etc.) and choose the server. On the right side bar click on "configure replication" choose application A (you have to be Administrator on application A otherwise it won't be listed). This makes application B databases slave for application `A`.


### 7. Add the second application to the failover group

to add application B as a backup to failover group, edit the related failover group and add application B as a backup application



### Note:

Make sure DNS record for the failover group is populated



### 8. Put the primary site in to maintenance mode:

- Go to the Application Overview for `A`
- Click on Configure Network / Redirects
- Check _"Put application in Maintenance Mode"_ box
- Apply


### 9. Change the second database master

Do the step 6 but this time in the drop-down menu choose "No data source" (this makes `B`'s db, master)


### 10. Switch to the new application

Go to the failover group and switch to `B`.


We recommend you keep the DNS on the failover group to make this procedure easy in the future.



### 11. [OPTIONAL]Switch your DNS record to the new application

You can now point your DNS to application `B`.

