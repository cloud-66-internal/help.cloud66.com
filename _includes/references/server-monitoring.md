## Overview

We strongly recommend monitoring the resource usage of your servers - particularly in production environments. Most cloud providers now offer built-in server resource monitoring via their online dashboard. 

If you need additional detail or better reporting, we recommend implementing one of the many excellent cloud reporting solutions. 

Cloud 66 essentially supports any third-party resource monitoring solution that is compatible with servers running Ubuntu 18.04 and above. We have listed some commonly used solutions below, but this list is not exhaustive. 

## Adding a monitoring service to your app

There are two main ways to add a monitoring service to your application:

1. Using a [deploy hook](/{{page.collection}}/tutorials/deploy-hooks.html)
2. Manually, [via SSH](/{{page.collection}}/how-to-guides/common-tools/ssh-to-server.html)

Deploy hooks are generally the best choice because they integrate the monitoring tool into your deployment pipeline and ensure it will be rolled out to every server in your application when you scale up, and that the latest version will be fetched whenever you redeploy. 

If you use a deploy hook, you should consider using Cloud 66's [custom environment variables](/{{page.collection}}/tutorials/env-vars.html) feature to manage the configuration variables for the service. This will allow you to control configuration without having to commit sensitive config files to your repo. 

## Common monitoring solutions

There are several excellent monitoring platforms on the market:

* [Datadog](https://www.datadoghq.com/)
* [Scout](https://scoutapp.com/)
* [New Relic](https://newrelic.com/)
* [Prometheus](https://prometheus.io/)
* [Grafana](https://grafana.com/)
* [Nagios](https://www.nagios.org/)

...and many more. 