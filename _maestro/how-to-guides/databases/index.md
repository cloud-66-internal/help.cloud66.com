---
layout: post
template: one-col
title:  "Maestro: Add-ins"
categories: how-to-guides/databases
lead: How to configure databases for use with Maestro
legacy: false
permalink: /:collection/:categories/index.html
---

<div class="Toc Toc--howto">
    <ul>
    {% assign section = site.maestro | where:"categories","how-to-guides/databases" | sort: "order" %}
    {% include list_articles.html section=section %}
    </ul>
</div><!--/.Toc-->