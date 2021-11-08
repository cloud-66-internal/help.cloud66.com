You can use Cloud 66 to provision and deploy your code to servers in any Google Compute Engine (GCE) region.

{% if include.product == 'rails' %}
## Bring Your Own Images (BYOI)

We support BYOI with this cloud provider, which allows you to spin up new servers for your applications that are based on your custom server images. Read our [[BYOI guide](/{{page.collection}}/how-to-guides/clouds/bring-your-own-images.html) for more details.
{% endif %}

## Generate GCE API keys

You need to provide your GCE API keys in order for Cloud 66 to access your account.
To generate these:

1. Access the [Console](https://console.cloud.google.com/) of your Google account
2. Create a project (if you don't already have one)
3. Switch to your desired project
4. Use the search bar at the top of the page to search for "APIs & Services" and click the first result
5. Click on the blue button (at the top of the main panel) named *+ Enable APIs and Services*
6. Search the API library for "Compute Engine API" and click on the top result
7. If the page **does not** have a green tick with "API enabled" click the blue *Enable* button (newer accounts tend to have the API already enabled, but it is worth checking)
8. Return to the "APIs & Services" dashboard (you can use search as you did in step 4)
9. Click on *Credentials* in the left-hand panel
10. Click on *+ Create Credentials* at the top of the page; Select *Service Account*
11. Give your service account a name (like "cloud66") and an optional description; Click *Create*
12. Add the role "Compute Admin" and then click *Continue* (NOTE: this will grant Cloud 66 the rights to create/amend/delete compute resources in this project)
13. Leave the *User Access* options blank; Click *Create Key*, and select *JSON* then click *Create*. 
14. Download and save your JSON key somewhere locally (this contains your credentials, so treat it with care)
15. Click *Done*

Once the above is done, we will need three things to connect with your account:

1. **Email address** - this is the email address of the service account you just created (ie. like cloud66@<project-id>.iam.gserviceaccount.com)
2. **Project ID** - this is your project ID (available at the top of the Overview page)
3. **JSON key** - the file that you downloaded and saved above

#### Permissions issues with GCE trial accounts
<div class="notice notice-warning"><p>
If you set up your API access while using a free trial account, you may need to recreate your credentials when you transition to a paid account. <a href="https://community.cloud66.com/t/looks-like-this-cloud-key-isnt-valid-error-for-google-compute-engine-users/113">Get more info here</a>.
</p></div>

#### Note
<div class="notice"><p>
Depending on the age of your Google account, you may need to "+ Enable APIs and Services" in the API list under <em>APIs & Services</em> for this integration to work
</p></div>

### Add GCE keys to an application

Visit the Cloud 66 Dashboard and click the green *New Application* button. After connecting to your Git repository and analyzing your code, you will be asked to *Add your cloud platform*. From this menu, select **Google Compute Cloud** and provide your credentials. 

#### Note
<div class="notice notice-warning"><p>
If you delete your application from Cloud 66, your servers will not be deleted on your cloud provider unless the <a href="/{{page.collection}}/how-to-guides/deployment/server-deletion.html">physical server deletion</a> setting is turned on.
</p></div>

## Using GCE service accounts with Cloud 66

A [service account](https://cloud.google.com/iam/docs/service-accounts#types){:target="_blank"} is a GCE identity that Google Cloud can use to run API requests on your behalf. If you've never used a GCE service account before, please read [Google's documentation](https://cloud.google.com/iam/docs/service-accounts#types){:target="_blank"} before starting.

To use a GCE service account with a Cloud 66 application, you must add the name of the account to your [manifest](/{{page.collection}}/quickstarts/getting-started-with-manifest.html) using the format `configuration/instance_service_account_name`. For example, this would configure MySQL to use the GCE service account named `mysql-user@my-project-name.iam.gserviceaccount.com`:

```yaml
mysql:
  configuration:
    version: 5.7
    root_disk_size: 100
    root_disk_type: ssd
    instance_service_account_name: mysql-user@my-project-name.iam.gserviceaccount.com
```

Cloud 66 will now associate any MySQL instances created with the GCE service account you specified.

### External links
- [GCE regions](https://developers.google.com/compute/docs/zones#available)
- [GCE pricing](https://cloud.google.com/compute/pricing)
