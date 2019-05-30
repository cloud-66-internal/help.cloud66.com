## Overview

By default, all traffic is allowed to visit your web servers on ports 80, 443, 8080 and 8443. 

IP filtering caters for three exceptions to this:

1. Exceptions to rate limiting of IPs
2. Explicitly white listing IPs
3. Explicitly black listing IPs

## Rate-limiting exceptions

Repeated visits within a short time period (more than 1,500 hits per minute from a single IP address) on any of the default open ports will be blocked by [ActiveProtect](/{{page.collection}}/references/active-protect.html).

In order to prevent this from happening, you need to whitelist any IP addresses or ranges that will be calling your application more frequently than this limit.

IP addresses and ranges can be entered as comma separated lists. For example:

<pre class="prettyprint">
23.213.76.19
23.213.76.1/16
23.213.76.19,31.152.18.22,197.222.132.0/24
</pre>


### Cloudflare edge server support

You can also choose not to block traffic coming from Cloudflare edge servers. Cloudflare uses a large number of [IP ranges](https://www.cloudflare.com/ips/) and so, rather than adding them manually, you can choose to whitelist their entire service. 

## Allowing traffic (whitelisting)

Whitelisting is useful in cases where you need to lock down an application completely and only allow access for a specific IP (or range of IPs). To whitelist an IP, or IP range:

1. Open the Application Overview from your [Dashboard](https://app.cloud66.com/dashboard)
2. Click on *Network Settings*  in the **Application** panel on the right of the screen
3. Click on the *Traffic* tab at the top of the main panel
4. 	Add the IP address or range to the *Allowed Web Sources* field
5. Click *Review changes* and then *Apply changes*

IP addresses and ranges can be entered as comma separated lists. For example:

<pre class="prettyprint">
23.213.76.19
23.213.76.1/16
23.213.76.19,31.152.18.22,197.222.132.0/24
</pre>

#### Note
<div class="notice"><p>Whitelisting is not the same as removing rate limits. These are two separate lists with separate functions. A whitelisted IP could still be rate limited.</p></div>

## Denying traffic (blacklisting)

You can also blacklist specific IPs and/or ranges from visiting the ports mentioned above. To do so:

1. Open the Application Overview from your [Dashboard](https://app.cloud66.com/dashboard)
2. Click on *Network Settings*  in the **Application** panel on the right of the screen
3. Click on the *Traffic* tab at the top of the main panel
4. 	Add the IP address or range to the *Deny Access From* field
5. Click *Review changes* and then *Apply changes*

As above, you can enter IP addresses in comma separated lists, as ranges, or a combination. 

You can test this by adding your [own IP address](https://whatsmyip.com/) to the *Deny* list and then trying to visit your application in the browser. If you've configured this correctly you will get a *403 Forbidden* error from your app's Nginx proxy. 



