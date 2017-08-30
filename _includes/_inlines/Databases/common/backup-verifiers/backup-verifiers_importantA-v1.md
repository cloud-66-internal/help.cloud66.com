<!-- usedin: [ _legacy_docker/Databases/backup-verifiers-v1.md, _maestro/Databases/backup-verifiers-v1.md, _node/Databases/backup-verifiers-v1.md, _rails/databases/backup-verifiers-v1.md] -->


### Important

By including this script in your repository, you are opting in to the use of verified backups and will be charged accordingly. Please see our pricing below for more information.

To verify your backup, the script must contain a SQL query that returns a data set containing a single column called __result__ with a value of true or false. Should you need to change your verification script at some point, simply commit the change to Git and redeploy your code. Please find below an example of such queries and an example of the output for each respective database.