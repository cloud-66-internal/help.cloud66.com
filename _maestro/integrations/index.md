---
layout: section
template: one-col
title:  "Integration guides"
lead: "How to integrate Maestro with popular automation services"
legacy: false
permalink: /:collection/integrations/index.html
noindex: true
sitemap: false
---

<div class="Toc Toc--howto">
 {% assign section = site.maestro | where:"categories","integrations" | sort: "order" %}
    <h2>Integrating Maestro with other automation services</h2>
    <ul>
    {% include list_articles.html section=section %}
    </ul>
</div><!--/.Toc-->
