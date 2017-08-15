## Environment variables

Cloud 66 generates and maintains a number of environment variables automatically on your servers, including those that hold the address for your database server. When you enable database replication, we will generate additional environment variables for your slave server(s). The value of these variables will change when you enable or disable replication.



	

		

			
Environment variable

			
Value

		

	

	

		

			
MYSQL_SLAVE_ADDRESSES_INT

			
Internal IP address of your slave

		

		

			
MYSQL_SLAVE_ADDRESSES_EXT

			
External IP address your slave

		

		

			
MYSQL_DATABASE

			
The database name of the master

		

		

			
POSTGRESQL_SLAVE_ADDRESSES_INT

			
Internal IP address of your slave

		

		

			
POSTGRESQL_SLAVE_ADDRESSES_EXT

			
External IP address of your slave

		

		

			
POSTGRESQL_DATABASE

			
The database name of the master

		

		

			
POSTGRESQL_USERNAME

			
The database username of the master

		

		

			
POSTGRESQL_PASSWORD

			
The database password of the master

		

		

			
REDIS_SLAVE_ADDRESSES_INT

			
Internal IP address of your slave

		

		

			
REDIS_SLAVE_ADDRESSES_EXT

			
External IP address of your slave

		

	




In the case that an environment variable contains multiple values, such as IP addresses, these are separated by comma.

