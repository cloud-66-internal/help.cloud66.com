<!-- usedin: [ _legacy_docker/Tutorials/2015-08-20-migrate-the-stack.md, _maestro/Tutorials/2015-08-20-migrate-the-stack.md, _node/tutorials/2015-08-20-migrate-the-stack.md, _rails/Tutorials/2015-08-20-migrate-the-stack.md] -->


### 6. Set up a replication between two stacks

On stack `B` go on stack page/database server (Redis, MySQL or etc.) and choose the server. On the right side bar click on "configure replication" choose stack A (you have to be Administrator on stack A otherwise it won't be listed). This makes stack B databases slave for stack `A`.

