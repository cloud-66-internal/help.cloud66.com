---
layout: section
template: one-col
title:  "How-to Guides: Common tools"
lead: How to use common tools with Cloud 66 for Rails
legacy: false
permalink: /:collection/how-to-guides/common-tools/index.html
noindex: true
sitemap: false
---

<div class="Toc Toc--howto">

    <ul>
    {% assign section = site.prepress | where:"categories","how-to-guides/common-tools" | sort: "order" %}
    {% include list_articles.html section=section %}

    </ul>

  </div><!--/.Toc-->
