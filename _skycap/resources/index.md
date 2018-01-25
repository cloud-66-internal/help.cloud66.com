---
layout: post
template: one-col
title:  "Skycap Resources"
lead: "Useful Resources About Cloud 66"
legacy: false
permalink: /:collection/resources/index.html
---

<div class="Toc Toc--howto">
    <h2>Resources</h2>
    <ul>
    {% assign section = site.skycap | where:"categories","resources" | sort: "order" %}
    {% include list_articles.html section=section %}
    </ul>
    <h2>Beta Program</h2>
    <ul>
    {% assign section = site.skycap | where:"categories","resources/beta-program" | sort: "order" %}
    {% include list_articles.html section=section %}
    </ul>
</div><!--/.Toc-->


