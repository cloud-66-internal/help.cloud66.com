There are two ways to connect to your databases:

* Accessing the server directly via SSH and then logging in using terminal commands
* Using a desktop database client

{% if include.product == 'maestro' %}
(If you need help connecting your application code to your database via a connection string, consult our [database management guide](/{{page.collection}}/how-to-guides/databases/database-management.html#connecting-your-app-to-your-db-in-maestro).
{% endif %}

## Via SSH

You can connect directly into your database server and invoke a database console from there. To do that, please refer to our [SSH guide](/{{page.collection}}/how-to-guides/common-tools/ssh-to-server.html) documentation.

You can find your database's usernames and passwords on the database server page. [See below](#finding-database-credentials) for more details on how to find that page.

## With a client

To use a database client, you will first need to add a firewall rule to allow traffic from your desktop to your Maestro application. You can [follow our guide](/{{page.collection}}/tutorials/firewall-rule.html) on the subject.

Once the firewall is open you can use a database client from your local computer to access the public IP address of the server hosting the database. You can find that IP by: 

* Visting your [Dashboard](https://app.cloud66.com)
* Opening **Application Overview** for the app in question
* Clicking on the *Servers* tab at the top of the main panel

You can find your database's usernames and passwords on the database server page. See below for more details on how to find that page.

## Finding database credentials

All of your database usernames and passwords can be found on their respective server pages in your Cloud 66 Dashboard. To find the credentials for a database:

1. Log into your [Cloud 66 Dashboard](https://app.cloud66.com/)
2. Click on the name of your application
3. Click on the database server group in the **Application Servers** panel (e.g. *MySQL Servers*)
4. Click on the name of an individual database server
5. In the Server Details page, scroll down until you see the Username and Password fields. You can select the *Show* checkbox to reveal the passwords, or use the clipboard icon to copy them directly.
