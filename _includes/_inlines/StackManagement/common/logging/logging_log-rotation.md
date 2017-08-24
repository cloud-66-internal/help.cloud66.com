<!-- usedin: [ _legacy_docker/stack-management/logging.md, _maestro/stack-management/logging.md, _node/stack-management/logging.md, _rails/stack-management/logging.md] -->


## Log rotation

Your logs in `$STACK_PATH/log` and `/var/log` are automatically rotated on a daily basis into a sub-directory called archive/ in each respective directory. These logs are compressed, and can be uncompressed with the following command: `gzip -d 
.log.gz`.
