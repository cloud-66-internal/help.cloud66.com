

[Memcached](http://memcached.org/) is an open source, high-performance, distributed memory object caching system, and it's easy to add to your stack as an add-in.

## Add Memcached
To add Memcached to your stack, access the add-ins menu, click _Memcached_ and confirm the installation. This will install Memcache on your servers for use with your application - you just need to ensure that your app is configured accordingly.

## Customize Memcached
To customize Memcached, use the below syntax in your [manifest file](https://help.cloud66.com/{{page.collection}}/how-to-guides/deployment/building-a-manifest-file.html) and redeploy the stack with `Apply security upgrades` option.

<pre class="terminal">
production:
    memcached:
        shared&#95;group: db
        configuration:
            memory: 1024
            port: 11215
            listen&#95;ip: 127.0.0.1
</pre>

{% if page.collection == 'legacy_docker' or page.collection == 'maestro' %}
<div class="notice notice-danger">
	<h3>Note</h3>
	<p>For docker stacks this will be added to the host not as a container.</p>
</div>
{%endif%}

## Check Memcached

You can find the details about Memcached under your `Settings & Information`, `Information` tab. Since having Memcached as a separate server will not improve performance, Cloud66 will install it on each web server, not as a standalone server.