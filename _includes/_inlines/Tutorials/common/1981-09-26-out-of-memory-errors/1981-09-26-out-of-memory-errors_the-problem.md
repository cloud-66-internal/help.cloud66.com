

## The Problem

When you are deploying your stack (particularly in a non-development environment) asset pipeline compilation takes place during the deployment process.

If your server does not have sufficient memory available to perform the asset pipeline compilation you may receive one of the following errors:

- "Cannot allocate memory"
- "Killed"
- "Out of memory"

These are more likely to occur on servers with low memory availability. It is possible that your initial deployment succeeds, and subsequent deployments fail, and this is due to the fact that after your initial deployment you have additional memory usage of your web server. You can also use a [manifest file](http://help.cloud66.com/building-your-stack/getting-started-with-manifest-files) to specify a value in MB for *reserved_server_memory* - this may help with Passenger-based stacks by preventing Cloud 66 from allowing passenger to allocate additional processes.




