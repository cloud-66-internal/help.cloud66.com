---
menuheaders: [ "What is a manifest file?", "How can I use a manifest file?", "Manifest file examples", "Example 1: Specifying a Docker version", "Is my yaml valid?", "Need Help Building your first stack?", "Example 2: Change CORS settings", "What is CORS?", "Manifest file structure", "First level: Environment", "Second level: Application type", "Third Level (1): Configurations", "Third Level (2): Servers" ]
layout: post
template: one-col
title: Getting started with Manifest Files
categories: Deployment
lead: ""
legacy: false

permalink: /:collection/:path
---



## What is a manifest file?

A manifest files allows you to be more explicit about your stack composition and control settings that are not usually available through the user interface or Cloud 66 toolbelt. The file describes the setup of the components that run your stack. If you're already familiar with manifest files, refer to [Building a manifest file](https://help.cloud66.works/{{include.product}}/deployment/building-a-manifest-file.html).

These are just some examples of the settings you can control with a manifest file:

- Defining sizes and data center region for your servers
- Installing extra packages
- Specifying a component version
- Configure your stack components to share a server
- Customize component-specific configurations


## How can I use a manifest file?

The way to use this functionality differs from _Rails/Rack_ to _Docker_ stacks:

- For _Rails/Rack_ stacks, place a file called `manifest.yml` in a folder named `.cloud66`, that is in turn located in the root of your source code and checked into your repository.
- For _Docker_ stacks, provide manifest contents after your stack has been analyzed (and before you deploy it) by using the _advanced_ tab. You can also change the manifest after your stack deployment with the `Configure manifest` item in the right menu of your stack page.


## Manifest file examples

### Example 1: Specifying a Docker version

In this example, we'll set the version of Docker on your stack to 1.4.1. The top level node is the stack environment - the example below will therefore apply to the production environment.

```

production:
    docker:
        configuration:
            version: 1.4.1

```

This is how it works:

**production** The top node is the stack environment node. 

**docker** The second level is the *application type* to apply the settings to.

**configuration** As part of the application type, set configuration variables.

**version** Lastly, the configuration variable you wish to specify.



### Is my yaml valid?

The manifest file is YAML formatted. You can check its validity at [YAML Lint](http://www.yamllint.com/) or with this command:
    
`$ ruby -e "require 'yaml'; YAML.load_file('.cloud66/manifest.yml')"`
    

If you'd like to use a _Rails/Rack_ stack, once your `manifest.yml` file is in your `.cloud66` folder and checked in, you can go ahead and build your stack.

If you'd like to use a _Docker_ stack, create it and use the _Advanced_ tab after your code has been analyzed to provide your manifest content.



### Need Help Building your first stack?

Read about [building your first Cloud 66 stack](http://help.cloud66.com/introduction-to-cloud-66/introduction-to-cloud-66).



### Example 2: Change CORS settings

In the previous example, we used a manifest file to build a stack with a custom configuration. You can also use this file to make configuration changes to an existing stack. One of these cases is for changing the CORS settings on your web servers.



### What is CORS?

Cross Origin Resource Sharing is a mechanism that allows many resources (e.g. fonts, JavaScript etc.) on a web page to be requested from another domain outside the domain from which the resource originated.


To get started, open up your `manifest.yml` file in a text editor and enter the following lines in there:

```

production:
    docker:
        configuration:
            nginx:
                cors:
                    origin: '*'
                    methods: 'GET, OPTIONS'

```

This is how it works:

**production** The top node is the stack environment node. 

**docker** The second level is the *application type* to apply the settings to.

**configuration** As part of the application type, set configuration variables.

**nginx** This node allows you to set configurations for your Nginx server.

**cors** CORS related settings to follow.

**origin** CORS setting: What are the valid origin domains for a CORS request. Can be '\*' or an origin. For stacks created since 21st September 2016, it can also be a comma seperated list of origins.

**methods** CORS setting: HTTP methods allowed for CORS requests.

**headers** CORS setting: Allowed custom headers for CORS requests. Only for stacks created since 21st September 2016.

**credentials** CORS setting: Specifies whether requests with credentials are allowed for CORS requests. Only for stacks created since 21st September 2016.

Now that your `manifest.yml` file is in place under your `.cloud66` folder, you can commit this file to your Git and deploy a new stack with it.

Although redeploying your stack will set the configuration settings for the stack, it will not automatically push down all the changes to your Nginx servers. To force Nginx configuration changes to be pushed to your servers, we can use a stack setting in the [Cloud 66 toolbelt] called `reconfigure.nginx`. Simply use the following command to push the change (replacing `my_stack` with your stack name):

```

$ cx settings set -s my_stack reconfigure.nginx true

```

This will force your Nginx configuration to be rebuilt during the next redeployment. Once you redeploy, the CORS settings will be updated on your web servers.


## Manifest file structure

As evidenced in the examples above, manifest file settings can be applied during the build of a new stack or an existing stack depending on the type of setting. They can also change a wide range of settings and configurations on your stack. Now let's learn about the structure of a manifest file.

The manifest file is called `manifest.yml` and is `YAML` formatted. This file should be placed in the `.cloud66` folder of your Git repository if you're using a _Rails/Rack_ stack.


### First level: Environment

The first level of `manifest.yml` is the environment of your stack. This allows you to use the same `manifest.yml` for multiple stacks with different environments. Some examples are:

- production
- staging
- development

You can also use your own custom environment names in your manifest file.


### Second level: Application type

Application type determines which part of the stack is affected by this section. Available options are:

- docker
- elasticsearch
- gateway
- glusterfs
- load_balancer
- memcached
- mongodb
- mysql
- nginx
- postgis
- postgresql
- rails
- redis
- sinatra

The names above suggest which part of the stack the settings apply to. You can find out more about each section below.


### Third Level (1): Configurations

The third level of the manifest file determines the specific settings for the application type we want to change. As seen in **example 2**, changing CORS settings goes under the **docker** application type and the **configuration** node. 

For example, this is how to set the version of ElasticSearch to `0.90.7`:

```

production:
    elasticsearch:
        configuration:
            version: 0.90.7

```




### Third Level (2): Servers

As well as stack level configurations, manifest files can have settings per server as well. The **servers** section is where those settings are specified. Here is an example to specify the cloud vendor, region, server size and server name for one of your Docker servers. NOTE: `key_name` is optional and is used to select the named vendor cloud key in the case where there are multiple accounts available for the same cloud provider.

```

production:
    docker:
        servers:
            server:
                unique_name: app                
                region: us-east-1
                size: m3.medium
                vendor: aws
                key_name: Default

```

