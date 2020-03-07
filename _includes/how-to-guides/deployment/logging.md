
## Overview

When Cloud 66 provisions servers, we automatically configure logging for various services. There are several logs available for different server components. Depending on the specifics of your application, log names and directories may vary. The information below is for a typical case.

{% if page.collection == 'maestro' %}

## Containerized applications

Given the ephemeral nature of containers, we recommend you use the `log_folder` directive to persist container logs on your host, so that they don't disappear when the container stops. By default, any folder specified with `log_folder` will be available on the host under `/var/log/containers/<service_name>`, for example:

{% highlight yaml %}
services:
    <service_name>:
        log_folder: /var/deploy/app/log
{% endhighlight %}
{%endif%}

{% if page.collection == 'rails' %}

## Rails applications

### Web (application) server logs

#### Default Rails deployments

Default Rails deployments on Cloud 66 use Passenger (via Nginx) and the logs are stored in `$STACK_PATH/log`:

* Application log: `$STACK_PATH/log/<environment>.log`
* Nginx error (server) log: `$STACK_PATH/log/nginx_error.log`

#### Custom Rails deployments

If you are using a [custom web server](/rails/tutorials/custom-web-servers.html), such as [Unicorn](/rails/how-to-guides/rack-servers/unicorn-rack-server.html): 

* Application log: `$STACK_PATH/log/<environment>.log`
* Server (bluepill) logs in `/tmp/web_server_bluepill.log`

{%endif%}

### Background processes

Logs for background processes can also be found in `$STACK_PATH/log`, and depend on the name of the process:

* Process log: `$STACK_PATH/log/user_<name>.log`
* Process bluepill log: `$STACK_PATH/log/user_<name>.pill`

### Other

* Auth requests, Fail2Ban: `/var/log` 
* Nginx access and errors: `/opt/nginx/logs`

## Log rotation

Your logs in `$STACK_PATH/log` and `/var/log` are automatically rotated on a daily basis and by default kept for 14 days into a sub-directory called archive/ in each respective directory. These logs are compressed, and can be uncompressed with the following command: 
`gzip -d <log_file>.log.gz`.

#### Note
<div class="notice">
<p>You can set the frequency and the number of rotations to be kept <a href="/{{page.collection}}/references/toolbelt.html#list-your-stack-settings">using toolbelt</a>.</p>
</div>
