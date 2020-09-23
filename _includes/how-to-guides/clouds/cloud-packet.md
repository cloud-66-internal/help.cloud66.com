
You can use Cloud 66 to provision and deploy your code to servers in [Packet](https://www.packet.net/).

## Adding your Packet credentials

Visit the Cloud 66 Dashboard and select Get started building an application. After connecting to your Git repository and analyzing your code, you will be asked to _Add your cloud platform_. From this menu, select Packet and provide your Packet API Key from _API Keys_ on your _Packet Dashboard_. 

## Cloud 66 tag propagation

Packet supports the propagation of (some) component tags from Cloud 66. This means that if you tag your servers in Cloud 66, those tags will be added to the corresponding servers on your Packet account (after some transformations).  

For more details on how this works please read our full guide on the [propagation of tags to cloud providers](/{{page.collection}}/how-to-guides/deployment/tagging-components.html#propagation-of-tags-to-cloud-providers).


#### Note
<div class="notice notice-warning"><p>
If you delete your application from Cloud 66, your servers will not be deleted on your cloud provider unless the <a href="/{{page.collection}}/how-to-guides/deployment/server-deletion.html">physical server deletion</a> setting is turned on.
</p></div>

