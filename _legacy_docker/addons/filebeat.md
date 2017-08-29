---
menuheaders: [ "About using Filebeat", "Add Filebeat to your stack", "Note" ]
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/filebeat/filebeat_about-using-filebeat.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/filebeat/filebeat_add-filebeat-to-your-stack.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/filebeat/filebeat_note.md" ]
layout: post
template: one-col
title: Filebeat
categories: AddOns
lead: ""
legacy: true

---

{% assign urlArr = page.url | split: '/' %}
{% assign product = urlArr[1] %}

<a name="1"></a>{% include _inlines/AddOns/common/filebeat/filebeat_about-using-filebeat.md  product = product %}
<a name="2"></a>{% include _inlines/AddOns/common/filebeat/filebeat_add-filebeat-to-your-stack.md  product = product %}
<a name="3"></a>{% include _inlines/AddOns/common/filebeat/filebeat_note.md  product = product %}