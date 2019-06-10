---
layout: post
template: one-col
title:  "Policies &amp; Specifications"
lead: "Useful Resources About Cloud 66"
legacy: false
permalink: /:collection/resources/index.html
noindex: true
---

<div class="Toc Toc--howto">
    <ul>
    {% assign section = site.maestro | where:"categories","resources" | sort: "order" %}
    {% include list_articles.html section=section %}
    </ul>
    <h2>Beta Program</h2>
    <ul>
    {% assign section = site.maestro | where:"categories","resources/beta-program" | sort: "order" %}
    {% include list_articles.html section=section %}
    </ul>
</div><!--/.Toc-->
