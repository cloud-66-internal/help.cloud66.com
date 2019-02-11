
## About logging with Cloud 66
When Cloud 66 deploys your servers, we also configure the logging for various services on your server. There are several logs available for different parts of your server. Depending on the specifics of your application, log names and directories may vary. The information below applies to most applications.

{% if page.collection == 'maestro' or page.collection == 'legacy_docker' %}
## Docker stacks
Given the ephemeral nature of containers, we recommend you use the `log_folder` directive to persist container logs on your host, so that they don't disappear when the container stops. By default, any folder specified with `log_folder` will be available on the host under `/var/log/containers/<service_name>`, for example:

{% highlight yaml %}
services:
    &#60;service_name&#62;:
        log_folder: /var/deploy/app/log
{% endhighlight %}
{%endif%}

{% if page.collection == 'rails' %}
## Ruby stacks
### Web logs
Web logs are stored in <code>$STACK_PATH/log</code>:

<ul class="list">
<li>Web logger: <pre class="terminal">$STACK_PATH/log/&#60;environment&#62;.log</pre></li>
<li>Nginx error log: <pre class="terminal">$STACK_PATH/log/nginx_error.log</pre></li>
</ul>

If you are using a [custom web server](/rails/tutorials/custom-web-servers.html), such as [Unicorn](/rails/how-to-guides/rack-servers/unicorn-rack-server.html), you can find your web server bluepill logs in <code>/tmp/web_server_bluepill.log</code>.
{%endif%}

### Background processes

Logs for background processes can also be found in <code>$STACK_PATH/log</code>, and depend on the name of the process:

<ul class="list">
<li>Process log: <pre class="terminal">$STACK_PATH/log/user_&#60;name&#62;.log</pre></li>
<li>Process bluepill log: <pre class="terminal">$STACK_PATH/log/user_&#60;name&#62;.pill</pre></li>
</ul>

### Other

<ul class="list">
<li>Auth requests, Fail2Ban etc: <pre class="terminal">/var/log</pre></li>
<li>Nginx access and errors: <pre class="terminal">/opt/nginx/logs</pre></li>
</ul>

## Log rotation
Your logs in `$STACK_PATH/log` and `/var/log` are automatically rotated on a daily basis and by default kept for 14 days into a sub-directory called archive/ in each respective directory. These logs are compressed, and can be uncompressed with the following command: `gzip -d <log_file>.log.gz`.

#### Note
<div class="notice">
<p>You can set the frequency and the number of rotations to be kept <a href="{% if page.collection == "maestro" %}/maestro/references/toolbelt.html#list-your-stack-settings{%else%}/{{page.collection}}/references/toolbelt.html#list-your-stack-settings{%endif%}">using toolbelt</a>.</p>
</div>
