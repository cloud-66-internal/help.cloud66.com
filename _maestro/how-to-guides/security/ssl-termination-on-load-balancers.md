---
layout: post
template: one-col
title:  Enabling SSL termination on load balancers
categories: how-to-guides/security
order: 2
lead: "How to enable automatic SSL termination on load balancers in Maestro"
legacy: false
tags: ["ssl"]
permalink: /:collection/:path:output_ext
---

## Enable automatic SSL termination

You can activate SSL termination on **HAProxy 1.5.x or higher** and **Amazon Elastic Load Balancer** through SSL certificate add-in.

If you need help getting started with SSL and certificates on Maestro [follow our detailed SSL guide](/maestro/how-to-guides/security/ssl-certificate.html).

## Amazon Elastic Load Balancer

To register an SSL certificate with Amazon Elastic Load Balancer, first, generate your certificate(s). If you're not sure how to do this, follow our [blog post](http://blog.cloud66.com/registering-ssl-certificate-with-amazon-elastic-load/) on the subject.

You can upload your SSL certificates to the relevant load balancers using the AWS dashboard or the command line interface.

### Using the AWS dashboard

*   Sign in to the AWS management console and open the Amazon EC2 console.
*   Select your load balancer and upload a new SSL certificate (or choose an existing one).
*   If it's a new certificate, enter a name for the certificate and copy paste the contents of the private key file and the public key file into the related fields, then save.

#### Important
<div class="notice notice-warning"><p>Ensure that the certificate is valid. The current date must be between the certificate’s start and end dates. You must also <a href="/maestro/how-to-guides/security/remove-passphrase.html">remove any passphrases</a> from your certificate keys.</p></div>

### Using the AWS command line

Through the [AWS ELB command line interface](http://aws.amazon.com/developertools/2536):

*   Run the command below to add a new SSL certificate:

```shell
$ iam-servercertupload -b <CA authenticated SSL> -k <private key file(.pem)> -s <certificate name>  -c  <certificate chain file> –v
```

* You should retrieve any available SSL certificate using this command:

```shell
$ iam-servercertlistbypathx
```

* Run the command below to attach the SSL certificate to the load balancer:

```shell
$ elb-create-lb-listeners ELBConfigureSSL --listener "protocol=HTTPS,lb-port=443,instance-port=80,instance-protocol=HTTP, cert-id=&<certificate name>"
```

* To delete a certificate, run the following command:

```shell
$ iam-servercertdel -s <certificate name>
```

Refer to the [AWS documentation for more information](http://docs.aws.amazon.com/IAM/latest/UserGuide/InstallCert.html).


## Rackspace

Rackspace makes it very easy for you to [add SSL certificates to their cloud load balancer](http://www.rackspace.com/knowledge_center/product-faq/cloud-load-balancers), straight from its control panel.