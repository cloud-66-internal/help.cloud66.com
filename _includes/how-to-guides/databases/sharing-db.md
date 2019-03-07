#### Important
<div class="notice notice-warning"><p>
Ensure that you <strong>do not</strong> select the option for <code>db:schema:load</code> during the build of your second application, as this could destroy the data on the first application.
</p></div>

Firstly, you need to [open your firewall]({% if page.collection == "maestro" %}/maestro/how-to-guides/deployment/service-network-configuration.html{% else %}/{{page.collection}}/tutorials/service-network-configuration.html{% endif %}) on the first application to allow your second application's web servers to access the database.

You will then reference the database credentials from your first application in the database.yml of your second application. You can reference the environment variables for these credentials on your first application as follows:

```
{% raw %}{{ APP[APP_UID].ENV_VAR }}{% endraw %}
```
(your application UID is available under the **Information** tab of your _Settings & Information_ page)

For example, your environment variables would be set like this:

```
{% raw %}MYSQL_ADDRESS={{ APP[xyz].MYSQL_ADDRESS_INT }}{% endraw %}
{% raw %}MYSQL_DATABASE={{ APP[xyz].MYSQL_DATABASE }}{% endraw %}
```

Database credentials such as username and password are not available for cross-application referencing for security reasons. Instead, copy and paste them across as environment variables. Your database.yml would look something like this:

```
host: \<%= ENV['MYSQL_ADDRESS'] %\>
username: \<%= ENV['MYSQL_USERNAME'] %\>
password: \<%= ENV['MYSQL_PASSWORD'] %\>
database: \<%= ENV['MYSQL_DATABASE'] %\>
```

