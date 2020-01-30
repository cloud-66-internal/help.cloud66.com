You can use Cloud 66 to provision and deploy your code to servers in any [Linode region](http://developers.cloud66.com/#cloud-vendor-instance-regions#linode). 

Private networking is automatically enabled for all servers deployed by Cloud 66. This means that servers can communicate freely between each other on the same network without counting towards bandwidth costs.

## Generate a Linode API key
You need to provide your Linode API keys in order for Cloud 66 to access your account. To generate one, access the _my profile_ page of your Linode account, and go to the _API Keys_ menu (you may be asked to provide your password again for security reasons). 

Once there, create a label for your new key, as well as an expiry date, and then hit _Create API Key_. Take careful note of the key provided - it cannot be displayed again.

## Add Linode key to an application
Visit the Cloud 66 Dashboard and select _Get started building an application_. After connecting to your Git repository and analyzing your code, you will be asked to _Add your cloud platform_. From this menu, select *Linode* and provide your API key. 

#### Note
<div class="notice notice-warning"><p>
If you delete your application from Cloud 66, your servers will not be deleted on your cloud provider unless the <a href="/{{page.collection}}/how-to-guides/deployment/server-deletion.html">physical server deletion</a> setting is turned on.
</p></div>

### External links
- [Linode regions](https://www.linode.com/speedtest)
- [Linode pricing](https://www.linode.com/pricing)
