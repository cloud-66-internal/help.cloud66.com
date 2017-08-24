<!-- usedin: [ _legacy_docker/Databases] - post: -->


### Database customization variables

There are a number of variables available for use in your database CustomConfig. Some are general for all database types, while others are database specific.

**Global variables**

The following variables are available to any database CustomConfig.

<table class="table table-bordered table-striped"> 
   <colgroup> 
    <col width="20%"> 
    <col width="20%"> 
    <col width="60%"> 
   </colgroup> 
   <thead> 
    <tr> 
     <th>Variable Name</th> 
     <th>Type</th> 
     <th>Description</th> 
    </tr> 
   </thead> 
   <tbody> 
    <tr> 
     <td>server</td> 
     <td>Hash</td> 
     <td>Hash containing information about your server</td> 
    </tr> 
    <tr> 
     <td>cloud</td> 
     <td>string</td> 
     <td>Stack cloud</td> 
    </tr> 
    <tr> 
     <td>memory</td> 
     <td>integer</td> 
     <td>Server memory size (bytes)</td> 
    </tr> 
    <tr> 
     <td>core</td> 
     <td>integer</td> 
     <td>Server core count</td> 
    </tr> 
   </tbody> 
  </table> 
		

  




**MySQL variables**

The following variables are only available in the MySQL CustomConfig.



  <table class="table table-bordered table-striped"> 
     <colgroup> 
      <col width="20%"> 
      <col width="20%"> 
      <col width="60%"> 
     </colgroup> 
     <thead> 
      <tr> 
       <th>Variable Name</th> 
       <th>Type</th> 
       <th>Description</th> 
      </tr> 
     </thead> 
     <tbody> 
      <tr> 
       <td>server_state</td> 
       <td>string</td> 
       <td>Value can be <i>stand_alone</i>, <i>mysql_master</i> or <i>mysql_slave</i> based on your server status</td> 
      </tr> 
      <tr> 
       <td>server_id</td> 
       <td>integer</td> 
       <td>An ID used by MySQL replication to identify your server*</td> 
      </tr> 
      <tr> 
       <td>db_name</td> 
       <td>string</td> 
       <td>Database name</td> 
      </tr> 
     </tbody> 
    </table> 
		

  




