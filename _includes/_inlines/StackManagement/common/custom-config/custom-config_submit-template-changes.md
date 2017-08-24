<!-- usedin: [ _legacy_docker/stack-management] - post: -->


## Submit template changes

When you are happy with the results, enter a commit message and press the _Commit to Server_ button. This will compile the configuration with real data and push it to all applicable servers in your stack. It also performs any post commit steps necessary like reloading Nginx with the new configuration file, putting your changes into effect.

This process takes place in the background and might take some time to complete depending on the number of servers in a stack and the nature of the configuration. Also, during the process cloud66 will update contents of [Custom git repository](/managing-your-stack/customconfig-git) so after fetching the latest version you can see the history of configuration changes in your own git client tool

You can subsequently see the history of your configuration changes with simple colored diff views alongside dates and comments.

