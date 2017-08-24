<!-- usedin: [ _legacy_docker/deployment/env-vars.md, _maestro/Deployment/env-vars.md, _node/deployment/env-vars.md, _rails/deployment/env-vars.md, _skycap/deployment/env-vars.md] -->


## About environment variables

Environment variables contain a name and value, and provide a simple way to share configuration settings between multiple applications and processes in Linux. For example, Cloud 66 creates environment variables for your database server address, which can be referenced in your code. This has numerous benefits:

- Makes it easy to handle the fact that your environments use different environment-specific configurations
- These values may change, so setting them as variables makes life easier
- You avoid having to commit sensitive information to your Git repository

