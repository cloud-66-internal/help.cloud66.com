<!-- usedin: [ _legacy_docker/Tutorials/1976-09-26-stack-failover-v1.md, _maestro/Tutorials/1976-09-26-stack-failover-v1.md, _node/tutorials/1976-09-26-stack-failover-v1.md, _rails/Tutorials/1976-09-26-stack-failover-v1.md] -->


### 2. Data

Enable [database replication between your stacks]({% if include.product == "skycap" %}https://help.cloud66.works/maestro/databases/database-replication.html{% else %}https://help.cloud66.works/{{ include.product }}https://help.cloud66.works/{{ include.product }}/databases/database-replication.html{% endif %}) - this will setup a master/slave architecture between your stacks, whereby the slave is an exact replica of the master at all times. 

