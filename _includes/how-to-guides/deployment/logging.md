
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

### Default Rails deployments

Default Rails deployments on Cloud 66 use Passenger (via Nginx) and the logs are stored in `$STACK_PATH/log`:

- Application (Rails) log: `$STACK_PATH/log/<environment>.log`
- Nginx error (server) log: `$STACK_PATH/log/nginx_error.log`
- Background processes: `$STACK_PATH/log/<PROCESS_NAME>_<NUMBER_OF_PROCESS>.log`

### Custom Rails deployments

If you are using a [custom web server](notion://www.notion.so/rails/tutorials/custom-web-servers.html), such as [Puma](notion://www.notion.so/rails/how-to-guides/rack-servers/puma-rack-server.html), [Thin](notion://www.notion.so/rails/how-to-guides/rack-servers/thin-rack-server.html) or [Unicorn](notion://www.notion.so/rails/how-to-guides/rack-servers/unicorn-rack-server.html) then your log file paths will depend on whether your servers use [systemd](/rails/how-to-guides/deployment/systemd.html) or [Bluepill](/rails/how-to-guides/deployment/bluepill-legacy.html) to manage processes. To check this:

- Open your [Cloud 66 Dashboard](https://app.cloud66.com/), and click the application in question
- Click ⚙*Settings & Information* in the right-hand panel
- Find the **Process Manager** line - it will show you which one your application is using

#### Servers using systemd

- Application (Rails) log: `$STACK_PATH/log/<environment>.log`
- Application logs (STDOUT + STDERR):  
    &#9702; Web: `$STACK_PATH/log/custom_web.log`  
    &#9702; Background processes: `$STACK_PATH/log/<PROCESS_NAME>_<NUMBER_OF_PROCESS>.log`  
- System logs  
    &#9702; Web server: `sudo journalctl -u cloud66_web_server`  
    &#9702; Background processes: `sudo journalctl -u cloud66_process_<PROCESS_NAME>@* -f`

#### Servers using Bluepill (legacy)

- Application (Rails) log: `$STACK_PATH/log/<environment>.log`
- Application logs (STDOUT + STDERR):  
  &#9702; Web: `$STACK_PATH/log/unicorn_bluepill.log`  
  &#9702; Background processes: `$STACK_PATH/log/user_<PROCESS_NAME>_<NUMBER_OF_PROCESS>.log`
- System logs:  
  &#9702; Web server: `/tmp/web_server_bluepill.log`  
  &#9702; Background processes: `$STACK_PATH/log/user_<PROCESS_NAME>_pill.log`

{%endif%}

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
