---
menuheaders: [ "What is Elasticsearch?", "Add Elasticearch", "Note" ]
gitlinks: [ "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/elasticsearch/elasticsearch_what-is-elasticsearch.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/elasticsearch/elasticsearch_add-elasticearch.md", "https://github.com/cloud66/help/edit/feature/inlines/_includes/_inlines/AddOns/common/elasticsearch/elasticsearch_note.md" ]
layout: post
template: one-col
title: Elasticsearch
categories: AddOns
lead: ""
legacy: false

---

{% assign thingy = page.url | split: '/' %}
{% assign product = thingy[1] %}

<a name="1"></a>{% include _inlines/AddOns/common/elasticsearch/elasticsearch_what-is-elasticsearch.md  product = product %}
<a name="2"></a>{% include _inlines/AddOns/common/elasticsearch/elasticsearch_add-elasticearch.md  product = product %}
<a name="3"></a>{% include _inlines/AddOns/common/elasticsearch/elasticsearch_note.md  product = product %}