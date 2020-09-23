
You can use Cloud 66 to provision and deploy your code to servers in any Azure region. We support both the classic model (Azure Legacy Cloud) and the resource model (Azure Cloud).

### Generating credentials for Azure Cloud 

Cloud 66 needs some credentials to authenticate our agent to provision your infrastructure. You need to specify the following credentials:

* Azure Subscription ID
* Client ID (Microsoft calls this "Application ID")
* Client Secret (Microsoft calls this "Application key")
* Tentant ID

You can find those by following the [step by step guide created by Microsoft](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-create-service-principal-portal).

Make sure you give your Active Directory App the right access. Check if your Active Directory Application is added to your Azure subscription and has the role Contributor.
 
## Microsoft Azure Legacy

The following instructions apply to the now-deprecated legacy cloud adapter for Microsoft Azure.
This is here for historic purposes only. 

### Generating a management certificate

The Azure management certificate is a certificate used to authenticate an agent, such as Cloud 66, to your Azure account. These certificates are uploaded to Azure Legacy Cloud and stored at the subscription level.

To generate a management certificate you can use OpenSSL:

* Run the following command in your console:

```bash
	$ openssl req -x509 -nodes -days 3650 -newkey rsa:2048 -keyout azure.pem -out azure.pem
```

* Now use the created azure.pem file and run the following command:

```bash
	$ openssl x509 -inform pem -in azure.pem -outform der -out azure.cer
```

You will need `azure.pem` and `azure.cer` to use Cloud 66 with your Azure account.

### Using your management certificate

Access Management portal of your Azure account and go to the Settings menu. You will need the Subscription ID which is listed in Subscriptions tab. Select the Management certificate tab and click the Upload button to upload azure.cer.

Now visit your Cloud 66 dashboard and [build your first application](/{{page.collection}}/quickstarts/). When adding your Azure credentials, you will be asked to input your *subscription ID* and upload the azure.pem file you created earlier.

## Cloud 66 tag propagation

Azure Cloud (not legacy) supports the propagation of (some) component tags from Cloud 66. This means that if you tag your servers or load balancers in Cloud 66, those tags will be added to the corresponding components on your Azure Cloud account (after some transformations).  

For more details on how this works please read our full guide on the [propagation of tags to cloud providers](/{{page.collection}}/how-to-guides/deployment/tagging-components.html#propagation-of-tags-to-cloud-providers).

#### Note
<div class="notice notice-warning"><p>
If you delete your application from Cloud 66, your servers will not be deleted on your cloud provider unless the <a href="/{{page.collection}}/how-to-guides/deployment/server-deletion.html">physical server deletion</a> setting is turned on.
</p></div>

