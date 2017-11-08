---
layout: post
template: one-col
title: How to add management certificates in Azure new portal
categories: Tutorials
lead: ""
legacy: false

permalink: /:collection/:path
---


{% assign product = "common" %}





In Cloud66 we use **Management Certificate** for authentication against Azure cloud. So, if you want to add an Azure cloud into your Cloud66 account you need to use a [Management Certificate](http://help.cloud66.com/deployment/microsoft-azure-cloud). The issue is that **Azure New Portal** has no place where management certificates can be added. To solve this, you can use [Azure old portal](http://manage.windowsazure.com/) or if for any reason old portal is not available, you can use the following instruction:

 1. Login to azure portal
 2. Visit [publishsettings](https://manage.windowsazure.com/publishsettings).  It should download a **publishsettings** file for you.
 3. Open the file with a text editor, you will see an XML file with some secure info in it. Copy **ManagementCertificate** part into another file and choose **.pfx** as the extension of new file.
 4. Use **.pfx** file in Cloud66 to add your Azure cloud. 


