---
layout: post
template: one-col
title: Manually add an SSL certificate to a load balancer
categories: how-to-guides/security
lead: ""
legacy: false
tags: ["ssl"]
permalink: /:collection/:path
---


## Cloud 66 now supports automatic SSL termination

You can activate SSL termination on **HAProxy 1.5.x or higher** and **Amazon Elastic Load Balancer** through SSL certificate add-in.

[check here for more information](/{{page.collection}}/addins/ssl/)


## Amazon Elastic Load Balancer

To register an SSL certificate with Amazon Elastic Load Balancer, please refer to our [blog post](http://blog.cloud66.com/registering-ssl-certificate-with-amazon-elastic-load/).

Thanks to the AWS dashboard or the command line interface, you can easily upload your SSL certificates to relevant load balancers.

Through the AWS dashboard:

*   Sign in to the AWS management console and open the Amazon EC2 console.
*   Select your load balancer and upload a new SSL Certificate or choose an existing one.
*   In case it is a new certificate, enter a name for the certificate and copy paste the contents of the private key file and the public key file into the related fields, then save.



## Important

Ensure that the certificate is valid: current date must be between the certificate’s start and end date. Certificate keys also should not be password protected


Through the [AWS ELB command line interface](http://aws.amazon.com/developertools/2536):

*   Run the command below to add a new SSL certificate:

```
$ iam-servercertupload -b <CA authenticated SSL> -k <private key file(.pem)> -s <certificate name>  -c  <certificate chain file> –v
```

*You should retrieve any available SSL certificate using this command:

```
$ iam-servercertlistbypathx
```

*Run the command below to attach the SSL certificate to the load balancer:

```
$ elb-create-lb-listeners ELBConfigureSSL --listener "protocol=HTTPS,lb-port=443,instance-port=80,instance-protocol=HTTP, cert-id=&<certificate name>"
```

*To delete a certificate, run the following command:

```
$ iam-servercertdel -s <certificate name>
```

Refer to the [AWS documentation for more information](http://docs.aws.amazon.com/IAM/latest/UserGuide/InstallCert.html).


## Rackspace

Rackspace make it very easy for you to [add SSL certificates to their cloud load balancer](http://www.rackspace.com/knowledge_center/product-faq/cloud-load-balancers), straight from their control panel.

