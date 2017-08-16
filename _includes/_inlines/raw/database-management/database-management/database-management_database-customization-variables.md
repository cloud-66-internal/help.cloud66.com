---
post: 
---

### Database customization variables

There are a number of variables available for use in your database CustomConfig. Some are general for all database types, while others are database specific.

**Global variables**

The following variables are available to any database CustomConfig.



  

    

    

    

  

	

		

			
Variable Name

      
Type

			
Description

		

	

	

		

			
server

			
Hash

            
Hash containing information about your server

		

		

			
cloud

			
string

      		
Stack cloud

		

		

			
memory

			
integer

            
Server memory size (bytes)

		

		

			
core

			
integer

            
Server core count

		

  




**MySQL variables**

The following variables are only available in the MySQL CustomConfig.



  

    

    

    

  

	

		

			
Variable Name

      
Type

			
Description

		

	

	

		

			
server_state

			
string

            
Value can be _stand_alone_, _mysql_master_ or _mysql_slave_ based on your server status

		

		

			
server_id

			
integer

            
An ID used by MySQL replication to identify your server&#42;

		

		

			
db_name

			
string

            
Database name

		

  




