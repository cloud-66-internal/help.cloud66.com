
## About scaling servers

You can scale your servers in two ways: horizontal and vertical. Horizontal scaling involves adding more servers, whereas vertical scaling involves altering the resources of a specific server, for example increasing the server size.

### Horizontal scaling

Horizontal scaling works differently for each server type, and is only available if you have deployed using your cloud provider.

## Web servers

To scale up your web servers, start by adding a load balancer to your application, which will distribute traffic to your servers. Next, from your Application Overview, click the link to your web server group (e.g. Docker server). To add a web server, click Scale up in the top right corner, select your desired server size and quantity, and click Scale up. Your new server(s) will automatically be added to the load balancer after they have completed provisioning and deployment, ready to serve traffic.

If you are using AWS, you will also have the option to scale your servers to different [Availability Zones](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/using-regions-availability-zones.html) within your region.

You can also scale down your web servers. From your Application Overview, click the link to your web server group (e.g. Docker server), and click the X icon next to the server you would like to scale down. This server will automatically be removed from your load balancer, but you will need to delete it from your cloud provider. Note that your primary web server cannot be scaled down, because this would leave you without a web server.

### Process servers
When you first build your application, your processes are run on your web server by default. To scale up a process server, click the link to your Process server group on your Application Overview. Next, click New process server in the top right corner, select the desired server size and quantity, and click Scale up.

Once the server is ready, you can move your processes from the web server to the process server by using the + and - buttons. The process server is very much like a web server, as it needs all the code and dependencies for your workers. By default however, it will not serve web content. If you would like the process server to serve web content, add a load balancer to your application and access the load balancer page. This page allows you to toggle serving web content from a process server On and Off.

## Database servers

You can scale your database servers through database replication, or Elasticsearch through [sharding](/{{include.product }}/how-to-guides/scaling/elasticsearch-scaling.html). See our [database management section](/{{page.collection}}/how-to-guides/databases/database-customization.html) for more information.

{% if page.collection == 'rails' %}

## Vertical scaling

A number of cloud vendors allow you to increase and/or decrease the size of an existing server via their dashboard, allowing you to change the memory and CPU for existing servers. Vertical scaling works the same way for all server types.

Follow these steps to scale your server vertically:

1. Shut down the server through your cloud dashboard
2. Change the server size and start it up
3. Wait 10 minutes for Cloud 66 to identify the change, and then redeploy the application

Note that if you have a load balancer and are using AWS as your cloud vendor, this is slightly more complex. AWS load balancers use a unique identifier for each server, which is updated when you change the size of the server.

Scaling vertically on AWS with the instructions above will therefore only work with back-end servers but not app servers, as these are served via the load balancer. For application servers, we recommend that you scale up a new server (with your desired size) and delete the old one.

{% endif %}

## Delete Protection

Delete Protection stops servers from being accidentally deleted from an account - for example when you scale down your application. This helps you to prevent your applications from accidentally going down and gives more control over your server mix, including avoiding deletion of servers when scaling down via the API.

To enable Delete Protection feature on any server, simply [add a `c66.delete.protection` tag](/{{page.collection}}/references/reserved-tags.html) to that server. When Delete Protection is enabled on a server, it will be not deleted if a server group is scaled down via the API. Any specific requests to delete the server (via web or API) will also be rejected until the tag is removed.

### Adding and removing Delete Protection

To **add** Delete Protection to a server:

1. Log into your Cloud 66 dashboard and click on your application
2. Click on the Servers tab in the main panel
3. Click on the name of the server you'd like to protect
4. Click on the tag icon (🏷) at the top right of the Server info panel and then click on Add Tags
5. Type in `c66.delete.protection` (it will prompt you to autocomplete if you prefer) and then click Save.
6. You should now be able to see the tag in red just below your server's name.

To **remove** Delete Protection:

1. Open the server page as above and click the three dots to the right of the tag
2. Click the `x` next to the tag.
3. You will be warned about deleting the tag - accept the warning
4. Click Save

Your server can now be deleted as normal.