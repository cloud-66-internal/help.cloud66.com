
<h2 id="about">About configuring HAProxy</h2>
[HAProxy CustomConfig](http://help.cloud66.com/web-server/haproxy) allows you to configure your load balancer through the comfort of your browser. In addition to the settings described below, you could also refer to the [HAProxy documentation](http://haproxy.1wt.eu/download/1.3/doc/haproxy-en.txt) for more information about configurations.

<h2 id="view">View HAProxy stats</h2>
While on your stack detail page, click on the load balancer add-in to login to your HAProxy stats page. Once logged in, you will see a variety of statistics for your load balancer, and any potential issues.

<h2 id="configure">Configure HAProxy to use internal IPs</h2>
By default, HAProxy is configured to use the external IP address of your servers, but it can be changed to use the internal addresses if you have private networking enabled.

Simply replace any `server.ext_ipv4` values with `server.int_ipv4` using HAProxy CustomConfig (below).

<h2 id="specify">Specify an HAProxy test interval</h2>
You can also specify your own test interval if you like - this is done in the _server_ section of your HAProxy configruation. This section is on line 53 of the default configuration.

To change the test interval to every 30 seconds (instead of the default 2 seconds), the template should look like this:

<pre class="terminal">server web&#123;&#123; forloop.index &#125;&#125; &#123;&#123; server.ext_ipv4 &#125;&#125;:80 cookie "LSW_WEB&#123;&#123; forloop.index &#125;&#125;" check inter 30000</pre>

Please note the `inter 3000` at the end - this defines the test interval as 3000 milliseconds. Once this template is applied, it looks like this:

<pre class="terminal">server web1 107.170.99.39:80 cookie "LSW_WEB1" check inter 30000</pre>

<h2 id="endpoint">Change the HAProxy endpoint</h2>
By default, HAProxy will visit the _/_ endpoint on your application every 2 seconds to determine its state. This endpoint may need to change if that endpoint isn't available to the load balancer.

You will want to look at the _httpchk_ option to change the endpoint - the simplest solution is to create a low overhead non-auth HTTP route somewhere in your application.

For example, you could place a file called _check.html_ in your _/public_ folder, which would be served directly by Nginx (not your application). It would be available at _/check.html_.

In this case, you could replace the _httpchk_ section with this:

`httpchk HEAD /check.html HTTP/1.0`.

<h2 id="customconf">About configuring HAProxy with CustomConfig</h2>
You can customize the HAProxy configuration on your HAProxy server using CustomConfig (below).

CustomConfig uses the [Liquid templating language](http://liquidmarkup.org/). You can find many incredible guides and tutorials into the Liquid syntax around the web, but the syntax is easy enough to pick up in minutes.

The following variables are available to use in HAProxy CustomConfig.

<h3 id="variables">Config variables</h3>
<table class='table table-bordered table-striped'>
	<colgroup>
	<col width="20%"/>
	<col width="20%"/>
	<col width="60%"/>
</colgroup>
<thead>
	<tr>
		<th>Variable Name</th>
		<th>Type</th>
		<th>Description</th>
	</tr>
</thead>
<tbody>

	<tr>
		<td>haproxy_username</td>
		<td>string</td>
		<td>Your HAProxy username</td>
	</tr>
	<tr>
		<td>haproxy_password</td>
		<td>string</td>
		<td>Your HAProxy password</td>
	</tr>
	<tr>
		<td>httpchk</td>
		<td>string</td>
		<td>Default value is "HEAD / HTTP/1.0" unless specified in your manifest file</td>
	</tr>
	<tr>
		<td>balance</td>
		<td>array</td>
		<td>Default value is "roundrobin" unless specified in your manifest file</td>
	</tr>

	<tr>
		<td>errorfile_lines</td>
		<td>array</td>
		<td>Default is empty array unless specified in your manifest file</td>
	</tr>
	<tr>
		<td>servers</td>
		<td>array</td>
		<td>Array of "server" objects that are to be load balanced (see below)</td>
	</tr>
	<tr>
		<td>server.ext_ipv4</td>
		<td>string</td>
		<td>External IPv4 address (server is one of the items in the "servers" array above)</td>
	</tr>
	<tr>
		<td>server.int_ipv4</td>
		<td>string</td>
		<td>Internal IPv4 address (server is one of the items in the "servers" array above)</td>
	</tr>

</tbody>
</table>

<h2 id="commit">Commit HAProxy CustomConfig</h2>
Editing and committing HAProxy CustomConfig will do the following steps for your HAProxy web server:

* Check the template for basic Liquid syntax errors
* Compile the HAProxy configuration based on the information from your load balanced web servers
* Upload the configuration to your HAProxy server
* Reload HAProxy

This process will be stopped if an error is encountered.

<div class="notice notice-warning">
	<h3>Warning</h3>
	<p>A bad HAProxy configuration might stop your HAProxy server from working. Take extra care to make sure the configuration is correct.</p>
</div>

<h2 href="#maintenance">Configuring HAProxy for maintenance mode</h2>
For <strong>Docker stacks</strong> you can set your HAproxy to show a maintenance page when it cannot connect to the container.

<ul class="list">
  <li>Create custom maintenance page</li>
  <li>Upload to haproxy server using the toolbelt</li>
  <pre class="prettyprint">
cx upload -s stack_name --server haproxy_server_name maintenance.html
</pre>

  <li>Move the file haproxy directory</li>
  <pre class="prettyprint">
sudo mv /tmp/maintenance.html /etc/haproxy/maintenance.html
</pre>
  <li>Configure haproxy to show the maintenance file by adding the below line to the end of the default section</li>
   <pre class="terminal">errorfile 503 /etc/haproxy/maintenance.html</pre>
</ul>
