<!-- post: -->


### Parameters



|		Parameter 		   |	Default		|   Description    |
|--------------------------|:--------------:| ----------------:|
|stack 					   |	—			|Name of your stack|
|dbtypes (optional) 	   | 	all			|Comma separated list of Database types which need backup tasks|
|frequency (optional) 	   |	0 */1 * * *	|Frequency of backup task in cron schedule format|
|keep (optional) 		   |	100			|Number of previous backups to keep|
|gzip (optional)		   |	true		|Compress your backups with gzip|
|exclude-tables (optional) |	—			|Tables that must be excluded from the backup|
|run-on-replica (optional) |	true		|Run backup task on replica server if available|
