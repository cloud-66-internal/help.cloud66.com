---
menuheaders: [ "View account information", "Delete your account", "Organizations", "Note:" ]
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Account/General/account-management/account-management_view-account-information.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Account/General/account-management/account-management_delete-your-account.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Account/General/account-management/account-management_organizations.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/Account/General/account-management/account-management_note.md" ]
layout: post
template: one-col
title: Account Management
categories: account
lead: ""
legacy: false

---

{% assign thingy = page.url | split: '/' %}
{% assign product = thingy[1] %}

<a name="1"></a>{% include _inlines/Account/General/account-management/account-management_view-account-information.md  product = product %}
<a name="2"></a>{% include _inlines/Account/General/account-management/account-management_delete-your-account.md  product = product %}
<a name="3"></a>{% include _inlines/Account/General/account-management/account-management_organizations.md  product = product %}
<a name="4"></a>{% include _inlines/Account/General/account-management/account-management_note.md  product = product %}