---
menuheaders: [ "About using Microsoft Azure cloud", "Generating a management certificate", "Using your management certificate", "Notice" ]
layout: post
template: one-col
title: Microsoft Azure cloud
categories: Deployment
lead: ""
legacy: false
permalink: /:collection/:path
---


## About using Microsoft Azure cloud

You can use Cloud 66 to provision and deploy your code to servers in any [Azure region](http://developers.cloud66.com/#introduction-cloud-vendor-instance-regions).


## Generating a management certificate

The Azure management certificate is a certificate used to authenticate an agent, such as Cloud 66, to your Azure account. These certificates are uploaded to Azure and stored at the subscription level.

To generate a management certificate you can use OpenSSL: 

1.  Run the following command in your console:
    ```
    $ openssl req -x509 -nodes -days 3650 -newkey rsa:2048 -keyout azure.pem -out azure.pem
    ```
2.  Now use the created `azure.pem` file and run the following command:
    ```
    $ openssl x509 -inform pem -in azure.pem -outform der -out azure.cer
    ```


## Using your management certificate

Access _Management portal_ of your Azure account and go to the _Settings_ menu. You will need the _Subscription ID_ which is listed in _Subscriptions_ tab. Select the _Management certificate_ tab and click the _Upload_ button to upload `azure.cer`.

Now visit your Cloud 66 dashboard and [build your first stack](http://help.cloud66.com/introduction-to-cloud-66/introduction-to-cloud-66). When adding your Azure credentials, you will be asked to input your _subscription ID_ and upload the `azure.pem` file you created earlier.



### Notice

Should you wish to delete your stack on Cloud 66, your servers **will not** be deleted on your cloud provider unless [physical server deletion](/managing-your-stack/server-deletion) is turned on.


