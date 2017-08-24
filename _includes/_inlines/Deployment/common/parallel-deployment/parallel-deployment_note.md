<!-- usedin: [ _legacy_docker/deployment/parallel-deployment.md, _maestro/Deployment/parallel-deployment.md, _node/deployment/parallel-deployment.md, _rails/deployment/parallel-deployment.md, _skycap/deployment/parallel-deployment.md] -->


### Note

To run database migrations during deployment, it is advisable to deploy in serial.




Although database migrations only occur on one server, depending on the changes, they could stop deployments on other servers from succeeding. Refer to our page on [controlling your database migrations](/database-management/database-management) for more information.

