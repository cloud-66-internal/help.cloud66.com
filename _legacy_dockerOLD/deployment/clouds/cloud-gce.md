---
layout: post
template: one-col
title: Google Compute Engine cloud
categories: Deployment
lead: ""
legacy: true

permalink: /:collection/:path
---



## About using Google Compute Engine cloud

You can use Cloud 66 to provision and deploy your code to servers in any [Google Compute Engine (GCE) region](http://developers.cloud66.com/#cloud-vendor-instance-regions).


## Generate GCE API keys

You need to provide your GCE API keys in order for Cloud 66 to access your account. To generate these, access the _Developers Console_ of your Google account, and create a project if you don't already have one. Once you have a project, access it and click the _APIs & auth_ -> _APIs_ menu. On this page, make sure that the option for _Google Compute Engine API_ is turned _On_. 

Next, in the same menu, click _Credentials_ and then _Create credentials_. Select _Service account key_ from the options provided, and click _Create_. This will automatically download a JSON file for you, which contains your credentials. 

We need three credentials to connect with your account:

1. Email address - this is available on the _APIs -> _Credentials_ page under Service Accounts. 
2. JSON key - the file that was automatically downloaded for you
3. Project ID - this is available at the top of the _Overview_ page

Please remember to enable Google Compute in the API list under _API & auth_ under APIs for the integration to work.

You may also have to enable billing for your account through the _Billing and settings_ menu.


## Add GCE keys to a stack

Visit the Cloud 66 Dashboard and select _Get started building a stack_. After connecting to your Git repository and analyzing your code, you will be asked to _Add your cloud platform_. From this menu, select _Google Compute Cloud_ and provide your credentials.



### Notice

Should you wish to delete your stack on Cloud 66, your servers **will not** be deleted on your cloud provider unless [physical server deletion](/managing-your-stack/server-deletion) is turned on.



## External links

*   [GCE regions](https://developers.google.com/compute/docs/zones#available)
*   [GCE pricing](https://cloud.google.com/products/compute-engine/#pricing)

