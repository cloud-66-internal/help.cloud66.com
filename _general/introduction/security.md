---
menuheaders: [ "Infrastructure security", "Credit Card Information", "Customer protection", "Reporting security issues" ]
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Introduction/General/security/security_we-take-your-security-extremely-seriously-at-cloud-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Introduction/General/security/security_infrastructure-security-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Introduction/General/security/security_credit-card-information-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Introduction/General/security/security_customer-protection-v1.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Introduction/General/security/security_reporting-security-issues-v1.md" ]
layout: post
template: one-col
title: Security summary
categories: Introduction
lead: ""
legacy: false

keywords: []
permalink: /:collection/:path
---

{% assign urlArr = page.url | split: '/' %}
{% assign product = urlArr[1] %}

<a name="1"></a>{% include _inlines/Introduction/General/security/security_we-take-your-security-extremely-seriously-at-cloud-v1.md  product = product %}
<a name="2"></a>{% include _inlines/Introduction/General/security/security_infrastructure-security-v1.md  product = product %}
<a name="3"></a>{% include _inlines/Introduction/General/security/security_credit-card-information-v1.md  product = product %}
<a name="4"></a>{% include _inlines/Introduction/General/security/security_customer-protection-v1.md  product = product %}
<a name="5"></a>{% include _inlines/Introduction/General/security/security_reporting-security-issues-v1.md  product = product %}