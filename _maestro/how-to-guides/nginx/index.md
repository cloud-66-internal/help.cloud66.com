---
layout: section
template: one-col
title:  "How to configure Nginx within Maestro"
lead: How to configure Nginx
legacy: false
permalink: /:collection/how-to-guides/nginx/index.html
noindex: true
sitemap: false
---

<div class="Toc Toc--howto">
    <ul>
    {% assign section = site.maestro | where:"categories","how-to-guides/nginx" | sort: "order" %}
    {% include list_articles.html section=section %}
    </ul>
</div><!--/.Toc-->
