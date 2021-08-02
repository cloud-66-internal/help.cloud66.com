---
layout: section
template: one-col
title:  "How-to Guides: Databases"
lead: How to configure and manage databases with Cloud 66 for Rails
legacy: false
permalink: /:collection/how-to-guides/databases/index.html
noindex: true
sitemap: false
---

<div class="Toc Toc--howto">

    <ul>
    {% assign section = site.rails | where:"categories","how-to-guides/databases" | sort: "order" %}
    {% include list_articles.html section=section %}

    </ul>

  </div><!--/.Toc-->
