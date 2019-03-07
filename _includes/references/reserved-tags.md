
You can tag a variety of your infrastructure components, such as applications (stacks), servers, or firewall rules, in order to differentiate them from one another. Some tag names are reserved by Cloud 66 as they will provide additional functionality to your infrastructure.

## Reserved tags
Cloud 66 currently reserves the following tags:


{% if page.collection == "maestro" %} 
<table class="table table-bordered table-striped table-small">
<tr>
	<td><b>Tag</b></td>
	<td><b>Target</b></td>
	<td><b>Description</b></td>
</tr>
<tr>
	<td>c66.migrations.run</td>
	<td>server</td>
	<td>Sets the given server as the <a href="/maestro/how-to-guides/databases/database-management.html">migrator</a> - migrations will run on that server <i>only</i>, and the rest of the servers will wait until the migrations are performed before continuing with the deployment.</td>
</tr>
</table>
{%else%}
<table class="table table-bordered table-striped table-small">
<tr>
	<td><b>Tag</b></td>
	<td><b>Target</b></td>
	<td><b>Description</b></td>
</tr>
<tr>
	<td>c66.migrations.run</td>
	<td>server</td>
	<td>Sets the given server as the <a href="/{{page.collection}}/how-to-guides/databases/database-management.html">migrator</a> - migrations will run on that server <i>only</i>, and the rest of the servers will wait until the migrations are performed before continuing with the deployment.</td>
</tr>
</table>
{%endif%}