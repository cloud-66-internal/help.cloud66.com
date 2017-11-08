---
menuheaders: [ "About adding Redis to your stack", "Add Redis to your stack", "Remove Redis from your stack" ]
layout: post
template: one-col
title: Redis
categories: addins
lead: ""
legacy: true

permalink: /:collection/:path
---


### About adding Redis to your stack
This add-in makes it really simple for you to install Redis to an existing stack.


## Add Redis to your stack
To add Redis, access the add-ins menu of your stack and click _Redis_. You'll be given the option of installing it on an existing server in your stack, or deploy a new server for Redis.

## Remove Redis from your stack

At the current state, there is only one way of removing components/servers and that is removing their servers from the stack. Based on this, in order to be able to remove Redis from your stack, Redis needs to be installed on its own server i.e. not on a <u>server shared</u> with another component, otherwise you will need to [migrate your stack](http://community.cloud66.com/article/264-how-to-migrate-your-stack) and set the new one up without Redis.
