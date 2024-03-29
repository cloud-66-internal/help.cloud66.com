You can use Cloud 66 to provision and deploy your code to servers (droplets) in any [DigitalOcean](https://digitalocean.com/) region. 

Private networking is enabled for all data centers that support it. This means that servers can communicate freely between each other on the same network without counting towards bandwidth costs.

{% if include.product != 'prepress' %}
## Authorise Cloud 66 with DigitalOcean

Cloud 66 supports DigitalOcean API v2, which uses OAuth to authenticate requests. To authorize Cloud 66 to access your DigitalOcean account, Visit the Cloud 66 Dashboard and click the green *New Application* button. After connecting to your Git repository and analyzing your code, you will be asked to *Add your cloud platform*. From this menu, select *DigitalOcean*.

After clicking the *Authorize* button, you will be redirected to DigitalOcean to allow Cloud 66 to use your account. Once confirmed you will be redirected back to Cloud 66, where you can deploy your application to your DigitalOcean account.

### Upgrading account keys

If you need to upgrade your existing key from API v1 to v2, visit your _Account_ [Cloud keys](https://app.cloud66.com/clouds) page and edit your existing cloud key to authorize it with DigitalOcean. You need to be the account owner in order to update these credentials.
{% endif %}
{% if include.product == 'prepress' %}
## Configuring DigitalOcean for Prepress

Prepress relies on object storage services to serve sites. As such you will need to grant Cloud 66 access to **Spaces Cloud Object Storage** in your DigitalOcean account. To do this:

1. Log into your DigitalOcean account
2. Click on API in the left-hand navigation
3. Scroll down to **Spaces Access Keys**
4. Click *Generate New Key*
5. Give the key a name and click the tick button
6. Copy the Key ID and Key Secret and paste them somewhere secure 

## Adding Spaces to your Cloud 66 account

During the application setup process: 

1. Click *Add New Cloud Provider*
2. Choose **DigitalOcean**
3. Paste in the **Key ID** and **Key Secret**
4. Click the *Authorise DigitalOcean* button

You will now be able to deploy Prepress sites to Spaces.
{% endif %}
{% if include.product == 'rails' %}
## Bring Your Own Images (BYOI)

We support BYOI with this cloud provider, which allows you to spin up new servers for your applications that are based on your custom server images. Read our [BYOI guide](/{{page.collection}}/how-to-guides/clouds/bring-your-own-images.html) for more details.
{% endif %}
{% if include.product != 'prepress' %}
## Cloud 66 tag propagation

DigitalOcean supports the propagation of (some) component tags from Cloud 66. This means that if you tag your servers in Cloud 66, those tags will be added to the corresponding servers on your DigitalOcean account (after some transformations).  

For more details on how this works please read our full guide on the [propagation of tags to cloud providers](/{{page.collection}}/how-to-guides/deployment/tagging-components.html#propagation-of-tags-to-cloud-providers).

#### Note
<div class="notice notice-warning"><p>
If you delete your application from Cloud 66, your droplets will not be deleted on your cloud provider unless the <a href="/{{page.collection}}/how-to-guides/deployment/server-deletion.html">physical server deletion</a> setting is turned on.
</p></div>
{% endif %}