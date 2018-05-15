
## Database management

Use these commands to configure your replication slave database servers.


## Slave promotion to standalone master


### Usage

```
$ cx databases resync-slave [-s <stack>] <slave server name>
```

Re-syncs the specified slave database server with its master database server.

From time-to-time your slave database may go out of sync with its master. This action attempts to re-sync your specified slave server. This can happen depending on many factors (such as DB size, frequency of change, networking between servers etc).

The server provided must have already been configured as a replication slave via the Cloud 66 UI.
Providing the database type is optional and is only necessary for shared servers where we can't automatically determine the target database type.


<div class="notice-danger">
  <h3>Important!</h3><p>This action could result in application downtime, it is advisable to choose a non-busy time to perform this action, and to place your stack in maintenance mode.</p>
</div>


The existing master and other slaves will need to be removed after this process as after this the new configuration will have only a single database. You will be able to configure replication from this again after that point.

In the case of any servers not being accessible during this time, those servers will remain unchanged. It is therefore important to stop/shutdown those servers in this case (or to manually stop the DB service on those servers) as having multiple masters in a cluster could cause problems throughout the cluster.



### Parameters


|		Parameter 		   |	Default		|   Description    |
|--|:--:| -:|
|stack 					   |		—		|Name of your stack|
|stack server name 	   | 	—		| Name of the replication slave server to re-synchronise with master|
|database type (optional)	 	   |	—	| The Database type |
{:.table}


### Example


```
$ cx databases resync-slave -s My_Awesome_App my_slave_server_name
$ cx databases resync-slave -s My_Awesome_App --dbtype postgresql my_slave_server_name
```

