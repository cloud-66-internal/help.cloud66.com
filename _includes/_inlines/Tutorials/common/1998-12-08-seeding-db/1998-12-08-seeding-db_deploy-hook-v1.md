<!--  usedin: [ _legacy_docker/Tutorials/1998-12-08-seeding-db-v1.md, _maestro/Tutorials/1998-12-08-seeding-db-v1.md, _node/tutorials/1998-12-08-seeding-db-v1.md, _rails/Tutorials/1998-12-08-seeding-db-v1.md] -->


## Deploy hook

Add a deploy hook to execute the above script during the first deploy (on the first server only). 

Create the file `.cloud66/deploy_hooks.yml` as below (replacing *production* with your target environment).



{%include _inlines/Tutorials/common/1998-12-08-seeding-db/code_1998-12-08-seeding-db_deploy-hook-oductiona-v1.md  product = include.product %}







