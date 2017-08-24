<!-- usedin: [ _rails/Tutorials] - post: -->


### 2. Data

Once your code is deployed, it's time to migrate your data across. The process differs for PostgreSQL and MySQL databases:

**PostgreSQL**  

From your Heroku toolbelt, create a database backup URL by running `heroku pgbackups:url`. Next, visit your stack detail page and click the _Import Heroku data_ link. Paste the URL provided by the toolbelt into the field, and click _Import Heroku data_.

**MySQL**  

Start by dumping your existing database. Refer to the [ClearDB documentation for common problems](http://www.cleardb.com/blog/entry?id=common-problems-2).

{% highlight bash %}
$ mysqldump -u [username] -p[password] [dbname] > backup.sql 
{% endhighlight %}

Once you have a MySQL dump file, use the [Cloud 66 toolbelt](http://help.cloud66.com/toolbelt/toolbelt-upload-command) to upload the file to your stack database server. Remember to replace the fields below with your values.

{% highlight bash %}
$ cx upload -s "[stack_name]" --server [database_server_name] backup.sql /tmp/backup.sql
{% endhighlight %}

Next, use the toolbelt to SSH to your server.

{% highlight bash %}
$ cx ssh -s "[stack_name]" [server_first_name]
{% endhighlight %}

Finally, use the command below to import your backup into the database. You can find the generated username, password and database name by visting your stack detail page and clicking into your database server (eg. _MySQL server_).

{% highlight bash %}
$ mysql -u [generated_user_name] -p [generated_password] "[database_name]" < /tmp/backupfile.sql 
{% endhighlight %}

