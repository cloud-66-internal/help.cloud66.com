
## Database deployment types

### No database (external)

This option allows you to deploy your application without a database managed by Cloud 66, and is ideal if it is hosted externally. Please note that if there is no connectivity to your database, or your database host is not configured correctly, the deployment will fail.

### Local database

This option deploys your chosen database to the same server as your web server - this is intended primarily for development, as running your database locally in production is not advised. In this case, your application database configuration will be amended to target your local database server. If you scale up your web server, these settings will also be amend automatically to reflect your database configuration.

### Dedicated database

This option will automatically create a new server for your database and configure your application accordingly.

### Upgrading your database

Cloud 66 will not do in-place database upgrades, because this process may cause your application to stop working or may not be possible automatically. To upgrade your database through Cloud 66, we recommend that you create a new stack (at which point Cloud 66 will deploy the newer database version).

Once the new stack is created, you can migrate data from your old stack to your new stack.

