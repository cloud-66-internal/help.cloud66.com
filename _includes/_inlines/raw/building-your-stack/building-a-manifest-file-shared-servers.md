#### Shared Servers

You can share a server between two applications. This could be in cases like using the same server for both your Rails app and the MySQL server behind it.

Each shared server definition specifies the name of another server definition in the manifest file for which the applications will then share the physical server:

{% highlight yaml %}
production:
    rails:
        server:
            same_as: *another_existing_servers_unique_name*
{% endhighlight %}

