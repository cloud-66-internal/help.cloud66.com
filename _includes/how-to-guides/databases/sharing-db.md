## Important

Ensure that you **do not** select the option for db:schema:load during the build of your second stack, as this could destroy the data on the first stack.


Firstly, you need to [open your firewall]({% if page.collection == "skycap" %}/maestro/tutorials/service-network-configuration.html{% else %}/{{page.collection}}/tutorials/service-network-configuration.html{% endif %}) on the first stack to allow your second stacks web servers to access the database.

You will then reference the database credentials from your first stack in the database.yml of your second stack. You can reference the environment variables for these credentials on your first stack like so (your stack UID is available on your _Stack information_ page):

```
{% raw %}{{ STACK[STACK_UID].ENV_VAR }}{% endraw %}
```

For example, your environment variables would be set like this:

```
{% raw %}MYSQL_ADDRESS={{ STACK[xyz].MYSQL_ADDRESS_INT }}{% endraw %}
{% raw %}MYSQL_DATABASE={{ STACK[xyz].MYSQL_DATABASE }}{% endraw %}
```

Database credentials such as username and password are not available for cross-stack referencing for security reasons. Instead, copy and paste them across as environment variables. Your database.yml would look something like this:

```
host: \<%= ENV['MYSQL_ADDRESS'] %\>
username: \<%= ENV['MYSQL_USERNAME'] %\>
password: \<%= ENV['MYSQL_PASSWORD'] %\>
database: \<%= ENV['MYSQL_DATABASE'] %\>
```

