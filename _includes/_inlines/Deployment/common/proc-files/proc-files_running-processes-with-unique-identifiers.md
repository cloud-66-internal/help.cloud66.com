<!-- usedin: [ _rails/deployment/proc-files.md] -->


## Running processes with unique identifiers

To assign a unique identifier to your process (for example with Sidekiq), use the 
&#123;&#123;UNIQUE_INT&#125;&#125;
 notation. For example, your process could look as follows:


```{% raw %}
worker: bundle exec sidekiq -e production -i {{UNIQUE_INT}}
```{% endraw %}


This integer should be unique across processes, so that multiple processes won't clash, but may not be unique across servers.

