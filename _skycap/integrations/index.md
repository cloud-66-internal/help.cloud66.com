---
layout: post
template: one-col
title:  "Integration Guides"
lead: "How to integrate other services with Cloud 66"
legacy: false
permalink: /:collection/integrations/index.html
noindex: true
---

<div class="Toc Toc--howto">
      <ul>
    {% assign section = site.skycap | where:"categories","integrations" | sort: "order" %}
    {% include list_articles.html section=section %}
    </ul>
</div><!--/.Toc-->
