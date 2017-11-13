---
layout: post
template: one-col
title:  "Cloud 66 for Rails Quickstarters"
lead: Getting Started with Cloud 66 for Rails
legacy: false
permalink: /:collection/quickstarts/index.html
---

<div class="Toc Toc--howto">
    <h2>Quickstarts</h2>
    <ul>
    {% assign section = site.rails | where:"categories","quickstarts" | sort: "order" %}
    {% include list_articles.html section=section %}
    {% assign section = site.general | where:"categories","quickstarts" | sort: "order" %}
    {% include list_articles.html section=section %}
    </ul>

</div><!--/.Toc-->


