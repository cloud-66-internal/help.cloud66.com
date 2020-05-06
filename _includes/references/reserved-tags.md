
You can tag a variety of your infrastructural components, such as applications (stacks), servers, or firewall rules, in order to differentiate them from one another. Some tag names are reserved by Cloud 66 because they provide additional functionality to your infrastructure.

## Reserved tags
Cloud 66 currently reserves the following tags:

<table class="table table-bordered table-striped table-small">
<tr>
	<td width="30%"><b>Tag</b></td>
	<td width="30%"><b>Target</b></td>
	<td><b>Description</b></td>
</tr>
<tr>
	<td>c66.delete.protection</td>
	<td>server, formation</td>
	<td>Prevents a component (e.g. server) from <a href="/{{page.collection}}/how-to-guides/scaling/scaling.html#delete-protection">being deleted</a> - including via the Toolbelt and API. </td>
</tr>
<tr>
	<td>c66.migrations.run</td>
	<td>server (Rails only)</td>
	<td>Sets the given server as the <a href="/rails/how-to-guides/databases/database-management.html">migrator</a> - migrations will run on that server <i>only</i>, and the rest of the servers will wait until the migrations are performed before continuing with the deployment.</td>
</tr>
<tr>
	<td>c66.compilation.run</td>
	<td>server (Rails only)</td>
	<td>Nominates a Rails server to handle <a href="/rails/how-to-guides/deployment/enable-disable-asset-pipeline.html#nominating-a-dedicated-compilation-server">asset pre-compilation workloads</a>.</td>
</tr>
<tr>
	<td>c66.build-commands.run</td>
	<td>server (Rack only - does not apply to Rails)</td>
	<td>Nominates a server to handle the workload of the declared custom build command (as specified in your manifest or during the initial build process). Only applies during the initial build of the application.</td>
</tr>
<tr>
	<td>c66.deploy-commands.run</td>
	<td>server (Rack only - does not apply to Rails)</td>
	<td>Nominates a server to handle the workload of the declared custom deploy command (as specified in your manifest or during the initial build process). Applies during subsequent deployments of the application.</td>
</tr>
</table>

## Adding tags to a server

To **add** a tag to a server:

1. Log into your Cloud 66 dashboard and click on your application
2. Click on the Servers tab in the main panel
3. Click on the name of the server you'd like to protect
4. Click on the tag icon (🏷) at the top right of the Server info panel and then click on Add Tags
5. Type in `c66.` and you will be prompted  to autocomplete the tag you need - then click Save.
6. You should now be able to see the tag in red just below your server's name.