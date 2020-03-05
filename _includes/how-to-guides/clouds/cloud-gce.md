You can use Cloud 66 to provision and deploy your code to servers in any Google Compute Engine (GCE) region.

## Generate GCE API keys

You need to provide your GCE API keys in order for Cloud 66 to access your account. 
To generate these: 

1. Access the [Console](https://console.cloud.google.com) of your Google account
2. Create a project (if you don't already have one)
3. Switch to your desired project
4. Use the search bar at the top of the page to search for "APIs & Services" and click the first result
5. Click on *Credentials* in the left-hand navigation menu
6. Click on *+ Create Credentials* at the top of the page; Select *Service Account*
7. Give your service account a name (like "cloud66") and an optional description; Click *Create*
8. Add the role "Compute Admin" and then click *Continue* (NOTE: this will grant Cloud 66 the rights to create/amend/delete compute resources in this project)
9. Leave the *User Access* options blank; Click *Create Key*, and select *JSON* then click *Create*. Download and save your JSON key somewhere locally (this contains your credentials)
10. Click *Done*

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

### External links
- [GCE regions](https://developers.google.com/compute/docs/zones#available)
- [GCE pricing](https://cloud.google.com/compute/pricing)
