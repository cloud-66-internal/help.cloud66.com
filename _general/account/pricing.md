---
menuheaders: [ "Introduction", "Comparing Cloud 66 with Heroku and DIY", "*Drops to $56/month for the second stack as only the first server of the account is $19.", "Assumptions" ]
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Account/General/pricing/pricing_introduction-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Account/General/pricing/pricing_comparing-cloud-66-with-heroku-and-diy-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Account/General/pricing/pricing_-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Account/General/pricing/pricing_assumptions-v1.md" ]
layout: post
template: one-col
title: Comparing Pricing
categories: Account
lead: ""
legacy: false

keywords: []
permalink: /:collection/:path
---

{% assign urlArr = page.url | split: '/' %}
{% assign product = urlArr[1] %}

<a name="1"></a>{% include _inlines/Account/General/pricing/pricing_introduction-v1.md  product = product %}
<a name="2"></a>{% include _inlines/Account/General/pricing/pricing_comparing-cloud-66-with-heroku-and-diy-v1.md  product = product %}
<a name="3"></a>{% include _inlines/Account/General/pricing/pricing_-v1.md  product = product %}
<a name="4"></a>{% include _inlines/Account/General/pricing/pricing_assumptions-v1.md  product = product %}