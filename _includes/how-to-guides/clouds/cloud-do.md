
You can use Cloud 66 to provision and deploy your code to servers (droplets) in any DigitalOcean region. 

Private networking is enabled for all data centers that support it. This means that servers can communicate freely between each other on the same network without counting towards bandwidth costs.

{% if include.product == 'rails' %}
## Bring Your Own Images (BYOI)

We support BYOI with this cloud provider, which allows you to spin up new servers for your applications that are based on your custom server images. Read our [BYOI guide](/{{page.collection}}/clouds/bring-your-own-images.html#cloud-providers-with-byoi-support) for more details.
{% endif %}

### Authorise Cloud 66 with DigitalOcean

Cloud 66 supports DigitalOcean API v2, which uses OAuth to authenticate requests. To authorize Cloud 66 to access your DigitalOcean account, Visit the Cloud 66 Dashboard and click the green *New Application* button. After connecting to your Git repository and analyzing your code, you will be asked to *Add your cloud platform*. From this menu, select *DigitalOcean*.

After clicking the *Authorize* button, you will be redirected to DigitalOcean to allow Cloud 66 to use your account. Once confirmed you will be redirected back to Cloud 66, where you can deploy your application to your DigitalOcean account.

### Upgrading account keys

If you need to upgrade your existing key from API v1 to v2, visit your _Account_ [Cloud keys](https://app.cloud66.com/clouds) page and edit your existing cloud key to authorize it with DigitalOcean. You need to be the account owner in order to update these credentials.

#### Note
<div class="notice notice-warning"><p>
If you delete your application from Cloud 66, your droplets will not be deleted on your cloud provider unless the <a href="/{{page.collection}}/how-to-guides/deployment/server-deletion.html">physical server deletion</a> setting is turned on.
</p></div>

### External Links
- [DO pricing](https://digitalocean.com/pricing)
- [DO features](https://digitalocean.com/features)
