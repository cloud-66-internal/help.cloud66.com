
CustomConfig allows you to edit and modify component configuration templates used by Cloud 66 to configure your servers. This is currently available for Nginx, HAProxy and database configurations, and more configuration templates are forthcoming.

CustomConfig uses the [Liquid templating language](http://www.liquidmarkup.org/) developed by [Shopify](http://www.shopify.com/) and used by many websites. There are many good resources on the web on how to use the Liquid syntax.

## Accessing CustomConfig

You can access and modify CustomConfig files in two different ways:

1. Using the web based UI
2. Using CustomConfig git repository

Using the web based UI is very easy. Everything you need to use the web based UI is on this page.

**CustomConfig git** is a private git repository that allows you make changes to CustomConfig files using the well known git tooling. You can find more information about CustomConfig git repository [here](/{{page.collection}}/tutorials/custom-config-git.html).

## Preview a template

To use Nginx as an example, go to your Web Servers group detail page and click CONFIGURE NGINX in the right sidebar. This page will show you the template used to build the Nginx configuration when Nginx is deployed during your application built or reconfigured. Once you’re done with editing your template, you can preview the results by clicking on the Preview button.

See our documentation for more details about CustomConfig for [Nginx]({% if page.collection == "maestro" %}/maestro/references/nginx.html{%else%}/{{page.collection}}/references/nginx.html{%endif%}), HAProxy and [databases]({% if page.collection == "maestro" %}/maestro/how-to-guides/databases/shells/manage-backups.html{%else%}/{{page.collection}}/how-to-guides/databases/shells/manage-backups.html{%endif%}).

#### Important
<div class="notice">
<p>Preview is generated with dummy data about your server (like the number of cores or the path for different binaries). Refer to our documentation to learn about how the size of your instance affects the number of <a href="/{{page.collection}}/references/nginx.html">Nginx workers on your server</a>
</p></div>


## Submit template changes

When you are happy with the results, enter a commit message and press the Commit to Server button. This will compile the configuration with real data and push it to all applicable servers in your application. It also performs any post commit steps necessary like reloading Nginx with the new configuration file, putting your changes into effect.

This process takes place in the background and might take some time to complete depending on the number of servers in a application and the nature of the configuration. Also, during the process cloud66 will update contents of [Custom git repository](/{{page.collection}}/tutorials/custom-config-git.html) so after fetching the latest version you can see the history of configuration changes in your own git client tool

You can subsequently see the history of your configuration changes with simple colored diff views alongside dates and comments.

### Updates to configuration files and patches

Every so often, Cloud 66 needs to update the base configuration files used for your application to run. When a patch is released, having customized configurations introduces complexities due to the differences in settings. Some of these files are part of CustomConfig, which allows users to customize their configuration files.

When a patch is released, having customized configurations introduces complexities due to the differences in settings. If you don’t have customized content, the patch will be automatically applied.

#### Warning
<div class="notice notice-warning"><p>
Failure to apply configuration updates may lead to unexpected behaviour.</p> </div>

If we cannot automatically apply the patch, you will be notified and provided with a patch archive. It contains two files - the updated configuration and a patch file. Extract the contents of the archive and download your current configuration from the Cloud 66 UI. With these files ready, run the following command:

`patch <current_configuration> -i <patch_file> -o merged_configuration`

This will result in a merged_configuration file being created - please ensure that there are no merge errors at this point. Unfortunately we cannot deal with every single use case generically, so it is your responsibility to ensure that the new file conforms with your requirements.

In the absence of merge errors, copy and paste the contents of the merged_template into your CustomConfig form and commit it.

## What's next?

* Learn how to customize your deployment workflow with [deploy hooks](/{{page.collection}}/tutorials/deploy-hooks.html).
* Learn how to add custom [environment variables](/{{page.collection}}/tutorials/env-vars.html) to your application
* Learn how to add a [load balancer](/{{page.collection}}/tutorials/load-balancing.html) to your application