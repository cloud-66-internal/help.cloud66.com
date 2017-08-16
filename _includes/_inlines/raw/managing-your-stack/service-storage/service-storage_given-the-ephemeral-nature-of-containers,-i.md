---
post: 
---

#Given the ephemeral nature of containers, it's important to consider storage solutions to avoid data loss. While we currently suggest mounting volumes from your container to the host, we are also working on other more scalable solutions.

The `volumes` directive allows you to mount custom host folders inside your container. This is useful if you're looking to run a database service for instance, as data written to the local filesystem of your container will not be persisted between container instances. The volumes option is a list of `HOST_FOLDER:CONTAINER_FOLDER`. You can optionally specify `ro` or `rw` on the end to specify that the the container can read/write to the host folder (the default is read/write if not specified)




**Note:** paths must be absolute.




{% highlight yaml %}
services:
    &#60;service_name&#62;:
        volumes: ["/tmp:/tmp_host", "/readonly/folder:/mnted_readony:ro"]
{% endhighlight %}
