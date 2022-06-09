---
layout: section
template: one-col
title: Cloud 66 Guides
lead: Practical scaling guides from Cloud 66
permalink: /:collection/:categories/index.html
noindex: true
sitemap: false
---

<p class="lead">Practical guides for scaling cloud native web applications.
</p>

<br/>
<div class="Toc Toc--howto">
    <ul>
    {% assign section = site.guides| where:"categories","guides" | sort: "order" %}
    {% include list_articles.html section=section %}
    </ul>
</div><!--/.Toc-->

