## Overview

By default, all traffic is allowed to visit your web servers on ports `80`, `443`, `8080` and `8443`. Traffic filtering caters for five exceptions to this:

1. Explicitly white listing IP addresses
2. Explicitly white listing traffic from certain countries
3. Explicitly black listing IP addresses
4. Explicitly black listing traffic from certain countries
5. Forcing traffic to flow via your load balancer(s) rather than hitting servers directly

Cloud 66 also automatically rate limits IP addresses and will temporarily block an address that hits your application too often. Please read our [Application Surge Protection](/{{page.collection}}/references/network-configuration.html#application-surge-protection) guide for more details.

## Allowing traffic (whitelisting)

Whitelisting is useful in cases where you need to lock down an application completely and only allow access for a specific IP (or range of IPs) or from specific countries. 

To whitelist a list of **IP addresses** or IP address **ranges**:
1. Open the Application Overview from your [Dashboard](https://app.cloud66.com/dashboard)
2. Click on *Network*  in the **Application** panel on the right of the screen
3. Click on the *Traffic* tab at the top of the main panel
4. 	Add the IP address or range to the *Allowed Web Sources* field
5. Click *Review changes* and then *Apply changes*

IP addresses and ranges can be entered as comma separated lists. For example:

```shell
23.213.76.19
23.213.76.1/16
23.213.76.19,31.152.18.22,197.222.132.0/24
```

You can also add lists of addresses via URLs. The URL must point to either a `txt` or `JSON` formatted document. See our [reference guide](/{{page.collection}}/references/network-configuration.html#traffic-filters) for more details. 

### Whitelisting by country

To whitelist a **country** or set of countries:

1. Open the Application Overview from your **[Dashboard](https://app.cloud66.com/dashboard)**
2. Click on *Network* in the **Application** panel on the right of the screen
3. Select (or search) for the countries you wish to white list in the *Only allow traffic from these Countries* field
4. Click *Review changes* and then *Apply changes*

#### Note
<div class="notice"><p markdown=1>Whitelisting is not the same as removing [Application Surge Protection](/{{page.collection}}/references/network-configuration.html#application-surge-protection). These are two separate lists with separate functions. A whitelisted IP could still be rate limited.</p></div>

## Denying traffic (blacklisting)

You can also blacklist specific IPs and/or ranges from visiting the ports mentioned above. To do so:

1. Open the Application Overview from your [Dashboard](https://app.cloud66.com/dashboard)
2. Click on *Network*  in the **Application** panel on the right of the screen
3. Click on the *Traffic* tab at the top of the main panel
4. 	Add the IP address or range to the *Deny Access From* field
5. Click *Review changes* and then *Apply changes*

You can test this by adding your [own IP address](https://whatsmyip.com/) to the *Deny* list and then trying to visit your application in the browser. If you've configured this correctly you will get a *403 Forbidden* error from your app's Nginx proxy. 

As above, you can enter IP addresses in comma separated lists, as ranges, or a combination. You can also add lists of addresses via URLs. The URL must point to either a `txt` or `JSON` formatted document. See our [reference guide](/{{page.collection}}/references/network-configuration.html#traffic-filters) for more details. 

### Blacklisting by country

Works identically to whitelisting by countries above, except that it uses the *Block traffic from these Countries* field.




