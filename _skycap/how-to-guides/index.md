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
    <h2>Deploying Your Applications</h2>
    <ul>
    {% assign section = site.skycap | where:"categories","how-to-guides/building" | sort: "order" %}
    {% include list_articles.html section=section %}
    </ul>

    <h2>Formations</h2>
    <ul>
    {% assign section = site.skycap | where:"categories","how-to-guides/formations" | sort: "order" %}
    {% include list_articles.html section=section %}
    </ul>

    <h2></h2>
    <ul>
    {% assign section = site.maestro | where:"categories","how-to-guides/dashboard" | sort: "order" %}
    {% include list_articles.html section=section %}
    
    </ul>
</div><!--/.Toc-->
