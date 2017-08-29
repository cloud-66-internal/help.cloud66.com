---
menuheaders: [ "Note", "What is a backup verifier?", "Set up a backup verifier", "Important", "Important", "View backup verification status", "Pricing" ]
layout: post
template: one-col
title: PostgresQL Backup Verification
categories: Databases
lead: ""
legacy: false
slug: postgresql
permalink: /:collection/:categories/:slug/:name
---

{% assign urlArr = page.url | split: '/' %}
{% assign product = urlArr[1] %}


<a name="1"></a>{% include _inlines/Databases/common/backup-verifiers/backup-verifiers_note.md  product = product %}
<a name="2"></a>{% include _inlines/Databases/common/backup-verifiers/backup-verifiers_what-is-a-backup-verifier.md  product = product %}
<a name="3"></a>{% include _inlines/Databases/common/backup-verifiers/backup-verifiers_set-up-a-backup-verifier.md  product = product %}
<a name="4"></a>{% include _inlines/Databases/common/backup-verifiers/backup-verifiers_importantA.md  product = product %}
<a name="5"></a>{% include _inlines/Databases/rails/postgres/important.md  product = product %}
<a name="6"></a>{% include _inlines/Databases/common/backup-verifiers/backup-verifiers_view-backup-verification-status.md  product = product %}
<a name="7"></a>{% include _inlines/Databases/common/backup-verifiers/backup-verifiers_pricing.md  product = product %}