---
layout: post
template: one-col
title:  "Getting Started"
lead: Getting Started with Maestro
legacy: false
permalink: /:collection/quickstarts/index.html
---

<div class="Toc Toc--howto">
    <ul>
    {% assign section = site.maestro | where:"categories","quickstarts" | sort: "order" %}
    {% include list_articles.html section=section %}
    </ul>
</div><!--/.Toc-->