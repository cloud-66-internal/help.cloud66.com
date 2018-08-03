---
layout: post
template: one-col
title:  "Skycap How-to Guides"
categories: how-to-guides
lead: How to properly use Cloud 66 Skycap
legacy: false
permalink: /:collection/:categories/index.html
---

<div class="Toc Toc--howto">

<ul>

{% assign section = site.skycap | where:"categories","how-to-guides/formations" | sort: "order" %}

{% include list_articles.html section=section %}
    
{% assign section = site.skycap | where:"categories","how-to-guides/building" | sort: "order" %}
{% include list_articles.html section=section %}
    
</ul>


</div><!--/.Toc-->
