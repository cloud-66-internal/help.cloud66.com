You can use Cloud 66 to provision and deploy your code to servers in any [Linode region](https://developers.cloud66.com/#linode-2). 

Private networking is automatically enabled for all servers deployed by Cloud 66. This means that servers can communicate freely between each other on the same network without counting towards bandwidth costs.

{% if include.product != 'prepress' %}
## Generate a personal access token

You need to generate a personal access token for your Linode account to grant Cloud 66 access. To do this:

1. Log into [Linode Cloud Manager](https://cloud.linode.com/)
2. Click on your username at the top of the screen and select *My Profile*.
3. Click *API Tokens* and then *Add a Personal Access Token*
4. Give the token a label and set its expiry to `Never`
4. Set the access rights for the token to a minimum of:<br/>
	`Account: Read-only`<br/>
	`Domains: Read/Write`<br/>
	`Kubernetes: Read/Write`<br/>
	`Linodes: Read/Write`<br/>
	`NodeBalancers: Read/Write`<br/>
	`Volumes: Read/Write`<br/>
5. Click *Create Token* and then copy the personal access token. 

#### Note 
<div class="notice"><p>The personal access token won't be displayed by Linode again, so store it somewhere secure.</p></div> 

Linode has [more detailed instructions](https://www.linode.com/docs/platform/api/getting-started-with-the-linode-api/#get-an-access-token) if you need them.

## Add a personal access token to a new application

1. Log into your Cloud 66 Dashboard and click *New Application*. 
2. Connect your Git repository and analyzing your code, 
3. Click *Add Cloud* 
4. Select *Linode*, add your personal access token and click *Add Cloud*
5. Choose a server region and sizes and then complete the deployment process

## Update an existing personal access token

1. Log into Cloud 66 as account owner 
2. Open the [Cloud Keys](https://app.cloud66.com/clouds) page under *Settings*. 
3. Click on the "edit cloud" button next to your Linode cloud key
4. Enter the new personal access token and click *Save*

#### Note
<div class="notice notice-warning"><p>
If you delete your application from Cloud 66, your servers will not be deleted on your cloud provider unless the <a href="/{{page.collection}}/how-to-guides/deployment/server-deletion.html">physical server deletion</a> setting is turned on.
</p></div>
{% endif %}
{% if include.product == 'prepress' %}
## Configuring Linode for Prepress

Prepress relies on object storage services to serve sites. As such you will need to grant Cloud 66 access to **Cloud Object Storage** in your Linode account. To do this:

1. Log into your Linode account
2. Click on *Object Storage* in the left-hand nav
3. Click on the *Access Keys* tab
4. Click *Create Access Key*
5. Give your key a label and click *Create Access Key*
6. If a warning pop-up appears, click *Enable Object Storage* 
7. Copy your **Access Key** and **Secret Key** (these will not be accessible again, so keep them safe)

## Adding Linode Cloud Storage to your Cloud 66 account

During the application setup process:

1. Click Add *New Cloud Provider*
2. Choose **Linode**
3. Paste in the **Key ID** (aka Access Key) and **Key Secret**
4. Click the *Add Cloud* button

You will now be able to deploy Prepress sites to Linode.
{% endif %}

### External links
- [Linode regions](https://www.linode.com/speedtest){:target="_blank"}
- [Linode pricing](https://www.linode.com/pricing){:target="_blank"}
