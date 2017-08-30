---
menuheaders: [ "Contents", "About deployment gateways", "Important", "How to deploy your stack behind the gateway server", "Accessing your servers behind the gateway server" ]
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/deployment-gateway/deployment-gateway_contents-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/deployment-gateway/deployment-gateway_about-deployment-gateways-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/deployment-gateway/deployment-gateway_important-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/deployment-gateway/deployment-gateway_how-to-deploy-your-stack-behind-the-gate-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Deployment/common/deployment-gateway/deployment-gateway_accessing-your-servers-behind-the-gatewa-v1.md" ]
layout: post
template: one-col
title: Deployment Gateway
categories: Deployment
lead: ""
legacy: true

keywords: []
permalink: /:collection/:path
---

{% assign urlArr = page.url | split: '/' %}
{% assign product = urlArr[1] %}


<a name="2"></a>{% include _inlines/Deployment/common/deployment-gateway/deployment-gateway_about-deployment-gateways-v1.md  product = product %}
<a name="3"></a>{% include _inlines/Deployment/common/deployment-gateway/deployment-gateway_important-v1.md  product = product %}
<a name="4"></a>{% include _inlines/Deployment/common/deployment-gateway/deployment-gateway_how-to-deploy-your-stack-behind-the-gate-v1.md  product = product %}
<a name="5"></a>{% include _inlines/Deployment/common/deployment-gateway/deployment-gateway_accessing-your-servers-behind-the-gatewa-v1.md  product = product %}