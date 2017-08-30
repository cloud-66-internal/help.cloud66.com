---
menuheaders: [ "Important", "HTTP:", "HTTPS:" ]
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Account/General/cloud66-badge/cloud66-badge_you-can-use-cloud-66-to-deploy-and-manage-you-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Account/General/cloud66-badge/cloud66-badge_important-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Account/General/cloud66-badge/cloud66-badge_http-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Account/General/cloud66-badge/cloud66-badge_https-v1.md" ]
layout: post
template: one-col
title: Cloud66 Badge
categories: Account
lead: ""
legacy: false

---

{% assign urlArr = page.url | split: '/' %}
{% assign product = urlArr[1] %}

<a name="1"></a>{% include _inlines/Account/General/cloud66-badge/cloud66-badge_you-can-use-cloud-66-to-deploy-and-manage-you-v1.md  product = product %}
<a name="2"></a>{% include _inlines/Account/General/cloud66-badge/cloud66-badge_important-v1.md  product = product %}
<a name="3"></a>{% include _inlines/Account/General/cloud66-badge/cloud66-badge_http-v1.md  product = product %}
<a name="4"></a>{% include _inlines/Account/General/cloud66-badge/cloud66-badge_https-v1.md  product = product %}