---
menuheaders: [ "About running background processes", "Important", "How to run background processes", "Running processes with unique identifiers", "Scaling background processes", "Pause and resume background processes" ]
layout: post
template: one-col
title: Running background processes
categories: Deployment
lead: ""
legacy: false

permalink: /:collection/:path
---









## About running background processes

You can use Procfiles to ensure that your background jobs run and are monitored. Doing so is as easy as defining them in the root of your application, in a file called 
Procfile
.









### Important

Specifying processes in a Procfile currently only apply to Rack-based stacks, not Docker stacks.




Should you wish to use different processes in different environments, you can name your Procfile in the following convention:





```
Procfile_ENV
```





For example, to limit specific processes to running only in your development environment, call the file 
Procfile_development
.






## How to run background processes

A typical Procfile may look something like this:





```
worker: rake resque:work QUEUE=*
scheduler: rake resque:scheduler
```





The commands above would run 
rake resque:work QUEUE=*
 and 
rake resque:scheduler
 and monitor them. Cloud 66 will attempt to bring processes that go down or crash up again. Processes are also instructed to start when your server is booted. An overall view of your processes is available in your stack detail page.

You can reference your stack environment variables with a `$` before the name. This will be replaced by the actual value in the command executed. As an example, `$RAILS_ENV` will be evaluated as `production` if you are in the production environment.






## Running processes with unique identifiers

To assign a unique identifier to your process (for example with Sidekiq), use the 
&#123;&#123;UNIQUE_INT&#125;&#125;
 notation. For example, your process could look as follows:


```{% raw %}
worker: bundle exec sidekiq -e production -i {{UNIQUE_INT}}
```{% endraw %}


This integer should be unique across processes, so that multiple processes won't clash, but may not be unique across servers.






## Scaling background processes

You can scale your background processes up and down on the process server page. On your stack detail page, click the link to your _Process server_ group on your stack detail page. Use the _+_ and _-_ buttons to scale your processes up and down.

You can also scale up a [standalone process server]({% if include.product == "skycap" %}https://help.cloud66.works/maestro/stack-management/scaling.html{% else %}https://help.cloud66.works/{{ include.product }}/stack-management/scaling.html{% endif %}) for more resources.






## Pause and resume background processes

On each process server you can pause and resume your background processes! You will find that in your stack page under process server and on the top right corner of each server box.

* **Pause** is scaling down the processes to zero.
* **Resume** is scaling them back up to the number of processes there were before pause.

