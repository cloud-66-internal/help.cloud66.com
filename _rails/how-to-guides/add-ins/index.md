---
layout: section
template: one-col
title:  "How-to Guides: Add-ins"
categories: how-to-guides
lead: Extending Rails with Add-ins
legacy: false
permalink: /:collection/how-to-guides/add-ins/index.html
noindex: true
sitemap: false
---

<div class="Toc Toc--howto">
    <ul>

    {% assign section = site.rails | where:"categories","how-to-guides/add-ins" | sort: "order" %}
    {% include list_articles.html section=section %}

    </ul>
</div><!--/.Toc-->
