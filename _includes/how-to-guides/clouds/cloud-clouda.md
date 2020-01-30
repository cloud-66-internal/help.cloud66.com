You can use Cloud 66 to provision and deploy your code to servers in [Cloud-A](https://www.clouda.ca/). Your servers and loadbalancer will be deployed in the _Default Network_ and will have public IP address from _Ext-Net_.

## Adding your Cloud-A credentials

Visit the Cloud 66 Dashboard and click the green *New Application* button. After connecting to your Git repository and analyzing your code, you will be asked to *Add your cloud platform*. From this menu, select **Cloud-A** and provide your Cloud-A username as _Username_ and your password as _API Key_.

#### Note
<div class="notice notice-warning"><p>
If you delete your application from Cloud 66, your servers will not be deleted on your cloud provider unless the <a href="/{{page.collection}}/how-to-guides/deployment/server-deletion.html">physical server deletion</a> setting is turned on.
</p></div>