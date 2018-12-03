---
layout: post
template: one-col
title:  "The Basics"
lead: "Understanding the concepts and terminology used in these help docs"
legacy: false
permalink: /:collection/the-basics/index.html
---

<div class="Toc Toc--howto">
 {% assign section = site.maestro | where:"categories","the-basics" | sort: "order" %}
    <h2>Basic concepts and terminology</h2>
    <ul>
    {% include list_articles.html section=section %}
    </ul>
</div><!--/.Toc-->


