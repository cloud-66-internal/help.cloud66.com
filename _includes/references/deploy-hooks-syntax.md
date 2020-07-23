## What are deploy hooks?

Deploy hooks are scripts that allow you to automate actions at various points during the deployment process for your applications. If you’ve never used hooks before, we have [a tutorial](/{{page.collection}}/tutorials/deploy-hooks.html) that walks you through the basics. You can also use our examples at the bottom of this page.

## Hook points

The deployment process is divided into a number of steps, and hook points allow you to intervene at various points during this process.

The table below is arranged in the order in which each hook point occurs in the deployment process (from earliest to latest):

<table class="table table-bordered table-striped table-small">
   <tbody>
    <tr>
     <td width="25%"> <strong>Hook point</strong> </td>
     <td width="75%"> <strong>Description</strong> </td>
    </tr>
    <tr>
     <td> first_thing </td>
     <td> The first thing that will happen on the server after the operating system is installed. A common use-case for this hook is to install custom packages that your application relies on. </td>
    </tr>    
	<tr>
     <td> before_agent </td>
     <td> Runs before the Cloud 66 agent is installed on your server </td>
    </tr>
    <tr>
     <td> after_agent </td>
     <td> Runs after the Cloud 66 agent is installed on your server <a name="beforex"></a> </td>
    </tr>
    <tr>
     <td> before_<code>x</code> </td>
     <td> Runs before database and storage engine(s) are installed on your server. Accepted values for <code>x</code>: <code>redis</code>, <code>mysql</code>, <code>postgresql</code>, <code>mongodb</code>, <code>elasticsearch</code>, <code>rabbitmq</code>, <code>glusterfs</code>, <code>influxdb</code> </td>
    </tr>
    <tr>
     <td> after_<code>x</code> </td>
     <td> Runs after database and storage engine(s) are installed on your server. If multiple engines are installed it will wait until all of them are completed. Accepted values for <code>x</code>: <code>redis</code>, <code>mysql</code>, <code>postgresql</code>, <code>mongodb</code>, <code>elasticsearch</code>, <code>rabbitmq</code>, <code>glusterfs</code>, <code>influxdb</code> </td> <a name="beforey"></a>
    </tr>
    <tr>
     <td> before_<code>y</code> </td>
     <td> Runs before replication is configured for the database server(s). Accepted values for <code>y</code>: <code>glusterfs_config</code>, <code>redis_replication</code>, <code>mongodb_replication</code>, <code>mysql_replication</code>, <code>postgresql_replication</code></td>
    </tr>
    <tr>
     <td> after_<code>y</code> </td>
     <td> Runs after replication has been configured for the database server(s). Accepted values for <code>y</code>: <code>glusterfs_config</code>, <code>redis_replication</code>, <code>mongodb_replication</code>, <code>mysql_replication</code>, <code>postgresql_replication</code></td>
    </tr>

    <tr>
     <td> before_data_mount </td>
     <td> Runs before data is mounted (GlusterFS only) </td>
    </tr>
	<tr>
     <td> after_data_mount </td>
     <td> Runs right after data has been mounted in GlusterFS</td>
    </tr>
   <tr>
     <td> custom_server </td>
     <td> Runs only on your custom servers </td>
    </tr>
{% if include.product == "rails" %}
    <tr>
     <td> before_node </td>
     <td> Runs before we install Node on your server </td>
    </tr>
    <tr>
     <td> after_node </td>
     <td> Runs directly after Node has been installed </td>
    </tr>
{% endif %}
    <tr>
     <td> before_nginx </td>
     <td> Runs before we install NGINX on your server </td>
    </tr>
    <tr>
     <td> after_nginx </td>
     <td> Runs directly after we install NGINX on your server <a name="beforez"></a></td>
    </tr>
{% if include.product == "maestro" or include.product == "node" %}

    <tr>
     <td> before_docker </td>
     <td> Runs before Docker is installed on your server. </td>
    </tr>    
	<tr>
     <td> after_docker </td>
     <td> Runs directly after Docker is installed on your server. </td>
    </tr>   
{% endif %}    
{% if include.product == 'rails' %}
    <tr>
     <td> before_<code>z</code> </td>
     <td> Runs before your application framework is installed on your server. Accepted values for <code>z</code>:  <code>rails</code>, <code>rack</code>, <code>sinatra</code>, <code>padrino</code> </td>
    </tr>    
	<tr>
     <td> after_checkout </td>
     <td> When we create your server, your code is pulled directly from Git. Use this hook if you want to make a change to your code after it is pulled. </td>
    </tr>   
    <tr>
     <td> after_bundle </td>
     <td> Runs after the bundle command(s) but before other rake tasks, such as database migrations. Happens during the code deployment of your application.
       <strong> Note:</strong> Use this hook if you need to run commands that are invoked before the symlink is updated on the release path.
	</td>
    </tr>
    <tr>
     <td> after_symlink </td>
     <td> Runs after the symbolic link to your current code folder has been created. Happens during the code deployment of your application. This is a suitable hook point for running rake tasks like <code>db:migrate</code>, <code>db:seed</code> and <code>db:rollback</code> <a name="afterz"></a></td>
    </tr>
    <tr>
     <td> after_<code>z</code> </td>
     <td> Runs after your application framework (and everything web related) is installed on your server. Accepted values for <code>z</code>: <code>rails</code>, <code>rack</code>, <code>sinatra</code>, <code>padrino</code> </td>
    </tr>
    <tr>
     <td> before_processes </td>
     <td> Runs before any custom processes (i.e. Procfile or simmilar) </td>
    </tr>
    <tr>
     <td> after_processes </td>
     <td> Runs after any custom processes </td>
    </tr>
{% endif %}

    <tr>
     <td> last_thing </td>
     <td> This hook will run as the last thing that happens on your server. If you have multiple servers, this hook will only trigger when all of them reach this point. </td>
    </tr>
   </tbody>
  </table>


* * *

## Hook fields

There are different types of deploy hooks, and the fields available (and required) vary by type:

1.  **Snippets:** use "off the shelf" scripts to install common packages. These snippets are [open source](https://github.com/cloud66/snippets), and are created by Cloud 66 or other third parties.
2. **Commands:** run your own commands.
3. **Inline Scripts:** use your own inline scripts for more comprehensive procedures
{% if include.product == 'rails' or include.product == 'node' %}4. **Existing Scripts:** use your own existing scripts for more comprehensive procedures (Rails/Node applications only){% endif %}

## Hook fields: snippets 

 <table class="table table-bordered table-striped table-small">
   <thead valign="top">
    <tr>
     <th width="30%"> Field </th>
     <th width="70%"> Description </th>
    </tr>
   </thead>
   <tbody>
    <tr class="header">
     <td colspan="2"> <strong>HOOK TYPE: Snippets</strong> </td>
    </tr>
    <tr>
     <td width="13%"> snippet <img class="table-img-required" src="/assets/shared/required.gif"> </td>
     <td> Snippet to be used - runs in <code>/tmp/deploy_hooks</code> by default </td>
    </tr>
    <tr>
     <td> target <img class="table-img-required" src="/assets/shared/required.gif"> </td>
     <td> Target server(s), with accepted values <code>any</code>, <code>rails</code>, <code>mysql</code>, <code>postgresql</code>, <code>mongodb</code>, <code>redis</code>, <code>sinatra</code>, <code>padrino</code>, <code>custom</code>
      <div class="notice notice-warning">
       <strong> Note:</strong> Please make sure you read the
       <code>run_on</code> part, if your target is not
       <code>any</code>
      </div> </td>
    </tr>
    <tr>
     <td> execute <br> (false) </td>
     <td> Set to true for the code to be executed during deployment </td>
    </tr>
    <tr>
     <td> executable <br> (false) </td>
     <td> Set to true for the code to be made executable on the target. Defaults to true if <code>execute</code> is true </td>
    </tr>
    <tr>
     <td> apply_during <br> (all) </td>
     <td> Specify when you want the deploy hook action to take place. Accepted values are <code>build_only</code>, <code>deploy_only</code> or <code>all</code>. The <code>build</code> step occurs the first time an application is deployed, and will re-occur until the application has been successfully deployed at least once. After this subsequent deployments are <code>deploy</code> steps </td>
    </tr>
    <tr>
     <td> env_vars </td>
     <td> Hash of values that will be set when running this specific deploy hook. Only applies to deploy hooks that have execute = true
If the application already contains this env var it will be overridden with the value specified here. </td>
    </tr>
    <tr>
     <td> halt_on_error <br> (true) </td>
     <td> Specify whether the execution should continue or halt in the event of an error </td>
    </tr>
    <tr>
     <td> run_on <br> (single server) </td>
     <td> If you have multiple servers in the same group (e.g. scaled-up Rails servers), you can specify whether you want the deploy hook action to occur just once or once against each server in that group. Valid values are: <code>single_server</code> or <code>all_servers</code>. If you've specified <code>target: any</code> above, this will apply to all servers </td>
    </tr>
    <tr>
     <td> run_as <br> (server user) </td>
     <td> If you execute a file on your target server, specify which user you would like the file to be executed as Note: you can't specify both this and <code>sudo</code> </td>
    </tr>
    <tr>
     <td> sudo <br> (false) </td>
     <td> If you are executing the file on your target server, specify whether you want that execution to be sudo-ed? Note: you can't specify both this and <code>run_as</code> </td>
    </tr>
   </tbody>
  </table>

## Hook fields: commands

<table class="table table-bordered table-striped table-small">
 <thead valign="top">
  <tr>
   <th width="30%"> Field </th>
   <th width="70%"> Description </th>
  </tr>
 </thead>
 <tbody>
  <tr class="header">
   <td colspan="2"> <strong>HOOK TYPE: Commands</strong> </td>
  </tr>
  <tr>
   <td width="13%"> command <img class="table-img-required" src="/assets/shared/required.gif"> </td>
   <td> Command to be used - run in <code>/tmp/deploy_hooks</code> by default </td>
  </tr>
  <tr>
   <td> target <img class="table-img-required" src="/assets/shared/required.gif"> </td>
   <td> Target server(s), with accepted values <code>any</code>, <code>rails</code>, <code>docker</code>, <code>mysql</code>, <code>postgresql</code>, <code>mongodb</code>, <code>redis</code>, <code>sinatra</code>, <code>padrino</code>, <code>custom</code>
    <div class="notice notice-warning">
     <strong> Note:</strong> Please make sure you read the
     <code>run_on</code> part, if your target is not
     <code>any</code>
    </div> </td>
  </tr>
  <tr>
   <td> execute <br> (true) </td>
   <td> Set to true for the code to be executed during deployment </td>
  </tr>
  <tr>
   <td> executable <br> (false) </td>
   <td> Set to true for the code to be made executable on the target. Defaults to true if <code>execute</code> is true </td>
  </tr>
  <tr>
   <td> apply_during <br> (all) </td>
   <td> Specify when you want the deploy hook action to take place. Accepted values are <code>build_only</code>, <code>deploy_only</code> or <code>all</code>. The <code>build</code> step occurs the first time an application is deployed, and will re-occur until the application has been successfully deployed at least once. After this subsequent deployments are <code>deploy</code> steps </td>
  </tr>
    <tr>
     <td> env_vars </td>
     <td> Hash of values that will be set when running this specific deploy hook. Only applies to deploy hooks that have execute = true
If the application already contains this env var it will be overridden with the value specified here. </td>
    </tr>
  <tr>
   <td> halt_on_error <br> (true) </td>
   <td> Specify whether the execution should continue or halt in the event of an error </td>
  </tr>
  <tr>
   <td> run_on <br> (single server) </td>
   <td> If you have multiple servers in the same group (e.g. scaled-up Rails servers), you can specify whether you want the deploy hook action to occur just once or once against each server in that group. Valid values are: <code>single_server</code> or <code>all_servers</code>. If you've specified <code>target: any</code> above, this will apply to all servers </td>
  </tr>
  <tr>
   <td> run_as <br> (server user) </td>
   <td> If you execute a file on your target server, specify which user you would like the file to be executed as Note: you can't specify both this and <code>sudo</code> </td>
  </tr>
  <tr>
   <td> sudo <br> (false) </td>
   <td> If you are executing the file on your target server, specify whether you want that execution to be sudo-ed? Note: you can't specify both this and <code>run_as</code> </td>
  </tr>
 </tbody>
</table>

## Hook fields: inline scripts

<table class="table table-bordered table-striped table-small">
<thead valign="top">
<tr>
 <th width="30%"> Field </th>
 <th width="70%"> Description </th>
</tr>
</thead>
<tbody>
<tr class="header">
 <td colspan="2"> <strong>HOOK TYPE: Inline Scripts</strong> </td>
</tr>
<tr>
 <td width="13%"> source <img class="table-img-required" src="/assets/shared/required.gif"> </td>
 <td> This specifies the source location of your deploy hook file within your repository </td>
</tr>
<tr>
 <td> target <img class="table-img-required" src="/assets/shared/required.gif"> </td>
 <td> Target server(s), with accepted values <code>any</code>, <code>rails</code>, <code>mysql</code>, <code>postgresql</code>, <code>mongodb</code>, <code>redis</code>, <code>sinatra</code>, <code>padrino</code>, <code>custom</code>
  <div class="notice notice-warning">
   <strong> Note:</strong> Please make sure you read the
   <code>run_on</code> part, if your target is not
   <code>any</code>
  </div> </td>
</tr>
    <tr>
     <td> env_vars </td>
     <td> Hash of values that will be set when running this specific deploy hook. Only applies to deploy hooks that have execute = true
If the application already contains this env var it will be overridden with the value specified here. </td>
    </tr>
<tr>
 <td> execute <br> (false) </td>
 <td> Set to true for the code to be executed during deployment </td>
</tr>
<tr>
 <td> executable <br> (false) </td>
 <td> Set to true for the snippet to be made executable on the target. Defaults to true if <code>execute</code> is true </td>
</tr>
<tr>
 <td> destination </td>
 <td> The destination path on your target server. You can also specify environment variables in your destination field; <code>&lt;%= ENV['STACK_PATH'] %&gt;</code> for example </td>
</tr>
<tr>
 <td> apply_during <br> (all) </td>
 <td> Specify when you want the deploy hook action to take place. Accepted values are <code>build_only</code>, <code>deploy_only</code> or <code>all</code>. The <code>build</code> step occurs the first time an application is deployed, and will re-occur until the application has been successfully deployed at least once. After this subsequent deployments are <code>deploy</code> steps </td>
</tr>
<tr>
 <td> halt_on_error <br> (true) </td>
 <td> Specify whether the execution should continue or halt in the event of an error </td>
</tr>
<tr>
 <td> run_on <br> (single server) </td>
 <td> If you have multiple servers in the same group (e.g. scaled-up Rails servers), you can specify whether you want the deploy hook action to occur just once or once against each server in that group. Valid values are: <code>single_server</code> or <code>all_servers</code>. If you've specified <code>target: any</code> above, this will apply to all servers </td>
</tr>
<tr>
 <td> run_as <br> (server user) </td>
 <td> If you execute a file on your target server, specify which user you would like the file to be executed as Note: you can't specify both this and <code>sudo</code> </td>
</tr>
<tr>
 <td> sudo <br> (false) </td>
 <td> If you are executing the file on your target server, specify whether you want that execution to be sudo-ed? Note: you can't specify both this and <code>run_as</code> </td>
</tr>
<tr>
 <td> parse <br> (true) </td>
 <td> Specifies whether the file being transferred should be parsed for <a href="/node/tutorials/env-vars.html">environment variables</a>. Using this you can embed <code>&lt;%= ENV['ENV_VAR'] %&gt; </code> for example in your source file, and have it resolved during the deploy hook action </td>
</tr>
<tr>
 <td> owner <br> (your server user) </td>
 <td> Ownership permissions for the file (and destination folder) on the target server. An example could be <code>user:group</code> </td>
</tr>
</tbody>
</table>

{% if include.product == 'rails' or include.product == 'node' %}

## Hook fields: existing scripts

<table class="table table-bordered table-striped table-small">
<thead valign="top">
<tr>
 <th width="30%"> Field </th>
 <th width="70%"> Description </th>
</tr>
</thead>
<tbody>
<tr class="header">
 <td colspan="2"> <strong>HOOK TYPE: Existing Scripts (Rails/Node applications only)</strong> </td>
</tr>
<tr>
 <td width="13%"> source <img class="table-img-required" src="/assets/shared/required.gif"> </td>
 <td> This specifies the source location of your deploy hook file within your repository </td>
</tr>
<tr>
 <td> target <img class="table-img-required" src="/assets/shared/required.gif"> </td>
 <td> Target server(s), with accepted values <code>any</code>, <code>rails</code>, <code>mysql</code>, <code>postgresql</code>, <code>mongodb</code>, <code>redis</code>, <code>sinatra</code>, <code>padrino</code>, <code>custom</code>
  <div class="notice notice-warning">
   <strong> Note:</strong> Please make sure you read the
   <code>run_on</code> part, if your target is not
   <code>any</code>
  </div> </td>
</tr>
    <tr>
     <td> env_vars </td>
     <td> Hash of values that will be set when running this specific deploy hook. Only applies to deploy hooks that have execute = true
If the application already contains this env var it will be overridden with the value specified here. </td>
    </tr>
<tr>
 <td> execute <br> (false) </td>
 <td> Set to true for the code to be executed during deployment </td>
</tr>
<tr>
 <td> executable <br> (false) </td>
 <td> Set to true for the snippet to be made executable on the target. Defaults to true if <code>execute</code> is true </td>
</tr>
<tr>
 <td> destination </td>
 <td> The destination path on your target server. You can also specify environment variables in your destination field; <code>&lt;%= ENV['STACK_PATH'] %&gt;</code> for example </td>
</tr>
<tr>
 <td> apply_during <br> (all) </td>
 <td> Specify when you want the deploy hook action to take place. Accepted values are <code>build_only</code>, <code>deploy_only</code> or <code>all</code>. The <code>build</code> step occurs the first time an application is deployed, and will re-occur until the application has been successfully deployed at least once. After this subsequent deployments are <code>deploy</code> steps </td>
</tr>
<tr>
 <td> halt_on_error <br> (true) </td>
 <td> Specify whether the execution should continue or halt in the event of an error </td>
</tr>
<tr>
 <td> run_on <br> (single server) </td>
 <td> If you have multiple servers in the same group (e.g. scaled-up Rails servers), you can specify whether you want the deploy hook action to occur just once or once against each server in that group. Valid values are: <code>single_server</code> or <code>all_servers</code>. If you've specified <code>target: any</code> above, this will apply to all servers </td>
</tr>
<tr>
 <td> run_as <br> (server user) </td>
 <td> If you execute a file on your target server, specify which user you would like the file to be executed as Note: you can't specify both this and <code>sudo</code> </td>
</tr>
<tr>
 <td> sudo <br> (false) </td>
 <td> If you are executing the file on your target server, specify whether you want that execution to be sudo-ed? Note: you can't specify both this and <code>run_as</code> </td>
</tr>
<tr>
 <td> parse <br> (true) </td>
 <td> Specifies whether the file being transferred should be parsed for <a href="/node/tutorials/env-vars.html">environment variables</a>. Using this you can embed <code>&lt;%= ENV['ENV_VAR'] %&gt; </code> for example in your source file, and have it resolved during the deploy hook action </td>
</tr>
<tr>
 <td> owner <br> (your server user) </td>
 <td> Ownership permissions for the file (and destination folder) on the target server. An example could be <code>user:group</code> </td>
</tr>
</tbody>
</table>

{% endif %}
