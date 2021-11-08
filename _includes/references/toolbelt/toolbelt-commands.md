These commands are listed alphabetically by top level command name. 

## backups - list

Lists all the **managed database backups** for an application grouped by their database type and/or backup schedule.

<div class="Tabs Tabs--enclosed">
    <nav>
    <ul class="TabMini js_tabs">
    <li class="TabMini-item active">
    <a href="#usage" class="TabMini-link">
    Usage
    </a>
    </li>
    <li class="TabMini-item">
    <a href="#parameters" class="TabMini-link">
    Parameters
    </a>
    </li>
    <li class="TabMini-item">
        <a href="#examples" class="TabMini-link">
        Examples
        </a>
        </li>   
    </ul>
    </nav>
    
    <section id="usage" class="Tabs-content js_tab_content">
		
		<pre class="language-shell u-whiteSpaceNoWrap"><code>$ cx backups list [-s {stack}] [-l] [{db type}]</code></pre>

    </section>
    
    <section id="parameters" class="Tabs-content js_tab_content is-hidden">
    
   <table class='table table-bordered table-striped'>
	<thead>
	<tr>
	<th align="right">Parameter</th>
	<th>Description</th>
	</tr>
	</thead>
	<tbody>
	<tr>
	<td align="right">application</td>
	<td>Name of your application</td>
	</tr>
	<tr>
	<td align="right">db type (optional)</td>
	<td>The type of DB you'd like to list backups for (e.g. mysql)</td>
	</tr>
	<tr>
	<td align="right">l (optional)</td>
	<td>Returns the latest successful backup</td>
	</tr>
	<tr>
	<td align="right">e (optional)</td>
	<td>Your application environment</td>
	</tr>
	</tbody>
	</table>
    
    </section>
    <section id="examples" class="Tabs-content js_tab_content is-hidden">
    
		<pre class="language-shell u-whiteSpaceNoWrap"><code>backups list -s "My Awesome App" -e production</code></pre>
		        
    </section>

    </div>
#### Note
<div class="notice">
<p>This command only applies to managed backups and not the unmanaged ones.</p>
</div>

## backups - download

Download a managed database backup via command line. The command will automatically concatenate separate files into one if the backup consists of numerous files.

<div class="Tabs Tabs--enclosed">
    <nav>
    <ul class="TabMini js_tabs">
    <li class="TabMini-item active">
    <a href="#usage" class="TabMini-link">
    Usage
    </a>
    </li>
    <li class="TabMini-item">
    <a href="#parameters" class="TabMini-link">
    Parameters
    </a>
    </li>
    <li class="TabMini-item">
        <a href="#examples" class="TabMini-link">
        Examples
        </a>
        </li>   
    </ul>
 </nav>   
    <section id="usage" class="Tabs-content js_tab_content">		
	<pre class="language-shell u-whiteSpaceNoWrap"><code>$ cx backups download [-s &lt;stack&gt;] [-d &lt;download directory&gt;] &lt;backup id&gt;</code></pre>
    </section>
    
    <section id="parameters" class="Tabs-content js_tab_content is-hidden">
   <table class='table table-bordered table-striped'>
	<thead>
	<tr>
	<th>Parameter</th> 	
            <th width="10%">Required?</th>
<th width="15%">Default</th>
	<th>Description</th>
	</tr>
	</thead>
	<tbody><tr><td><code>stack</code></td><td>Required</td><td><code>—</code></td><td>Name of your application</td></tr><tr><td><code>dbtypes</code></td><td>Optional</td><td><code>all</code></td><td>Comma separated list of Database types which need backup tasks</td></tr><tr><td><code>frequency</code></td><td>Optional</td><td><code>0 */1 * * *</code></td><td>Frequency of backup task in cron schedule format</td></tr><tr><td><code>keep</code></td><td>Optional</td><td><code>100</code></td><td>Number of previous backups to keep</td></tr><tr><td><code>gzip</code></td><td>Optional</td><td><code>TRUE</code></td><td>Compress your backups with gzip</td></tr><tr><td><code>exclude-tables</code></td><td>Optional</td><td><code>—</code></td><td>Tables that must be excluded from the backup</td></tr><tr><td><code>run-on-replica</code></td><td>Optional</td><td><code>TRUE</code></td><td>Run backup task on replica server if available</td></tr>	</tbody>
	</table>
    
    </section>
    <section id="examples" class="Tabs-content js_tab_content is-hidden">
    
		<pre class="language-shell u-whiteSpaceNoWrap"><code>$ cx backups new -s mystack --dbtypes=postgresql --frequency="0 */1 * * *" --keep 50 --gzip=true exclude-tables=my_log_table --run-on-replica=false</code></pre>		        
    </section>
    </div>


## config

Allows you to configure multiple profiles in cx to support multiple Cloud 66 accounts. Please read our separate guide on installing and configuring Toolbelt.


