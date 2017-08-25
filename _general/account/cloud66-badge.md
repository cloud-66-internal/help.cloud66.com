---
menuheaders: [ "Important", "HTTP:", "HTTPS:" ]
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Account/General/cloud66-badge/cloud66-badge_you-can-use-cloud-66-to-deploy-and-manage-you.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Account/General/cloud66-badge/cloud66-badge_important.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Account/General/cloud66-badge/cloud66-badge_http.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Account/General/cloud66-badge/cloud66-badge_https.md" ]
layout: post
template: one-col
title: Cloud66 Badge
categories: Account
lead: ""
legacy: false

---

{% assign thingy = page.url | split: '/' %}
{% assign product = thingy[1] %}

<a name="1"></a>{% include _inlines/Account/General/cloud66-badge/cloud66-badge_you-can-use-cloud-66-to-deploy-and-manage-you.md  product = product %}
<a name="2"></a>{% include _inlines/Account/General/cloud66-badge/cloud66-badge_important.md  product = product %}
<a name="3"></a>{% include _inlines/Account/General/cloud66-badge/cloud66-badge_http.md  product = product %}
<a name="4"></a>{% include _inlines/Account/General/cloud66-badge/cloud66-badge_https.md  product = product %}