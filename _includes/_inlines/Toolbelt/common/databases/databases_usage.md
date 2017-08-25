<!--  usedin: [ _legacy_docker/Toolbelt/databases.md, _maestro/Toolbelt/databases.md, _node/toolbelt/databases.md, _rails/Toolbelt/databases.md] -->


### Usage



{%include _inlines/Toolbelt/common/databases/code_databases_usage-cxdatabases-2.md %}


Re-syncs the specified slave database server with its master database server.

From time-to-time your slave database may go out of sync with its master. This action attempts to re-sync your specified slave server. This can happen depending on many factors (such as DB size, frequency of change, networking between servers etc).

The server provided must have already been configured as a replication slave via the Cloud 66 UI.
Providing the database type is optional and is only necessary for shared servers where we can't automatically determine the target database type.

