---
menuheaders: [ "Installing Postfix", "Configuring Rails" ]
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/common/1960-09-24-smtp-installation/1960-09-24-smtp-installation_depending-on-the-scale-of-your-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/common/1960-09-24-smtp-installation/1960-09-24-smtp-installation_installing-postfix-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/common/1960-09-24-smtp-installation/1960-09-24-smtp-installation_configuring-rails-v1.md" ]
layout: post
template: one-col
title: Installing SMTP on your server
categories: Tutorials
lead: ""
legacy: false

keywords: []
permalink: /:collection/:path
---

{% assign urlArr = page.url | split: '/' %}
{% assign product = urlArr[1] %}

<a name="1"></a>{% include _inlines/Tutorials/common/1960-09-24-smtp-installation/1960-09-24-smtp-installation_depending-on-the-scale-of-your-v1.md  product = product %}
<a name="2"></a>{% include _inlines/Tutorials/common/1960-09-24-smtp-installation/1960-09-24-smtp-installation_installing-postfix-v1.md  product = product %}
<a name="3"></a>{% include _inlines/Tutorials/common/1960-09-24-smtp-installation/1960-09-24-smtp-installation_configuring-rails-v1.md  product = product %}