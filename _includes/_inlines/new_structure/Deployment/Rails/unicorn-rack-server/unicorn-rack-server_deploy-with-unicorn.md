<!-- post: -->


## Deploy with Unicorn

You need to choose your web server at the time of initial build of the stack. Changes to or from Passenger (the default web server) will not be applied after your stack has initially been analyzed. You can however change freely between other supported servers by simply updating your Gems and Procfile.

To run a Unicorn Rack server, add a line to your Procfile labeled as _custom_web_. Here is an example:

{% highlight ruby %}
custom_web: bundle exec unicorn_rails -c config/unicorn.rb -E $RAILS_ENV -D
{% endhighlight %}

Please take note that Unicorn is running in Daemon mode with the `-D` parameter.




