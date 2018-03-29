
Although Cloud 66 detects server connectivity issues, we don't currently detect application states in the dashboard.
There is a lot of complexity around the numerous scenarios possible, and some applications such as APIs may not have a _healthy_ state in the same way that web applications do. Other applications may not be open to the world.

There are external services tailored for this type of monitoring, which allow you to customize your monitoring as required. For example, [Pingdom](https://www.pingdom.com/) offers a great amount of flexibility in this area.

We use [Collectd](https://collectd.org) to monitor your servers for their CPU, memory and disk space. Collectd is a light-weight daemon that collects, transfers and stores performance data for servers. The charts for this information are displayed on your server page, and you can choose which interval you'd like to see:

![Collectd interval](http://assets.cloud66.com/help/images/collectd_interval.png)

#### CPU usage
Contrary to other CPU usage metrics, the [Collectd CPU plugin](https://collectd.org/wiki/index.php/Plugin:CPU) does not collect percentages - instead it collects "jiffies", the units of scheduling.
On many Linux systems there are circa 100 jiffies in one second, but this does not mean you will end up with a percentage.
Depending on system load, hardware, whether or not the system is virtualized and possibly half a dozen other factors there may be more or less than 100 jiffies in one second.
There is absolutely no guarantee that all states add up to 100, an absolute must for percentages.

![Collectd cpu usage](http://assets.cloud66.com/help/images/collectd_cpu.png)

#### Memory usage
Collectd uses the [Memory plugin](https://collectd.org/wiki/index.php/Plugin:Memory) to collect physical memory utilization. The values are reported by their use by the operating system, and include _used_, _buffered_, _cached_ and _free_.

![Collectd memory usage](http://assets.cloud66.com/help/images/collectd_memory.png)

#### Disk usage
Collectd uses the [DF plugin](https://collectd.org/wiki/index.php/Plugin:DF) to collect system usage information. It will show the same information as when running the `df` command directly on your server (divide the value given by 1024 to get MB).

![Collectd disk usage](http://assets.cloud66.com/help/images/collectd_df.png)