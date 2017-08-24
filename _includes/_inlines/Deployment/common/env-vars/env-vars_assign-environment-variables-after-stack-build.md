<!-- usedin: [ _legacy_docker/deployment] - post: -->


## Assign environment variables after stack build

You can also set environment variables on an existing stack by visiting the _Environment variables_ link in the right sidebar of your stack detail page. Once you click _Save_, these variables will be propagated to all your servers automatically, ready for your use.

Be aware of the following while assigning environment variables:

- **Environment variables are not escaped**  

However, they are always wrapped in double quotes (eg. 
"ENV_VAR"
) so you can use them with multi-line variables like SSH keys.
- **Some environment variables cannot be modified**  

For example, environment variables for your server IP addresses cannot be changed because they are automatically set and updated based on reported IP addresses.

