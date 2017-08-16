<!-- post: -->


#By default, docker services will use as much CPU or memory as they require. You may, however, wish to set a hard limit on memory, or the relative CPU shares used by a service. This can be accomplished with the `constraints/resources` directive.

The default number of CPU shares given to a service is 1024. This is a relative number - if the service of container A has 1024 CPU shares, and the service of container B has 512 CPU shares, and both containers attempt to use 100% of the CPU, then container B will receive half of the total CPU time. This only applies when CPU-intensive tasks are running, as if one container is idle then the others can use the remaining CPU time.

The memory limit will apply to RAM usage, and SWAP usage. A valid entry is a positive number, followed by one of "b", "k", "m", or "g", with the minimum being "4m".

{% highlight yaml %}
services:
    &#60;service_name&#62;:
        constraints:
            resources:
                memory: "100m"
                cpu: 512
{% endhighlight %}
