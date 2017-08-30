<!-- usedin: [ _legacy_docker/stack-management/server-deletion-v1.md, _maestro/stack-management/server-deletion-v1.md, _node/stack-management/server-deletion-v1.md, _rails/stack-management/server-deletion-v1.md] -->


### Note

Physical server deletion is not instant; it can currently take up to 24 hours for the removal to occur.




Cloud66 creates different objects depending on which cloud provider you use. For some clouds, Cloud66 creates items at the account level (such as the SSH key for the _Packet_ cloud), which will not be deleted after stack deletion. You should clear them manually if you don't need them for other stacks anymore.

Here is the list of items (Deleted/Not Deleted) depending on the cloud:

