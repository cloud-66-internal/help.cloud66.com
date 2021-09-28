---
layout: section
template: one-col
title:  "How-to Guides: Config & Deployment"
lead: How to configure & deploy Prepress applications
legacy: false
permalink: /:collection/how-to-guides/deployment/index.html
noindex: true
sitemap: false
---

<div class="Toc Toc--howto">

    <ul>
    {% assign section = site.prepress | where:"categories","how-to-guides/deployment" | sort: "order" %}
    {% include list_articles.html section=section %}

    </ul>

  </div><!--/.Toc-->
