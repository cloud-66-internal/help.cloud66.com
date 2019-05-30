## What are deploy hooks?

Deploy hooks are scripts that allow you to automate actions at various points during the deployment process for your applications. If you’ve never used hooks before, we have [a tutorial](/rails/tutorials/deploy-hooks.html) that walks you through the basics. You can also use our examples at the bottom of this page.

## Hook points

The deployment process is divided into a number of steps, and hook points allow you to intervene at various points during this process.

<table class="table table-bordered table-striped table-small">
   <tbody>
    <tr>
     <td> <strong>Hook point</strong> </td>
     <td> <strong>Description</strong> </td>
    </tr>
    <tr>
     <td> first_thing </td>
     <td> The first thing (after after_checkout) that will happen on the server. A common use-case for this hook is to install packages to run your application </td>
    </tr>
    <tr>
     <td> after_checkout </td>
     <td> When we create your server, your code is pulled directly from Git to it. Use this hook if you want to make a change to your code after it is pulled (but before anything else). Happens during the code deployment of your application </td>
    </tr>
    <tr>
     <td> before_ <em>x</em> </td>
     <td> This hook will run before a server component is installed on your server. Accepted values for <em>x</em>: <em>redis</em>, <em>mysql</em>, <em>postgresql</em>, <em>mongodb</em> </td>
    </tr>
    <tr>
     <td> after_ <em>x</em> </td>
     <td> This hook will run after a server component is installed on your server. Accepted values for <em>x</em>: <em>redis</em>, <em>mysql</em>, <em>postgresql</em>, <em>mongodb</em> </td>
    </tr>
    <tr>
     <td> before_rails </td>
     <td> This hook will run before Rails is installed on your server </td>
    </tr>
    <tr>
     <td> after_bundle </td>
     <td> This hook will run after bundle but before other rake tasks, such as database migrations. Happens during the code deployment of your application
      <div class="notice notice-warning">
       <strong> Note:</strong> Set for this if you need to run deploy hooks that are invoked before the symlink is updated on the release path
      </div> </td>
    </tr>
    <tr>
     <td> after_symlink </td>
     <td> Runs after the symbolic link to your current code folder has been created <p> Happens during the code deployment of your application </p> </td>
    </tr>
    <tr>
     <td> custom_server </td>
     <td> This hook will run on your custom servers </td>
    </tr>
    <tr>
     <td> after_rails </td>
     <td> This hook will run after Rails (and everything web related) is installed on your server </td>
    </tr>
    <tr>
     <td> before_agent </td>
     <td> This hook will run before the Cloud 66 agent is installed on your server </td>
    </tr>
    <tr>
     <td> after_agent </td>
     <td> This hook will run after the Cloud 66 agent is installed on your server </td>
    </tr>
    <tr>
     <td> last_thing </td>
     <td> This hook will run as the last thing that happens on your server </td>
    </tr>
   </tbody>
</table>

* * *

## Hook fields

There are four types of deploy hooks, and the fields available (and required) vary by type:

1.  **Snippets:** use pre-existing scripts to install common packages. These snippets are [open source](https://github.com/cloud66/snippets), and are created by Cloud 66 or third parties.
2. **Commands:** run your own commands.
3. **Existing Scripts:** use your own existing scripts for more comprehensive procedures (Rails/Node applications only)
4. **Inline Scripts:** use your own inline scripts for more comprehensive procedures

 <table class="table table-bordered table-striped table-small">
   <thead valign="top">
    <tr>
     <th> Field </th>
     <th> Description </th>
    </tr>
   </thead>
   <tbody>
    <tr class="header">
     <td colspan="2"> <strong>HOOK TYPE: Snippets</strong> </td>
    </tr>
    <tr>
     <td width="13%"> snippet <img class="table-img-required" src="/assets/shared/required.gif"> </td>
     <td> Snippet to be used - runs in <em>/tmp/deploy_hooks</em> by default </td>
    </tr>
    <tr>
     <td> target <img class="table-img-required" src="/assets/shared/required.gif"> </td>
     <td> Target server(s), with accepted values <em>any</em>, <em>rails</em>, <em>mysql</em>, <em>postgresql</em>, <em>mongodb</em>, <em>redis</em>, <em>sinatra</em>, <em>padrino</em>, <em>custom</em>
      <div class="notice notice-warning">
       <strong> Note:</strong> Please make sure you read the
       <em>run_on</em> part, if your target is not
       <em>any</em>
      </div> </td>
    </tr>
    <tr>
     <td> execute <br> (false) </td>
     <td> Set to true for the code to be executed during deployment </td>
    </tr>
    <tr>
     <td> executable <br> (false) </td>
     <td> Set to true for the code to be made executable on the target. Defaults to true if <em>execute</em> is true </td>
    </tr>
    <tr>
     <td> apply_during <br> (all) </td>
     <td> Specify when you want the deploy hook action to take place. Accepted values are <em>build_only</em>, <em>deploy_only</em> or <em>all</em>. The <em>build</em> step occurs the first time an application is deployed, and will re-occur until the application has been successfully deployed at least once. After this subsequent deployments are <em>deploy</em> steps </td>
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
     <td> If you have multiple servers in the same group (e.g. scaled-up Rails servers), you can specify whether you want the deploy hook action to occur just once or once against each server in that group. Valid values are: <em>single_server</em> or <em>all_servers</em>. If you've specified <em>target: any</em> above, this will apply to all servers </td>
    </tr>
    <tr>
     <td> run_as <br> (server user) </td>
     <td> If you execute a file on your target server, specify which user you would like the file to be executed as Note: you can't specify both this and <em>sudo</em> </td>
    </tr>
    <tr>
     <td> sudo <br> (false) </td>
     <td> If you are executing the file on your target server, specify whether you want that execution to be sudo-ed? Note: you can't specify both this and <em>run_as</em> </td>
    </tr>
   </tbody>
  </table>



<table class="table table-bordered table-striped table-small">
 <thead valign="top">
  <tr>
   <th> Field </th>
   <th> Description </th>
  </tr>
 </thead>
 <tbody>
  <tr class="header">
   <td colspan="2"> <strong>HOOK TYPE: Commands</strong> </td>
  </tr>
  <tr>
   <td width="13%"> command <img class="table-img-required" src="/assets/shared/required.gif"> </td>
   <td> Command to be used - run in <em>/tmp/deploy_hooks</em> by default </td>
  </tr>
  <tr>
   <td> target <img class="table-img-required" src="/assets/shared/required.gif"> </td>
   <td> Target server(s), with accepted values <em>any</em>, <em>rails</em>, <em>docker</em>, <em>mysql</em>, <em>postgresql</em>, <em>mongodb</em>, <em>redis</em>, <em>sinatra</em>, <em>padrino</em>, <em>custom</em>
    <div class="notice notice-warning">
     <strong> Note:</strong> Please make sure you read the
     <em>run_on</em> part, if your target is not
     <em>any</em>
    </div> </td>
  </tr>
  <tr>
   <td> execute <br> (true) </td>
   <td> Set to true for the code to be executed during deployment </td>
  </tr>
  <tr>
   <td> executable <br> (false) </td>
   <td> Set to true for the code to be made executable on the target. Defaults to true if <em>execute</em> is true </td>
  </tr>
  <tr>
   <td> apply_during <br> (all) </td>
   <td> Specify when you want the deploy hook action to take place. Accepted values are <em>build_only</em>, <em>deploy_only</em> or <em>all</em>. The <em>build</em> step occurs the first time an application is deployed, and will re-occur until the application has been successfully deployed at least once. After this subsequent deployments are <em>deploy</em> steps </td>
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
   <td> If you have multiple servers in the same group (e.g. scaled-up Rails servers), you can specify whether you want the deploy hook action to occur just once or once against each server in that group. Valid values are: <em>single_server</em> or <em>all_servers</em>. If you've specified <em>target: any</em> above, this will apply to all servers </td>
  </tr>
  <tr>
   <td> run_as <br> (server user) </td>
   <td> If you execute a file on your target server, specify which user you would like the file to be executed as Note: you can't specify both this and <em>sudo</em> </td>
  </tr>
  <tr>
   <td> sudo <br> (false) </td>
   <td> If you are executing the file on your target server, specify whether you want that execution to be sudo-ed? Note: you can't specify both this and <em>run_as</em> </td>
  </tr>
 </tbody>
</table>


<table class="table table-bordered table-striped table-small">
<thead valign="top">
<tr>
 <th> Field </th>
 <th> Description </th>
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
 <td> Target server(s), with accepted values <em>any</em>, <em>rails</em>, <em>mysql</em>, <em>postgresql</em>, <em>mongodb</em>, <em>redis</em>, <em>sinatra</em>, <em>padrino</em>, <em>custom</em>
  <div class="notice notice-warning">
   <strong> Note:</strong> Please make sure you read the
   <em>run_on</em> part, if your target is not
   <em>any</em>
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
 <td> Set to true for the snippet to be made executable on the target. Defaults to true if <em>execute</em> is true </td>
</tr>
<tr>
 <td> destination </td>
 <td> The destination path on your target server. You can also specify environment variables in your destination field; <em>&lt;%= ENV['STACK_PATH'] %&gt;</em> for example </td>
</tr>
<tr>
 <td> apply_during <br> (all) </td>
 <td> Specify when you want the deploy hook action to take place. Accepted values are <em>build_only</em>, <em>deploy_only</em> or <em>all</em>. The <em>build</em> step occurs the first time an application is deployed, and will re-occur until the application has been successfully deployed at least once. After this subsequent deployments are <em>deploy</em> steps </td>
</tr>
<tr>
 <td> halt_on_error <br> (true) </td>
 <td> Specify whether the execution should continue or halt in the event of an error </td>
</tr>
<tr>
 <td> run_on <br> (single server) </td>
 <td> If you have multiple servers in the same group (e.g. scaled-up Rails servers), you can specify whether you want the deploy hook action to occur just once or once against each server in that group. Valid values are: <em>single_server</em> or <em>all_servers</em>. If you've specified <em>target: any</em> above, this will apply to all servers </td>
</tr>
<tr>
 <td> run_as <br> (server user) </td>
 <td> If you execute a file on your target server, specify which user you would like the file to be executed as Note: you can't specify both this and <em>sudo</em> </td>
</tr>
<tr>
 <td> sudo <br> (false) </td>
 <td> If you are executing the file on your target server, specify whether you want that execution to be sudo-ed? Note: you can't specify both this and <em>run_as</em> </td>
</tr>
<tr>
 <td> parse <br> (true) </td>
 <td> Specifies whether the file being transferred should be parsed for <a href="/node/tutorials/env-vars.html">environment variables</a>. Using this you can embed <em>&lt;%= ENV['ENV_VAR'] %&gt; </em> for example in your source file, and have it resolved during the deploy hook action </td>
</tr>
<tr>
 <td> owner <br> (your server user) </td>
 <td> Ownership permissions for the file (and destination folder) on the target server. An example could be <em>user:group</em> </td>
</tr>
</tbody>
</table>


<table class="table table-bordered table-striped table-small">
<thead valign="top">
<tr>
 <th> Field </th>
 <th> Description </th>
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
 <td> Target server(s), with accepted values <em>any</em>, <em>rails</em>, <em>mysql</em>, <em>postgresql</em>, <em>mongodb</em>, <em>redis</em>, <em>sinatra</em>, <em>padrino</em>, <em>custom</em>
  <div class="notice notice-warning">
   <strong> Note:</strong> Please make sure you read the
   <em>run_on</em> part, if your target is not
   <em>any</em>
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
 <td> Set to true for the snippet to be made executable on the target. Defaults to true if <em>execute</em> is true </td>
</tr>
<tr>
 <td> destination </td>
 <td> The destination path on your target server. You can also specify environment variables in your destination field; <em>&lt;%= ENV['STACK_PATH'] %&gt;</em> for example </td>
</tr>
<tr>
 <td> apply_during <br> (all) </td>
 <td> Specify when you want the deploy hook action to take place. Accepted values are <em>build_only</em>, <em>deploy_only</em> or <em>all</em>. The <em>build</em> step occurs the first time an application is deployed, and will re-occur until the application has been successfully deployed at least once. After this subsequent deployments are <em>deploy</em> steps </td>
</tr>
<tr>
 <td> halt_on_error <br> (true) </td>
 <td> Specify whether the execution should continue or halt in the event of an error </td>
</tr>
<tr>
 <td> run_on <br> (single server) </td>
 <td> If you have multiple servers in the same group (e.g. scaled-up Rails servers), you can specify whether you want the deploy hook action to occur just once or once against each server in that group. Valid values are: <em>single_server</em> or <em>all_servers</em>. If you've specified <em>target: any</em> above, this will apply to all servers </td>
</tr>
<tr>
 <td> run_as <br> (server user) </td>
 <td> If you execute a file on your target server, specify which user you would like the file to be executed as Note: you can't specify both this and <em>sudo</em> </td>
</tr>
<tr>
 <td> sudo <br> (false) </td>
 <td> If you are executing the file on your target server, specify whether you want that execution to be sudo-ed? Note: you can't specify both this and <em>run_as</em> </td>
</tr>
<tr>
 <td> parse <br> (true) </td>
 <td> Specifies whether the file being transferred should be parsed for <a href="/node/tutorials/env-vars.html">environment variables</a>. Using this you can embed <em>&lt;%= ENV['ENV_VAR'] %&gt; </em> for example in your source file, and have it resolved during the deploy hook action </td>
</tr>
<tr>
 <td> owner <br> (your server user) </td>
 <td> Ownership permissions for the file (and destination folder) on the target server. An example could be <em>user:group</em> </td>
</tr>
</tbody>
</table>
