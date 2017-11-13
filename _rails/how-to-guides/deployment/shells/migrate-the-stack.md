---
menuheaders: [ "1. Set a failover group ", "2. Add a CNAME record in your DNS provider dashboard ", "Note:", "3. Database backup", "4. Clone primary stack", "5. Add your database to backup stack", "6. Set up a replication between two stacks", "7. Add the second stack to the failover group", "Note:", "8. Put the primary site in to maintenance mode:", "9. Change the second database master", "10. Switch to the new stack", "11. [OPTIONAL]Switch your DNS record to the new stack" ]
layout: post
template: one-col
title: How to migrate your stack
categories: how-to-guides/deployment
lead: ""
legacy: false
tags: ["high-availability"]

permalink: /:collection/:path
---
{% include how-to-guides/deployment/migrate-the-stacks.md %}