---
menuheaders: [ "Infrastructure security", "Credit Card Information", "Customer protection", "Reporting security issues" ]
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Introduction/General/security/security_we-take-your-security-extremely-seriously-at-cloud.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Introduction/General/security/security_infrastructure-security.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Introduction/General/security/security_credit-card-information.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Introduction/General/security/security_customer-protection.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Introduction/General/security/security_reporting-security-issues.md" ]
layout: post
template: one-col
title: Security summary
categories: Introduction
lead: ""
legacy: false

---

{% assign urlArr = page.url | split: '/' %}
{% assign product = urlArr[1] %}

<a name="1"></a>{% include _inlines/Introduction/General/security/security_we-take-your-security-extremely-seriously-at-cloud.md  product = product %}
<a name="2"></a>{% include _inlines/Introduction/General/security/security_infrastructure-security.md  product = product %}
<a name="3"></a>{% include _inlines/Introduction/General/security/security_credit-card-information.md  product = product %}
<a name="4"></a>{% include _inlines/Introduction/General/security/security_customer-protection.md  product = product %}
<a name="5"></a>{% include _inlines/Introduction/General/security/security_reporting-security-issues.md  product = product %}