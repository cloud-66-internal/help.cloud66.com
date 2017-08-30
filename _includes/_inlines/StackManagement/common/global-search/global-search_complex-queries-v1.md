<!-- usedin: [ _legacy_docker/stack-management/global-search-v1.md, _maestro/stack-management/global-search-v1.md, _node/stack-management/global-search-v1.md, _rails/stack-management/global-search-v1.md, _skycap/stack-management/global-search-v1.md] -->


## Complex queries

You can always combine queries to narrow your search donw. Some examples are below:

- `type:server type:stack` returns all servers and stack under your currently selected account
- `env:production tag:active` returns all production stacks with a tag called `active`
- `lion type:firewall type:server name:bigcustomer` returns everything within servers and firewall rules of any entity with a name of `bigcustomer` that has `lion` in it.
