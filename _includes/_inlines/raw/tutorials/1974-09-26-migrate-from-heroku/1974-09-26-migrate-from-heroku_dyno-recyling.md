<!-- post: -->


### Dyno recyling

Heroku restarts all dynos at 24 hours of uptime, which may conceal possible memory leaks in your application. When you migrate to Cloud 66, these will become noticeable because we don't restart your workers (other than during a deployment), so the leak can grow to be bigger. A temporary solution is to re-create the Heroku restart behavior, for example with this script:

{% highlight bash %}
for OUTPUT in $(pgrep -f sidekiq); do kill -TERM $OUTPUT; done
{% endhighlight %}

This will send a TERM signal to any Sidekiq workers, giving them 10 seconds (by default) to finish gracefully. Any workers that don't finish within this time period are forcefully terminated and their messages are sent back to Redis for future processing. You can customize this script to fit your needs, and add it to your stack as a [shell add-in](http://help.cloud66.com/stack-add-ins/shell).

Note that this is a temporary solution, and we recommend that you use a server monitoring solution to identify the source of your leak.

