<!-- usedin: [ _legacy_docker/stack-management] - post: -->


## Log rotation

Your logs in `$STACK_PATH/log` and `/var/log` are automatically rotated on a daily basis into a sub-directory called archive/ in each respective directory. These logs are compressed, and can be uncompressed with the following command: `gzip -d 
.log.gz`.
