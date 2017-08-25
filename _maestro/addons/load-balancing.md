---
menuheaders: [ "Contents", "What is load balancing?", "Add a load balancer", "Balance the load per service" ]
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/load-balancing/load-balancing_contents.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/load-balancing/load-balancing_what-is-load-balancing.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/load-balancing/load-balancing_add-a-load-balancer.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/load-balancing/load-balancing_balance-the-load-per-service.md" ]
layout: post
template: one-col
title: Load Balancing
categories: AddOns
lead: ""
legacy: false

---

{% assign thingy = page.url | split: '/' %}
{% assign product = thingy[1] %}

<a name="1"></a>{% include _inlines/AddOns/common/load-balancing/load-balancing_contents.md  product = product %}
<a name="2"></a>{% include _inlines/AddOns/common/load-balancing/load-balancing_what-is-load-balancing.md  product = product %}
<a name="3"></a>{% include _inlines/AddOns/common/load-balancing/load-balancing_add-a-load-balancer.md  product = product %}
<a name="4"></a>{% include _inlines/AddOns/common/load-balancing/load-balancing_balance-the-load-per-service.md  product = product %}