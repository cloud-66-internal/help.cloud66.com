<!-- usedin: [ _legacy_docker/stack-management/server-monitoring-v1.md, _maestro/stack-management/server-monitoring-v1.md, _node/stack-management/server-monitoring-v1.md, _rails/stack-management/server-monitoring-v1.md] -->


#### Disk usage
Collectd uses the [DF plugin](https://collectd.org/wiki/index.php/Plugin:DF) to collect system usage information. It will show the same information as when running the `df` command directly on your server (divide the value given by 1024 to get MB).

![Collectd disk usage](http://assets.cloud66.com/help/images/collectd_df.png)
