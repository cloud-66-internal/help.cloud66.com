---
layout: section
template: one-col
title:  "The Basics"
lead: "Understanding Cloud 66 Prepress concepts"
legacy: false
permalink: /:collection/the-basics/index.html
noindex: true
sitemap: false
---

<div class="Toc Toc--howto">
    <ul>
    {% assign section = site.prepress | where:"categories","the-basics" | sort: "order" %}
    {% include list_articles.html section=section %}
    </ul>

</div><!--/.Toc-->
