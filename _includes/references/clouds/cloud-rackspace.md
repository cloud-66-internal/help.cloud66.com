
You can use Cloud 66 to provision and deploy your code to servers in any Rackspace region. 

### Note 
<div class="notice"><p>
If you hold a Rackspace UK account, you will be limited to creating servers in the London region. Only a Rackspace US account is able to create servers in the remaining regions.
</p></div>

## Generate a Rackspace API key
You need to provide your Rackspace API key in order for Cloud 66 to access your account. To generate a key, access the _Account_ dropdown in the top right of your Rackspace account, and go to the User Management page. 

Once there, click _Create a new user_, and fill in the necessary details for this new user. This user must be created with **Full Access** in order for servers to be created in your account.

Once you click Create user, you will be able to view the API Key by clicking *Show*.

### Add Rackspace key to an application
Visit the Cloud 66 Dashboard and select _Get started building an application_. After connecting to your Git repository and analyzing your code, you will be asked to _Add your cloud platform_. From this menu, select Rackspace and provide your API key. 

#### Note
<div class="notice notice-warning"><p>
If you delete your application from Cloud 66, your servers will not be deleted on your cloud provider unless the <a href="/{{page.collection}}/how-to-guides/deployment/server-deletion.html">physical server deletion</a> setting is turned on.
</p></div>

### External links
- [Rackspace regions](http://www.rackspace.com/knowledge_center/article/about-regions)
- [Rackspace pricing](http://www.rackspace.com/cloud/public-pricing/)
