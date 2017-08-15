#If you're experiencing deployment failures to do with your asset pipeline manifest configurations, this could be due to issues with old assets.

You can clear up old assets on the server manually by [starting a terminal connection to your server](http://help.cloud66.com/managing-your-stack/ssh-to-your-server) and following these steps:

1.  Remove all the contents from your `$STACK_BASE/shared/assets` folder
2.  Create a new, empty manifest.yml file by issuing `touch $STACK_BASE/shared/assets/manifest.yml`
