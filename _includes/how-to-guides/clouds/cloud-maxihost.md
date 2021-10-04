You can automatically provision and deploy to [Maxihost](https://www.maxihost.com/) bare metal servers in any supported location via Cloud 66. 

#### Please note
<div class="notice notice-warning"><p>Maxihost doesn't currently allow instant deletion of servers via their UI (this functionality is coming with their new UI). Please contact Maxihost support directly if you wish to delete a server immediately.</p></div>

## How to add your Maxihost API key to Cloud 66

You need to add a Maxihost API key to your Cloud 66 account in order to integrate them. 

1. Log into your Maxihost dashboard
2. Click on *API* in the left-hand navigation
3. Click the *Create Key* button (top right) and give your token a name (e.g. Cloud 66)
4. Copy the API token
5. Log into your Cloud 66 dashboard and go to *Account Settings* → *Cloud Keys*. 
6. Click the green + and then select *Maxihost* as your cloud platform and follow the instructions to add your key.

#### Note
<div class="notice"><p>Maxihost does not allow custom disk sizes for new instances. As such any disk size specified in your configuration files or via the Dashboard will be ignored by Maxihost.</p></div>

## Support for older versions of Ubuntu

Only versions 18.04 and 20.04 are deployable through Cloud 66.
