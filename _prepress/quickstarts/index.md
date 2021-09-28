---
layout: section
template: one-col
title:  "Getting started: Prepress"
lead: Getting Started with Prepress
legacy: false
permalink: /:collection/quickstarts/index.html
noindex: true
sitemap: false
---

<div class="Toc Toc--howto">
    <h2>Getting Started</h2>
    <ul>
    {% assign section = site.prepress | where:"categories","quickstarts" | sort: "order" %}
    {% include list_articles.html section=section %}

    </ul>
</div><!--/.Toc-->
