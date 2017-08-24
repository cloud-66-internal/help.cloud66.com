---
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/getting-started-with-manifest-files/code_getting-started-with-manifest-files_what-is-cors-oduc.html", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/getting-started-with-manifest-files/code_getting-started-with-manifest-files_what-is-cors-cxse.html" ]
 usedin: [ _legacy_docker/deployment/getting-started-with-manifest-files.md, _maestro/Deployment/getting-started-with-manifest-files.md, _node/deployment/getting-started-with-manifest-files.md, _rails/deployment/getting-started-with-manifest-files.md, _skycap/deployment/getting-started-with-manifest-files.md] -->


### What is CORS?

Cross Origin Resource Sharing is a mechanism that allows many resources (e.g. fonts, JavaScript etc.) on a web page to be requested from another domain outside the domain from which the resource originated.




To get started, open up your `manifest.yml` file in a text editor and enter the following lines in there:



{%include _inlines/Deployment/common/getting-started-with-manifest-files/code_getting-started-with-manifest-files_what-is-cors-oduc.md %}




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



{%include _inlines/Deployment/common/getting-started-with-manifest-files/code_getting-started-with-manifest-files_what-is-cors-cxse.md %}




This will force your Nginx configuration to be rebuilt during the next redeployment. Once you redeploy, the CORS settings will be updated on your web servers.

