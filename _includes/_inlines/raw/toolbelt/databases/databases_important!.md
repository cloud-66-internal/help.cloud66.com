---
post: 
---

### Important!

This action could result in application downtime, it is advisable to choose a non-busy time to perform this action, and to place your stack in maintenance mode.

The existing master and other slaves will need to be removed after this process as after this the new configuration will have only a single database. You will be able to configure replication from this again after that point.

In the case of any servers not being accessible during this time, those servers will remain unchanged. It is therefore important to stop/shutdown those servers in this case (or to manually stop the DB service on those servers) as having multiple masters in a cluster could cause problems throughout the cluster.




