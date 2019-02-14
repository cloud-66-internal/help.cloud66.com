

You can use Cloud 66 to provision and deploy your code to servers in any Google Compute Engine (GCE) region.

## Generate GCE API keys
You need to provide your GCE API keys in order for Cloud 66 to access your account. To generate these, access the Developers Console of your Google account, and create a project if you don’t already have one. Once you have a project, access it and click the APIs & auth -> APIs menu. On this page, make sure that the option for *Google Compute Engine API* is turned On.

Next, in the same menu, click *Credentials* and then *Create credentials*. Select Service account key from the options provided, and click *Create*. This will automatically download a JSON file for you, which contains your credentials.

We need three credentials to connect with your account:

1. Email address - this is available on the APIs -> _Credentials page under **Service Accounts**.
2. JSON key - the file that was automatically downloaded for you
3. Project ID - this is available at the top of the **Overview** page

Please remember to enable Google Compute in the API list under **API & auth** for the integration to work.

You may also have to enable billing for your account through the Billing and settings menu.

### Add GCE keys to a application

Visit the Cloud 66 Dashboard and click the green *New Application* button. After connecting to your Git repository and analyzing your code, you will be asked to *Add your cloud platform*. From this menu, select **Google Compute Cloud** and provide your credentials. 

#### Note
<div class="notice notice-warning"><p>
If you delete your application from Cloud 66, your servers will not be deleted on your cloud provider unless the <a href="/{{page.collection}}/how-to-guides/deployment/server-deletion.html">physical server deletion</a> setting is turned on.
</p></div>

### External links
- [GCE regions](https://developers.google.com/compute/docs/zones#available)
- [GCE pricing](https://cloud.google.com/products/compute-engine/#pricing)
