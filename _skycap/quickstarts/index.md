---
layout: post
template: one-col
title:  "Getting started with Skycap"
lead: Getting Started with Skycap
legacy: false
permalink: /:collection/quickstarts/index.html
noindex: true
---

<div class="Toc Toc--howto">
    <ul>
    {% assign section = site.skycap | where:"categories","quickstarts" | sort: "order" %}
    {% include list_articles.html section=section %}
    </ul>
</div><!--/.Toc-->
