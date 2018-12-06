---
layout: post
template: one-col
title:  "Skycap How-To Guides"
lead: How to use Cloud 66 Skycap
legacy: false
permalink: /:collection/how-to-guides/index.html
---

<div class="Toc Toc--howto">

<ul>

{% assign section = site.skycap | where:"categories","how-to-guides" | sort: "order" %}

{% assign formations = site.skycap | where:"categories","how-to-guides/formations" | sort: "order" %}

{% include list_articles.html section=formations %}
{% include list_articles.html section=section %}
    
</ul>


</div><!--/.Toc-->
