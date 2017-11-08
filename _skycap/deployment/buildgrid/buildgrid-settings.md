---
menuheaders: [ "BuildGrid Settings", "Account Settings ", "User Settings" ]
layout: post
template: one-col
title: Buildgrid Settings
categories: deployment
lead: ""
legacy: false

permalink: /:collection/:path
---







### BuildGrid Settings

On this page you view your account and user BuildGrid settings. The BuildGrid is used to build docker images from your source code - for more information about the BuildGrid please [look here](/building-your-stack/cloud-66-buildgrid).





### Account Settings 

The `Image Namspace` for your account is generated automatically. This will form the namespace of all docker images that are build within this account. Ability to change this value coming soon for premium accounts! 
The following examples assume a value of `fantastic` for your Image Namespace - then your images would look like:





registry.buildgrid.cx/fantastic/my-stack-prod.my-service:latest
registry.buildgrid.cx/fantastic/my-stack-prod.web1:latest
registry.buildgrid.cx/fantastic/my-stack-stage.web1:latest
```








### User Settings

Here you will see your username and password. Note that these are specific to your user, not this account. You can use these credentials to login to the Cloud 66 Private Registry and pull down your images (should you wish to use them somewhere other than your stack servers)
To use your BuildGrid username and password you can do the following:





```
docker login registry.buildgrid.cx
> enter username
> enter password
docker pull registry.buildgrid.cx/<your-image>

```





