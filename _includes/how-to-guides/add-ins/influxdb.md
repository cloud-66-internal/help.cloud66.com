

[InfluxDB](https://influxdata.com/) is an open source Time-Series database, and it's easy to add to your application as an add-in.

## Add InfluxDB
To add InfluxDB to your application:

1. Open the **Application Overview** from the [Dashboard](https://app.cloud66.com/dashboard).
2. Click *Explore Add-ins* or the green **+** in the **Add-ins** panel
3. Click on *Install Now* under **InfluxDB**
4. A panel will slide out from the left with options. Configure as needed and then click *Add Server* to continue.

You can now watch the logs, as usual to see the progress of the process.

{% if page.collection == 'legacy_docker' or page.collection == 'maestro' %}

#### Note
<div class="notice notice-danger">
	<p>For docker applications this will be added to the host not as a container.</p>
</div>
{%endif%}