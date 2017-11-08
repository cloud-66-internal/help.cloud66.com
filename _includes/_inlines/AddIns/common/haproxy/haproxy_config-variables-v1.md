


### Config variables 
<table class="table table-bordered table-striped"> 
<colgroup> 
<col width="20%"> 
<col width="20%"> 
<col width="60%"> 
</colgroup> 
<thead> 
<tr> 
 <th> Variable Name </th> 
 <th> Type </th> 
 <th> Description </th> 
</tr> 
</thead> 
<tbody> 
<tr> 
 <td> haproxy_username </td> 
 <td> string </td> 
 <td> Your HAProxy username </td> 
</tr> 
<tr> 
 <td> haproxy_password </td> 
 <td> string </td> 
 <td> Your HAProxy password </td> 
</tr> 
<tr> 
 <td> httpchk </td> 
 <td> string </td> 
 <td> Default value is "HEAD / HTTP/1.0" unless specified in your manifest file </td> 
</tr> 
<tr> 
 <td> balance </td> 
 <td> array </td> 
 <td> Default value is "roundrobin" unless specified in your manifest file </td> 
</tr> 
<tr> 
 <td> errorfile_lines </td> 
 <td> array </td> 
 <td> Default is empty array unless specified in your manifest file </td> 
</tr> 
<tr> 
 <td> servers </td> 
 <td> array </td> 
 <td> Array of "server" objects that are to be load balanced (see below) </td> 
</tr> 
<tr> 
 <td> server.ext_ipv4 </td> 
 <td> string </td> 
 <td> External IPv4 address (server is one of the items in the "servers" array above) </td> 
</tr> 
<tr> 
 <td> server.int_ipv4 </td> 
 <td> string </td> 
 <td> Internal IPv4 address (server is one of the items in the "servers" array above) </td> 
</tr> 
</tbody> 
</table> 





