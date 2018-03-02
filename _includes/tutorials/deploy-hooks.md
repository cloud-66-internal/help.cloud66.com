

Deploy hooks are scripts that allow you to take action at various points during the deployment process. This helps you customize the deployment of your application to meet your particular needs.

* * *


# Hook points

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


# Hook fields

There are {% if page.collection == 'rails' or page.collection == 'node'%}four{%else%}three{%endif%} types of deploy hooks, and the fields available (and required) vary by type:

1.  **Snippets:** use pre-existing scripts to install common packages. These snippets are [open source](https://github.com/cloud66/snippets), and are created by Cloud 66 or third parties.
2.  **Commands:** run your own commands.
3.{% if page.collection == 'node' or page.collection == 'rails' %}  **Existing Scripts:** use your own existing scripts for more comprehensive procedures (Rails/Node stacks only)
4. {%endif%} **Inline Scripts:** use your own inline scripts for more comprehensive procedures

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
     <td> env_vars </td>
     <td> Hash of values that will be set when running this specific deploy hook. Only applies to deploy hooks that have execute = true
If the stack already contains this env var it will be overridden with the value specified here. </td>
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
     <td> env_vars </td>
     <td> Hash of values that will be set when running this specific deploy hook. Only applies to deploy hooks that have execute = true
If the stack already contains this env var it will be overridden with the value specified here. </td>
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

{% if page.collection == 'rails' or page.collection == 'node' %}
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
     <td> env_vars </td>
     <td> Hash of values that will be set when running this specific deploy hook. Only applies to deploy hooks that have execute = true
If the stack already contains this env var it will be overridden with the value specified here. </td>
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
 <td> Specifies whether the file being transferred should be parsed for <a href="/node/tutorials/env-vars.html">environment variables</a>. Using this you can embed <em>&lt;%= ENV['ENV_VAR'] %&gt; </em> for example in your source file, and have it resolved during the deploy hook action </td>
</tr>
<tr>
 <td> owner <br> (your server user) </td>
 <td> Ownership permissions for the file (and destination folder) on the target server. An example could be <em>user:group</em> </td>
</tr>
</tbody>
</table>
{%endif%}
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
     <td> env_vars </td>
     <td> Hash of values that will be set when running this specific deploy hook. Only applies to deploy hooks that have execute = true
If the stack already contains this env var it will be overridden with the value specified here. </td>
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
 <td> Specifies whether the file being transferred should be parsed for <a href="/node/tutorials/env-vars.html">environment variables</a>. Using this you can embed <em>&lt;%= ENV['ENV_VAR'] %&gt; </em> for example in your source file, and have it resolved during the deploy hook action </td>
</tr>
<tr>
 <td> owner <br> (your server user) </td>
 <td> Ownership permissions for the file (and destination folder) on the target server. An example could be <em>user:group</em> </td>
</tr>
</tbody>
</table>


# How to use deploy hooks

To make use of deploy hooks, your stack should have a file called _deploy_hooks.yml_.

For **Rails/Rack** stacks this file should be present within a folder named _.cloud66_, which is in turn located in the root of your source code.

```
/.cloud66/deploy_hooks.yml
```

For **Docker stacks** this file should be pushed into [CustomConfig git](/{{page.collection}}/references/connect-cloud66-to-git-repo.html) Repository of the stack. This repository will be created after the stack is analysed, so you can push your deploy hooks before deployment started.

This file should be YAML formatted, and you can use a service like [YAMLlint](http://yamllint.com/) to validate it.

Creating a deploy hook from scratch consists of a number of steps:

1.  Choose your environment - eg. example _production_, _development_, _staging_ and so on.
2.  Choose your hook point - eg. _first_thing_, _after_rails_ and so on.
3.  Choose your deploy hook type - eg. _snippet_, _command_ or _script_.
4.  Select any additional hook fields you require

Automating deploy hooks can sometimes be tricky. To avoid issues, it's good practice to run each of your commands manually to see that they complete successfully. If a specific command doesn't show any output, you can use the `echo $?` command after issuing your command to see its exit code. If it returns a _zero_, your command was successful, whereas a _one_ means it has failed.


## Use a snippet deploy hook

Below is a bare-bone example of using a snippet with the required fields - it will execute the [Cloud 66 Node snippet](https://github.com/cloud66/snippets/blob/master/cloud66/node) as the first thing on all production servers.

```
production: # Environment
    first_thing: # Hook point
      - snippet: cloud66/{% if page.collection == 'maestro' or page.collection =='legacy_docker' %}docker{%else%}{{page.collection}}{%endif%} # Hook type
        target: any # Hook fields
        execute: true
```

You can also run several snippets at the same hook point like follows:

```
production: # Environment
    first_thing: # Hook point
      - snippet: cloud66/{% if page.collection == 'maestro' or page.collection =='legacy_docker' %}docker{%else%}{{page.collection}}{%endif%} # Hook type
        target: any # Hook fields
        execute: true
      - snippet: cloud66/bower
        target: any
        execute: true
```

See the available hook points and fields for more ways to customize this.


## Use a command deploy hook

The hook example below can be used to install anything from packages to fonts on your server, and you can nest different hooks for the same hook point like follows:

```
production: # Environment
    first_thing: # Hook point
      - command: apt-get install curl -y # Hook type
        target: any # Hook fields
        execute: true
      - command: apt-get install ncdu -y # Hook type
        target: any # Hook fields
        execute: true
```


### Important

When automating the installation of packages, remember to use the _-y_ flag to answer yes to all prompts.
{% if page.collection == 'rails' %}

The example below can be used to run custom rake tasks during server build. If you need to run it more than once, consider using the [rake task add-in](/rails/how-to-guides/deployment/running-rake-tasks.html).

```
production: # Environment
    last_thing: # Hook point
      - command: cd $STACK_PATH &amp;&amp; bundle exec rake dev:setup # Hook type
        target: rails # Hook fields ↓
        run_on: single_server
        apply_during: build_only
```

This will run our rake task on one Rails server and only during the initial build. We run this as a last_thing hook because if we ran it earlier the application wouldn't exist on the server and be usable.

{% endif %}

{% if page.collection == 'rails' or page.collection == 'node' %}
## Use an existing script deploy hook (Rails/Node stacks only)

The hook below will copy a file from your repository to your _tmp_ folder and execute it during build.

```
production: # Environment
    after_rails: # Hook point
      - source: /.cloud66/script.sh # Hook type
        destination: /tmp/script.sh
        target: rails # Hook fields ↓
        execute: true
        apply_during: build_only
```
{% endif %}


## Use an inline script deploy hook

The hook below will create an arbitrary log file in /tmp

```
first_thing: # Hook point
 - inline: |

     #!/usr/bin/env bash
     echo "script called!" >> /tmp/inline_script.log
   target: any
   execute: true
   apply_during: all
   owner: root:root
```

### Other examples

The example shows how to use the env_vars parameter.

```
before_nginx:
   snippet: cloud66/download
   target: {%if page.collection=='rails' or page.collection == 'node' %}{{page.collection}}{%else%}docker{%endif%}
   execute: true
   apply_during: build_only
   run_on: all_servers
   env_vars:
     SOURCE_URL: "https://github.com/openresty/headers-more-nginx-module/archive/v0.33.tar.gz"
     TARGET_PATH: /usr/local/build/nginx-modules/headers-more-nginx-module
     UNTAR: true
```
