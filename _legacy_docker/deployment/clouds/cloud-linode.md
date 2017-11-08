---
menuheaders: [ "About using Linode cloud", "Generate a Linode API key", "Add Linode key to a stack", "Notice", "External links" ]
layout: post
template: one-col
title: Linode cloud
categories: Deployment
lead: ""
legacy: true

permalink: /:collection/:path
---









## About using Linode cloud

You can use Cloud 66 to provision and deploy your code to servers in any [Linode region](http://developers.cloud66.com/#cloud-vendor-instance-regions#linode). Private networking is automatically enabled for all servers deployed by Cloud 66. This means that servers can communicate freely between each other on the same network without counting towards bandwidth costs.






## Generate a Linode API key

You need to provide your Linode API keys in order for Cloud 66 to access your account. To generate one, access the _my profile_ page of your Linode account, and go to the _API Keys_ menu (you may be asked to provide your password again for security reasons). Once there, create a label for your new key, as well as an expiry date, and then hit _Create API Key_. Take note of the key provided.






## Add Linode key to a stack

Visit the Cloud 66 Dashboard and select _Get started building a stack_. After connecting to your Git repository and analyzing your code, you will be asked to _Add your cloud platform_. From this menu, select _Linode_ and provide your API key.









### Notice

Should you wish to delete your stack on Cloud 66, your servers **will not** be deleted on your cloud provider unless [physical server deletion](/managing-your-stack/server-deletion) is turned on.









## External links

*   [Linode regions](https://www.linode.com/speedtest)
*   [Linode pricing](https://www.linode.com/pricing)

