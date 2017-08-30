<!-- usedin: [ _legacy_docker/Tutorials/2000-01-01-ssh-keys-v1.md, _maestro/Tutorials/2000-01-01-ssh-keys-v1.md, _node/tutorials/2000-01-01-ssh-keys-v1.md, _rails/Tutorials/2000-01-01-ssh-keys-v1.md] -->


## Connect to your server using your key

Simply ensure that your public key contents are included in ~/.ssh/authorized_keys on the target server. Then you should be able to connect with:

{% highlight bash %}
ssh {server user}@{server address}
{% endhighlight %}

If you are using a non-standard key name or location, then you can connect to your server using

{% highlight bash %}
ssh -i {your private key location} {server user}@{server address}
{% endhighlight %}




