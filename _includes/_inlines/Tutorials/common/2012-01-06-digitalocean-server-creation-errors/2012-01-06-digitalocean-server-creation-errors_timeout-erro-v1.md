<!-- usedin: [ _legacy_docker/Tutorials/2012-01-06-digitalocean-server-creation-errors-v1.md, _maestro/Tutorials/2012-01-06-digitalocean-server-creation-errors-v1.md, _node/tutorials/2012-01-06-digitalocean-server-creation-errors-v1.md, _rails/Tutorials/2012-01-06-digitalocean-server-creation-errors-v1.md] -->


## Timeout Errors

Occasionally - again normally simply due to growing pains, DigitalOcean has a backlog of servers that are queued for creation. This could result in a new server creation taking longer than 20 minutes (the default Cloud 66 timeout for server creation on DigitalOcean).
This will result in a timeout error. 

Please check your DigitalOcean account to see if your server is still pending creation. Please contact DigitalOcean support if your server appears to be stuck in the creation step.
Once the DigitalOcean backlog of queued server actions has cleared, your server creation should be possible again, and you can re-attempt to deploy via Cloud 66.




