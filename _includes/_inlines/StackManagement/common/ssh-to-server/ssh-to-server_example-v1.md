<!-- usedin: [ _legacy_docker/stack-management/ssh-to-server-v1.md, _maestro/stack-management/ssh-to-server-v1.md, _node/stack-management/ssh-to-server-v1.md, _rails/stack-management/ssh-to-server-v1.md] -->


### Example
{% highlight bash %}
cx ssh -s "My Awesome App" web
cx ssh --gateway-key ~/.ssh/bastion_key  -s "My Awesome App" Lion -e production
{% endhighlight %}

See [toolbelt shortcuts](https://help.cloud66.works/{{ include.product }}/toolbelt/introduction.html), for information on how you can make this even easier.

