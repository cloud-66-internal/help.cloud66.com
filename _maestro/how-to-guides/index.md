---
layout: post
template: one-col
title:  "Maestro How-to Guides"
categories: how-to-guides
lead: How to properly use Cloud 66 Maestro
legacy: false
permalink: /:collection/:categories/index.html
---

<div class="Toc Toc--howto">
    <h2>Deploying Your Applications</h2>
    <ul>
    {% assign section = site.maestro | where:"categories","how-to-guides/deployment" | sort: "order" %}
    {% include list_articles.html section=section %}
    </ul>

    <h2>Using Databases</h2>
    <ul>
    {% assign section = site.maestro | where:"categories","how-to-guides/databases" | sort: "order" %}
    {% include list_articles.html section=section %}
    
    </ul>

    <h2>Securing Your Applications</h2>
    <ul>
    {% assign section = site.maestro | where:"categories","how-to-guides/security" | sort: "order" %}
    {% include list_articles.html section=section %}
    
    </ul>

    <h2>Add-ins for your Applications</h2>
    <ul>
    {% assign section = site.maestro | where:"categories","how-to-guides/add-ins" | sort: "order" %}
    {% include list_articles.html section=section %}
    
    </ul>
</div><!--/.Toc-->