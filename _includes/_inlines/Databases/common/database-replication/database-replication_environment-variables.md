<!-- usedin: [ _legacy_docker/Databases] - post: -->


## Environment variables

Cloud 66 generates and maintains a number of environment variables automatically on your servers, including those that hold the address for your database server. When you enable database replication, we will generate additional environment variables for your slave server(s). The value of these variables will change when you enable or disable replication.



	
 <table class="table table-bordered table-striped"> 
   <thead> 
    <tr> 
     <th> Environment variable </th> 
     <th> Value </th> 
    </tr> 
   </thead> 
   <tbody> 
    <tr> 
     <td> MYSQL_SLAVE_ADDRESSES_INT </td> 
     <td> Internal IP address of your slave </td> 
    </tr> 
    <tr> 
     <td> MYSQL_SLAVE_ADDRESSES_EXT </td> 
     <td> External IP address your slave </td> 
    </tr> 
    <tr> 
     <td> MYSQL_DATABASE </td> 
     <td> The database name of the master </td> 
    </tr> 
    <tr> 
     <td> POSTGRESQL_SLAVE_ADDRESSES_INT </td> 
     <td> Internal IP address of your slave </td> 
    </tr> 
    <tr> 
     <td> POSTGRESQL_SLAVE_ADDRESSES_EXT </td> 
     <td> External IP address of your slave </td> 
    </tr> 
    <tr> 
     <td> POSTGRESQL_DATABASE </td> 
     <td> The database name of the master </td> 
    </tr> 
    <tr> 
     <td> POSTGRESQL_USERNAME </td> 
     <td> The database username of the master </td> 
    </tr> 
    <tr> 
     <td> POSTGRESQL_PASSWORD </td> 
     <td> The database password of the master </td> 
    </tr> 
    <tr> 
     <td> REDIS_SLAVE_ADDRESSES_INT </td> 
     <td> Internal IP address of your slave </td> 
    </tr> 
    <tr> 
     <td> REDIS_SLAVE_ADDRESSES_EXT </td> 
     <td> External IP address of your slave </td> 
    </tr> 
   </tbody> 
  </table>
	




In the case that an environment variable contains multiple values, such as IP addresses, these are separated by comma.

