---
layout: section
template: one-col
title:  "Cloud 66 for Rails Resources"
lead: "Useful Resources for Cloud 66 users"
legacy: false
permalink: /:collection/resources/index.html
noindex: true
sitemap: false
---


<div class="Toc Toc--howto">
    <h2>Resources</h2>
    <ul>
    {% assign section = site.rails | where:"categories","resources" | sort: "order" %}
    {% include list_articles.html section=section %}
    </ul>
</div><!--/.Toc-->
