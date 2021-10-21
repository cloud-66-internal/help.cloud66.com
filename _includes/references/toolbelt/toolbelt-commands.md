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

### Usage

```shell
$ cx backups download [-s <stack>] [-d <download directory>] <backup id>
```


### Parameters


|		Parameter 		   |	Default		|   Description    |
|--|:--:| -:|
|stack 					   |	—			|Name of your application|
|dbtypes (optional) 	   | 	all			|Comma separated list of Database types which need backup tasks|
|frequency (optional) 	   |	0 */1 * * *	|Frequency of backup task in cron schedule format|
|keep (optional) 		   |	100			|Number of previous backups to keep|
|gzip (optional)		   |	true		|Compress your backups with gzip|
|exclude-tables (optional) |	—			|Tables that must be excluded from the backup|
|run-on-replica (optional) |	true		|Run backup task on replica server if available|
{:.table}


### Example

```shell
$ cx backups new -s mystack --dbtypes=postgresql --frequency="0 */1 * * *" --keep 50 --gzip=true exclude-tables=my_log_table --run-on-replica=false
```

