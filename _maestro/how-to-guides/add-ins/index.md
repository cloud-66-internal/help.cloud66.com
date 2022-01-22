---
layout: section
template: one-col
title:  "Extending Maestro with Add-ins"
lead: How to use Add-ins for Maestro
legacy: false
permalink: /:collection/how-to-guides/add-ins/index.html
noindex: true
sitemap: false
---

<div class="Toc Toc--howto">
    <ul>
    {% assign section = site.maestro | where:"categories","how-to-guides/add-ins" | sort: "order" %}
    {% include list_articles.html section=section %}
    </ul>
</div><!--/.Toc-->
