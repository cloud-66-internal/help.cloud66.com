---
layout: section
template: one-col
title:  "The Basics"
lead: "In depth understanding of Cloud 66 concepts"
legacy: false
permalink: /:collection/the-basics/index.html
noindex: true
sitemap: false
---

<div class="Toc Toc--howto">
    <ul>
    {% assign section = site.rails | where:"categories","the-basics" | sort: "order" %}
    {% include list_articles.html section=section %}
    </ul>

</div><!--/.Toc-->
