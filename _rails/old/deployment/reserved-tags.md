---
menuheaders: [ "What are reserved tags?", "Reserved tags" ]
layout: post
template: one-col
title: Cloud 66 reserved tags
categories: Deployment
lead: ""
legacy: false
permalink: /:collection/:path
---









## What are reserved tags?

You can tag a variety of your infrastructure components, such as stacks, servers, or firewall rules, in order to differentiate them from one another. Some tag names are reserved by Cloud 66 as they will provide additional functionality to your infrastructure.






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
 <td>Sets the given server as the <a href="{% if include.product == "skycap" %}https://help.cloud66.works/maestro/databases/database-management.html{% else %}https://help.cloud66.works/{{ include.product }}/databases/database-management.html{% endif %}">migrator</a> - migrations will run on that server <i>only</i>, and the rest of the servers will wait until the migrations are performed before continuing with the deployment.</td> 
</tr> 
</tbody>
</table> 
