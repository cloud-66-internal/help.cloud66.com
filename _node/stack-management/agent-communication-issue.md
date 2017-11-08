---
layout: post
template: one-col
title: Agent Communication Issues
categories: stack-management
lead: ""
legacy: false

permalink: /:collection/:path
---


{% assign product = "node" %}





You will be notified in the case that Cloud 66 is unable to connect to your server for at least 20 minutes. This may happen for the following reasons:

- Your server cron daemon has stopped running
- Your server is under high load, preventing it from accepting communication
- Your server is unable to connect to Cloud 66 due to network connectivity issues
- Your server is down

If you receive a notification about this, please see the following steps:

1.  Is your web endpoint functioning? This could be a matter of visiting your server IP address through your browser.
2.  Can you [connect to the server yourself via SSH](http://help.cloud66.com/managing-your-stack/ssh-to-your-server)?
3.  Is your cloud vendor experiencing any issues?
    - AWS (Twitter, Status page)
    - CloudA (Twitter, Status page)
    - DigitalOcean (Twitter, Status page)
    - Google Cloud (Twitter)
    - Linode (Twitter, Status page)
    - Microsoft Azure (Twitter, Status page)
    - Packet (Status page)
    - Rackspace (Twitter, Status page)
4.  Is Cloud 66 experiencing issues? See the [Twitter](https://twitter.com/cloud66status) and [Status page](http://status.cloud66.com/).
5.  Try rebooting the server from your cloud vendor dashboard - this would help if it's under heavy load

If you have verified all of the above scenarios without finding the problem, please contact Cloud 66 support through your dashboard.


