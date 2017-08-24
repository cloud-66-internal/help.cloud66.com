<!-- usedin: [ _legacy_docker/stack-management] - post: -->


## Complex queries

You can always combine queries to narrow your search donw. Some examples are below:

- `type:server type:stack` returns all servers and stack under your currently selected account
- `env:production tag:active` returns all production stacks with a tag called `active`
- `lion type:firewall type:server name:bigcustomer` returns everything within servers and firewall rules of any entity with a name of `bigcustomer` that has `lion` in it.
