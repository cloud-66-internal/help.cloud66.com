


**Redis variables**

The following variables are only available in the Redis CustomConfig.


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
     <td>Value can be <i>stand_alone</i>, <i>redis_master</i> or <i>redis_slave</i> based on your server status</td> 
    </tr> 
    <tr> 
     <td>master_address</td> 
     <td>string</td> 
     <td>IP address of replication master (empty string if server is stand alone or master)</td> 
    </tr> 
    <tr> 
     <td>master_port</td> 
     <td>integer</td> 
     <td>Will be 6379 when server is <i>redis_slave</i> , otherwise it is 0</td> 
    </tr> 
   </tbody> 
  </table> 

  



