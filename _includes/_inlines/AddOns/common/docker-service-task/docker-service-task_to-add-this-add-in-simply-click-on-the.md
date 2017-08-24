<!-- usedin: [ _legacy_docker/AddOns] - post: -->


To add this add-in, simply click on the _+_ button on the add-ins menu of your stack page, which will show you a variety of add-ins for your stack.

This add-in allows you to schedule the execution of tasks (shell commands) on your Docker services. You can set the timing of the job in either minutes, hours, a daily, weekly and monthly time, as well as on demand (under the hood, scheduled jobs are run as cronjobs on your server).  The command runs against the sh shell by default - if the task fails, try using `/bin/bash -c 'command'`.

Each time it runs, it starts a new container from the service you select, executes the task and destroys the container. Your run results (success, failure and any output) can be seen in real-time on the job detail page.
