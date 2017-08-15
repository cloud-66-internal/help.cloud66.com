### Parameters



    

        

            
Parameter

            
Default

            
Description

        

    

    

        

            
_stack_ 

            
_&mdash;_

            
Name of your stack

        
        
        

            
_dbtypes_ (optional)

            
all

            
Comma separated list of Database types which need backup tasks

        

        

            
_frequency_ (optional)

            
0 */1 * * *

            
Frequency of backup task in cron schedule format

        

        

            
_keep_ (optional)

            
100

            
Number of previous backups to keep

        

        

            
_gzip_ (optional)

            
true

            
Compress your backups with gzip

        

        

            
_exclude-tables_ (optional)

            
_&mdash;_

            
Tables that must be excluded from the backup

        

        

            
_run-on-replica_ (optional)

            
true

            
Run backup task on replica server if available

        


    




