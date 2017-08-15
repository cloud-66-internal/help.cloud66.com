#### CPU usage
Contrary to other CPU usage metrics, the [Collectd CPU plugin](https://collectd.org/wiki/index.php/Plugin:CPU) does not collect percentages - instead it collects "jiffies", the units of scheduling.
On many Linux systems there are circa 100 jiffies in one second, but this does not mean you will end up with a percentage.
Depending on system load, hardware, whether or not the system is virtualized and possibly half a dozen other factors there may be more or less than 100 jiffies in one second.
There is absolutely no guarantee that all states add up to 100, an absolute must for percentages.

![Collectd cpu usage](http://assets.cloud66.com/help/images/collectd_cpu.png)

