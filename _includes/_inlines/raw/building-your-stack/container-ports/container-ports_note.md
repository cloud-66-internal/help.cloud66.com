---
post: 
---

### Note

For HTTPS traffic to be available to the outside world you still need to [setup your SSL certificates](/stack-add-ins/ssl-certificate).




Omitting the HTTPS port is possible by dropping the last part:

{% highlight yaml %}
services:
    my_service:
        ports: ["3000:80"]
{% endhighlight %}

