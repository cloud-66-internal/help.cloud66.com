---
post: 
---

##### &#42;It is 0 for standalone servers, 1 for master servers and a number greater than 1 for slave servers

**PostgreSQL variables**

The following variables are only available in the PostgreSQL CustomConfig.



  

    

    

    

  

	

		

			
Variable Name

      
Type

			
Description

		

	

	

		

			
server_state

			
string

            
Value can be _stand_alone_, _pg_master_ or _pg_slave_ based on your server status

		

  




**Redis variables**

The following variables are only available in the Redis CustomConfig.



  

    

    

    

  

	

		

			
Variable Name

      
Type

			
Description

		

	

	

		

			
server_state

			
string

            
Value can be _stand_alone_, _redis_master_ or _redis_slave_ based on your server status

		

		

			
master_address

			
string

            
IP address of replication master (empty string if server is stand alone or master)

		

		

			
master_port

			
integer

            
Will be 6379 when server is _redis_slave_ , otherwise it is 0

		

  



