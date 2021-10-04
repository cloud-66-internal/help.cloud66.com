You can automatically provision and deploy to [Vultr](https://www.vultr.com/) servers in any data centre via Cloud 66. 

## Add your Vultr API key to Cloud 66

You need to add your Vultr API key to your Cloud 66 account in order to integrate them. 

To generate a Vultr API key: 

1. Click on your account dropdown (top right) and select API
2. Enable API access (if it's not enabled already)
3.  Update the Access Control list to allow access from "Any IPv4" and "Any IPv6". If you would prefer to restrict access, you will need to add each of Cloud 66's [authorized IP addresses](https://app.cloud66.com/authorized_ips) individually. 
4. Copy your new Vultr API key and use it to create a new *Cloud Provider Key* on Cloud 66. 

You can find your account's  cloud keys under *Account Settings* → *Cloud Keys*. Click the green + and then select Vultr as your cloud platform and follow the instructions. Or you can add a key during application creation (see below).

## Add Vultr key to an application
Visit the Cloud 66 Dashboard and select _Get started building an application_. After connecting to your Git repository and analyzing your code, you will be asked to _Add your cloud platform_. From this menu, select *Vultr* and provide your API key. 

#### Custom disk sizes aren't supported
<div class="notice"><p>Vultr does not allow custom disk sizes for new instances. As such any disk size specified in your configuration files or via the Dashboard will be ignored by Vultr. You can change the disk size of an instance once it has been deployed.</p></div>

## Support for older versions of Ubuntu

Vultr doesn't natively support Ubuntu 14.04, so only versions 16.04, 18.04 and 20.04 are deployable through Cloud 66.

<!--
#### Note
<div class="notice notice-warning"><p>
If you delete your application from Cloud 66, your servers will not be deleted on your cloud provider unless the <a href="/{{page.collection}}/how-to-guides/deployment/server-deletion.html">physical server deletion</a> setting is turned on.</p></div>
-->

### External links

- [Vultr data centre locations](https://www.vultr.com/features/datacenter-locations/)
- [Vultr cloud compute pricing](https://www.vultr.com/products/cloud-compute/#pricing)