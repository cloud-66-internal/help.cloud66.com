## What is a manifest file?

A manifest files allows you to be more explicit about your application composition and control settings that are not usually available through the user interface or Cloud 66 toolbelt. The file describes the setup of the components that make up your application. If you're already familiar with manifest files, refer to [Building a manifest file](/{{page.collection}}/how-to-guides/deployment/building-a-manifest-file.html).

These are just some examples of the settings you can control with a manifest file:

- Defining sizes and data center region for your servers
- Installing extra packages
- Specifying the version of a component
- Configure application components to share a server
- Customizing component-specific configurations

{% if include.product == 'Rails' %}
## How do I use a manifest file?

For _Rails/Rack_ applications, place a file called `manifest.yml` in a folder named `.cloud66`, that is in turn located in the root of your source code and checked into your repository. Once that file is checked in you can build your application. Remember to populate the file with appropriate values (see below for examples).

{% endif %}

#### Is my yaml valid?
<div class="notice"><p>The manifest file is YAML formatted. You can check its validity at <a href="http://www.yamllint.com/">YAML Lint</a> or with this command:<br/>
<code class="highlighter-rouge">$ ruby -e "require 'yaml'; YAML.load_file('.cloud66/manifest.yml')"</code>
</p></div>

## A working example

### Change CORS settings

You can use this file to make configuration changes to an existing application. One of these cases is for changing the Cross Origin Resource Sharing (CORS) settings on your web servers.

To get started, open up your `manifest.yml` file in a text editor and enter the following lines:

```
production:
    {{ include.product | downcase }}:
        configuration:
            nginx:
                cors:
                    origin: '*'
                    methods: 'GET, OPTIONS'
```

This is how it works:

**production**: The top node represents the application environment.

**{{ include.product | downcase }}**: The second level is the *application type* to which the settings will apply.

**configuration**: This node contains all the configuration variables for the application type.

**nginx**: This node allows you to set configurations for your Nginx server.

**cors**: This node contains all CORS related settings.

**origin**: Defines the valid origin domains for a CORS request. Can be a wildcard ('\*'), a single origin or a comma separated list of origins.

**methods**: Defines which HTTP methods are allowed for CORS requests.

**headers**: Defines which custom headers are allowed for CORS requests. 

**credentials**: Specifies whether requests with credentials are allowed for CORS requests. 

Ensure that you save this `manifest.yml` file under your `.cloud66` folder and commit it to your Git repository.  You can now deploy a new version of your application with it.

#### What is CORS?
<div class="notice"><p>
Cross Origin Resource Sharing is a mechanism that allows many resources (e.g. fonts, JavaScript etc.) on a web page to be requested from another domain outside the domain from which the resource originated.
</p></div>


### Force Nginx to update

Although redeploying your application will update its configuration, it will not automatically push down all the changes to your Nginx servers. 

To force Nginx configuration changes to be pushed to your servers, we can use a command in the [Cloud 66 toolbelt](/{{page.collection}}/quickstarts/using-cloud66-toolbelt.html ) called `reconfigure.nginx`. Use the following command to push the change (replacing `my_app` with your application name):

```
$ cx settings set -s my_app reconfigure.nginx true
```

This will force your Nginx configuration to be rebuilt during the next redeployment. Once you redeploy, the CORS settings will be updated on your web servers.


#### Caution
<div class="notice notice-warning"><p>Editing the manifest file of an existing application may not necessarily result in changes to the deployed instance(s) of that application, even if the application is subsequently redeployed. Read our <a href="/maestro/references/manifest-structure.html#classes-of-manifest-file-settings">in-depth guide</a> to understand the complexities around this. </p></div>


## What's next?

* Understand the [structure of manifest files](/{{page.collection}}/references/manifest-structure.html).
* Learn more about the power of manifest files with our [detailed how-to guide](/{{page.collection}}/how-to-guides/deployment/building-a-manifest-file.html).
* Learn how to use [CustomConfig](/{{page.collection}}/tutorials/custom-config.html) - a powerful tool for configuring the components of your application.
