---
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/common/1901-01-26-access-your-code/1901-01-26-access-your-code_public-repositories.html", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/common/1901-01-26-access-your-code/1901-01-26-access-your-code_notice.html", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/common/1901-01-26-access-your-code/1901-01-26-access-your-code_private-repositories.html", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/common/1901-01-26-access-your-code/1901-01-26-access-your-code_github-example.html", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Tutorials/common/1901-01-26-access-your-code/1901-01-26-access-your-code_bitbucket-example.html" ]
layout: post
template: one-col
title: Accessing your Git repository
categories: tutorials
lead: ""
legacy: false

---

{% assign urlArr = page.url | split: '/' %}
{% assign product = urlArr[1] %}
{% assign product = "skycap" %}

{% include _inlines/Tutorials/common/1901-01-26-access-your-code/1901-01-26-access-your-code_public-repositories-v1.md  product = product %}
{% include _inlines/Tutorials/common/1901-01-26-access-your-code/1901-01-26-access-your-code_notice-v1.md  product = product %}
{% include _inlines/Tutorials/common/1901-01-26-access-your-code/1901-01-26-access-your-code_private-repositories-v1.md  product = product %}
{% include _inlines/Tutorials/common/1901-01-26-access-your-code/1901-01-26-access-your-code_github-example-v1.md  product = product %}
{% include _inlines/Tutorials/common/1901-01-26-access-your-code/1901-01-26-access-your-code_bitbucket-example-v1.md  product = product %}
