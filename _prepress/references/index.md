---
layout: section
template: one-col
title:  "Prepress References"
lead: "In Depth Documentation on Prepress"
legacy: false
permalink: /:collection/references/index.html
noindex: true
sitemap: false
---

<div class="Toc Toc--howto">
    <h2>References</h2>
    <ul>
    {% assign section = site.prepress | where:"categories","references" | sort: "order" %}
    {% include list_articles.html section=section %}
    </ul>

</div><!--/.Toc-->
