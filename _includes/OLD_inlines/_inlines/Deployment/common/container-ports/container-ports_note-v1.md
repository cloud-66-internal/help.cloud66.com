


### Note

For HTTPS traffic to be available to the outside world you still need to [setup your SSL certificates](https://help.cloud66.works/{{ include.product }}/addins/ssl/).




Omitting the HTTPS port is possible by dropping the last part:

{% highlight yaml %}
services:
    my_service:
        ports: ["3000:80"]
{% endhighlight %}

