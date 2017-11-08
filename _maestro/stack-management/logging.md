---
menuheaders: [ "About logging with Cloud 66", "Docker stacks", "Ruby stacks", "Web logs", "Background processes", "Other", "Log rotation" ]
layout: post
template: one-col
title: Logging
categories: stack-management
lead: ""
legacy: false

permalink: /:collection/:path
---



## About logging with Cloud 66

When Cloud 66 deploys your servers, we also configure the logging for various services on your server. There are several logs available for different parts of your server. Depending on the specifics of your application, log names and directories may vary. The information below applies to most applications.


## Docker stacks

Given the ephemeral nature of containers, we recommend you use the `log_folder` directive to persist container logs on your host, so that they don't disappear when the container stops. By default, any folder specified with `log_folder` will be available on the host under `/var/log/containers/
`, for example:

{% highlight yaml %}
services:
    <service_name>:
        log_folder: /var/deploy/app/log
{% endhighlight %}


## Ruby stacks


### Web logs

Web logs are stored in `$STACK_PATH/log`:

*   Web logger: 

```
$STACK_PATH/log/<environment>.log
```

*   Nginx error log: 

```
$STACK_PATH/log/nginx_error.log
```


{% if include.product == "rails" %}
If you are using a [custom web server](https://help.cloud66.works/{{ include.product }}/deployment/custom-web-servers.html), such as [Unicorn](https://help.cloud66.works/{{ include.product }}/deployment/rack-webservers/unicorn-rack-server.html), you can find your web server bluepill logs in `/tmp/web_server_bluepill.log`.
{% endif %}

### Background processes

Logs for background processes can also be found in `$STACK_PATH/log`, and depend on the name of the process:

*   Process log: 

```
$STACK_PATH/log/user_<name>.log
```

*   Process bluepill log: 

```
$STACK_PATH/log/user_<name>.pill
```




### Other

*   Auth requests, Fail2Ban etc: 

```
/var/log
```

*   Nginx access and errors: 

```
/opt/nginx/logs
```




## Log rotation

Your logs in `$STACK_PATH/log` and `/var/log` are automatically rotated on a daily basis into a sub-directory called archive/ in each respective directory. These logs are compressed, and can be uncompressed with the following command: `gzip -d 
.log.gz`.

