---
layout: section
template: one-col
title:  "How-to: Cloud providers"
lead: Configuring cloud providers for use with Cloud 66 for Node
legacy: false
permalink: /:collection/how-to-guides/clouds/index.html
noindex: true
sitemap: false
---

<div class="Toc Toc--howto">

    <ul>
    {% assign section = site.node | where:"categories","how-to-guides/clouds" | sort: "order" %}
    {% include list_articles.html section=section %}

    </ul>

  </div><!--/.Toc-->
