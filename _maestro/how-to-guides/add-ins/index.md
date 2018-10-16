---
layout: post
template: one-col
title:  "Maestro: Add-ins"
categories: how-to-guides/common-tools
lead: How to properly use Add-ins for Maestro
legacy: false
permalink: /:collection/:categories/index.html
---

<div class="Toc Toc--howto">
    <ul>
    {% assign section = site.maestro | where:"categories","how-to-guides/add-ins" | sort: "order" %}
    {% include list_articles.html section=section %}
    </ul>
</div><!--/.Toc-->