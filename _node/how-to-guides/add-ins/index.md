---
layout: post
template: one-col
title:  "How-to Guides: Add-ins"
lead: How to properly use Cloud 66 for Node
legacy: false
permalink: /:collection/how-to-guides/add-ins/index.html
noindex: true
sitemap: false
---

<div class="Toc Toc--howto">
    <ul>
    {% assign section = site.node | where:"categories","how-to-guides/add-ins" | sort: "order" %}
    {% include list_articles.html section=section %}
</ul>

</div><!--/.Toc-->
