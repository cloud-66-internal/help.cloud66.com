

## Adding Data Sources

The Rails app also needs a database, lets deploy this to a separate MySQL server. First we add another server to the stack and then we should select MySQL as a Data Source

![Add another server](/images/guides/docker_onboarding/docker_guide_add_server_animated.gif)
    
In this example we created a separate server for the database. If you have a low traffic site it's fine for your database to share with the Docker server.


Lets add the MySQL Data Source, you can add as many Data Sources as your app requires.

![Adding a MySQL datasource to a stck](/images/guides/docker_onboarding/docker_guide_add_datasource.png)

Now the Rails app is configured to run in a container and we've setup a separate MySQL database server. All that remains is to decide what cloud provider to use and what server size and region we should deploy to.

Remember, you can also deploy to your own servers. However you should first [add them as registered servers](http://help.cloud66.com/deployment/registered-servers).

