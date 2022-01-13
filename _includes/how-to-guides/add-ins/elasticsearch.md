## Overview

[Elasticsearch](http://www.elasticsearch.org/) is a powerful open source search and analytics engine, and it's easy to add to your application as an add-in.

## Add Elasticearch
To add Elasticsearch to your application, access the add-ins menu, click _Elasticsearch_ and choose the size of your new server. 

This adds three environment variables to your application: `ELASTICSEARCH_ADDRESS_INT`, `ELASTICSEARCH_ADDRESS_EXT` and `ELASTICSEARCH_ADDRESS`, which you can use to connect to your Elasticsearch instance.

{% if page.collection == 'maestro' %}
#### Note
<div class="notice notice-warning">
	<p>For containerized applications this will be added to the host not as a container.</p>
</div>
{% endif %}

## Upgrading Elasticsearch

Cloud 66 does not support in-place upgrades for Elasticsearch. Instead you should follow the checklist below to create a new Elasticsearch Cluster, and migrate your data to it.

### Step 1: Create a new Elasticsearch server and group

You need to create a fresh set of servers running the latest version of Elasticsearch. To do this:

- Log into your Cloud 66 dashboard
- Click on the application running Elasticsearch
- Scroll down to the Add-Ins panel and click the *Install Add-ins* button
- Click the *Install Now* button under the Elasticsearch box
- Type a **new** group name into drawer that opens (don't use "default" or another existing name)
- Choose an appropriate server size and click *Add Server*

We will now build a brand new instance of Elasticsearch - you can watch the logs, or come back later (we will email you when the build is done).

<div class="notice"><p>If your instance of Elasticsearch is sharing your application server, you will need to clone your application as we cannot upgrade Elasticsearch in-place.</p></div>

### Step 2: Scale up more servers in the group (optional)

If your application requires more than one Elasticsearch server to handle the load, you should add them to your new group now. To do so:

- From your application overview, click on the new Elasticsearch cluster you created in Step 1 (in the **Application Servers** panel)
- Click the green *Add Database Server* button at the top right of the **ElasticSearch Cluster** page
- Choose the required server size and click *Add Server*

We'll now build another server for your cluster. You can repeat this step as many times as you require.

<div class="notice notice-warning"><p>If you are running multiple Elasticsearch servers, for resilience it is recommended to run an ODD number of servers. Running an even number of servers increases the chance of data loss in the event of physical server failure.</p></div>

### Step 3: Migrate your Elasticsearch data to your new database group

Next, transfer your data from your existing Elasticsearch instance to your new group. We recommend following the [official documentation](https://www.elastic.co/guide/en/elasticsearch/reference/current/index.html) to do so - be sure to select the correct version of your (existing) instance. 

You can use [Toolbelt (cx) commands](/{{page.collection}}/references/toolbelt/toolbelt-commands.html) like `ssh` , `download` and `upload` to make the process easier, or `scp` directly between your servers if you're more comfortable with that.

### Step 4: Promote your new group to "default"

Once your data is synchronised, you can switch your application to use your new cluster (group). To do so:

- From your application overview, click on the new Elasticsearch cluster you created in Step 1 (in the **Application Servers** panel)
- Click on the Promote to Default button in the right-hand column of the page. This will make the `ELASTICSEARCH_ADDRESS` environment variable point to your NEW Elasticsearch servers

If your application relies on Elasticsearch to function, **we recommend putting your application into maintenance mode** before promoting your new cluster. 

### Step 5: Redeploy and test

Finally, redeploy your application to apply all the changes. Test your application is functioning as expected and then deactivate maintenance mode if everything is working. (If not, you can promote your old cluster to default and then fix any issues you've found.)