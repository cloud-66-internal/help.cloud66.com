<!-- usedin: [ _legacy_docker/deployment/reserved-tags-v1.md, _maestro/Deployment/reserved-tags-v1.md, _node/deployment/reserved-tags-v1.md, _rails/deployment/reserved-tags-v1.md, _skycap/deployment/reserved-tags-v1.md] -->


## Reserved tags

Cloud 66 currently reserves the following tags:



<table class="table table-bordered table-striped table-small"> 
<tbody>
<tr> 
 <td><b>Tag</b></td> 
 <td><b>Target</b></td> 
 <td><b>Description</b></td> 
</tr> 
<tr> 
 <td>c66.migrations.run</td> 
 <td>server</td> 
 <td>Sets the given server as the <a href="/database-management/database-management#migrations">migrator</a> - migrations will run on that server <i>only</i>, and the rest of the servers will wait until the migrations are performed before continuing with the deployment.</td> 
</tr> 
</tbody>
</table> 