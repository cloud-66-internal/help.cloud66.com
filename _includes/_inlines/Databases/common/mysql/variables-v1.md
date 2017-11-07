
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
		

  
##### *It is 0 for standalone servers, 1 for master servers and a number greater than 1 for slave servers
