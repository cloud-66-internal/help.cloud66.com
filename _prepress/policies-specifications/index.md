---
layout: section
template: one-col
title:  "Prepress policies & specs"
lead: "Useful Resources for Cloud 66 users"
legacy: false
permalink: /:collection/policies-specifications/index.html
noindex: true
sitemap: false
---


<div class="Toc Toc--howto">
    <h2>Resources</h2>
    <ul>
    {% assign section = site.prepress | where:"categories","policies-specifications" | sort: "order" %}
    {% include list_articles.html section=section %}
    </ul>
</div><!--/.Toc-->
