You can automatically provision and deploy to [Hetzner Cloud](https://www.hetzner.com/cloud) servers in any supported location via Cloud 66. We also support Hetzner Cloud's VPC solution - [vSwitch](https://docs.hetzner.com/cloud/networks/connect-dedi-vswitch). 

## How to add your Hetzner API key to Cloud 66

You need to add a Hetzner Cloud API key to your Cloud 66 account in order to integrate them. On Hetzner API keys are specific to "projects". To generate an API key: 

1. Log into your Hetzner Cloud dashboard
2. Either add a new project or click on an existing one
3. Click on the key (*Access*) in the left-hand navigation
4. Click on *API Tokens* at the top of the main panel 
5. Click the *Generate API Token* button (top right) and give your token a name (e.g. Cloud 66)
6. Copy the API token and save it somewhere (it won't ever be shown again by Hetzner)
7. Log into your Cloud 66 dashboard and go to *Account Settings* → *Cloud Keys*. 
8. Click the green + and then select *Hetzner* as your cloud platform and follow the instructions to add your key.

## Using multiple API keys with Hetzner

If you need your servers to be separated for different applications, you should create a separate project in your Hetzner Cloud account, create an API key for that project, and then add it to Cloud 66.  Be sure to name your keys to make them easy to recognise and differentiate on both Hetzner and Cloud 66.

You will be able to choose between API keys (and therefore between your Hetzner projects) whenever you create a new application. However you cannot use an API key from a different project once an application has been created. It will always use the project that it was assigned to during initial setup.

#### Custom disk sizes aren't supported
<div class="notice"><p>Hetzner Cloud does not allow custom disk sizes for new instances. As such any disk size specified in your configuration files or via the Dashboard will be ignored by Hetzner.</p></div>

## Hetzner Virtual Private Cloud

Cloud 66 supports Hetzner's vSwitch (VPC) feature. You can configure this via your [manifest file](/{{page.collection}}
/how-to-guides/deployment/building-a-manifest-file.html). 

## Support for older versions of Ubuntu

Only versions 18.04 and 20.04 are deployable through Cloud 66.

## Cloud 66 tag propagation

Hetzner supports the propagation of (some) component tags from Cloud 66. This means that if you tag your servers in Cloud 66, those tags will be added to the corresponding servers on your Hetzner account (after some transformations).  

For more details on how this works please read our full guide on the [propagation of tags to cloud providers](/{{page.collection}}/how-to-guides/deployment/tagging-components.html#propagation-of-tags-to-cloud-providers).


<!--
#### Note
<div class="notice notice-warning"><p>
If you delete your application from Cloud 66, your servers will not be deleted on your cloud provider unless the <a href="/{{page.collection}}/how-to-guides/deployment/server-deletion.html">physical server deletion</a> setting is turned on.</p></div>
-->

### External links

- [Hetner Cloud](https://www.hetzner.com/cloud)