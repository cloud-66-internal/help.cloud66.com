
## Add MongoDB to your application

To add a MongoDB instance to your application: 

1. Open the **Application Overview** from the [Dashboard](https://app.cloud66.com/dashboard).
2. Click *Explore Add-ins* or the green **+** in the **Add-ins** panel
3. Click on *Install Now* under **MongoDB**
4. A panel will slide out from the left with options. Configure as needed and then click *Add Server* to continue.

If you need more help, please read our [how-to guide on managing databases in Cloud 66](/{{page.collection}}/how-to-guides/databases/database-management.html).

## MongoDB authentication and roles

We support MongoDB authentication by default, and so we will generate a database user and admin user along with passwords. 

For the **database user**, we set the following roles inside MongoDB:

`["readWriteAnyDatabase", "dbAdminAnyDatabase"]`

For the **admin user**, we set the following roles inside MongoDB:

`["root", { role: "dbAdmin", db: "local" }, { role: "dbAdmin", db: "config" }]`

The admin user can only access the database via `127.0.0.1` so it cannot be used via external IP addresses.