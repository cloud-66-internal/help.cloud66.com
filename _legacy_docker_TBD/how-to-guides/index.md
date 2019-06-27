---
layout: post
template: one-col
title:  "Docker How-to Guides"
categories: how-to-guides
lead: How to properly use Cloud 66 for Docker
legacy: true
sitemap: false
permalink: /:collection/:categories/index.html
noindex: true
---

## Notice
<div class="notice notice-warning"><p>This documentation set has been merged with the <a href="/maestro/">Maestro Version 2</a> documentation and is officially deprecated. These pages will be redirected to their equivalents in that doc set within the next few weeks.</p></div>

<div class="Toc Toc--howto">
    <h2>Deploying Your Applications</h2>
    <ul>
    {% assign section = site.legacy_docker | where:"categories","how-to-guides/deployment" | sort: "order" %}
    {% include list_articles.html section=section %}
    </ul>

    <h2>Using Databases</h2>
    <ul>
    {% assign section = site.legacy_docker | where:"categories","how-to-guides/databases" | sort: "order" %}
    {% include list_articles.html section=section %}

    </ul>

    <h2>Securing Your Applications</h2>
    <ul>
    {% assign section = site.legacy_docker | where:"categories","how-to-guides/security" | sort: "order" %}
    {% include list_articles.html section=section %}

    </ul>

    <h2>Add-ins for your Applications</h2>
    <ul>
    {% assign section = site.legacy_docker | where:"categories","how-to-guides/add-ins" | sort: "order" %}
    {% include list_articles.html section=section %}

    </ul>

    <h2></h2>
    <ul>
    {% assign section = site.maestro | where:"categories","how-to-guides/dashboard" | sort: "order" %}
    {% include list_articles.html section=section %}

    </ul>
</div><!--/.Toc-->
