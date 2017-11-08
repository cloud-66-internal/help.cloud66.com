---
menuheaders: [ "Important", "Resolution 1: Configuring the gem", "Resolution 2: Deploy hook" ]
layout: post
template: one-col
title: Permission errors during deployment
categories: how-to-guides
lead: ""
legacy: false

permalink: /:collection/:path
---








## Important

An example error you'd receive in the above case could look like **Errno::EACCES (Permission denied...)**

To resolve these issues you can do one of the following:

1.  Configure the gem to use one of the paths above.
2.  Use a deploy hook to permission the required path after deployment.






## Resolution 1: Configuring the gem

Many gems allow the use of a configuration file, or have initializers to configure them, so these can be used to set the directory needed for deployment. This will vary depending on the gem that is causing your issue - we recommend that you have a look at the documentation provided by your gem to see if an alternative configuration is indeed possible.






## Resolution 2: Deploy hook

You can use a [deploy hook](http://help.cloud66.com/deployment/deploy-hooks) to execute a script after each deployment that will setup the permissions required:



```
production:
    after_rails:
      - command: sudo mkdir $STACK_PATH/tmp/folder && sudo chmod 0775 -R $STACK_PATH/tmp/folder
        target: rails
        execute: true
```



