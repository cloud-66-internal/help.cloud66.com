## What is ActiveProtect&trade;?

All applications deployed with Cloud 66 are automatically protected against [denial of service](http://en.wikipedia.org/wiki/Denial-of-service_attack) and [brute-force](http://en.wikipedia.org/wiki/Brute-force_attack) attacks. ActiveProtect also notifies you if important config files (such as `/etc/hosts`) are modified.

## ActiveProtect&trade; interface

The **ActiveProtect** page shows a list of current and past attacks (in the last 24 hours) with information about the source and destination.

To reach the page:

1. Open the Application Overview from your [Dashboard](https://app.cloud66.com/dashboard)
2. Click on *ActiveProtect* in the **Application** panel on the right of the screen

## Configuring ActiveProtect&trade;

ActiveProtect is intended to be fully automated, but there are some cases where you can modify its behaviour.

* You can exclude your own IP addresses from being rate limited using the [Network Tools](https://help.cloud66.com/{{page.collection}}/tutorials/ip-filtering.html#rate-limiting-exceptions) in your Dashboard. {% if include.product == 'rails' %}
* You can add the same exception directly via your [Manifest file](/rails/how-to-guides/deployment/building-a-manifest-file.html#rails). The value to modify in this case is `{{ include.product | downcase }}/configuration/activeprotect/http_ban_rate` {% endif %}
* You can also manually [whitelist or block IP addresses](/{{page.collection}}/tutorials/ip-filtering.html#allowing-traffic-whitelisting) using the same methods. 


## SSH soft blocking

Servers deployed with Cloud 66 only allow incoming SSH traffic from known IP addresses. To protect against brute-force SSH attacks, the servers are also configured to only accept SSH keys and not passwords. However, it is possible that user configurations result in vulnerabilities, and for such cases, repeated SSH login attempts are detected and blocked for at least 10 minutes.