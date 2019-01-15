---
layout: post
template: one-col
title:  "Cloud 66 Concepts"
lead: "In depth understanding of Cloud 66 concepts"
legacy: false
permalink: /:collection/the-basics/index.html
---

<div class="Toc Toc--howto">
    <h2>The basics</h2>
    <ul>
    {% assign section = site.node | where:"categories","the-basics" | sort: "order" %}
    {% include list_articles.html section=section %}
    </ul>
</div><!--/.Toc-->


