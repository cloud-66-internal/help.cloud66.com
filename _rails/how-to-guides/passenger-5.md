---
layout: post
template: one-col
title: Passenger 5 upgrade troubleshooting
categories: how-to-guides
lead: ""
legacy: false

permalink: /:collection/:path
---


{% assign product = "Rails" %}





Cloud 66 supports deployments with the new Phusion Passenger 5 - all new stacks and servers will be using this version. If you have an existing stack that is running on Passenger 4, any newly scaled up servers will be upgraded. If your Nginx configuration is still on the old version, you may see this error message:





```
Deployment failed: Server: Wasp. Failed command: sudo /opt/nginx/sbin/nginx -t . Error output: nginx: [emerg] unknown directive "passenger_set_cgi_param" in /opt/nginx/conf/nginx.conf:110 nginx: configuration file /opt/nginx/conf/nginx.conf test failed`
```





This is caused by a directive that was deprecated in Passenger 5, so we'll want to replace it with the new directive. To do this, replace the following line in your Nginx CustomConfig (note that it is present in two places):





```
passenger_set_cgi_param     HTTP_X_FORWARDED_PROTO $scheme;
```





With the following:





```

{ % if passenger_supports_cgi_param == true %}
passenger_set_cgi_param     HTTP_X_FORWARDED_PROTO $scheme;"
{ % endif %}

```





This will effectively use the new directives for your servers running on Passenger 5, as well as the old directives for servers running on Passenger 4. While we recommend that you phase out any servers running on version 4, we provide this conditional in case this transition takes some time for you to complete.


