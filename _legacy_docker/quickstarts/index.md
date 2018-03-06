---
layout: post
template: one-col
title:  "Docker Quickstarters"
lead: Getting Started with Docker
legacy: false
permalink: /:collection/quickstarts/index.html
---

<div class="Toc Toc--howto">
    <ul>
    {% assign section = site.legacy_docker | where:"categories","quickstarts" | sort: "order" %}
    {% include list_articles.html section=section %}
    </ul>
</div><!--/.Toc-->