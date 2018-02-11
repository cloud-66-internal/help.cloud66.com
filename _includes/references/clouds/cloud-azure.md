
## About using Microsoft Azure cloud
You can use Cloud 66 to provision and deploy your code to servers in any Azure region. We are supporting the classic model (Azure Legacy Cloud) and the new resource model (Azure Cloud).

### Generating credentials for Azure Cloud (resource model)
Cloud 66 need some credentials to authenticate our agent to provision your infrastructure through Cloud 66. You need to specify the following credentials:

**Azure Subscription ID, Client ID (= Application Id), Client Secret (= Application key), Tentant ID**

You can find those by following the [step by step guide created by Microsoft](https://docs.microsoft.com/en-us/azure/azure-resource-manager/resource-group-create-service-principal-portal).

Make sure you give your created Active Directory App the right access. Check if your Active Directory Application is added to your Azure subscription and has the role Contributor.

### Generating a management certificate for Azure Legacy Cloud (classic)
The Azure management certificate is a certificate used to authenticate an agent, such as Cloud 66, to your Azure account. These certificates are uploaded to Azure and stored at the subscription level.

To generate a management certificate you can use OpenSSL:

1. Run the following command in your console:

	$ openssl req -x509 -nodes -days 3650 -newkey rsa:2048 -keyout azure.pem -out azure.pem
	
2. Now use the created azure.pem file and run the following command:

	$ openssl x509 -inform pem -in azure.pem -outform der -out azure.cer
	
You will need azure.pem and azure.cer to use Cloud 66 with your Azure account.

### Using your management certificate
Access Management portal of your Azure account and go to the Settings menu. You will need the Subscription ID which is listed in Subscriptions tab. Select the Management certificate tab and click the Upload button to upload azure.cer.

Now visit your Cloud 66 dashboard and [build your first stack](/{{page.collection}}/quickstarts/). When adding your Azure credentials, you will be asked to input your subscription ID and upload the azure.pem file you created earlier.

### Notice
Should you wish to delete your stack on Cloud 66, your servers will not be deleted on your cloud provider unless physical server deletion is turned on.

