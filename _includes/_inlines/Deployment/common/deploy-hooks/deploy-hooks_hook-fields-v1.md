<!-- usedin: [ _legacy_docker/deployment/deploy-hooks-v1.md, _maestro/Deployment/deploy-hooks-v1.md, _node/deployment/deploy-hooks-v1.md, _rails/deployment/deploy-hooks-v1.md, _skycap/deployment/deploy-hooks-v1.md] -->


# Hook fields

There are three types of deploy hooks, and the fields available (and required) vary by type:

1.  **Snippets:** use pre-existing scripts to install common packages. These snippets are [open source](https://github.com/cloud66/snippets), and are created by Cloud 66 or third parties.
2.  **Commands:** run your own commands.
3.  **Existing Scripts:** use your own existing scripts for more comprehensive procedures (Rails/Node stacks only)
4.  **Inline Scripts:** use your own inline scripts for more comprehensive procedures



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
     <td width="13%"> snippet <img class="table-img-required" src="http://assets.cloud66.com/help/images/required.gif"> </td> 
     <td> Snippet to be used - runs in <em>/tmp/deploy_hooks</em> by default </td> 
    </tr> 
    <tr> 
     <td> target <img class="table-img-required" src="http://assets.cloud66.com/help/images/required.gif"> </td> 
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
     <td> Specify when you want the deploy hook action to take place. Accepted values are <em>build_only</em>, <em>deploy_only</em> or <em>all</em>. The <em>build</em> step occurs the first time a stack is deployed, and will re-occur until the stack has been successfully deployed at least once. After this subsequent deployments are <em>deploy</em> steps </td> 
    </tr> 
    <tr> 
     <td> halt_on_error <br> (true) </td> 
     <td> Specify whether the execution should continue or halt in the event of an error </td> 
    </tr> 
    <tr> 
     <td> run_on <br> (single server) </td> 
     <td> If you have multiple servers in the same group (eg. scaled-up Rails servers), you can specify whether you want the deploy hook action to occur just once or once against each server in that group. Valid values are: <em>single_server</em> or <em>all_servers</em>. If you've specified <em>target: any</em> above, this will apply to all servers </td> 
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
   <td width="13%"> command <img class="table-img-required" src="http://assets.cloud66.com/help/images/required.gif"> </td> 
   <td> Command to be used - run in <em>/tmp/deploy_hooks</em> by default </td> 
  </tr> 
  <tr> 
   <td> target <img class="table-img-required" src="http://assets.cloud66.com/help/images/required.gif"> </td> 
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
   <td> Specify when you want the deploy hook action to take place. Accepted values are <em>build_only</em>, <em>deploy_only</em> or <em>all</em>. The <em>build</em> step occurs the first time a stack is deployed, and will re-occur until the stack has been successfully deployed at least once. After this subsequent deployments are <em>deploy</em> steps </td> 
  </tr> 
  <tr> 
   <td> halt_on_error <br> (true) </td> 
   <td> Specify whether the execution should continue or halt in the event of an error </td> 
  </tr> 
  <tr> 
   <td> run_on <br> (single server) </td> 
   <td> If you have multiple servers in the same group (eg. scaled-up Rails servers), you can specify whether you want the deploy hook action to occur just once or once against each server in that group. Valid values are: <em>single_server</em> or <em>all_servers</em>. If you've specified <em>target: any</em> above, this will apply to all servers </td> 
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
 <td colspan="2"> <strong>HOOK TYPE: Existing Scripts (Rails/Node stacks only)</strong> </td> 
</tr> 
<tr> 
 <td width="13%"> source <img class="table-img-required" src="http://assets.cloud66.com/help/images/required.gif"> </td> 
 <td> This specifies the source location of your deploy hook file within your repository </td> 
</tr> 
<tr> 
 <td> target <img class="table-img-required" src="http://assets.cloud66.com/help/images/required.gif"> </td> 
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
 <td> Set to true for the snippet to be made executable on the target. Defaults to true if <em>execute</em> is true </td> 
</tr> 
<tr> 
 <td> destination </td> 
 <td> The destination path on your target server. You can also specify environment variables in your destination field; <em>&lt;%= ENV['STACK_PATH'] %&gt;</em> for example </td> 
</tr> 
<tr> 
 <td> apply_during <br> (all) </td> 
 <td> Specify when you want the deploy hook action to take place. Accepted values are <em>build_only</em>, <em>deploy_only</em> or <em>all</em>. The <em>build</em> step occurs the first time a stack is deployed, and will re-occur until the stack has been successfully deployed at least once. After this subsequent deployments are <em>deploy</em> steps </td> 
</tr> 
<tr> 
 <td> halt_on_error <br> (true) </td> 
 <td> Specify whether the execution should continue or halt in the event of an error </td> 
</tr> 
<tr> 
 <td> run_on <br> (single server) </td> 
 <td> If you have multiple servers in the same group (eg. scaled-up Rails servers), you can specify whether you want the deploy hook action to occur just once or once against each server in that group. Valid values are: <em>single_server</em> or <em>all_servers</em>. If you've specified <em>target: any</em> above, this will apply to all servers </td> 
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
 <td> Specifies whether the file being transferred should be parsed for <a href="/deployment/environment-variables">environment variables</a>. Using this you can embed <em>&lt;%= ENV['ENV_VAR'] %&gt; </em> for example in your source file, and have it resolved during the deploy hook action </td> 
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
 <td width="13%"> source <img class="table-img-required" src="http://assets.cloud66.com/help/images/required.gif"> </td> 
 <td> This specifies the source location of your deploy hook file within your repository </td> 
</tr> 
<tr> 
 <td> target <img class="table-img-required" src="http://assets.cloud66.com/help/images/required.gif"> </td> 
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
 <td> Set to true for the snippet to be made executable on the target. Defaults to true if <em>execute</em> is true </td> 
</tr> 
<tr> 
 <td> destination </td> 
 <td> The destination path on your target server. You can also specify environment variables in your destination field; <em>&lt;%= ENV['STACK_PATH'] %&gt;</em> for example </td> 
</tr> 
<tr> 
 <td> apply_during <br> (all) </td> 
 <td> Specify when you want the deploy hook action to take place. Accepted values are <em>build_only</em>, <em>deploy_only</em> or <em>all</em>. The <em>build</em> step occurs the first time a stack is deployed, and will re-occur until the stack has been successfully deployed at least once. After this subsequent deployments are <em>deploy</em> steps </td> 
</tr> 
<tr> 
 <td> halt_on_error <br> (true) </td> 
 <td> Specify whether the execution should continue or halt in the event of an error </td> 
</tr> 
<tr> 
 <td> run_on <br> (single server) </td> 
 <td> If you have multiple servers in the same group (eg. scaled-up Rails servers), you can specify whether you want the deploy hook action to occur just once or once against each server in that group. Valid values are: <em>single_server</em> or <em>all_servers</em>. If you've specified <em>target: any</em> above, this will apply to all servers </td> 
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
 <td> Specifies whether the file being transferred should be parsed for <a href="/deployment/environment-variables">environment variables</a>. Using this you can embed <em>&lt;%= ENV['ENV_VAR'] %&gt; </em> for example in your source file, and have it resolved during the deploy hook action </td> 
</tr> 
<tr> 
 <td> owner <br> (your server user) </td> 
 <td> Ownership permissions for the file (and destination folder) on the target server. An example could be <em>user:group</em> </td> 
</tr> 
</tbody> 
</table> 

