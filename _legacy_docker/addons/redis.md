---
menuheaders: [ "About adding Redis to your stack", "Add Redis to your stack", "Remove Redis from your stack" ]
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/redis/redis_about-adding-redis-to-your-stack-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/redis/redis_add-redis-to-your-stack-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/redis/remove-redis-from-your-stack-v1.md" ]
layout: post
template: one-col
title: Redis
categories: AddOns
lead: ""
legacy: true

---

{% assign urlArr = page.url | split: '/' %}
{% assign product = urlArr[1] %}

<a name="1"></a>{% include _inlines/AddOns/common/redis/redis_about-adding-redis-to-your-stack-v1.md  product = product %}
<a name="2"></a>{% include _inlines/AddOns/common/redis/redis_add-redis-to-your-stack-v1.md  product = product %}
<a name="3"></a>{% include _inlines/AddOns/common/redis/remove-redis-from-your-stack-v1.md  product = product %}