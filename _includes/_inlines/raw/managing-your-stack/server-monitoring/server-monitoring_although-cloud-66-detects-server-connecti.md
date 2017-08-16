---
post: 
---

#Although Cloud 66 detects server connectivity issues, we don't currently detect application states in the dashboard.
There is a lot of complexity around the numerous scenarios possible, and some applications such as APIs may not have a _healthy_ state in the same way that web applications do. Other applications may not be open to the world.

There are external services tailored for this type of monitoring, which allow you to customize your monitoring as required. For example, [Pingdom](https://www.pingdom.com/) offers a great amount of flexibility in this area.

We use [Collectd](https://collectd.org) to monitor your servers for their CPU, memory and disk space. Collectd is a light-weight daemon that collects, transfers and stores performance data for servers. The charts for this information are displayed on your server page, and you can choose which interval you'd like to see:

![Collectd interval](http://assets.cloud66.com/help/images/collectd_interval.png)

